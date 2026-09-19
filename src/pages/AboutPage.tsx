import React from 'react';
import { PageRoute } from '../types';
import { Breadcrumbs } from '../components/Breadcrumbs';
import {
  CalendarCheck,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Compass,
  Laptop,
  FileCheck,
  BarChart2,
  Building,
} from 'lucide-react';

interface AboutPageProps {
  onRouteChange: (route: PageRoute) => void;
  onOpenConsultation: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onRouteChange,
  onOpenConsultation,
}) => {
  return (
    <div className="bg-[#F5F8F7] min-h-screen">
      <Breadcrumbs items={[{ label: 'About' }]} onRouteChange={onRouteChange} />

      {/* 1. Hero */}
      <section className="bg-white border-b border-gray-200/80 py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#05596A]/10 text-[#05596A] text-xs font-semibold">
            <Building className="w-3.5 h-3.5" />
            <span>About Balanced Books</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#182A30] font-['Manrope'] tracking-tight">
            Bookkeeping Support Built Around Growing Businesses.
          </h1>

          <p className="text-base sm:text-lg text-[#56656A] leading-relaxed max-w-2xl mx-auto">
            Founded in 2017 in Laredo, Texas, Balanced Books acts as an outsourced bookkeeping
            and financial operations partner for founders, small business owners, and growing leadership teams nationwide.
          </p>
        </div>
      </section>

      {/* 2. Company Story / Purpose */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#05596A]">
              Our Foundation &amp; Focus
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#182A30] font-['Manrope']">
              Taking Bookkeeping Complexity Off Leadership's Plate
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed">
              <p>
                Balanced Books was established in 2017 with a focused objective: to help small and
                midsize businesses and startup founders spend less time managing bookkeeping so they can
                spend more time focused on business growth, operational execution, and company success.
              </p>
              <p>
                As businesses scale, bookkeeping frequently shifts from an occasional administrative task
                into a persistent operational bottleneck. Without structured accounting routines, books can
                fall behind, month-end closes get delayed, and leadership loses confidence in what their reports show.
              </p>
              <p>
                Balanced Books functions as a dedicated outsourced bookkeeping team. By tailoring our support
                around each client's specific operational needs—from full-charge bookkeeping and timely
                month-end closes to fractional controller oversight—we help ensure that financial records remain
                organized, accurate, and ready for decision-makers.
              </p>
            </div>
          </div>

          {/* 3. Stated Mission */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-[#123F49] to-[#05596A] text-white shadow-sm space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-[#36A333]">
              Our Stated Mission
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-['Manrope'] leading-snug">
              “Helping clients make better-informed business decisions while embracing online solutions that
              automate workflows, streamline processes, and support stronger business operations.”
            </h3>
            <p className="text-xs text-teal-200/90 pt-1">
              We focus on ensuring that books are closed on time, are tax-return ready, and that financial reports are accurate and useful to company and department leaders.
            </p>
          </div>
        </div>
      </section>

      {/* 4. What Balanced Books Believes Good Bookkeeping Should Deliver */}
      <section className="py-16 bg-[#F5F8F7] border-b border-gray-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#05596A]">
              Core Standards
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#182A30] font-['Manrope']">
              What Good Bookkeeping Should Deliver
            </h2>
            <p className="text-sm sm:text-base text-[#56656A]">
              We evaluate our work by the clarity, discipline, and reliability we bring to your financial operations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#05596A]/10 text-[#05596A] flex items-center justify-center">
                <FileCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#182A30] font-['Manrope']">
                Organized Financial Records
              </h3>
              <p className="text-xs sm:text-sm text-[#56656A] leading-relaxed">
                Systematic chart of accounts and clear ledger entries that eliminate ambiguity and prevent disorganized data buildup.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#05596A]/10 text-[#05596A] flex items-center justify-center">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#182A30] font-['Manrope']">
                Timely Month-End Closes
              </h3>
              <p className="text-xs sm:text-sm text-[#56656A] leading-relaxed">
                Closing on schedule each month so reports represent current business reality, not outdated retrospective figures.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#05596A]/10 text-[#05596A] flex items-center justify-center">
                <BarChart2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#182A30] font-['Manrope']">
                Accurate Financial Reports
              </h3>
              <p className="text-xs sm:text-sm text-[#56656A] leading-relaxed">
                Reporting that management, department heads, and downstream tax professionals can rely on with confidence.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#36A333]/15 text-[#36A333] flex items-center justify-center">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#182A30] font-['Manrope']">
                Better Financial Visibility
              </h3>
              <p className="text-xs sm:text-sm text-[#56656A] leading-relaxed">
                Clear insight into where cash and expenses flow, empowering leadership to make better-informed strategic decisions.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-xs space-y-3 sm:col-span-2 lg:col-span-2">
              <div className="w-10 h-10 rounded-xl bg-[#123F49]/10 text-[#123F49] flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#182A30] font-['Manrope']">
                Reduced Administrative Burden
              </h3>
              <p className="text-xs sm:text-sm text-[#56656A] leading-relaxed">
                Freeing business leaders and internal teams from recurring bookkeeping stress, allowing them to channel their valuable bandwidth directly into building and operating the business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Modern Cloud-Based Approach & 6. Nationwide Support */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#05596A]">
              Delivery Model
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#182A30] font-['Manrope']">
              Modern Cloud-Based Delivery Across the United States
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed">
              <p>
                Balanced Books operates fully via modern cloud bookkeeping solutions, centered on
                QuickBooks Online. As a Certified ProAdvisor, we leverage cloud platform workflows
                to securely synchronize bank data, maintain paperless documentation, and communicate
                consistently with leadership teams.
              </p>
              <p>
                From our home base in Laredo, Texas, this cloud-based delivery model allows us to partner
                seamlessly with small businesses and startups located throughout the country, including
                clients in major economic centers like Seattle, San Francisco, Miami, Dallas, and San Antonio.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#F5F8F7] border border-gray-200 text-xs sm:text-sm text-gray-600 space-y-2">
            <div className="font-bold text-[#182A30] flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#36A333]" />
              <span>Important Positioning Clarification</span>
            </div>
            <p>
              Balanced Books is an outsourced bookkeeping and financial operations firm. We are not a CPA firm and do not provide income tax preparation, tax filing, or formal audits. Our solutions are designed to deliver clean, tax-return-ready books that streamline your year-end work with your chosen CPA or tax preparer.
            </p>
          </div>
        </div>
      </section>

      {/* 7. CTA */}
      <section className="py-16 bg-[#123F49] text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold font-['Manrope']">
            Discuss Your Bookkeeping Needs
          </h2>
          <p className="text-sm sm:text-base text-teal-100/90 max-w-xl mx-auto">
            Ready to establish organized financial records and timely month-end closes for your company?
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
