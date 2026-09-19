import React from 'react';
import { PageRoute } from '../types';
import { Breadcrumbs } from '../components/Breadcrumbs';
import {
  BookOpen,
  Sliders,
  Sparkles,
  HelpCircle,
  ArrowRight,
  CheckCircle2,
  CalendarCheck,
  ShieldCheck,
} from 'lucide-react';

interface ServicesOverviewPageProps {
  onRouteChange: (route: PageRoute) => void;
  onOpenConsultation: () => void;
}

export const ServicesOverviewPage: React.FC<ServicesOverviewPageProps> = ({
  onRouteChange,
  onOpenConsultation,
}) => {
  const navigateTo = (route: PageRoute) => {
    onRouteChange(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-[#F5F8F7] min-h-screen">
      <Breadcrumbs items={[{ label: 'Services' }]} onRouteChange={onRouteChange} />

      {/* Hero */}
      <section className="bg-white border-b border-gray-200/80 py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-[#05596A]">
            Tailored Accounting &amp; Bookkeeping Solutions
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#182A30] font-['Manrope'] tracking-tight">
            Bookkeeping Support That Adapts to Your Business.
          </h1>
          <p className="text-base sm:text-lg text-[#56656A] leading-relaxed max-w-2xl mx-auto">
            Every growing company has distinct bookkeeping rhythms. Balanced Books tailors our services
            around your specific operational requirements, from full-charge recurring bookkeeping to fractional controller oversight.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1: Bookkeeping & Month-End Close */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200/90 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#05596A]/10 text-[#05596A] flex items-center justify-center">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-[#182A30] font-['Manrope']">
                  Bookkeeping &amp; Month-End Close
                </h3>
                <p className="text-sm text-[#56656A] leading-relaxed">
                  Full-charge cloud bookkeeping designed to keep daily records organized and ensure that month-end closes happen on time. We provide disciplined categorization, timely reconciliation, and accurate reporting so your financial records are always decision-ready and tax-return ready for your CPA.
                </p>
                <div className="pt-2 border-t border-gray-100 space-y-2 text-xs text-gray-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#36A333]" />
                    <span>Disciplined month-end close schedule</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#36A333]" />
                    <span>Clean and organized chart of accounts</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#36A333]" />
                    <span>Tax-return-ready books for your external tax preparer</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-gray-100">
                <button
                  onClick={() => navigateTo('services-bookkeeping')}
                  className="w-full py-3 px-4 rounded-xl bg-[#05596A] hover:bg-[#123F49] text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <span>View Bookkeeping Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Card 2: Fractional Controller Services */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200/90 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#123F49]/10 text-[#123F49] flex items-center justify-center">
                  <Sliders className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-[#182A30] font-['Manrope']">
                  Fractional Controller Services
                </h3>
                <p className="text-sm text-[#56656A] leading-relaxed">
                  Higher-level financial and accounting oversight for companies that have outgrown basic bookkeeping alone. A fractional controller provides structured close supervision, helps leadership understand financial information, and supports growing accounting complexity without full-time overhead.
                </p>
                <div className="pt-2 border-t border-gray-100 space-y-2 text-xs text-gray-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#36A333]" />
                    <span>Accounting oversight and process structure</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#36A333]" />
                    <span>Helping leadership understand financial information</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#36A333]" />
                    <span>Supporting more complex operational accounting needs</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-gray-100">
                <button
                  onClick={() => navigateTo('services-controller')}
                  className="w-full py-3 px-4 rounded-xl bg-[#05596A] hover:bg-[#123F49] text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <span>View Controller Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Card 3: QuickBooks Online Cleanup & Support */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200/90 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#36A333]/15 text-[#36A333] flex items-center justify-center">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-[#182A30] font-['Manrope']">
                  QuickBooks Online Cleanup &amp; Support
                </h3>
                <p className="text-sm text-[#56656A] leading-relaxed">
                  As a Certified ProAdvisor specializing in QuickBooks Online, Balanced Books helps businesses untangle cluttered records, correct erroneous chart of accounts setups, and re-establish clean, dependable books that reflect operational reality.
                </p>
                <div className="pt-2 border-t border-gray-100 space-y-2 text-xs text-gray-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#36A333]" />
                    <span>Certified ProAdvisor specialization</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#36A333]" />
                    <span>Cleanup of disorganized or outdated QuickBooks files</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#36A333]" />
                    <span>Establishing a clean baseline for ongoing operations</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-gray-100">
                <button
                  onClick={() => navigateTo('services-quickbooks')}
                  className="w-full py-3 px-4 rounded-xl bg-[#05596A] hover:bg-[#123F49] text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <span>View QuickBooks Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Card 4: Additional Support for Complex Bookkeeping Issues */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200/90 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-gray-100 text-gray-700 flex items-center justify-center">
                  <HelpCircle className="w-6 h-6 text-[#05596A]" />
                </div>
                <h3 className="text-2xl font-bold text-[#182A30] font-['Manrope']">
                  Support for Bookkeeping &amp; Accounting Challenges
                </h3>
                <p className="text-sm text-[#56656A] leading-relaxed">
                  Growing businesses frequently encounter tricky accounting questions—such as unravelling historical account imbalances, handling unusual transaction flows, or restructuring disorganized ledgers. Balanced Books provides seasoned, objective assistance navigating these operational challenges.
                </p>
                <div className="pt-2 border-t border-gray-100 space-y-2 text-xs text-gray-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#36A333]" />
                    <span>Untangling complex transaction histories</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#36A333]" />
                    <span>Restoring consistency across messy general ledgers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#36A333]" />
                    <span>Focused problem-solving for accounting discrepancies</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-gray-100">
                <button
                  onClick={onOpenConsultation}
                  className="w-full py-3 px-4 rounded-xl bg-[#F5F8F7] hover:bg-[#05596A] text-[#05596A] hover:text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Discuss an Accounting Challenge</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* "Not Sure What Level of Support You Need?" Diagnostic Section */}
      <section className="py-16 bg-white border-t border-gray-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#123F49] text-white rounded-3xl p-8 sm:p-12 space-y-6">
            <div className="max-w-2xl space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#36A333]">
                Guidance &amp; Discovery
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-['Manrope']">
                Not Sure What Level of Support You Need?
              </h2>
              <p className="text-sm text-teal-100/90 leading-relaxed">
                Some businesses come to us needing urgent QuickBooks cleanup; others require recurring full-charge bookkeeping, and others seek controller-level oversight to support rapid operational growth.
              </p>
              <p className="text-sm text-teal-100/90 leading-relaxed">
                We begin with a straightforward consultation to review your current bookkeeping status, transaction volume, and operational goals—helping you establish exactly the right level of support.
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={onOpenConsultation}
                className="w-full sm:w-auto bg-[#36A333] hover:bg-[#5DAD59] text-white px-8 py-3.5 rounded-xl font-bold text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <CalendarCheck className="w-4 h-4" />
                <span>Start a Conversation</span>
              </button>

              <button
                onClick={() => navigateTo('contact')}
                className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/30 px-6 py-3.5 rounded-xl font-semibold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Contact Balanced Books</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
