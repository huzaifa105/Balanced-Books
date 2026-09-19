import React, { useState, useEffect, useRef } from 'react';
import { Logo } from './Logo';
import { PageRoute } from '../types';
import {
  ChevronDown,
  Menu,
  X,
  Phone,
  ArrowRight,
  BookOpen,
  Sliders,
  Sparkles,
  CalendarCheck,
} from 'lucide-react';

interface NavbarProps {
  currentRoute: PageRoute;
  onRouteChange: (route: PageRoute) => void;
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentRoute,
  onRouteChange,
  onOpenConsultation,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isServiceActive =
    currentRoute === 'services' ||
    currentRoute === 'services-bookkeeping' ||
    currentRoute === 'services-controller' ||
    currentRoute === 'services-quickbooks';

  const navigateTo = (route: PageRoute) => {
    onRouteChange(route);
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top micro-bar for trust & immediate contact */}
      <div className="bg-[#123F49] text-white text-xs py-2 px-4 border-b border-teal-900/40">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-2 text-teal-100/90 text-[11px] sm:text-xs">
            <span className="inline-block w-2 h-2 rounded-full bg-[#36A333] animate-pulse"></span>
            <span>Founded in 2017 &bull; QuickBooks Online Certified ProAdvisor &bull; Nationwide Client Support</span>
          </div>
          <div className="flex items-center gap-4 text-[11px] sm:text-xs">
            <span className="text-teal-200/80 hidden md:inline">support@BalancedBooks.com</span>
            <a
              href="tel:+19565550100"
              className="flex items-center gap-1.5 text-teal-100 hover:text-[#36A333] transition-colors font-medium"
              title="Concept demo phone number"
            >
              <Phone className="w-3 h-3 text-[#36A333]" />
              <span>+1 (956) 555-0100</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main sticky header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-200 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-200/80 py-3'
            : 'bg-white border-b border-gray-100 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <button
              id="navbar-logo-link"
              onClick={() => navigateTo('home')}
              className="text-left focus:outline-hidden group"
              aria-label="Balanced Books Home"
            >
              <Logo size="md" />
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              <button
                id="nav-home-btn"
                onClick={() => navigateTo('home')}
                className={`px-3.5 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentRoute === 'home'
                    ? 'text-[#05596A] bg-[#05596A]/10 font-semibold'
                    : 'text-[#182A30] hover:text-[#05596A] hover:bg-gray-100/70'
                }`}
              >
                Home
              </button>

              <button
                id="nav-about-btn"
                onClick={() => navigateTo('about')}
                className={`px-3.5 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentRoute === 'about'
                    ? 'text-[#05596A] bg-[#05596A]/10 font-semibold'
                    : 'text-[#182A30] hover:text-[#05596A] hover:bg-gray-100/70'
                }`}
              >
                About
              </button>

              {/* Services Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  id="nav-services-dropdown-btn"
                  onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                  className={`px-3.5 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-1.5 ${
                    isServiceActive
                      ? 'text-[#05596A] bg-[#05596A]/10 font-semibold'
                      : 'text-[#182A30] hover:text-[#05596A] hover:bg-gray-100/70'
                  }`}
                  aria-expanded={servicesDropdownOpen}
                >
                  <span>Services</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      servicesDropdownOpen ? 'rotate-180 text-[#05596A]' : 'text-gray-500'
                    }`}
                  />
                </button>

                {servicesDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-84 bg-white rounded-xl shadow-xl border border-gray-100 py-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                    <div className="px-4 pb-2 mb-2 border-b border-gray-100">
                      <button
                        onClick={() => navigateTo('services')}
                        className="text-xs font-bold text-[#05596A] hover:text-[#36A333] flex items-center justify-between w-full uppercase tracking-wider"
                      >
                        <span>All Services Overview</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="space-y-1 px-2">
                      <button
                        id="nav-sub-bookkeeping"
                        onClick={() => navigateTo('services-bookkeeping')}
                        className={`w-full text-left p-2.5 rounded-lg flex items-start gap-3 transition-colors ${
                          currentRoute === 'services-bookkeeping'
                            ? 'bg-[#05596A]/10 text-[#05596A]'
                            : 'hover:bg-gray-50 text-gray-800'
                        }`}
                      >
                        <div className="p-2 rounded-md bg-[#05596A]/10 text-[#05596A] shrink-0 mt-0.5">
                          <BookOpen className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold">Bookkeeping &amp; Month-End Close</div>
                          <div className="text-xs text-gray-500 line-clamp-1">
                            Reliable records and timely month-end close support
                          </div>
                        </div>
                      </button>

                      <button
                        id="nav-sub-controller"
                        onClick={() => navigateTo('services-controller')}
                        className={`w-full text-left p-2.5 rounded-lg flex items-start gap-3 transition-colors ${
                          currentRoute === 'services-controller'
                            ? 'bg-[#05596A]/10 text-[#05596A]'
                            : 'hover:bg-gray-50 text-gray-800'
                        }`}
                      >
                        <div className="p-2 rounded-md bg-[#123F49]/10 text-[#123F49] shrink-0 mt-0.5">
                          <Sliders className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold">Fractional Controller Services</div>
                          <div className="text-xs text-gray-500 line-clamp-1">
                            Higher-level accounting oversight and financial visibility
                          </div>
                        </div>
                      </button>

                      <button
                        id="nav-sub-quickbooks"
                        onClick={() => navigateTo('services-quickbooks')}
                        className={`w-full text-left p-2.5 rounded-lg flex items-start gap-3 transition-colors ${
                          currentRoute === 'services-quickbooks'
                            ? 'bg-[#05596A]/10 text-[#05596A]'
                            : 'hover:bg-gray-50 text-gray-800'
                        }`}
                      >
                        <div className="p-2 rounded-md bg-[#36A333]/15 text-[#36A333] shrink-0 mt-0.5">
                          <Sparkles className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold">QuickBooks Online Cleanup &amp; Support</div>
                          <div className="text-xs text-gray-500 line-clamp-1">
                            Certified ProAdvisor specialization &amp; record organization
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>
                )}
              </div>

              <button
                id="nav-who-we-help-btn"
                onClick={() => navigateTo('who-we-help')}
                className={`px-3.5 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentRoute === 'who-we-help'
                    ? 'text-[#05596A] bg-[#05596A]/10 font-semibold'
                    : 'text-[#182A30] hover:text-[#05596A] hover:bg-gray-100/70'
                }`}
              >
                Who We Help
              </button>

              <button
                id="nav-resources-btn"
                onClick={() => navigateTo('resources')}
                className={`px-3.5 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentRoute === 'resources'
                    ? 'text-[#05596A] bg-[#05596A]/10 font-semibold'
                    : 'text-[#182A30] hover:text-[#05596A] hover:bg-gray-100/70'
                }`}
              >
                Resources
              </button>

              <button
                id="nav-contact-btn"
                onClick={() => navigateTo('contact')}
                className={`px-3.5 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentRoute === 'contact'
                    ? 'text-[#05596A] bg-[#05596A]/10 font-semibold'
                    : 'text-[#182A30] hover:text-[#05596A] hover:bg-gray-100/70'
                }`}
              >
                Contact
              </button>
            </nav>

            {/* Primary Action Button */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                id="header-schedule-consultation-btn"
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-2 bg-[#05596A] hover:bg-[#123F49] text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all shadow-xs hover:shadow-md active:scale-98 border-b-2 border-[#36A333]"
              >
                <CalendarCheck className="w-4 h-4 text-[#36A333]" />
                <span>Schedule a Consultation</span>
              </button>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="flex items-center lg:hidden gap-2">
              <button
                id="mobile-menu-toggle-btn"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-gray-700 hover:text-[#05596A] hover:bg-gray-100 focus:outline-hidden"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[96px] z-30 bg-black/40 backdrop-blur-xs">
          <div className="bg-white max-h-[85vh] overflow-y-auto border-b border-gray-200 px-5 py-6 space-y-4 shadow-xl animate-in slide-in-from-top-4 duration-200">
            <div className="flex flex-col space-y-2">
              <button
                onClick={() => navigateTo('home')}
                className={`text-left py-2 px-3 rounded-md font-medium ${
                  currentRoute === 'home' ? 'text-[#05596A] bg-teal-50 font-bold' : 'text-gray-800'
                }`}
              >
                Home
              </button>

              <button
                onClick={() => navigateTo('about')}
                className={`text-left py-2 px-3 rounded-md font-medium ${
                  currentRoute === 'about' ? 'text-[#05596A] bg-teal-50 font-bold' : 'text-gray-800'
                }`}
              >
                About Balanced Books
              </button>

              {/* Mobile Services Section */}
              <div className="border-y border-gray-100 py-2 my-1">
                <button
                  onClick={() => navigateTo('services')}
                  className="w-full text-left font-semibold text-[#05596A] px-3 py-1 flex items-center justify-between"
                >
                  <span>Services Overview</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <div className="pl-4 mt-2 space-y-1.5">
                  <button
                    onClick={() => navigateTo('services-bookkeeping')}
                    className="w-full text-left text-sm py-1.5 px-3 text-gray-700 hover:text-[#05596A] flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#05596A]"></span>
                    <span>Bookkeeping &amp; Month-End Close</span>
                  </button>
                  <button
                    onClick={() => navigateTo('services-controller')}
                    className="w-full text-left text-sm py-1.5 px-3 text-gray-700 hover:text-[#05596A] flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#123F49]"></span>
                    <span>Fractional Controller Services</span>
                  </button>
                  <button
                    onClick={() => navigateTo('services-quickbooks')}
                    className="w-full text-left text-sm py-1.5 px-3 text-gray-700 hover:text-[#05596A] flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#36A333]"></span>
                    <span>QuickBooks Online Cleanup &amp; Support</span>
                  </button>
                </div>
              </div>

              <button
                onClick={() => navigateTo('who-we-help')}
                className={`text-left py-2 px-3 rounded-md font-medium ${
                  currentRoute === 'who-we-help'
                    ? 'text-[#05596A] bg-teal-50 font-bold'
                    : 'text-gray-800'
                }`}
              >
                Who We Help
              </button>

              <button
                onClick={() => navigateTo('resources')}
                className={`text-left py-2 px-3 rounded-md font-medium ${
                  currentRoute === 'resources' ? 'text-[#05596A] bg-teal-50 font-bold' : 'text-gray-800'
                }`}
              >
                Resources &amp; Insights
              </button>

              <button
                onClick={() => navigateTo('contact')}
                className={`text-left py-2 px-3 rounded-md font-medium ${
                  currentRoute === 'contact' ? 'text-[#05596A] bg-teal-50 font-bold' : 'text-gray-800'
                }`}
              >
                Contact
              </button>
            </div>

            <div className="pt-4 border-t border-gray-100 flex flex-col gap-3">
              <button
                id="mobile-schedule-consultation-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full bg-[#05596A] hover:bg-[#123F49] text-white py-3 px-4 rounded-lg font-semibold text-center flex items-center justify-center gap-2 border-b-2 border-[#36A333]"
              >
                <CalendarCheck className="w-4 h-4 text-[#36A333]" />
                <span>Schedule a Consultation</span>
              </button>

              <div className="text-center text-xs text-gray-500 pt-1">
                Laredo, Texas &bull; Nationwide Cloud-Based Support
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
