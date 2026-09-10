import { NextRequest, NextResponse } from 'next/server';
import { createHash } from 'crypto';

// Rate limiting store (in production, use Redis or similar)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

// Rate limiting configuration
const RATE_LIMIT_CONFIG = {
  windowMs: 15 * 60 * 1000, // 15 minutes
  maxRequests: 100, // Maximum requests per window
  skipSuccessfulRequests: false,
  skipFailedRequests: false,
};

// Generate client identifier
function getClientIdentifier(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for');
  const realIp = request.headers.get('x-real-ip');
  const ip = forwarded?.split(',')[0] || realIp || 'unknown';
  const userAgent = request.headers.get('user-agent') || 'unknown';
  
  // Create a hash of IP + User-Agent for better identification
  return createHash('sha256')
    .update(`${ip}:${userAgent}`)
    .digest('hex')
    .substring(0, 16);
}

// Clean up expired rate limit entries
function cleanupExpiredEntries() {
  const now = Date.now();
  for (const [key, value] of rateLimitStore.entries()) {
    if (now > value.resetTime) {
      rateLimitStore.delete(key);
    }
  }
}

// Rate limiting middleware
export function rateLimit(request: NextRequest) {
  const clientId = getClientIdentifier(request);
  const now = Date.now();
  
  // Clean up expired entries periodically
  if (Math.random() < 0.01) { // 1% chance to clean up
    cleanupExpiredEntries();
  }
  
  const clientData = rateLimitStore.get(clientId);
  
  if (!clientData || now > clientData.resetTime) {
    // First request or window expired
    rateLimitStore.set(clientId, {
      count: 1,
      resetTime: now + RATE_LIMIT_CONFIG.windowMs,
    });
    return { success: true };
  }
  
  if (clientData.count >= RATE_LIMIT_CONFIG.maxRequests) {
    // Rate limit exceeded
    const resetTime = Math.ceil((clientData.resetTime - now) / 1000);
    
    return {
      success: false,
      error: 'Rate limit exceeded',
      resetTime,
      maxRequests: RATE_LIMIT_CONFIG.maxRequests,
      windowMs: RATE_LIMIT_CONFIG.windowMs,
    };
  }
  
  // Increment counter
  clientData.count++;
  return { success: true };
}

// DDoS protection with more aggressive limits
const ddosStore = new Map<string, { count: number; resetTime: number }>();

export function ddosProtection(request: NextRequest) {
  const clientId = getClientIdentifier(request);
  const now = Date.now();
  
  const windowMs = 60 * 1000; // 1 minute
  const maxRequests = 30; // 30 requests per minute
  
  // Clean up expired entries periodically
  if (Math.random() < 0.1) {
    for (const [key, value] of ddosStore.entries()) {
      if (now > value.resetTime) ddosStore.delete(key);
    }
  }
  
  const clientData = ddosStore.get(clientId);
  
  if (!clientData || now > clientData.resetTime) {
    ddosStore.set(clientId, {
      count: 1,
      resetTime: now + windowMs,
    });
    return { success: true };
  }
  
  if (clientData.count >= maxRequests) {
    return {
      success: false,
      error: 'Too many requests - DDoS protection activated',
      resetTime: Math.ceil((clientData.resetTime - now) / 1000),
    };
  }
  
  clientData.count++;
  return { success: true };
}

// Create rate limit response
export function createRateLimitResponse(rateLimitResult: any) {
  return NextResponse.json(
    {
      error: rateLimitResult.error,
      message: `Rate limit exceeded. Try again in ${rateLimitResult.resetTime} seconds.`,
      resetTime: rateLimitResult.resetTime,
      maxRequests: rateLimitResult.maxRequests,
    },
    {
      status: 429,
      headers: {
        'X-RateLimit-Limit': rateLimitResult.maxRequests.toString(),
        'X-RateLimit-Remaining': '0',
        'X-RateLimit-Reset': rateLimitResult.resetTime.toString(),
        'Retry-After': rateLimitResult.resetTime.toString(),
      },
    }
  );
}

// Security headers for API responses
export function setSecurityHeaders(response: NextResponse) {
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-XSS-Protection', '1; mode=block');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
  
  return response;
}

// Request validation middleware
export function validateRequest(request: NextRequest, allowedMethods: string[] = ['GET', 'POST']) {
  const method = request.method;
  
  if (!allowedMethods.includes(method)) {
    return {
      success: false,
      error: 'Method not allowed',
      allowedMethods,
    };
  }
  
  // Check content type for POST/PUT requests
  if (['POST', 'PUT'].includes(method)) {
    const contentType = request.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      return {
        success: false,
        error: 'Content-Type must be application/json',
      };
    }
  }
  
  return { success: true };
}

// IP blocking for suspicious activity
const blockedIPs = new Set<string>();

export function blockIP(ip: string, duration: number = 24 * 60 * 60 * 1000) {
  blockedIPs.add(ip);
  setTimeout(() => blockedIPs.delete(ip), duration);
}

export function isIPBlocked(request: NextRequest): boolean {
  const forwarded = request.headers.get('x-forwarded-for');
  const realIp = request.headers.get('x-real-ip');
  const ip = forwarded?.split(',')[0] || realIp || 'unknown';
  
  return blockedIPs.has(ip);
}
