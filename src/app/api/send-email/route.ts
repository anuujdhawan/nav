import { NextRequest, NextResponse } from 'next/server';
import { rateLimit, ddosProtection, validateRequest, setSecurityHeaders, isIPBlocked } from '../../../lib/security-middleware';
import { EdgeInputValidator } from '../../../lib/edge-validation';
import { sendEmail, validateEmailData, EmailData, EmailAttachment } from '../../../lib/email-sender';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const DEVELOPMENT_TEST_RECIPIENT =
  process.env.NODE_ENV !== 'production'
    ? process.env.CONTACT_TEST_RECIPIENT?.trim()
    : undefined;

function resolveRecipientAddress(rawTo: string): string {
  return DEVELOPMENT_TEST_RECIPIENT || rawTo;
}

export async function POST(request: NextRequest) {
  try {
    // Check if IP is blocked
    if (isIPBlocked(request)) {
      return NextResponse.json(
        { success: false, message: 'Access denied' },
        { status: 403 }
      );
    }

    // Validate request method and content type
    const validation = validateRequest(request, ['POST']);
    if (!validation.success) {
      const response = NextResponse.json(
        { success: false, message: validation.error },
        { status: 400 }
      );
      return setSecurityHeaders(response);
    }

    // Apply rate limiting
    const rateLimitResult = rateLimit(request);
    if (!rateLimitResult.success) {
      const response = NextResponse.json(
        { 
          success: false, 
          message: 'Too many requests. Please try again later.',
          resetTime: rateLimitResult.resetTime 
        },
        { status: 429 }
      );
      return setSecurityHeaders(response);
    }

    // Apply DDoS protection
    const ddosResult = ddosProtection(request);
    if (!ddosResult.success) {
      const response = NextResponse.json(
        { success: false, message: ddosResult.error },
        { status: 429 }
      );
      return setSecurityHeaders(response);
    }

    const body = await request.json();
    
    // Validate required fields
    const { to, subject, html, text, attachments, replyTo, cc, bcc } = body;
    
    if (!to || !subject || !html) {
      const response = NextResponse.json(
        { success: false, message: 'Missing required fields: to, subject, and html are required' },
        { status: 400 }
      );
      return setSecurityHeaders(response);
    }

    // Validate email data
    const effectiveTo = EdgeInputValidator.sanitizeString(
      resolveRecipientAddress(to),
      254
    );

    const emailData: EmailData = {
      to: effectiveTo,
      subject: EdgeInputValidator.sanitizeString(subject, 200),
      html: EdgeInputValidator.sanitizeHTML(html),
      text: text ? EdgeInputValidator.sanitizeString(text, 5000) : undefined,
      attachments: Array.isArray(attachments) ? attachments : [],
      from: process.env.EMAIL_FROM || process.env.SMTP_USER || 'info@navigatorglobals.com',
      replyTo: replyTo ? EdgeInputValidator.sanitizeString(replyTo, 254) : undefined,
      cc: cc ? (Array.isArray(cc) ? cc.map((email: string) => EdgeInputValidator.sanitizeString(email, 100)) : []) : undefined,
      bcc: bcc ? (Array.isArray(bcc) ? bcc.map((email: string) => EdgeInputValidator.sanitizeString(email, 100)) : []) : undefined
    };

    // Additional validation
    const validation2 = validateEmailData(emailData);
    if (!validation2.isValid) {
      const response = NextResponse.json(
        { 
          success: false, 
          message: 'Validation failed: ' + validation2.errors.join(', ') 
        },
        { status: 400 }
      );
      return setSecurityHeaders(response);
    }

    // Log email sending attempt (for audit)
    console.log('Email sending attempt:', {
      to: emailData.to,
      subject: emailData.subject,
      hasAttachments: emailData.attachments && emailData.attachments.length > 0,
      attachmentCount: emailData.attachments ? emailData.attachments.length : 0,
      totalSize: emailData.attachments ? emailData.attachments.reduce((sum: number, att: EmailAttachment) => sum + (att.size || 0), 0) : 0,
      timestamp: new Date().toISOString(),
      ip: request.headers.get('x-forwarded-for') || 'unknown',
      userAgent: request.headers.get('user-agent')?.substring(0, 200) || 'unknown',
      requestedTo: EdgeInputValidator.sanitizeString(to, 254),
      from: emailData.from,
      cc: emailData.cc,
      bcc: emailData.bcc
    });

    // Send email with attachments
    const result = await sendEmail(emailData);

    // Log result
    if (result.success) {
      console.log('Email sent successfully:', {
        messageId: result.messageId,
        to: emailData.to,
        subject: emailData.subject,
        attachmentCount: emailData.attachments ? emailData.attachments.length : 0,
        response: result.response,
        acceptedRecipients: result.acceptedRecipients
      });
    } else {
      console.error('Email sending failed:', {
        message: result.message,
        error: result.error,
        to: emailData.to,
        subject: emailData.subject,
        response: result.response,
        rejectedRecipients: result.rejectedRecipients
      });
    }

    const response = NextResponse.json(
      {
        success: result.success,
        message: result.message,
        messageId: result.messageId,
        ...(process.env.NODE_ENV !== 'production'
          ? {
              acceptedRecipients: result.acceptedRecipients,
              rejectedRecipients: result.rejectedRecipients,
              smtpResponse: result.response,
              effectiveTo: emailData.to,
            }
          : {}),
      },
      { status: result.success ? 200 : 502 }
    );
    
    return setSecurityHeaders(response);

  } catch (error) {
    console.error('Error sending email:', error);
    const response = NextResponse.json(
      { success: false, message: 'Failed to send email' },
      { status: 500 }
    );
    return setSecurityHeaders(response);
  }
}

// Handle other HTTP methods
export async function GET(request: NextRequest) {
  const response = NextResponse.json(
    { success: false, message: 'Method not allowed' },
    { status: 405 }
  );
  return setSecurityHeaders(response);
}

export async function PUT(request: NextRequest) {
  const response = NextResponse.json(
    { success: false, message: 'Method not allowed' },
    { status: 405 }
  );
  return setSecurityHeaders(response);
}

export async function DELETE(request: NextRequest) {
  const response = NextResponse.json(
    { success: false, message: 'Method not allowed' },
    { status: 405 }
  );
  return setSecurityHeaders(response);
}
