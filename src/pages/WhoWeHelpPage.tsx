import React from 'react';
import { PageRoute } from '../types';
import { Breadcrumbs } from '../components/Breadcrumbs';
import {
  CalendarCheck,
  CheckCircle2,
  Rocket,
  Building2,
  TrendingUp,
  MapPin,
  Clock,
  ShieldCheck,
  ArrowRight,
  Laptop,
} from 'lucide-react';

interface WhoWeHelpPageProps {
  onRouteChange: (route: PageRoute) => void;
  onOpenConsultation: () => void;
}

export const WhoWeHelpPage: React.FC<WhoWeHelpPageProps> = ({
  onRouteChange,
  onOpenConsultation,
}) => {
  return (
    <div className="bg-[#F5F8F7] min-h-screen">
      <Breadcrumbs items={[{ label: 'Who We Help' }]} onRouteChange={onRouteChange} />

      {/* Hero */}
      <section className="bg-white border-b border-gray-200/80 py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#05596A]/10 text-[#05596A] text-xs font-semibold">
            <Rocket className="w-3.5 h-3.5" />
            <span>Target Profiles &amp; Stages</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#182A30] font-['Manrope'] tracking-tight">
            Bookkeeping Solutions Built for Founders and Growing Teams.
          </h1>

          <p className="text-base sm:text-lg text-[#56656A] leading-relaxed max-w-2xl mx-auto">
            Customized bookkeeping and financial operations support tailored for startup founders,
            small businesses, and midsize companies seeking clarity, discipline, and time freedom.
          </p>

          <div className="pt-4">
            <button
              onClick={onOpenConsultation}
              className="bg-[#05596A] hover:bg-[#123F49] text-white px-7 py-3.5 rounded-xl font-semibold text-sm transition-all shadow-md inline-flex items-center gap-2 border-b-2 border-[#36A333] cursor-pointer"
            >
              <CalendarCheck className="w-4 h-4 text-[#36A333]" />
              <span>Find the Right Support for Your Business</span>
            </button>
          </div>
        </div>
      </section>

      {/* 3 Audience Profile Breakdown */}
      <section className="py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Profile 1: Startup Founders */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-200/80 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-[#05596A]/10 text-[#05596A] flex items-center justify-center">
                <Rocket className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#182A30] font-['Manrope']">
                  Startup Founders
                </h3>
                <p className="text-xs text-[#05596A] font-semibold mt-1">
                  Early-Stage Ventures &bull; Seed &bull; Series A
                </p>
              </div>
              <div className="p-4 rounded-xl bg-[#F5F8F7] border border-gray-100 text-xs text-gray-600 space-y-1.5">
                <strong className="text-gray-900 block font-semibold">The Core Challenge:</strong>
                <p>
                  Spending hours manually categorizing receipts or untangling bank sync errors pulls founders away from building products, acquiring initial customers, and securing vital seed funding.
                </p>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-4 border-t lg:border-t-0 lg:border-l border-gray-100 pt-6 lg:pt-0 lg:pl-8">
              <h4 className="text-base font-bold text-[#182A30] font-['Manrope']">
                How Balanced Books Reclaims Founder Bandwidth:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-gray-700">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#36A333] shrink-0 mt-0.5" />
                  <span>
                    <strong>Clean Books From Day One:</strong> Establishing clean, standardized chart of accounts before errors compound.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#36A333] shrink-0 mt-0.5" />
                  <span>
                    <strong>Investor &amp; Due Diligence Ready:</strong> Producing structured balance sheets and P&amp;Ls that prospective investors respect.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#36A333] shrink-0 mt-0.5" />
                  <span>
                    <strong>Reclaiming Executive Time:</strong> Eliminating late-night bookkeeping sessions so founders focus purely on execution.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#36A333] shrink-0 mt-0.5" />
                  <span>
                    <strong>Cloud Flexibility:</strong> Lightweight, frictionless communication via modern QuickBooks Online tools.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Profile 2: Small Businesses */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-200/80 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-[#123F49]/10 text-[#123F49] flex items-center justify-center">
                <Building2 className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#182A30] font-['Manrope']">
                  Small Businesses
                </h3>
                <p className="text-xs text-[#123F49] font-semibold mt-1">
                  Established Operators &bull; Service Firms &bull; Retail &amp; Agencies
                </p>
              </div>
              <div className="p-4 rounded-xl bg-[#F5F8F7] border border-gray-100 text-xs text-gray-600 space-y-1.5">
                <strong className="text-gray-900 block font-semibold">The Core Challenge:</strong>
                <p>
                  Disorganized records, delayed month-end closes, and extreme anxiety approaching year-end tax season, leading to rushed, costly accounting cleanups.
                </p>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-4 border-t lg:border-t-0 lg:border-l border-gray-100 pt-6 lg:pt-0 lg:pl-8">
              <h4 className="text-base font-bold text-[#182A30] font-['Manrope']">
                How Balanced Books Delivers Operational Stability:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-gray-700">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#36A333] shrink-0 mt-0.5" />
                  <span>
                    <strong>Punctual Month-End Closes:</strong> Strict calendar schedules keeping records updated every single month.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#36A333] shrink-0 mt-0.5" />
                  <span>
                    <strong>Tax-Return-Ready Books:</strong> Seamless year-end file handoffs directly to your external CPA or tax accountant.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#36A333] shrink-0 mt-0.5" />
                  <span>
                    <strong>Cash Flow &amp; Expense Tracking:</strong> Consistent visibility into operating expenses, vendor payments, and cash burn.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#36A333] shrink-0 mt-0.5" />
                  <span>
                    <strong>Reliable Dedicated Support:</strong> A responsive bookkeeping partner who answers operational questions promptly.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Profile 3: Growing & Midsize Businesses */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-200/80 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-[#36A333]/15 text-[#36A333] flex items-center justify-center">
                <TrendingUp className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#182A30] font-['Manrope']">
                  Growing &amp; Midsize Businesses
                </h3>
                <p className="text-xs text-[#36A333] font-semibold mt-1">
                  Scaling Operations &bull; Multi-Product &bull; High Transaction Volume
                </p>
              </div>
              <div className="p-4 rounded-xl bg-[#F5F8F7] border border-gray-100 text-xs text-gray-600 space-y-1.5">
                <strong className="text-gray-900 block font-semibold">The Core Challenge:</strong>
                <p>
                  Outgrowing entry-level bookkeeping. Transaction volume multiplies, department budgets require tracking, and leadership lacks senior accounting oversight.
                </p>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-4 border-t lg:border-t-0 lg:border-l border-gray-100 pt-6 lg:pt-0 lg:pl-8">
              <h4 className="text-base font-bold text-[#182A30] font-['Manrope']">
                How Balanced Books Scales With Your Business:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-gray-700">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#36A333] shrink-0 mt-0.5" />
                  <span>
                    <strong>Fractional Controller Oversight:</strong> High-level review, accruals, and close governance without full-time executive cost.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#36A333] shrink-0 mt-0.5" />
                  <span>
                    <strong>Complex Transaction Management:</strong> Deferred revenue schedules, prepaid expenses, and multi-channel reconciliation.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#36A333] shrink-0 mt-0.5" />
                  <span>
                    <strong>Clear Management Reporting:</strong> Departmental insights and financial statements that inform board and executive meetings.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#36A333] shrink-0 mt-0.5" />
                  <span>
                    <strong>Internal Controls &amp; Review:</strong> Documented checks and balances to safeguard accounting data integrity.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Geographic Flexibility */}
      <section className="py-16 bg-white border-y border-gray-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-[#05596A]">
            Nationwide Reach
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#182A30] font-['Manrope']">
            Supporting Businesses Across the Country
          </h2>
          <p className="text-sm sm:text-base text-[#56656A] leading-relaxed max-w-2xl mx-auto">
            Our cloud-based model eliminates physical boundaries. Headquartered in Laredo, Texas, Balanced Books supports business owners and founders operating in major economic markets across the United States.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {['Seattle, WA', 'San Francisco, CA', 'Miami, FL', 'Dallas, TX', 'San Antonio, TX'].map((loc, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#F5F8F7] border border-gray-200 text-xs font-medium text-gray-800"
              >
                <MapPin className="w-3.5 h-3.5 text-[#36A333]" />
                {loc}
              </span>
            ))}
          </div>
          <p className="text-[11px] text-gray-400 italic">
            *Listed as examples of client geography served via our cloud bookkeeping model.
          </p>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-[#123F49] text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold font-['Manrope']">
            Ready to Discuss Your Business Stage?
          </h2>
          <p className="text-sm sm:text-base text-teal-100/90 max-w-xl mx-auto">
            Whether you are launching your first startup or managing a rapidly scaling company, we can design a bookkeeping plan suited to your operational requirements.
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenConsultation}
              className="bg-[#36A333] hover:bg-[#5DAD59] text-white px-8 py-3.5 rounded-xl font-semibold text-sm transition-all shadow-md inline-flex items-center gap-2 cursor-pointer"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>Schedule a Consultation</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
