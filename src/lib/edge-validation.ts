// Browser-compatible crypto utilities for Edge Runtime
export class BrowserCrypto {
  // Generate secure random bytes
  static generateSecureToken(length: number = 32): string {
    const array = new Uint8Array(length);
    crypto.getRandomValues(array);
    return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
  }

  // Generate hash using Web Crypto API
  static async hash(data: string): Promise<string> {
    const encoder = new TextEncoder();
    const dataBuffer = encoder.encode(data);
    const hashBuffer = await crypto.subtle.digest('SHA-256', dataBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  }

  // Generate HMAC using Web Crypto API
  static async hmac(data: string, key: string): Promise<string> {
    const encoder = new TextEncoder();
    const keyData = await crypto.subtle.importKey(
      'raw',
      encoder.encode(key),
      { name: 'HMAC', hash: 'SHA-256' },
      false,
      ['sign']
    );
    
    const signature = await crypto.subtle.sign(
      'HMAC',
      keyData,
      encoder.encode(data)
    );
    
    return Array.from(new Uint8Array(signature))
      .map(b => b.toString(16).padStart(2, '0'))
      .join('');
  }

  // Simple timing-safe comparison for browser
  static timingSafeEqual(a: string, b: string): boolean {
    if (a.length !== b.length) {
      return false;
    }
    
    let result = 0;
    for (let i = 0; i < a.length; i++) {
      result |= a.charCodeAt(i) ^ b.charCodeAt(i);
    }
    
    return result === 0;
  }
}

// CSRF Protection for Edge Runtime
export class EdgeCSRFProtection {
  private static readonly TOKEN_LENGTH = 32;
  private static readonly HEADER_NAME = 'X-CSRF-Token';
  private static readonly COOKIE_NAME = 'csrf-token';

  // Generate CSRF token
  static generateToken(): string {
    return BrowserCrypto.generateSecureToken(this.TOKEN_LENGTH);
  }

  // Generate token hash
  static async generateTokenHash(token: string): Promise<string> {
    return await BrowserCrypto.hash(token);
  }

  // Validate CSRF token
  static async validateToken(request: Request, sessionToken: string): Promise<boolean> {
    const headerToken = request.headers.get(this.HEADER_NAME);
    const cookieToken = this.getCookieToken(request);

    if (!headerToken || !cookieToken || !sessionToken) {
      return false;
    }

    try {
      const headerHash = await this.generateTokenHash(headerToken);
      const cookieHash = await this.generateTokenHash(cookieToken);
      const sessionHash = await this.generateTokenHash(sessionToken);

      return (
        BrowserCrypto.timingSafeEqual(headerHash, sessionHash) &&
        BrowserCrypto.timingSafeEqual(cookieHash, sessionHash)
      );
    } catch (error) {
      console.error('CSRF token validation error:', error);
      return false;
    }
  }

  // Get CSRF token from cookies
  private static getCookieToken(request: Request): string | null {
    const cookies = request.headers.get('cookie') || '';
    const match = cookies.match(new RegExp(`(^|;)\\s*${this.COOKIE_NAME}=([^;]+)`));
    return match ? match[2] : null;
  }
}

// Input validation for Edge Runtime
export class EdgeInputValidator {
  // Email validation
  static isValidEmail(email: string): boolean {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email) && email.length <= 254;
  }

  // Phone number validation
  static isValidPhone(phone: string): boolean {
    const phoneRegex = /^\+?[\d\s\-\(\)]+$/;
    return phoneRegex.test(phone) && phone.length >= 10 && phone.length <= 20;
  }

  // Name validation
  static isValidName(name: string): boolean {
    const nameRegex = /^[a-zA-Z\s'\-\.]+$/;
    return nameRegex.test(name) && name.length >= 2 && name.length <= 50;
  }

  // Sanitize string input
  static sanitizeString(input: string, maxLength: number = 1000): string {
    if (typeof input !== 'string') return '';
    
    return input
      .trim()
      .substring(0, maxLength)
      .replace(/[<>]/g, '') // Remove potential HTML tags
      .replace(/javascript:/gi, '') // Remove javascript protocol
      .replace(/on\w+=/gi, ''); // Remove event handlers
  }

  // Sanitize HTML content
  static sanitizeHTML(input: string): string {
    if (typeof input !== 'string') return '';
    
    return input
      .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
      .replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '')
      .replace(/<object\b[^<]*(?:(?!<\/object>)<[^<]*)*<\/object>/gi, '')
      .replace(/<embed\b[^<]*(?:(?!<\/embed>)<[^<]*)*<\/embed>/gi, '')
      .replace(/on\w+\s*=/gi, '') // Remove event handlers
      .replace(/javascript:/gi, '') // Remove javascript protocol
      .replace(/vbscript:/gi, '') // Remove vbscript protocol
      .replace(/data:/gi, ''); // Remove data protocol
  }

  // Detect XSS patterns
  static detectXSS(input: string): boolean {
    const xssPatterns = [
      /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
      /<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi,
      /javascript:/gi,
      /on\w+\s*=/gi,
      /<img[^>]*src[^>]*javascript:/gi,
      /<\s*script/gi,
      /<\s*object/gi,
      /<\s*embed/gi,
      /<\s*link/gi,
      /expression\s*\(/gi,
    ];
    
    return xssPatterns.some(pattern => pattern.test(input));
  }

  // Detect SQL injection patterns
  static detectSQLInjection(input: string): boolean {
    const sqlPatterns = [
      /(\b(SELECT|INSERT|UPDATE|DELETE|DROP|CREATE|ALTER|EXEC|UNION|SCRIPT)\b)/i,
      /(\b(OR|AND)\s+\d+\s*=\s*\d+)/i,
      /(--|\/\*|\*\/|;|'|\"|`)/,
      /(\b(UNION|SELECT|INSERT|UPDATE|DELETE|DROP|CREATE|ALTER|EXEC|SCRIPT)\s)/i,
      /(\b(WAITFOR|DELAY|BENCHMARK|SLEEP)\b)/i,
    ];
    
    return sqlPatterns.some(pattern => pattern.test(input));
  }
}
