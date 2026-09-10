'use client';

import Image from 'next/image';
import { useState, useEffect, useCallback, useRef, useLayoutEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight, Award, BadgeCheck, Briefcase, Building, GraduationCap, Plane } from 'lucide-react';
import headerLogo from '../../public/img/logo/logo-resized.png';

interface MainHeaderProps {}

interface NavItem {
  name: string;
  href: string;
  icon: typeof Award;
}

const navigation: NavItem[] = [
  {
    name: 'Success Stories',
    href: '/success-stories',
    icon: BadgeCheck,
  },
  {
    name: 'Skilled Visa',
    href: '/skilled',
    icon: Award,
  },
  {
    name: 'Work Permit',
    href: '/work-permits',
    icon: Briefcase,
  },
  {
    name: 'Student Visa',
    href: '/student-visa',
    icon: GraduationCap,
  },
  { name: 'Visit Visa', href: '/visit-visa', icon: Plane },
  {
    name: 'Business Visa',
    href: '/business-immigration',
    icon: Building,
  },
];

const DEFAULT_HEADER_HEIGHT = 80;

const MainHeader: React.FC<MainHeaderProps> = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const tickingRef = useRef(false);
  const isMenuOpenRef = useRef(false);

  const handleScroll = useCallback(() => {
    if (tickingRef.current) {
      return;
    }

    tickingRef.current = true;

    window.requestAnimationFrame(() => {
      setIsScrolled(window.scrollY > 20);
      tickingRef.current = false;
    });
  }, []);

  const syncHeaderHeight = useCallback(() => {
    if (isMenuOpenRef.current) return;
    const height = headerRef.current?.offsetHeight ?? 0;
    document.documentElement.style.setProperty('--main-header-height', `${height}px`);
  }, []);

  useEffect(() => {
    const scrollListener = () => handleScroll();
    window.addEventListener('scroll', scrollListener, { passive: true });

    return () => {
      window.removeEventListener('scroll', scrollListener);
    };
  }, [handleScroll]);

  useEffect(() => {
    syncHeaderHeight();

    const resizeObserver = new ResizeObserver(syncHeaderHeight);

    if (headerRef.current) {
      resizeObserver.observe(headerRef.current);
    }

    window.addEventListener('resize', syncHeaderHeight);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', syncHeaderHeight);
      document.documentElement.style.setProperty('--main-header-height', '0px');
    };
  }, [syncHeaderHeight]);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMenuOpen]);

  useLayoutEffect(() => {
    isMenuOpenRef.current = isMenuOpen;

    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;

    if (isMenuOpen) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      if (scrollbarWidth > 0) {
        document.body.style.paddingRight = `${scrollbarWidth}px`;
      }
    } else {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
      document.body.style.paddingRight = '';
    }

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
      document.body.style.paddingRight = '';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {isMenuOpen ? (
        <button
          type="button"
          className="fixed inset-0 z-30 bg-white/20 backdrop-blur-sm lg:hidden"
          onClick={() => setIsMenuOpen(false)}
          aria-label="Close navigation menu"
        />
      ) : null}

      {isMenuOpen ? (
        <div
          id="mobile-navigation"
          className="fixed left-0 right-0 z-40 overflow-hidden border-t border-white/20 bg-dark-blue-grey/95 shadow-lg backdrop-blur-3xl lg:hidden"
          style={{ top: 'calc(var(--top-bar-offset, 0px) + var(--main-header-height, 0px))' }}
        >
          <div className="container mx-auto max-h-[calc(100vh-var(--top-bar-offset,0px)-var(--main-header-height,0px))] overflow-y-auto bg-dark-blue-grey/60 px-4 py-5">
            <nav className="space-y-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className={`flex items-center gap-3 rounded-lg bg-white/10 px-4 py-3 font-extrabold transition-all duration-200 hover:text-gray-100 ${
                      pathname === item.href ? 'text-gray-500' : 'text-gray-200'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="flex h-4 w-4 flex-shrink-0 items-center justify-center">
                      <item.icon className="h-4 w-4" />
                    </span>
                    <span className="whitespace-nowrap">{item.name}</span>
                  </Link>
                </div>
              ))}
            </nav>

            <div className="mt-5 border-t border-white/20 pt-5">
              <div className="grid gap-3">
                <Link
                  href="/payment"
                  className="flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-gradient-to-r from-green-600 to-emerald-700 px-6 py-3 text-[13px] font-extrabold leading-none text-white shadow-lg transition-all duration-300 hover:from-green-700 hover:to-emerald-800"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Pay Online
                </Link>

                <Link
                  href="/contact"
                  className="flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-gradient-to-r from-blue-600 to-blue-800 px-6 py-3 text-[13px] font-extrabold leading-none text-white shadow-lg transition-all duration-300 hover:from-blue-700 hover:to-blue-900"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      <header
        ref={headerRef}
        className={`fixed left-0 right-0 z-40 transition-[background,box-shadow,border-color] duration-300 ${
          isMenuOpen
            ? 'bg-dark-blue-grey shadow-lg border-b border-white/20'
            : isScrolled 
              ? 'bg-dark-blue-grey/95 backdrop-blur-lg shadow-lg border-b border-white/20' 
              : 'bg-dark-blue-grey/90 backdrop-blur-md'
        }`}
        style={{
          top: 'var(--top-bar-offset, 0px)',
          minHeight: `var(--main-header-height, ${DEFAULT_HEADER_HEIGHT}px)`,
        }}
      >
        <div className="container mx-auto px-4">
          <div className="flex min-h-[4.5rem] items-center justify-between gap-3 lg:min-h-[5rem]">
            <div className="flex items-center transition-transform duration-200 hover:scale-[1.02]">
              <Link href="/" className="flex items-center">
                <Image
                  src={headerLogo}
                  alt="Navigator Immigration Logo"
                  width={headerLogo.width}
                  height={headerLogo.height}
                  loading="eager"
                  quality={70}
                  sizes="(max-width: 640px) 56px, (max-width: 1024px) 64px, 104px"
                  className="h-14 w-auto object-contain sm:h-16 lg:h-[6.5rem]"
                />
              </Link>
            </div>

            <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1">
              {navigation.map((item) => (
                <div key={item.name} className="transition-transform duration-200 hover:scale-[1.02]">
                  <Link
                    href={item.href}
                    className={`flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200 hover:bg-white/10 hover:text-white xl:px-3.5 ${
                      pathname === item.href ? 'text-gray-500' : 'text-gray-300'
                    }`}
                  >
                    <span className="flex h-4 w-4 items-center justify-center flex-shrink-0">
                      <item.icon className="w-4 h-4" />
                    </span>
                    <span className="whitespace-nowrap">{item.name}</span>
                  </Link>
                </div>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <div className="hidden items-center gap-2 lg:flex">
                <div className="transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]">
                  <Link
                    href="/payment"
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-lg bg-gradient-to-r from-green-600 to-emerald-700 px-4 py-2.5 text-[13px] font-semibold leading-none text-white transition-all duration-300 hover:from-green-700 hover:to-emerald-800 shadow-lg hover:shadow-xl"
                  >
                    Pay Online
                  </Link>
                </div>

                <div className="transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-lg bg-gradient-to-r from-blue-600 to-blue-800 px-5 py-2.5 text-[13px] font-semibold leading-none text-white transform transition-all duration-300 hover:from-blue-700 hover:to-blue-900 shadow-lg hover:shadow-xl"
                  >
                    Get Started
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>

              <button
                type="button"
                className="rounded-lg p-2 text-gray-400 transition-colors duration-200 hover:bg-white/10 lg:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen}
                aria-controls="mobile-navigation"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default MainHeader;
