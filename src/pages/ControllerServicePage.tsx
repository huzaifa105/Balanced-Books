import React, { useState } from 'react';
import { PageRoute } from '../types';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { CONTROLLER_FAQS } from '../data/siteData';
import {
  CalendarCheck,
  CheckCircle2,
  ChevronDown,
  Sliders,
  ShieldCheck,
  TrendingUp,
  BarChart3,
  Layers,
  FileCheck,
  ArrowRight,
} from 'lucide-react';

interface ControllerServicePageProps {
  onRouteChange: (route: PageRoute) => void;
  onOpenConsultation: () => void;
}

export const ControllerServicePage: React.FC<ControllerServicePageProps> = ({
  onRouteChange,
  onOpenConsultation,
}) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="bg-[#F5F8F7] min-h-screen">
      <Breadcrumbs
        items={[
          { label: 'Services', route: 'services' },
          { label: 'Fractional Controller Services' },
        ]}
        onRouteChange={onRouteChange}
      />

      {/* Hero */}
      <section className="bg-white border-b border-gray-200/80 py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#123F49]/10 text-[#123F49] text-xs font-semibold">
            <Sliders className="w-3.5 h-3.5" />
            <span>Fractional Financial Oversight</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#182A30] font-['Manrope'] tracking-tight">
            Higher-Level Accounting Oversight Without Full-Time Overhead.
          </h1>

          <p className="text-base sm:text-lg text-[#56656A] leading-relaxed max-w-2xl mx-auto">
            Fractional controller services for businesses outgrowing basic bookkeeping. We provide
            senior accounting structure, close supervision, and clearer financial visibility for leadership.
          </p>

          <div className="pt-4">
            <button
              onClick={onOpenConsultation}
              className="bg-[#05596A] hover:bg-[#123F49] text-white px-7 py-3.5 rounded-xl font-semibold text-sm transition-all shadow-md inline-flex items-center gap-2 border-b-2 border-[#36A333] cursor-pointer"
            >
              <CalendarCheck className="w-4 h-4 text-[#36A333]" />
              <span>Discuss Controller Support</span>
            </button>
          </div>
        </div>
      </section>

      {/* Core Controller Offerings */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#05596A]">
              Strategic Accounting Supervision
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#182A30] font-['Manrope']">
              What Fractional Controller Services Include
            </h2>
            <p className="text-sm sm:text-base text-[#56656A]">
              Bridge the gap between day-to-day data entry and executive decision-making.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#F5F8F7] border border-gray-200/80 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#05596A]/10 text-[#05596A] flex items-center justify-center">
                <FileCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#182A30] font-['Manrope']">
                Close Supervision &amp; Review
              </h3>
              <p className="text-xs sm:text-sm text-[#56656A] leading-relaxed">
                Supervising the month-end closing process, verifying balance sheet reconciliations,
                and ensuring proper accrual adjustments are accurately executed.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F5F8F7] border border-gray-200/80 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#05596A]/10 text-[#05596A] flex items-center justify-center">
                <BarChart3 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#182A30] font-['Manrope']">
                Financial Visibility for Leadership
              </h3>
              <p className="text-xs sm:text-sm text-[#56656A] leading-relaxed">
                Translating raw accounting data into structured management reports that help executives
                understand departmental costs, gross margins, and operational burn.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F5F8F7] border border-gray-200/80 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#05596A]/10 text-[#05596A] flex items-center justify-center">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#182A30] font-['Manrope']">
                Complex Accounting Needs
              </h3>
              <p className="text-xs sm:text-sm text-[#56656A] leading-relaxed">
                Handling deferred revenue schedules, prepaid amortization, inventory valuation,
                and multi-channel payment reconciliation across platforms.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F5F8F7] border border-gray-200/80 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#36A333]/15 text-[#36A333] flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#182A30] font-['Manrope']">
                Process &amp; Internal Controls
              </h3>
              <p className="text-xs sm:text-sm text-[#56656A] leading-relaxed">
                Establishing clear documentation workflows, separation of financial duties, and approval
                checkpoints to safeguard company assets as the team expands.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F5F8F7] border border-gray-200/80 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#123F49]/10 text-[#123F49] flex items-center justify-center">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#182A30] font-['Manrope']">
                Stakeholder Readiness
              </h3>
              <p className="text-xs sm:text-sm text-[#56656A] leading-relaxed">
                Preparing clean, organized balance sheets and supporting schedules required by commercial
                lenders, prospective investors, and year-end external CPA teams.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F5F8F7] border border-gray-200/80 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#05596A]/10 text-[#05596A] flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#182A30] font-['Manrope']">
                Flexible Fractional Scalability
              </h3>
              <p className="text-xs sm:text-sm text-[#56656A] leading-relaxed">
                Access experienced controller oversight scaled specifically to the hours and cadence
                your company needs, avoiding the $150k+ salary of a full-time executive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison: Bookkeeping vs Fractional Controller */}
      <section className="py-16 bg-[#F5F8F7] border-b border-gray-200/70">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#05596A]">
              Role Clarity
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#182A30] font-['Manrope']">
              Bookkeeping vs. Fractional Controller: The Difference
            </h2>
            <p className="text-sm text-[#56656A]">
              Both functions work together to maintain complete financial health.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-7 rounded-2xl border border-gray-200/80 space-y-4">
              <div className="flex items-center gap-2.5 pb-3 border-b border-gray-100">
                <div className="w-8 h-8 rounded-lg bg-[#05596A]/10 text-[#05596A] flex items-center justify-center font-bold text-xs">
                  BK
                </div>
                <div>
                  <h4 className="font-bold text-[#182A30]">Bookkeeping Support</h4>
                  <div className="text-xs text-gray-500">Day-to-day transaction recording</div>
                </div>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#36A333] shrink-0 mt-0.5" />
                  <span>Records and categorizes daily expenses and bank deposits</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#36A333] shrink-0 mt-0.5" />
                  <span>Reconciles bank accounts, credit cards, and merchant processors</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#36A333] shrink-0 mt-0.5" />
                  <span>Produces standard baseline financial reports (P&amp;L, Balance Sheet)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#36A333] shrink-0 mt-0.5" />
                  <span>Focuses on data accuracy and complete recordkeeping</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-gray-200/80 space-y-4">
              <div className="flex items-center gap-2.5 pb-3 border-b border-gray-100">
                <div className="w-8 h-8 rounded-lg bg-[#123F49]/10 text-[#123F49] flex items-center justify-center font-bold text-xs">
                  FC
                </div>
                <div>
                  <h4 className="font-bold text-[#182A30]">Fractional Controller Services</h4>
                  <div className="text-xs text-gray-500">Higher-level oversight &amp; analysis</div>
                </div>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#36A333] shrink-0 mt-0.5" />
                  <span>Reviews and supervises the entire month-end close process</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#36A333] shrink-0 mt-0.5" />
                  <span>Handles complex accounting entries (accruals, prepayments, deferred revenue)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#36A333] shrink-0 mt-0.5" />
                  <span>Helps leadership understand and interpret what financial reports mean</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#36A333] shrink-0 mt-0.5" />
                  <span>Establishes accounting internal controls and operational processes</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Controller FAQs */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#05596A]">
              Service FAQ
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#182A30] font-['Manrope']">
              Fractional Controller Questions
            </h2>
          </div>

          <div className="space-y-3">
            {CONTROLLER_FAQS.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-xl border border-gray-200/90 bg-[#F5F8F7] overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full text-left p-5 font-semibold text-sm sm:text-base text-[#182A30] flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#05596A] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-[#56656A] leading-relaxed border-t border-gray-200/60 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-[#123F49] text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold font-['Manrope']">
            Elevate Your Financial Operations
          </h2>
          <p className="text-sm sm:text-base text-teal-100/90 max-w-xl mx-auto">
            Schedule a conversation to discuss how fractional controller support can bring order and clarity to your accounting.
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenConsultation}
              className="bg-[#36A333] hover:bg-[#5DAD59] text-white px-8 py-3.5 rounded-xl font-semibold text-sm transition-all shadow-md inline-flex items-center gap-2 cursor-pointer"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>Discuss Controller Support</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
