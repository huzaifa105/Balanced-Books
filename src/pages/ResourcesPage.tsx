import React, { useState } from 'react';
import { PageRoute, ResourceArticle } from '../types';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { RESOURCE_ARTICLES } from '../data/siteData';
import {
  BookOpen,
  Clock,
  Tag,
  ArrowRight,
  ShieldAlert,
  CalendarCheck,
  CheckCircle2,
} from 'lucide-react';

interface ResourcesPageProps {
  onRouteChange: (route: PageRoute) => void;
  onOpenConsultation: () => void;
  onSelectArticle: (article: ResourceArticle) => void;
}

export const ResourcesPage: React.FC<ResourcesPageProps> = ({
  onRouteChange,
  onOpenConsultation,
  onSelectArticle,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Bookkeeping Basics',
    'Financial Operations',
    'Growth & Advisory',
    'QuickBooks Online',
  ];

  const filteredArticles =
    selectedCategory === 'All'
      ? RESOURCE_ARTICLES
      : RESOURCE_ARTICLES.filter((a) => a.category === selectedCategory);

  return (
    <div className="bg-[#F5F8F7] min-h-screen">
      <Breadcrumbs items={[{ label: 'Resources' }]} onRouteChange={onRouteChange} />

      {/* Hero */}
      <section className="bg-white border-b border-gray-200/80 py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#05596A]/10 text-[#05596A] text-xs font-semibold">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Knowledge &amp; Practical Guides</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#182A30] font-['Manrope'] tracking-tight">
            Practical Financial &amp; Bookkeeping Insights for Business Leaders.
          </h1>

          <p className="text-base sm:text-lg text-[#56656A] leading-relaxed max-w-2xl mx-auto">
            Educational articles and operational guides to help founders and business leaders
            understand bookkeeping best practices, month-end closes, and cloud financial workflows.
          </p>
        </div>
      </section>

      {/* Category filter pills */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider mr-2 hidden sm:inline">
              Filter:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#05596A] text-white shadow-xs'
                    : 'bg-[#F5F8F7] text-gray-700 hover:bg-gray-200/70'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <div
                key={article.id}
                className="bg-white rounded-2xl p-7 border border-gray-200/80 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span className="inline-flex items-center gap-1 font-semibold text-[#05596A] bg-[#05596A]/10 px-2.5 py-0.5 rounded-full">
                      <Tag className="w-3 h-3" />
                      {article.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-[#182A30] font-['Manrope'] group-hover:text-[#05596A] transition-colors leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#56656A] leading-relaxed line-clamp-3">
                    {article.summary}
                  </p>

                  <div className="pt-2 border-t border-gray-100">
                    <div className="text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-[#36A333]" />
                      <span>Takeaway Preview:</span>
                    </div>
                    <p className="text-xs text-gray-600 line-clamp-2 italic">
                      "{article.keyTakeaways[0]}"
                    </p>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-gray-100">
                  <button
                    onClick={() => onSelectArticle(article)}
                    className="w-full text-center py-2.5 px-4 rounded-lg bg-[#F5F8F7] hover:bg-[#05596A] text-[#05596A] hover:text-white font-semibold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>Read Full Guide</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Mandatory Informational Disclaimer */}
          <div className="mt-14 max-w-3xl mx-auto p-5 rounded-2xl bg-white border border-amber-200/80 shadow-xs flex items-start gap-3 text-xs text-gray-600">
            <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <strong className="text-gray-900 block font-semibold">Educational Disclaimer:</strong>
              <p className="leading-relaxed">
                Content is provided for general informational purposes and should not be considered tax,
                legal, investment, or professional advice for any specific situation. Balanced Books provides
                bookkeeping and fractional controller services and is not a CPA firm or legal counsel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-[#123F49] text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold font-['Manrope']">
            Have Questions About Your Bookkeeping Setup?
          </h2>
          <p className="text-sm sm:text-base text-teal-100/90 max-w-xl mx-auto">
            Schedule a conversation with our team to review your current books and explore how customized bookkeeping can support your growth.
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
