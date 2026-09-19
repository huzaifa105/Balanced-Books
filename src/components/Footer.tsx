import React from 'react';
import { Logo } from './Logo';
import { PageRoute } from '../types';
import { Mail, Phone, MapPin, ShieldCheck, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onRouteChange: (route: PageRoute) => void;
  onOpenConsultation: () => void;
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onRouteChange,
  onOpenConsultation,
  onOpenPrivacy,
  onOpenTerms,
}) => {
  const currentYear = new Date().getFullYear();

  const handleNav = (route: PageRoute) => {
    onRouteChange(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#123F49] text-white border-t border-teal-900/50">
      {/* Upper footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="cursor-pointer inline-block" onClick={() => handleNav('home')}>
              <Logo theme="dark" size="md" />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed max-w-sm">
              Cloud-based bookkeeping and financial support for startups and growing businesses.
              Founded in 2017, helping leaders spend less time on bookkeeping and more time on business growth.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-teal-200">
              <span className="inline-block w-2 h-2 rounded-full bg-[#36A333]"></span>
              <span>Certified ProAdvisor Specializing in QuickBooks Online</span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#36A333]">Navigation</h4>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:text-white transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-white transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('who-we-help')}
                  className="hover:text-white transition-colors"
                >
                  Who We Help
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('resources')}
                  className="hover:text-white transition-colors"
                >
                  Resources
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Verified Services Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#36A333]">Services</h4>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li>
                <button
                  onClick={() => handleNav('services-bookkeeping')}
                  className="text-left hover:text-white transition-colors block"
                >
                  Bookkeeping &amp; Month-End Close
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services-controller')}
                  className="text-left hover:text-white transition-colors block"
                >
                  Fractional Controller Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services-quickbooks')}
                  className="text-left hover:text-white transition-colors block"
                >
                  QuickBooks Online Cleanup &amp; Support
                </button>
              </li>
              <li className="pt-2">
                <button
                  onClick={onOpenConsultation}
                  className="inline-flex items-center gap-1.5 text-xs text-[#5DAD59] hover:text-[#36A333] font-semibold"
                >
                  <span>Request Service Assessment</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#36A333]">Contact</h4>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#36A333] shrink-0 mt-0.5" />
                <div>
                  <div className="font-medium text-white">Balanced Books</div>
                  <div className="text-xs text-gray-300">Laredo, United States</div>
                  <div className="text-[11px] text-teal-200/80">Serving clients nationwide via cloud</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#36A333] shrink-0" />
                <a
                  href="mailto:support@BalancedBooks.com"
                  className="text-gray-300 hover:text-white transition-colors text-xs"
                >
                  support@BalancedBooks.com
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#36A333] shrink-0" />
                <div>
                  <a
                    href="tel:+19565550100"
                    className="text-gray-300 hover:text-white transition-colors font-medium text-xs"
                  >
                    +1 (956) 555-0100
                  </a>
                  <span className="block text-[10px] text-teal-300/70">Concept demo line</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Regulatory positioning disclaimer */}
        <div className="mt-12 pt-6 border-t border-teal-900/60 text-[12px] leading-relaxed text-teal-200/75">
          <div className="flex items-start gap-2 max-w-4xl">
            <ShieldCheck className="w-4 h-4 text-[#36A333] shrink-0 mt-0.5" />
            <p>
              Balanced Books provides outsourced bookkeeping, fractional controller support, and QuickBooks Online cleanup.
              Balanced Books is not a CPA firm and does not perform certified public accounting services, tax preparation,
              tax filing, auditing, assurance, or legal representation. “Tax-return-ready books” refers to organized, reconciled
              bookkeeping prepared to assist downstream tax preparers.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Sub-footer */}
      <div className="bg-[#0b282e] border-t border-teal-950 py-5 text-xs text-gray-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            &copy; {currentYear} Balanced Books. All rights reserved. Founded in 2017.
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={onOpenPrivacy}
              className="hover:text-white transition-colors underline-offset-4 hover:underline"
            >
              Privacy Policy
            </button>
            <span className="text-teal-900">&bull;</span>
            <button
              onClick={onOpenTerms}
              className="hover:text-white transition-colors underline-offset-4 hover:underline"
            >
              Terms of Use
            </button>
            <span className="text-teal-900">&bull;</span>
            <span className="text-gray-400 text-[11px]">
              Developed by Serwizen.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
