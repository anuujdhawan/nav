import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Instagram, MapPin, Phone, Mail } from 'lucide-react';
import { coreSeoPages } from '@/lib/marketingSeo';
import { brandPhoneDisplay, brandPhoneTel, brandWhatsAppUrl } from '@/lib/contactInfo';
import footerLogo from '../../public/img/logo/logo-resized.png';

const Footer = () => {
  return (
    <>
      {/* WhatsApp Floating Button */}
      <div suppressHydrationWarning className="fixed bottom-4 left-4 sm:bottom-8 sm:left-8 z-[9999]">
        <a
          href={brandWhatsAppUrl}
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Chat with Navigator Immigration on WhatsApp"
          className="inline-flex items-center justify-center w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-[#25d366] shadow-lg"
        >
          <div className="absolute inset-0 rounded-full bg-[#25d366] animate-ping"></div>
          <svg className="relative w-5 h-5 sm:w-7 sm:h-7" fill="#fff" viewBox="0 0 308 308" xmlns="http://www.w3.org/2000/svg">
            <path d="M227.904 176.981c-.6-.288-23.054-11.345-27.044-12.781-1.629-.585-3.374-1.156-5.23-1.156-3.032 0-5.579 1.511-7.563 4.479-2.243 3.334-9.033 11.271-11.131 13.642-.274.313-.648.687-.872.687-.201 0-3.676-1.431-4.728-1.888-24.087-10.463-42.37-35.624-44.877-39.867-.358-.61-.373-.887-.376-.887.088-.323.898-1.135 1.316-1.554 1.223-1.21 2.548-2.805 3.83-4.348.607-.731 1.215-1.463 1.812-2.153 1.86-2.164 2.688-3.844 3.648-5.79l.503-1.011c2.344-4.657.342-8.587-.305-9.856-.531-1.062-10.012-23.944-11.02-26.348-2.424-5.801-5.627-8.502-10.078-8.502-.413 0 0 0-1.732.073-2.109.089-13.594 1.601-18.672 4.802-5.385 3.395-14.495 14.217-14.495 33.249 0 17.129 10.87 33.302 15.537 39.453.116.155.329.47.638.922 17.873 26.102 40.154 45.446 62.741 54.469 21.745 8.686 32.042 9.69 37.896 9.69 2.46 0 4.429-.193 6.166-.364l1.102-.105c7.512-.666 24.02-9.22 27.775-19.655 2.958-8.219 3.738-17.199 1.77-20.458-1.348-2.611-3.671-3.726-6.612-5.138z"/>
            <path d="M156.734 0C73.318 0 5.454 67.354 5.454 150.143c0 26.777 7.166 52.988 20.741 75.928L.212 302.716c-.484 1.429-.124 3.009.933 4.085.759.779 1.794 1.199 2.855 1.199.405 0 .813-.061 1.211-.188l79.92-25.396c21.87 11.685 46.588 17.853 71.604 17.853 83.414 0 151.265-67.354 151.265-150.143C308 67.354 240.143 0 156.734 0z"/>
          </svg>
        </a>
      </div>

      <footer suppressHydrationWarning className="bg-primary-slate text-surface-light w-full">
      <div className="w-full px-4 py-12 sm:py-16" style={{backgroundColor: '#2C353F'}}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          <div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-x-0 sm:space-x-4 mb-6">
              <Link href="/" className="relative">
                <Image
                  src={footerLogo}
                  alt="Navigator Immigration Logo"
                  width={footerLogo.width}
                  height={footerLogo.height}
                  quality={70}
                  sizes="160px"
                  className="h-auto w-40 object-contain"
                />
              </Link>
            </div>
            <p className="text-[#ffffff] mb-6 leading-relaxed text-sm sm:text-base">
              Your trusted Dubai immigration consultancy for Canada PR, Australia PR, student visas, Europe work permits, visit visas, and business immigration.
            </p>
            <p className="text-white/80 mb-6 leading-relaxed text-sm">
              {coreSeoPages.home.localBlock}
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              <a href="https://www.facebook.com/navigatorimmigration" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook className="w-5 h-5 text-[#ffffff] hover:text-surface-light transition-colors duration-300" />
              </a>
              <a href="https://twitter.com/navigatorimm" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter className="w-5 h-5 text-[#ffffff] hover:text-surface-light transition-colors duration-300" />
              </a>
              <a href="https://www.linkedin.com/company/navigator-immigration" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5 text-[#ffffff] hover:text-surface-light transition-colors duration-300" />
              </a>
              <a href="https://www.instagram.com/navigatorimmigration" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram className="w-5 h-5 text-[#ffffff] hover:text-surface-light transition-colors duration-300" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-[#ffffff] sm:text-lg font-semibold mb-4 sm:mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-[#ffffff] hover:text-surface-light transition-colors duration-300">Home</Link></li>
              <li><Link href="/about" className="text-[#ffffff] hover:text-surface-light transition-colors duration-300">About Us</Link></li>
              <li><Link href="/success-stories" className="text-[#ffffff] hover:text-surface-light transition-colors duration-300">Success Stories</Link></li>
              <li><Link href="/immigration/blog" className="text-[#ffffff] hover:text-surface-light transition-colors duration-300">Blog</Link></li>
              <li><Link href="/payment" className="text-[#ffffff] hover:text-surface-light transition-colors duration-300 font-semibold">Pay Online</Link></li>
              <li><Link href="/contact" className="text-[#ffffff] hover:text-surface-light transition-colors duration-300">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-[#ffffff] sm:text-lg font-semibold mb-4 sm:mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li><Link href="/skilled" className="text-[#ffffff] hover:text-surface-light transition-colors duration-300">Skilled Immigration</Link></li>
              <li><Link href="/work-permits" className="text-[#ffffff] hover:text-surface-light transition-colors duration-300">Work Permits</Link></li>
              <li><Link href="/student-visa" className="text-[#ffffff] hover:text-surface-light transition-colors duration-300">Student Visa</Link></li>
              <li><Link href="/visit-visa" className="text-[#ffffff] hover:text-surface-light transition-colors duration-300">Visit Visa</Link></li>
              <li><Link href="/business-immigration" className="text-[#ffffff] hover:text-surface-light transition-colors duration-300">Business Immigration</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-[#ffffff] sm:text-lg font-semibold mb-4 sm:mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#ffffff] mt-1 flex-shrink-0" />
                <span className="text-[#ffffff] text-sm">
                  <span className="font-semibold">Global Navigator LLC FZ</span><br />
                  606, Latifa Towers,  <br />
                  Trade Center 1, Sheikh Zayed Road,<br />
                   Dubai, UAE.
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#ffffff] flex-shrink-0" />
                <a href={brandPhoneTel} className="text-[#ffffff] hover:text-surface-light transition-colors duration-300 whitespace-nowrap">
                  {brandPhoneDisplay}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#ffffff] flex-shrink-0" />
                <a href="mailto:info@navigatorglobals.com" className="text-[#ffffff] hover:text-surface-light transition-colors duration-300">info@navigatorglobals.com</a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border-medium mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <p className="text-[#ffffff] text-xs sm:text-sm mb-4 lg:mb-0">
              © 2026 Navigator Immigration. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy-policy" className="text-[#ffffff] hover:text-surface-light text-xs sm:text-sm transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-[#ffffff] hover:text-surface-light text-xs sm:text-sm transition-colors duration-300">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;
