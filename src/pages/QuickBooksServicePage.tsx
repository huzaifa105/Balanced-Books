import React, { useState } from 'react';
import { PageRoute } from '../types';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { QUICKBOOKS_FAQS } from '../data/siteData';
import {
  CalendarCheck,
  CheckCircle2,
  ChevronDown,
  Sparkles,
  ShieldCheck,
  AlertTriangle,
  Layers,
  FileSpreadsheet,
  Link2,
  RefreshCw,
} from 'lucide-react';

interface QuickBooksServicePageProps {
  onRouteChange: (route: PageRoute) => void;
  onOpenConsultation: () => void;
}

export const QuickBooksServicePage: React.FC<QuickBooksServicePageProps> = ({
  onRouteChange,
  onOpenConsultation,
}) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="bg-[#F5F8F7] min-h-screen">
      <Breadcrumbs
        items={[
          { label: 'Services', route: 'services' },
          { label: 'QuickBooks Online Cleanup & Support' },
        ]}
        onRouteChange={onRouteChange}
      />

      {/* Hero */}
      <section className="bg-white border-b border-gray-200/80 py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#36A333]/15 text-[#36A333] text-xs font-semibold">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Certified ProAdvisor Specialization</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#182A30] font-['Manrope'] tracking-tight">
            Certified ProAdvisor Specialization for QuickBooks Online.
          </h1>

          <p className="text-base sm:text-lg text-[#56656A] leading-relaxed max-w-2xl mx-auto">
            Specialized support for businesses that need cleanup, reorganization, or ongoing operational
            guidance for their QuickBooks Online accounts.
          </p>

          <div className="pt-4">
            <button
              onClick={onOpenConsultation}
              className="bg-[#05596A] hover:bg-[#123F49] text-white px-7 py-3.5 rounded-xl font-semibold text-sm transition-all shadow-md inline-flex items-center gap-2 border-b-2 border-[#36A333] cursor-pointer"
            >
              <CalendarCheck className="w-4 h-4 text-[#36A333]" />
              <span>Schedule a QuickBooks Consultation</span>
            </button>
          </div>
        </div>
      </section>

      {/* Core Offerings */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#05596A]">
              QuickBooks Services
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#182A30] font-['Manrope']">
              Clean Books, Reconciled Feeds, and Structured Accounts
            </h2>
            <p className="text-sm sm:text-base text-[#56656A]">
              We untangle messy files and configure QuickBooks Online to run smoothly for ongoing operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#F5F8F7] border border-gray-200/80 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#36A333]/15 text-[#36A333] flex items-center justify-center">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#182A30] font-['Manrope']">
                Historical File Cleanup
              </h3>
              <p className="text-xs sm:text-sm text-[#56656A] leading-relaxed">
                Auditing historical periods to diagnose why books don't tie out, clearing years of neglected
                reconciliations, and fixing erroneous journal entries.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F5F8F7] border border-gray-200/80 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#05596A]/10 text-[#05596A] flex items-center justify-center">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#182A30] font-['Manrope']">
                Chart of Accounts Restructuring
              </h3>
              <p className="text-xs sm:text-sm text-[#56656A] leading-relaxed">
                Streamlining cluttered, duplicate, or confusing account codes into a logical, standard
                structure aligned with your business model and tax schedules.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F5F8F7] border border-gray-200/80 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#123F49]/10 text-[#123F49] flex items-center justify-center">
                <RefreshCw className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#182A30] font-['Manrope']">
                Bank Feed Troubleshooting
              </h3>
              <p className="text-xs sm:text-sm text-[#56656A] leading-relaxed">
                Resolving duplicate bank rules, broken API syncs, and discrepancies between your physical
                bank statement and the QuickBooks register balance.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F5F8F7] border border-gray-200/80 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#05596A]/10 text-[#05596A] flex items-center justify-center">
                <FileSpreadsheet className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#182A30] font-['Manrope']">
                Uncategorized Account Resolution
              </h3>
              <p className="text-xs sm:text-sm text-[#56656A] leading-relaxed">
                Investigating "Uncategorized Expense", "Ask My Accountant", and "Suspense" balances to assign
                transactions accurately to their true operational categories.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F5F8F7] border border-gray-200/80 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#36A333]/15 text-[#36A333] flex items-center justify-center">
                <Link2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#182A30] font-['Manrope']">
                App &amp; Merchant Integrations
              </h3>
              <p className="text-xs sm:text-sm text-[#56656A] leading-relaxed">
                Verifying that payment processors (Stripe, Square, PayPal) and sales systems feed into QuickBooks
                cleanly without creating double revenue or untracked fee deductions.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F5F8F7] border border-gray-200/80 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#123F49]/10 text-[#123F49] flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#182A30] font-['Manrope']">
                Certified ProAdvisor Knowledge
              </h3>
              <p className="text-xs sm:text-sm text-[#56656A] leading-relaxed">
                Ongoing support guided by verified Intuit certification, ensuring your files adhere to
                recognized bookkeeping best practices and current system standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Common QuickBooks Issues We Untangle */}
      <section className="py-16 bg-[#F5F8F7] border-b border-gray-200/70">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#05596A]">
              Common Pains
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#182A30] font-['Manrope']">
              QuickBooks Problems Balanced Books Regularly Resolves
            </h2>
            <p className="text-sm text-[#56656A]">
              If you are seeing any of these symptoms in your QuickBooks file, we can help restore order.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="bg-white p-5 rounded-xl border border-gray-200 space-y-2">
              <div className="flex items-center gap-2 text-amber-600 font-bold text-sm">
                <AlertTriangle className="w-4 h-4" />
                <span>Uncategorized Buckets</span>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                Thousands of dollars sitting in "Uncategorized Expense" or "Uncategorized Income" distorting profit metrics.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-gray-200 space-y-2">
              <div className="flex items-center gap-2 text-amber-600 font-bold text-sm">
                <AlertTriangle className="w-4 h-4" />
                <span>Bank Register Mismatches</span>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                QuickBooks bank balance shows a completely different number than your actual online bank statement.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-gray-200 space-y-2">
              <div className="flex items-center gap-2 text-amber-600 font-bold text-sm">
                <AlertTriangle className="w-4 h-4" />
                <span>Duplicate Transactions</span>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                Rules or manual entries colliding with automatic bank feeds, duplicating expenses and skewing income.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-gray-200 space-y-2">
              <div className="flex items-center gap-2 text-amber-600 font-bold text-sm">
                <AlertTriangle className="w-4 h-4" />
                <span>Disorganized Chart of Accounts</span>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                Dozens of redundant, misnamed, or unused accounts created over several years without clear logic.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-gray-200 space-y-2">
              <div className="flex items-center gap-2 text-amber-600 font-bold text-sm">
                <AlertTriangle className="w-4 h-4" />
                <span>Overdue Reconciliations</span>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                Accounts that haven't been reconciled in months or years, making year-end tax preparation impossible.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-gray-200 space-y-2">
              <div className="flex items-center gap-2 text-amber-600 font-bold text-sm">
                <AlertTriangle className="w-4 h-4" />
                <span>Messy App Integrations</span>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                External tools dumping confusing batched entries into the ledger without proper fee allocations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Software Alone Is Not Enough */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="bg-[#123F49] text-white p-8 sm:p-10 rounded-2xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#36A333]">
              The Reality of Cloud Accounting
            </span>
            <h3 className="text-2xl font-bold font-['Manrope']">
              Why QuickBooks Online Alone Isn't Enough
            </h3>
            <p className="text-sm text-teal-100/90 leading-relaxed">
              QuickBooks Online is the industry standard cloud accounting platform, but software only records what it is instructed to record. Without skilled bookkeeping oversight to review rules, verify reconciliations, and handle tricky edge cases, automated bank feeds can rapidly compound errors.
            </p>
            <p className="text-sm text-teal-100/90 leading-relaxed">
              Balanced Books pairs Intuit ProAdvisor knowledge with hands-on human attention so your software becomes an asset, not an administrative puzzle.
            </p>
          </div>
        </div>
      </section>

      {/* QuickBooks FAQs */}
      <section className="py-16 bg-[#F5F8F7] border-b border-gray-200/70">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#05596A]">
              Service FAQ
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#182A30] font-['Manrope']">
              QuickBooks Online Cleanup Questions
            </h2>
          </div>

          <div className="space-y-3">
            {QUICKBOOKS_FAQS.map((faq, index) => {
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
            Restore Order to Your QuickBooks Account
          </h2>
          <p className="text-sm sm:text-base text-teal-100/90 max-w-xl mx-auto">
            Get in touch to assess your QuickBooks Online records and create a clear cleanup plan.
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenConsultation}
              className="bg-[#36A333] hover:bg-[#5DAD59] text-white px-8 py-3.5 rounded-xl font-semibold text-sm transition-all shadow-md inline-flex items-center gap-2 cursor-pointer"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>Schedule a QuickBooks Consultation</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
