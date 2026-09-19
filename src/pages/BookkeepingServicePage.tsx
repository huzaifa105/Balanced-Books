import React, { useState } from 'react';
import { PageRoute } from '../types';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { BOOKKEEPING_FAQS } from '../data/siteData';
import {
  CalendarCheck,
  CheckCircle2,
  ChevronDown,
  BookOpen,
  Clock,
  FileSpreadsheet,
  ShieldCheck,
  ArrowRight,
  Layers,
  Sparkles,
} from 'lucide-react';

interface BookkeepingServicePageProps {
  onRouteChange: (route: PageRoute) => void;
  onOpenConsultation: () => void;
}

export const BookkeepingServicePage: React.FC<BookkeepingServicePageProps> = ({
  onRouteChange,
  onOpenConsultation,
}) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="bg-[#F5F8F7] min-h-screen">
      <Breadcrumbs
        items={[
          { label: 'Services', route: 'services' },
          { label: 'Bookkeeping & Month-End Close' },
        ]}
        onRouteChange={onRouteChange}
      />

      {/* Hero */}
      <section className="bg-white border-b border-gray-200/80 py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#05596A]/10 text-[#05596A] text-xs font-semibold">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Dedicated Service Overview</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#182A30] font-['Manrope'] tracking-tight">
            Reliable Bookkeeping. Timely Closes. Clean Financials.
          </h1>

          <p className="text-base sm:text-lg text-[#56656A] leading-relaxed max-w-2xl mx-auto">
            Cloud-based bookkeeping and month-end close support tailored for startup founders and growing
            businesses that need clean, dependable financial records without the operational drag.
          </p>

          <div className="pt-4">
            <button
              onClick={onOpenConsultation}
              className="bg-[#05596A] hover:bg-[#123F49] text-white px-7 py-3.5 rounded-xl font-semibold text-sm transition-all shadow-md inline-flex items-center gap-2 border-b-2 border-[#36A333] cursor-pointer"
            >
              <CalendarCheck className="w-4 h-4 text-[#36A333]" />
              <span>Schedule a Bookkeeping Consultation</span>
            </button>
          </div>
        </div>
      </section>

      {/* Core Deliverables */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#05596A]">
              What We Deliver
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#182A30] font-['Manrope']">
              Structured Bookkeeping That Keeps You in Control
            </h2>
            <p className="text-sm sm:text-base text-[#56656A]">
              Our cloud bookkeeping engagements cover the entire lifecycle of routine financial management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#F5F8F7] border border-gray-200/80 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#05596A]/10 text-[#05596A] flex items-center justify-center">
                <FileSpreadsheet className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#182A30] font-['Manrope']">
                Transaction Classification
              </h3>
              <p className="text-xs sm:text-sm text-[#56656A] leading-relaxed">
                Ongoing recording and categorization of daily and weekly expenses, vendor bills, and sales
                receipts with strict adherence to standard accounting rules.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F5F8F7] border border-gray-200/80 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#05596A]/10 text-[#05596A] flex items-center justify-center">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#182A30] font-['Manrope']">
                Disciplined Month-End Closes
              </h3>
              <p className="text-xs sm:text-sm text-[#56656A] leading-relaxed">
                Reconciling all bank, credit card, and loan accounts on a regular calendar schedule,
                ensuring that books are not left to pile up into an unmanageable backlog.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F5F8F7] border border-gray-200/80 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#05596A]/10 text-[#05596A] flex items-center justify-center">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#182A30] font-['Manrope']">
                Accurate Financial Statements
              </h3>
              <p className="text-xs sm:text-sm text-[#56656A] leading-relaxed">
                Monthly delivery of verified Profit &amp; Loss statements, Balance Sheets, and Cash Flow summaries
                formatted clearly for leadership review.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F5F8F7] border border-gray-200/80 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#36A333]/15 text-[#36A333] flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#182A30] font-['Manrope']">
                Tax-Return-Ready Records
              </h3>
              <p className="text-xs sm:text-sm text-[#56656A] leading-relaxed">
                Well-documented, fully reconciled books structured to provide a clean, frictionless handoff
                to your CPA or tax professional when tax season arrives.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F5F8F7] border border-gray-200/80 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#123F49]/10 text-[#123F49] flex items-center justify-center">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#182A30] font-['Manrope']">
                QuickBooks Online Integration
              </h3>
              <p className="text-xs sm:text-sm text-[#56656A] leading-relaxed">
                Leveraging the full capabilities of QuickBooks Online as a Certified ProAdvisor to automate bank
                feeds, eliminate paper trails, and maintain reliable data integrity.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F5F8F7] border border-gray-200/80 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#05596A]/10 text-[#05596A] flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#182A30] font-['Manrope']">
                Responsive Collaboration
              </h3>
              <p className="text-xs sm:text-sm text-[#56656A] leading-relaxed">
                Direct communication with a knowledgeable bookkeeping specialist who understands your company's
                unique operational cadence and answers questions promptly.
              </p>
            </div>
          </div>

          {/* Mandatory Positioning Disclaimer */}
          <div className="mt-8 p-4 rounded-xl bg-[#F5F8F7] border border-gray-200 text-xs text-gray-600 flex items-start gap-2.5">
            <ShieldCheck className="w-4 h-4 text-[#36A333] shrink-0 mt-0.5" />
            <p>
              <strong>Notice:</strong> Balanced Books is an outsourced bookkeeping service, not a CPA firm. "Tax-return-ready books" refers to clean, reconciled, and properly documented general ledger records prepared to assist your downstream CPA or tax preparer. Balanced Books does not prepare or file income tax returns or issue audit opinions.
            </p>
          </div>
        </div>
      </section>

      {/* Who This Service Is For */}
      <section className="py-16 bg-[#F5F8F7] border-b border-gray-200/70">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#05596A]">
              Ideal Fit
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#182A30] font-['Manrope']">
              Is This Bookkeeping Service Right for Your Company?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-gray-200/80 space-y-2">
              <div className="text-sm font-bold text-[#05596A]">Overwhelmed Founders</div>
              <p className="text-xs text-gray-600 leading-relaxed">
                Founders who find themselves spending precious nights or weekends reconciling bank transactions instead of leading the company.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200/80 space-y-2">
              <div className="text-sm font-bold text-[#05596A]">Delayed Month-End Closes</div>
              <p className="text-xs text-gray-600 leading-relaxed">
                Businesses where month-end closes lag by 45, 60, or 90 days, making real-time financial decisions nearly impossible.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200/80 space-y-2">
              <div className="text-sm font-bold text-[#05596A]">Tax-Prep Headaches</div>
              <p className="text-xs text-gray-600 leading-relaxed">
                Companies that dread year-end tax season because disorganized records force expensive last-minute CPA cleanup bills.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work Together */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#05596A]">
              Working Process
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#182A30] font-['Manrope']">
              How We Work Together
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="space-y-2">
              <div className="w-8 h-8 rounded-lg bg-[#05596A] text-white flex items-center justify-center font-bold text-xs">
                1
              </div>
              <h4 className="text-sm font-bold text-gray-900">Onboarding &amp; Review</h4>
              <p className="text-xs text-gray-600">
                We review your existing QuickBooks Online file, connected bank feeds, and historical transactions.
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-8 h-8 rounded-lg bg-[#05596A] text-white flex items-center justify-center font-bold text-xs">
                2
              </div>
              <h4 className="text-sm font-bold text-gray-900">Cadence Alignment</h4>
              <p className="text-xs text-gray-600">
                We establish a consistent routine for weekly transaction classification and documentation receipt.
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-8 h-8 rounded-lg bg-[#05596A] text-white flex items-center justify-center font-bold text-xs">
                3
              </div>
              <h4 className="text-sm font-bold text-gray-900">Timely Close</h4>
              <p className="text-xs text-gray-600">
                Each month, our team reconciles all balance sheet accounts and closes the books systematically.
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-8 h-8 rounded-lg bg-[#36A333] text-white flex items-center justify-center font-bold text-xs">
                4
              </div>
              <h4 className="text-sm font-bold text-gray-900">Reporting &amp; Clarity</h4>
              <p className="text-xs text-gray-600">
                Accurate financial packages are delivered promptly so leadership can evaluate results with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bookkeeping FAQs */}
      <section className="py-16 bg-[#F5F8F7] border-b border-gray-200/70">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#05596A]">
              Service FAQ
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#182A30] font-['Manrope']">
              Bookkeeping &amp; Month-End Close Questions
            </h2>
          </div>

          <div className="space-y-3">
            {BOOKKEEPING_FAQS.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-xl border border-gray-200/90 bg-white overflow-hidden"
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
                    <div className="px-5 pb-5 text-xs sm:text-sm text-[#56656A] leading-relaxed border-t border-gray-100 pt-3">
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
            Ready for Dependable Bookkeeping?
          </h2>
          <p className="text-sm sm:text-base text-teal-100/90 max-w-xl mx-auto">
            Let's discuss how Balanced Books can tailor month-end close support and routine bookkeeping for your business.
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenConsultation}
              className="bg-[#36A333] hover:bg-[#5DAD59] text-white px-8 py-3.5 rounded-xl font-semibold text-sm transition-all shadow-md inline-flex items-center gap-2 cursor-pointer"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>Schedule a Bookkeeping Consultation</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
