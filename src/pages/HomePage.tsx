import React, { useState } from 'react';
import { PageRoute } from '../types';
import { HOME_FAQS } from '../data/siteData';
import {
  CalendarCheck,
  ArrowRight,
  BookOpen,
  Sliders,
  Sparkles,
  CheckCircle2,
  Clock,
  ShieldCheck,
  ChevronDown,
  Layers,
  Building2,
  Rocket,
  TrendingUp,
  MapPin,
  Laptop,
  Users,
  Compass,
} from 'lucide-react';

interface HomePageProps {
  onRouteChange: (route: PageRoute) => void;
  onOpenConsultation: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onRouteChange,
  onOpenConsultation,
}) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const navigateTo = (route: PageRoute) => {
    onRouteChange(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="space-y-0">
      {/* SECTION 1: HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#F5F8F7] via-white to-[#F5F8F7] pt-12 pb-20 lg:pt-20 lg:pb-28 border-b border-gray-200/70">
        {/* Subtle geometric background accents inspired by logo angles */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-[#05596A]/5 pointer-events-none blur-3xl"></div>
        <div className="absolute bottom-0 left-10 -mb-24 w-80 h-80 rounded-full bg-[#36A333]/5 pointer-events-none blur-2xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Hero Left Content */}
            <div className="lg:col-span-7 space-y-6">
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-gray-200/80 shadow-xs text-xs font-semibold text-[#05596A]">
                <span className="w-2 h-2 rounded-full bg-[#36A333]"></span>
                <span>Founded in 2017 &bull; QuickBooks Online Certified ProAdvisor</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#182A30] tracking-tight font-['Manrope'] leading-[1.12]">
                Bookkeeping Built for <br />
                <span className="text-[#05596A]">Better Business Decisions.</span>
              </h1>

              {/* Supporting Copy */}
              <p className="text-base sm:text-lg text-[#56656A] leading-relaxed max-w-2xl">
                Balanced Books provides cloud-based bookkeeping, fractional controller support,
                month-end close assistance, and QuickBooks Online expertise for growing businesses
                and startup founders across the United States.
              </p>

              {/* Primary & Secondary CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <button
                  id="hero-schedule-consultation-btn"
                  onClick={onOpenConsultation}
                  className="bg-[#05596A] hover:bg-[#123F49] text-white px-7 py-3.5 rounded-xl font-semibold text-sm transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 border-b-2 border-[#36A333] cursor-pointer"
                >
                  <CalendarCheck className="w-4 h-4 text-[#36A333]" />
                  <span>Schedule a Consultation</span>
                </button>

                <button
                  id="hero-explore-services-btn"
                  onClick={() => navigateTo('services')}
                  className="bg-white hover:bg-gray-50 text-[#05596A] border border-[#05596A]/30 hover:border-[#05596A] px-6 py-3.5 rounded-xl font-semibold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <span>Explore Our Services</span>
                  <ArrowRight className="w-4 h-4 text-[#05596A]" />
                </button>
              </div>

              {/* Credibility Trust Bar */}
              <div className="pt-6 border-t border-gray-200/80 grid grid-cols-3 gap-4 text-left">
                <div>
                  <div className="text-xs font-bold text-[#182A30] uppercase tracking-wider">Est. 2017</div>
                  <div className="text-xs text-[#56656A] mt-0.5">Reliable bookkeeping foundation</div>
                </div>
                <div>
                  <div className="text-xs font-bold text-[#05596A] uppercase tracking-wider">Certified ProAdvisor</div>
                  <div className="text-xs text-[#56656A] mt-0.5">QuickBooks Online specialist</div>
                </div>
                <div>
                  <div className="text-xs font-bold text-[#36A333] uppercase tracking-wider">Nationwide Reach</div>
                  <div className="text-xs text-[#56656A] mt-0.5">Cloud-delivered collaboration</div>
                </div>
              </div>
            </div>

            {/* Hero Right Visual: Clean Professional Dashboard & Review Scene */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Visual card representing organized financial review */}
                <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 space-y-5 relative z-10">
                  {/* Top card header */}
                  <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#05596A]/10 flex items-center justify-center text-[#05596A]">
                        <BookOpen className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-gray-900">Financial Operations Status</div>
                        <div className="text-[11px] text-gray-500">QuickBooks Online &bull; Cloud Reconciled</div>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#36A333] bg-[#36A333]/10 px-2.5 py-1 rounded-full">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Closed on Time
                    </span>
                  </div>

                  {/* Financial Checklist Simulation */}
                  <div className="space-y-3 text-xs">
                    <div className="flex items-center justify-between p-3 rounded-lg bg-[#F5F8F7] border border-gray-100">
                      <div className="flex items-center gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#36A333]" />
                        <span className="font-medium text-gray-800">Month-End Reconciliations</span>
                      </div>
                      <span className="text-[11px] text-[#05596A] font-semibold">Completed</span>
                    </div>

                    <div className="flex items-center justify-between p-3 rounded-lg bg-[#F5F8F7] border border-gray-100">
                      <div className="flex items-center gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#36A333]" />
                        <span className="font-medium text-gray-800">Chart of Accounts Cleanliness</span>
                      </div>
                      <span className="text-[11px] text-[#05596A] font-semibold">Organized</span>
                    </div>

                    <div className="flex items-center justify-between p-3 rounded-lg bg-[#F5F8F7] border border-gray-100">
                      <div className="flex items-center gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#36A333]" />
                        <span className="font-medium text-gray-800">Tax-Return-Ready Reporting</span>
                      </div>
                      <span className="text-[11px] text-[#36A333] font-semibold">Ready for CPA</span>
                    </div>
                  </div>

                  {/* Operational Impact Quote Banner */}
                  <div className="bg-[#123F49] text-white p-4 rounded-xl space-y-1">
                    <div className="text-xs font-semibold text-teal-200">The Balanced Books Outcome:</div>
                    <div className="text-xs text-gray-200 leading-snug">
                      “Books are closed on time, reports are clean, and leadership has clear visibility without getting bogged down in recurring administrative entries.”
                    </div>
                  </div>
                </div>

                {/* Floating Badge */}
                <div className="absolute -bottom-5 -left-4 bg-white px-4 py-2.5 rounded-xl shadow-lg border border-gray-100 z-20 flex items-center gap-2.5 text-xs">
                  <div className="w-7 h-7 rounded-full bg-[#36A333]/15 flex items-center justify-center text-[#36A333]">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Certified ProAdvisor</div>
                    <div className="text-[10px] text-gray-500">QuickBooks Online Specialist</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: THE BOOKKEEPING BURDEN */}
      <section className="py-16 lg:py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#05596A]">
              The Operational Challenge
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#182A30] font-['Manrope']">
              Growing a Business Already Demands Enough Attention.
            </h2>
            <p className="text-base text-[#56656A] leading-relaxed">
              Bookkeeping should not repeatedly pull founders and business leaders away from customers,
              operations, teams, and strategic growth.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#F5F8F7] border border-gray-200/80 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-red-100 text-red-600 flex items-center justify-center font-bold">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#182A30] font-['Manrope']">
                Month-End Falling Behind
              </h3>
              <p className="text-sm text-[#56656A] leading-relaxed">
                When daily operations surge, closing the month often slips to late nights or is postponed,
                leaving leadership without current financial numbers when key decisions must be made.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F5F8F7] border border-gray-200/80 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center font-bold">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#182A30] font-['Manrope']">
                Disorganized Records &amp; QuickBooks Clutter
              </h3>
              <p className="text-sm text-[#56656A] leading-relaxed">
                As multiple software integrations, team purchases, and transactions multiply,
                chart-of-accounts entries can quickly become messy, inconsistent, and hard to decipher.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F5F8F7] border border-gray-200/80 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-teal-100 text-[#05596A] flex items-center justify-center font-bold">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#182A30] font-['Manrope']">
                Leadership Operating in the Dark
              </h3>
              <p className="text-sm text-[#56656A] leading-relaxed">
                Without clean, accurate, and timely reports, management struggles to see real-world
                spending trends or prepare organized records for annual tax returns.
              </p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <button
              onClick={() => navigateTo('who-we-help')}
              className="inline-flex items-center gap-2 text-sm font-bold text-[#05596A] hover:text-[#36A333] transition-colors cursor-pointer group"
            >
              <span>See How Balanced Books Helps Businesses Reclaim Time</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 3: SERVICES */}
      <section className="py-16 lg:py-24 bg-[#F5F8F7] border-b border-gray-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div className="max-w-2xl space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#05596A]">
                Customized Accounting &amp; Bookkeeping Services
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#182A30] font-['Manrope']">
                Tailored Support for Your Growth Stage
              </h2>
              <p className="text-[#56656A] text-sm sm:text-base">
                Balanced Books provides customized services designed to maintain organized books,
                strengthen financial visibility, and take recurring administrative complexity off your plate.
              </p>
            </div>

            <button
              onClick={() => navigateTo('services')}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#05596A] hover:text-[#36A333] transition-colors shrink-0"
            >
              <span>View Full Services Overview</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* 3 Core Verified Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1: Bookkeeping & Month-End Close */}
            <div className="bg-white rounded-2xl p-7 shadow-xs border border-gray-200/90 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#05596A]/10 text-[#05596A] flex items-center justify-center">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#182A30] font-['Manrope']">
                  Bookkeeping &amp; Month-End Close
                </h3>
                <p className="text-sm text-[#56656A] leading-relaxed">
                  Reliable full-charge cloud bookkeeping and month-end close support. We ensure that
                  your transactions are organized, books are closed on time each month, and financial reports
                  are accurate and tax-return ready.
                </p>
                <ul className="space-y-2 text-xs text-gray-700 pt-2 border-t border-gray-100">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#36A333]" />
                    <span>Timely month-end close execution</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#36A333]" />
                    <span>Organized, accurate financial records</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#36A333]" />
                    <span>Tax-return-ready books for your CPA</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 mt-6 border-t border-gray-100">
                <button
                  id="card-learn-bookkeeping-btn"
                  onClick={() => navigateTo('services-bookkeeping')}
                  className="w-full text-center py-2.5 px-4 rounded-lg bg-[#F5F8F7] hover:bg-[#05596A] text-[#05596A] hover:text-white font-semibold text-xs transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Learn About Bookkeeping Support</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Service 2: Fractional Controller Services */}
            <div className="bg-white rounded-2xl p-7 shadow-xs border border-gray-200/90 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#123F49]/10 text-[#123F49] flex items-center justify-center">
                  <Sliders className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#182A30] font-['Manrope']">
                  Fractional Controller Services
                </h3>
                <p className="text-sm text-[#56656A] leading-relaxed">
                  Higher-level accounting and financial oversight support for growing organizations.
                  We provide structured close oversight, support financial organization, and help leadership
                  understand financial information to make informed operational decisions.
                </p>
                <ul className="space-y-2 text-xs text-gray-700 pt-2 border-t border-gray-100">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#36A333]" />
                    <span>Higher-level accounting oversight</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#36A333]" />
                    <span>Stronger financial visibility for leaders</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#36A333]" />
                    <span>Support for accounting complexity</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 mt-6 border-t border-gray-100">
                <button
                  id="card-learn-controller-btn"
                  onClick={() => navigateTo('services-controller')}
                  className="w-full text-center py-2.5 px-4 rounded-lg bg-[#F5F8F7] hover:bg-[#05596A] text-[#05596A] hover:text-white font-semibold text-xs transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Learn About Controller Support</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Service 3: QuickBooks Online Cleanup & Support */}
            <div className="bg-white rounded-2xl p-7 shadow-xs border border-gray-200/90 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#36A333]/15 text-[#36A333] flex items-center justify-center">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#182A30] font-['Manrope']">
                  QuickBooks Online Cleanup &amp; Support
                </h3>
                <p className="text-sm text-[#56656A] leading-relaxed">
                  As a Certified ProAdvisor specializing in QuickBooks Online, Balanced Books helps
                  companies clean up disorganized records, fix historical discrepancies, and establish a clean,
                  disciplined bookkeeping foundation.
                </p>
                <ul className="space-y-2 text-xs text-gray-700 pt-2 border-t border-gray-100">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#36A333]" />
                    <span>Certified ProAdvisor expertise</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#36A333]" />
                    <span>Disorganized QuickBooks record cleanup</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#36A333]" />
                    <span>Cleaner foundations for ongoing records</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 mt-6 border-t border-gray-100">
                <button
                  id="card-learn-quickbooks-btn"
                  onClick={() => navigateTo('services-quickbooks')}
                  className="w-full text-center py-2.5 px-4 rounded-lg bg-[#F5F8F7] hover:bg-[#05596A] text-[#05596A] hover:text-white font-semibold text-xs transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Learn About QuickBooks Cleanup</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: A BOOKKEEPING PARTNER, NOT JUST SOFTWARE */}
      <section className="py-16 lg:py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#123F49] rounded-3xl text-white p-8 sm:p-12 lg:p-16 relative overflow-hidden">
            <div className="max-w-3xl space-y-6 relative z-10">
              <span className="text-xs font-bold uppercase tracking-wider text-[#36A333]">
                Human Expertise + Cloud Technology
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-['Manrope'] leading-tight">
                A Bookkeeping Partner, Not Just Software.
              </h2>
              <p className="text-base sm:text-lg text-teal-100/90 leading-relaxed">
                Technology makes modern bookkeeping faster and more efficient, but businesses still need
                dependable financial organization and experienced human oversight.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-teal-800">
                <div className="space-y-1">
                  <div className="text-lg font-bold text-white font-['Manrope']">Technology</div>
                  <p className="text-xs text-teal-200/80">
                    Modern cloud workflows via QuickBooks Online and secure bank sync.
                  </p>
                </div>
                <div className="space-y-1">
                  <div className="text-lg font-bold text-[#5DAD59] font-['Manrope']">Expertise</div>
                  <p className="text-xs text-teal-200/80">
                    Certified ProAdvisor specialization and seasoned accounting problem-solving.
                  </p>
                </div>
                <div className="space-y-1">
                  <div className="text-lg font-bold text-white font-['Manrope']">Organized Process</div>
                  <p className="text-xs text-teal-200/80">
                    Disciplined month-end closes that keep records reliable and decision-ready.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: WHY BALANCED BOOKS */}
      <section className="py-16 lg:py-24 bg-[#F5F8F7] border-b border-gray-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#05596A]">
              Why Choose Balanced Books
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#182A30] font-['Manrope']">
              Clear Value Built Around Verified Competency
            </h2>
            <p className="text-[#56656A] text-sm sm:text-base">
              Founded in 2017, we combine dedicated ProAdvisor knowledge with personalized service
              to give business owners peace of mind regarding their financial records.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-gray-200/80 space-y-3 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#05596A]/10 text-[#05596A] flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-[#05596A]" />
              </div>
              <h3 className="text-base font-bold text-[#182A30] font-['Manrope']">
                QuickBooks Online Expertise
              </h3>
              <p className="text-xs text-[#56656A] leading-relaxed">
                Certified ProAdvisor specialization ensures your QuickBooks setup, cleanup, and daily records
                follow best practices.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200/80 space-y-3 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#05596A]/10 text-[#05596A] flex items-center justify-center">
                <Layers className="w-5 h-5 text-[#05596A]" />
              </div>
              <h3 className="text-base font-bold text-[#182A30] font-['Manrope']">
                Customized Support
              </h3>
              <p className="text-xs text-[#56656A] leading-relaxed">
                Engagements are tailored around your specific operational cadence, whether you need full-charge
                bookkeeping or fractional controller oversight.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200/80 space-y-3 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#36A333]/15 text-[#36A333] flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-[#36A333]" />
              </div>
              <h3 className="text-base font-bold text-[#182A30] font-['Manrope']">
                Built Around Better Information
              </h3>
              <p className="text-xs text-[#56656A] leading-relaxed">
                Our stated mission is to help clients make better-informed decisions through accurate reports
                closed punctually on schedule.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200/80 space-y-3 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-[#123F49]/10 text-[#123F49] flex items-center justify-center">
                <Laptop className="w-5 h-5 text-[#123F49]" />
              </div>
              <h3 className="text-base font-bold text-[#182A30] font-['Manrope']">
                Remote, Nationwide Reach
              </h3>
              <p className="text-xs text-[#56656A] leading-relaxed">
                Our cloud-based model allows us to partner effectively with businesses across the country,
                from Seattle and San Francisco to Miami and Texas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: FROM BOOKKEEPING TO BUSINESS CLARITY (3-Step Process) */}
      <section className="py-16 lg:py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#05596A]">
              Our Collaborative Approach
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#182A30] font-['Manrope']">
              From Bookkeeping to Business Clarity
            </h2>
            <p className="text-[#56656A] text-sm sm:text-base">
              A clear, high-level approach designed to establish order and maintain decision-ready financial records.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Step 1 */}
            <div className="relative p-6 rounded-2xl bg-[#F5F8F7] border border-gray-200/80 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-[#05596A] text-white flex items-center justify-center font-bold text-sm font-['Manrope']">
                1
              </div>
              <h3 className="text-lg font-bold text-[#182A30] font-['Manrope']">
                Understand the Current Situation
              </h3>
              <p className="text-xs sm:text-sm text-[#56656A] leading-relaxed">
                We begin by understanding your business, your current bookkeeping setup, transaction volume,
                and specific areas requiring cleanup or ongoing support.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative p-6 rounded-2xl bg-[#F5F8F7] border border-gray-200/80 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-[#123F49] text-white flex items-center justify-center font-bold text-sm font-['Manrope']">
                2
              </div>
              <h3 className="text-lg font-bold text-[#182A30] font-['Manrope']">
                Establish the Right Support
              </h3>
              <p className="text-xs sm:text-sm text-[#56656A] leading-relaxed">
                Together, we determine the appropriate combination of full-charge bookkeeping, month-end close
                cadence, QuickBooks cleanup, or fractional controller involvement.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative p-6 rounded-2xl bg-[#F5F8F7] border border-gray-200/80 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-[#36A333] text-white flex items-center justify-center font-bold text-sm font-['Manrope']">
                3
              </div>
              <h3 className="text-lg font-bold text-[#182A30] font-['Manrope']">
                Maintain Financial Clarity
              </h3>
              <p className="text-xs sm:text-sm text-[#56656A] leading-relaxed">
                We support organized books, timely month-end closes, and accurate financial reports over time,
                freeing your leadership team to focus on growing the company.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: WHO BALANCED BOOKS HELPS */}
      <section className="py-16 lg:py-24 bg-[#F5F8F7] border-b border-gray-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#05596A]">
              Target Audience
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#182A30] font-['Manrope']">
              Who Balanced Books Helps
            </h2>
            <p className="text-[#56656A] text-sm sm:text-base">
              Tailored financial operations support for companies at distinct stages of growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Startup Founders */}
            <div className="bg-white rounded-2xl p-7 border border-gray-200/80 shadow-xs flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#05596A]/10 text-[#05596A] flex items-center justify-center">
                  <Rocket className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#182A30] font-['Manrope']">
                  Startup Founders
                </h3>
                <p className="text-sm text-[#56656A] leading-relaxed">
                  For founders who need reliable bookkeeping support without spending valuable operating
                  time managing the books themselves. Protect your focus for product and customer traction.
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-gray-100">
                <span className="text-xs font-semibold text-[#05596A]">
                  Key benefit: Reclaim founder hours &amp; clean early records
                </span>
              </div>
            </div>

            {/* Small Businesses */}
            <div className="bg-white rounded-2xl p-7 border border-gray-200/80 shadow-xs flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#123F49]/10 text-[#123F49] flex items-center justify-center">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#182A30] font-['Manrope']">
                  Small Businesses
                </h3>
                <p className="text-sm text-[#56656A] leading-relaxed">
                  For established businesses seeking dependable cloud-based bookkeeping, consistent
                  month-end closes, and organized financial records ready for annual CPA tax filing.
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-gray-100">
                <span className="text-xs font-semibold text-[#123F49]">
                  Key benefit: On-time closes &amp; accurate monthly reporting
                </span>
              </div>
            </div>

            {/* Growing & Midsize Businesses */}
            <div className="bg-white rounded-2xl p-7 border border-gray-200/80 shadow-xs flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#36A333]/15 text-[#36A333] flex items-center justify-center">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#182A30] font-['Manrope']">
                  Growing &amp; Midsize Businesses
                </h3>
                <p className="text-sm text-[#56656A] leading-relaxed">
                  For organizations navigating greater financial complexity that require fractional
                  controller oversight, structured accounting operations, and clearer management visibility.
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-gray-100">
                <span className="text-xs font-semibold text-[#36A333]">
                  Key benefit: Fractional controller oversight without executive salary
                </span>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => navigateTo('who-we-help')}
              className="bg-white hover:bg-gray-50 text-[#05596A] border border-[#05596A]/30 hover:border-[#05596A] px-6 py-3 rounded-xl font-semibold text-sm transition-all inline-flex items-center gap-2 cursor-pointer shadow-xs"
            >
              <span>Explore Who We Help in Detail</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 8: NATIONAL CLIENT SUPPORT */}
      <section className="py-16 lg:py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#05596A]">
                Cloud-Based Service Delivery
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#182A30] font-['Manrope']">
                Cloud-Based Support Without Geographic Boundaries.
              </h2>
              <p className="text-sm sm:text-base text-[#56656A] leading-relaxed">
                Balanced Books is headquartered in Laredo, Texas, and partners with clients across the country
                through secure cloud-based bookkeeping and QuickBooks Online workflows.
              </p>
              <p className="text-xs sm:text-sm text-[#56656A] leading-relaxed">
                Our clients operate in dynamic commercial hubs nationwide. Through digital document sharing,
                automated bank feeds, and remote collaboration, geography is never a constraint to maintaining
                accurate, decision-ready books.
              </p>

              {/* Verified Client Geographies List */}
              <div className="pt-2">
                <div className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-3">
                  Examples of Client Locations Served:
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Seattle, WA', 'San Francisco, CA', 'Miami, FL', 'Dallas, TX', 'San Antonio, TX'].map(
                    (city, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#F5F8F7] border border-gray-200 text-xs font-medium text-gray-800"
                      >
                        <MapPin className="w-3 h-3 text-[#36A333]" />
                        {city}
                      </span>
                    )
                  )}
                </div>
                <p className="text-[11px] text-gray-500 mt-2 italic">
                  *Referenced as client geography examples, not physical branch offices.
                </p>
              </div>
            </div>

            {/* National Map Graphic Card */}
            <div className="lg:col-span-6">
              <div className="bg-[#123F49] text-white p-8 rounded-3xl shadow-xl relative overflow-hidden">
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-teal-800">
                  <div className="flex items-center gap-2.5">
                    <div className="w-3 h-3 rounded-full bg-[#36A333] animate-ping"></div>
                    <span className="text-xs font-bold uppercase tracking-wider text-teal-200">
                      Nationwide Cloud Collaboration
                    </span>
                  </div>
                  <span className="text-xs text-gray-300 font-medium">Headquartered in Laredo, TX</span>
                </div>

                {/* Minimalist stylized SVG map visualization */}
                <div className="relative h-64 sm:h-72 w-full flex items-center justify-center">
                  <svg
                    viewBox="0 0 600 360"
                    className="w-full h-full text-teal-800/60"
                    fill="none"
                    stroke="currentColor"
                  >
                    {/* Abstract USA Coastline Outline */}
                    <path
                      d="M 60 70 Q 120 60 180 80 Q 260 70 340 60 Q 450 65 520 90 Q 560 120 540 170 Q 550 220 500 280 Q 480 320 440 310 Q 380 300 320 340 Q 260 350 200 310 Q 140 300 100 260 Q 50 220 50 140 Z"
                      strokeWidth="2"
                      strokeDasharray="4 4"
                      fill="#0e343d"
                    />

                    {/* Connection lines from Laredo (approx 280, 310) to client hubs */}
                    {/* Seattle (110, 80) */}
                    <path d="M 280 305 Q 180 180 110 85" stroke="#36A333" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.7" />
                    {/* San Francisco (80, 160) */}
                    <path d="M 280 305 Q 160 220 85 165" stroke="#36A333" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.7" />
                    {/* Dallas (300, 260) */}
                    <path d="M 280 305 L 300 265" stroke="#5DAD59" strokeWidth="2" opacity="0.9" />
                    {/* San Antonio (280, 285) */}
                    <path d="M 280 305 L 282 288" stroke="#5DAD59" strokeWidth="2" opacity="0.9" />
                    {/* Miami (480, 300) */}
                    <path d="M 280 305 Q 380 320 480 300" stroke="#36A333" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.7" />

                    {/* Laredo Hub Pin */}
                    <circle cx="280" cy="305" r="7" fill="#36A333" />
                    <circle cx="280" cy="305" r="14" stroke="#36A333" strokeWidth="1.5" opacity="0.5" />

                    {/* Client geography pins */}
                    <circle cx="110" cy="85" r="4.5" fill="#5DAD59" />
                    <circle cx="85" cy="165" r="4.5" fill="#5DAD59" />
                    <circle cx="300" cy="265" r="4.5" fill="#5DAD59" />
                    <circle cx="282" cy="288" r="4.5" fill="#5DAD59" />
                    <circle cx="480" cy="300" r="4.5" fill="#5DAD59" />
                  </svg>

                  {/* Pin labels */}
                  <div className="absolute top-8 left-10 text-[10px] bg-teal-900/90 text-teal-100 px-2 py-0.5 rounded-sm border border-teal-700">
                    Seattle
                  </div>
                  <div className="absolute top-28 left-6 text-[10px] bg-teal-900/90 text-teal-100 px-2 py-0.5 rounded-sm border border-teal-700">
                    San Francisco
                  </div>
                  <div className="absolute bottom-16 right-10 text-[10px] bg-teal-900/90 text-teal-100 px-2 py-0.5 rounded-sm border border-teal-700">
                    Miami
                  </div>
                  <div className="absolute bottom-20 left-48 text-[10px] bg-teal-900/90 text-teal-100 px-2 py-0.5 rounded-sm border border-teal-700">
                    Dallas &amp; San Antonio
                  </div>
                  <div className="absolute bottom-3 left-40 text-[11px] bg-[#36A333] text-white font-bold px-2.5 py-1 rounded-md shadow-md">
                    Laredo HQ (Est. 2017)
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-teal-800 text-xs text-teal-200/90 flex items-center justify-between">
                  <span>100% Cloud Bookkeeping Delivery</span>
                  <span>Direct Advisor Contact</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: QUICKBOOKS ONLINE CREDIBILITY */}
      <section className="py-14 bg-[#123F49] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#36A333]">
                <ShieldCheck className="w-4 h-4" />
                <span>Certified Credibility</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-['Manrope'] text-white">
                Certified ProAdvisor Specializing in QuickBooks Online
              </h2>
              <p className="text-sm text-teal-100/90 leading-relaxed">
                Balanced Books is recognized as a Certified ProAdvisor. We utilize in-depth platform
                knowledge to configure, clean up, and maintain your QuickBooks Online records so you have
                continuous confidence in your balance sheets and operating statements.
              </p>
            </div>

            <button
              onClick={() => navigateTo('services-quickbooks')}
              className="bg-[#36A333] hover:bg-[#5DAD59] text-white px-6 py-3.5 rounded-xl font-semibold text-sm transition-all shadow-md shrink-0 flex items-center gap-2 cursor-pointer"
            >
              <span>Explore QuickBooks Services</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 10: FAQ PREVIEW */}
      <section className="py-16 lg:py-24 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#05596A]">
              Frequently Asked Questions
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#182A30] font-['Manrope']">
              Clear Answers About Working Together
            </h2>
            <p className="text-[#56656A] text-sm">
              Common questions about our bookkeeping, controller, and cloud collaboration model.
            </p>
          </div>

          <div className="space-y-3">
            {HOME_FAQS.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-xl border border-gray-200/90 bg-[#F5F8F7] overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full text-left p-5 font-semibold text-sm sm:text-base text-[#182A30] flex items-center justify-between gap-4 cursor-pointer"
                    aria-expanded={isOpen}
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

      {/* SECTION 11: FINAL CTA */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-[#05596A] to-[#123F49] text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#36A333] inline-block px-3 py-1 rounded-full bg-white/10">
            Start the Conversation
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-['Manrope'] leading-tight">
            Spend Less Time Managing the Books. <br />
            Spend More Time Building the Business.
          </h2>
          <p className="text-base sm:text-lg text-teal-100/90 max-w-2xl mx-auto leading-relaxed">
            Invite Balanced Books to take recurring bookkeeping complexity off your plate.
            Let's discuss how customized bookkeeping, month-end support, or QuickBooks cleanup can support your operations.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              id="final-schedule-consultation-btn"
              onClick={onOpenConsultation}
              className="w-full sm:w-auto bg-[#36A333] hover:bg-[#5DAD59] text-white px-8 py-4 rounded-xl font-bold text-sm transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 cursor-pointer"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>Schedule a Consultation</span>
            </button>

            <button
              id="final-contact-btn"
              onClick={() => navigateTo('contact')}
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/30 px-7 py-4 rounded-xl font-semibold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Contact Balanced Books</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
