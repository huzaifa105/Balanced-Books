import React from 'react';
import { PageRoute } from '../types';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ContactForm } from '../components/ContactForm';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ShieldCheck,
  CheckCircle2,
  CalendarCheck,
  AlertCircle,
} from 'lucide-react';

interface ContactPageProps {
  onRouteChange: (route: PageRoute) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onRouteChange }) => {
  return (
    <div className="bg-[#F5F8F7] min-h-screen">
      <Breadcrumbs items={[{ label: 'Contact' }]} onRouteChange={onRouteChange} />

      {/* Hero */}
      <section className="bg-white border-b border-gray-200/80 py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#05596A]/10 text-[#05596A] text-xs font-semibold">
            <Mail className="w-3.5 h-3.5" />
            <span>Direct Inquiry &amp; Consultation</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#182A30] font-['Manrope'] tracking-tight">
            Let's Talk About Your Bookkeeping.
          </h1>

          <p className="text-base sm:text-lg text-[#56656A] leading-relaxed max-w-2xl mx-auto">
            Whether you need routine bookkeeping support, assistance with month-end closes, help organizing
            your QuickBooks Online account, or fractional controller guidance, Balanced Books is here to help.
          </p>
        </div>
      </section>

      {/* Main Grid: Form + Company Info */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Form */}
            <div className="lg:col-span-7 space-y-4">
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-200/80 shadow-xs">
                <div className="mb-6 space-y-1">
                  <h2 className="text-xl sm:text-2xl font-bold text-[#182A30] font-['Manrope']">
                    Request a Consultation
                  </h2>
                  <p className="text-xs sm:text-sm text-[#56656A]">
                    Fill out the details below and we will respond within one business day.
                  </p>
                </div>
                <ContactForm />
              </div>
            </div>

            {/* Right Column: Company Info & What Happens Next */}
            <div className="lg:col-span-5 space-y-8">
              {/* Contact Details Card */}
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-200/80 shadow-xs space-y-6">
                <h3 className="text-lg font-bold text-[#182A30] font-['Manrope'] pb-3 border-b border-gray-100">
                  Company Information
                </h3>

                <div className="space-y-4 text-sm text-gray-700">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-[#05596A]/10 text-[#05596A] shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="block text-gray-900 font-semibold">Headquarters:</strong>
                      <span>Laredo, United States</span>
                      <span className="block text-xs text-gray-500">
                        Serving businesses nationwide through secure cloud workflows.
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-[#05596A]/10 text-[#05596A] shrink-0 mt-0.5">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="block text-gray-900 font-semibold">Email:</strong>
                      <a
                        href="mailto:support@BalancedBooks.com"
                        className="text-[#05596A] hover:underline font-medium"
                      >
                        support@BalancedBooks.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-[#05596A]/10 text-[#05596A] shrink-0 mt-0.5">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="block text-gray-900 font-semibold">Telephone:</strong>
                      <a
                        href="tel:+19565550100"
                        className="text-gray-900 font-medium hover:text-[#05596A]"
                      >
                        +1 (956) 555-0100
                      </a>
                      <p className="text-[11px] text-amber-700 mt-1 flex items-center gap-1 bg-amber-50 p-1.5 rounded-sm border border-amber-200">
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        <span>Temporary demo number supplied for the website concept.</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-[#05596A]/10 text-[#05596A] shrink-0 mt-0.5">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="block text-gray-900 font-semibold">Operating Hours:</strong>
                      <span>Monday &ndash; Friday, 8:00 AM &ndash; 5:00 PM CST</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center gap-2 text-xs text-teal-900 font-medium">
                  <ShieldCheck className="w-4 h-4 text-[#36A333]" />
                  <span>Founded in 2017 &bull; QuickBooks Online Certified ProAdvisor</span>
                </div>
              </div>

              {/* What Happens Next Card */}
              <div className="bg-[#123F49] text-white p-6 sm:p-8 rounded-3xl shadow-sm space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#36A333]">
                  Process Transparency
                </span>
                <h3 className="text-xl font-bold font-['Manrope']">
                  What Happens Next?
                </h3>
                <div className="space-y-4 text-xs sm:text-sm text-teal-100/90 leading-relaxed">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#36A333] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      1
                    </div>
                    <div>
                      <strong className="text-white block font-semibold">Inquiry Review</strong>
                      <span>
                        Within 1 business day, our bookkeeping team reviews your details and current operational setup.
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#36A333] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      2
                    </div>
                    <div>
                      <strong className="text-white block font-semibold">Discovery Conversation</strong>
                      <span>
                        We schedule a brief, focused consultation to explore transaction volume, pain points, and specific goals.
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#36A333] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      3
                    </div>
                    <div>
                      <strong className="text-white block font-semibold">Tailored Service Proposal</strong>
                      <span>
                        We propose a customized scope of work—whether recurring bookkeeping, month-end support, or QuickBooks cleanup.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
