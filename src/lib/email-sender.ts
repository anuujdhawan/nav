import nodemailer from 'nodemailer';
import { EdgeInputValidator } from './edge-validation';

export interface EmailAttachment {
  filename: string;
  content: string;
  contentType: string;
  size: number;
}

export interface EmailData {
  to: string;
  subject: string;
  html: string;
  text?: string;
  attachments?: EmailAttachment[];
  from?: string;
  replyTo?: string;
  cc?: string[];
  bcc?: string[];
}

export interface EmailResponse {
  success: boolean;
  message: string;
  error?: string;
  messageId?: string;
  response?: string;
  acceptedRecipients?: string[];
  rejectedRecipients?: string[];
}

function getSmtpPass(): string {
  const b64 = process.env.SMTP_PASS_B64;
  if (b64) return Buffer.from(b64, 'base64').toString('utf-8');
  return process.env.SMTP_PASS || '';
}

function createTransport() {
  const host = process.env.SMTP_HOST;
  if (host) {
    return nodemailer.createTransport({
      host,
      port: parseInt(process.env.SMTP_PORT || '587', 10),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER || '',
        pass: getSmtpPass(),
      },
      connectionTimeout: 15000,
      greetingTimeout: 15000,
      socketTimeout: 20000,
      tls: {
        servername: host,
      },
    });
  }

  return nodemailer.createTransport({
    host: 'localhost',
    port: 587,
    secure: false,
    connectionTimeout: 15000,
    greetingTimeout: 15000,
    socketTimeout: 20000,
  });
}

let transporter: nodemailer.Transporter | null = null;

function getTransport(): nodemailer.Transporter {
  if (!transporter) {
    transporter = createTransport();
  }
  return transporter;
}

const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  const val = bytes / Math.pow(k, i);
  return `${val.toFixed(2)} ${sizes[i]}`;
};

function getDefaultFromAddress(): string {
  return process.env.EMAIL_FROM || process.env.SMTP_USER || 'info@navigatorglobals.com';
}

function formatFromAddress(address: string): string {
  if (address.includes('<') || address.includes('"')) {
    return address;
  }

  return `"Navigator Immigration Consultant" <${address}>`;
}

function htmlToText(html: string): string {
  return html
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/p>/gi, '\n\n')
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/gi, ' ')
    .replace(/&amp;/gi, '&')
    .replace(/&lt;/gi, '<')
    .replace(/&gt;/gi, '>')
    .trim();
}

export function validateEmailData(data: Partial<EmailData>): { isValid: boolean; errors: string[] } {
  const errors: string[] = [];
  if (!data.to) errors.push('Recipient email is required');
  if (!data.subject) errors.push('Subject is required');
  if (!data.html) errors.push('Email content is required');
  if (data.to && !EdgeInputValidator.isValidEmail(data.to)) errors.push('Invalid email address format');
  if (data.subject && data.subject.length > 200) errors.push('Subject must be less than 200 characters');
  if (data.attachments) {
    const totalSize = data.attachments.reduce((sum, att) => sum + att.size, 0);
    if (totalSize > 25 * 1024 * 1024) errors.push(`Total attachment size exceeds 25MB limit. Current size: ${formatFileSize(totalSize)}`);
    data.attachments.forEach((attachment, index) => {
      if (attachment.size > 10 * 1024 * 1024) errors.push(`Attachment ${index + 1} (${attachment.filename}) exceeds 10MB limit`);
    });
  }
  return { isValid: errors.length === 0, errors };
}

export async function sendEmail(data: EmailData): Promise<EmailResponse> {
  try {
    const transport = getTransport();
    const fromAddress = data.from || getDefaultFromAddress();
    const envelopeFrom = process.env.SMTP_USER || fromAddress;

    const attachments = (data.attachments || []).map((att) => ({
      filename: att.filename,
      content: Buffer.from(att.content, 'base64'),
      contentType: att.contentType,
    }));

    const info = await transport.sendMail({
      from: formatFromAddress(fromAddress),
      sender: envelopeFrom,
      envelope: {
        from: envelopeFrom,
        to: [data.to, ...(data.cc || []), ...(data.bcc || [])],
      },
      to: data.to,
      subject: data.subject,
      html: data.html,
      text: data.text || htmlToText(data.html),
      replyTo: data.replyTo,
      cc: data.cc,
      bcc: data.bcc,
      attachments: attachments.length > 0 ? attachments : undefined,
    });

    const acceptedRecipients = (info.accepted || []).map(String);
    const rejectedRecipients = (info.rejected || []).map(String);
    const success = acceptedRecipients.length > 0 && rejectedRecipients.length === 0;

    return {
      success,
      message: success
        ? 'Email sent successfully'
        : `Email was rejected for: ${rejectedRecipients.join(', ')}`,
      messageId: info.messageId,
      response: info.response,
      acceptedRecipients,
      rejectedRecipients,
    };
  } catch (error) {
    console.error('Email sending error:', error);
    return {
      success: false,
      message: error instanceof Error ? error.message : 'Failed to send email',
      error: error instanceof Error ? error.stack : undefined,
    };
  }
}
