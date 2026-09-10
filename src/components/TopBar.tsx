'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { Phone, Mail, Globe, Award, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { brandPhoneDisplay, brandPhoneTel } from '@/lib/contactInfo';

interface TopBarProps {}

const SCROLL_THRESHOLD = 50;

const contactInfo = [
  { icon: Phone, text: brandPhoneDisplay, href: brandPhoneTel },
  { icon: Mail, text: 'info@navigatorglobals.com', href: 'mailto:info@navigatorglobals.com' },
];

const businessInfo = [
  { icon: Globe, text: 'Mon-Sat: 10AM-7PM Dubai' },
  { icon: Award, text: '15+ Years Experience' },
];

const socialLinks = [
  { icon: Facebook, href: 'https://www.facebook.com/navigatorimmigration', label: 'Facebook' },
  { icon: Twitter, href: 'https://twitter.com/navigatorimm', label: 'Twitter' },
  { icon: Linkedin, href: 'https://www.linkedin.com/company/navigator-immigration', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://www.instagram.com/navigatorimmigration', label: 'Instagram' },
];

const TopBar: React.FC<TopBarProps> = () => {
  const [isVisible, setIsVisible] = useState(true);
  const topBarRef = useRef<HTMLDivElement>(null);
  const isVisibleRef = useRef(true);
  const lastScrollYRef = useRef(0);
  const scrollDirectionRef = useRef<'up' | 'down'>('up');
  const tickingRef = useRef(false);

  const handleScroll = useCallback(() => {
    if (tickingRef.current) {
      return;
    }

    tickingRef.current = true;

    window.requestAnimationFrame(() => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= SCROLL_THRESHOLD) {
        scrollDirectionRef.current = 'up';
        if (!isVisibleRef.current) {
          setIsVisible(true);
        }
      } else {
        const nextDirection = currentScrollY > lastScrollYRef.current ? 'down' : 'up';

        if (nextDirection !== scrollDirectionRef.current) {
          scrollDirectionRef.current = nextDirection;
          setIsVisible(nextDirection === 'up');
        }
      }

      lastScrollYRef.current = currentScrollY;
      tickingRef.current = false;
    });
  }, []);

  const syncTopBarOffset = useCallback(() => {
    const height = topBarRef.current?.offsetHeight ?? 0;
    document.documentElement.style.setProperty('--top-bar-height', `${height}px`);
    document.documentElement.style.setProperty('--top-bar-offset', isVisibleRef.current ? `${height}px` : '0px');
  }, []);

  useEffect(() => {
    isVisibleRef.current = isVisible;
    syncTopBarOffset();
  }, [isVisible, syncTopBarOffset]);

  useEffect(() => {
    lastScrollYRef.current = window.scrollY;

    const scrollListener = () => handleScroll();
    window.addEventListener('scroll', scrollListener, { passive: true });

    return () => window.removeEventListener('scroll', scrollListener);
  }, [handleScroll]);

  useEffect(() => {
    const resizeObserver = new ResizeObserver(syncTopBarOffset);

    if (topBarRef.current) {
      resizeObserver.observe(topBarRef.current);
    }

    window.addEventListener('resize', syncTopBarOffset);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', syncTopBarOffset);
      document.documentElement.style.setProperty('--top-bar-height', '0px');
      document.documentElement.style.setProperty('--top-bar-offset', '0px');
    };
  }, [syncTopBarOffset]);

  return (
    <div
      ref={topBarRef}
      suppressHydrationWarning
      className={`top-bar fixed left-0 right-0 top-0 z-50 border-b border-[#f5f5dc]/25 bg-dark-blue-grey/95 backdrop-blur-md transition-transform duration-300 ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-2 py-2 text-xs sm:flex-row sm:items-center sm:justify-between sm:text-sm">
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 sm:justify-start">
            {contactInfo.map((item) => (
              <a
                key={item.text}
                href={item.href}
                className="flex items-center gap-2 rounded-full px-2 py-1 text-white transition-colors duration-200 hover:text-gray-400"
              >
                <item.icon className="h-4 w-4 flex-shrink-0" />
                <span className="font-medium leading-none">{item.text}</span>
              </a>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 sm:justify-end sm:gap-x-4">
            <div className="hidden lg:flex items-center gap-4">
              {businessInfo.map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-2 text-white/80"
                >
                  <item.icon className="h-4 w-4" />
                  <span className="text-xs font-medium">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="hidden sm:block h-4 w-px bg-[#f5f5dc]/20" />

            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-white/75 transition-all duration-200 hover:scale-110 hover:text-gray-300"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
