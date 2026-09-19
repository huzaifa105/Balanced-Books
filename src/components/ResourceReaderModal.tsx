import React from 'react';
import { ResourceArticle } from '../types';
import { X, Clock, Tag, CheckCircle2, ShieldAlert, ArrowRight } from 'lucide-react';

interface ResourceReaderModalProps {
  article: ResourceArticle | null;
  onClose: () => void;
  onOpenConsultation: () => void;
}

export const ResourceReaderModal: React.FC<ResourceReaderModalProps> = ({
  article,
  onClose,
  onOpenConsultation,
}) => {
  if (!article) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="relative bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-gray-100 overflow-hidden my-8">
        {/* Header */}
        <div className="bg-[#123F49] text-white p-6 sm:p-8 relative border-b border-teal-800">
          <button
            id="close-resource-modal-btn"
            onClick={onClose}
            className="absolute top-5 right-5 text-gray-300 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Close article"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3 text-xs mb-3">
            <span className="inline-flex items-center gap-1 bg-[#36A333]/20 text-[#5DAD59] font-medium px-2.5 py-0.5 rounded-full">
              <Tag className="w-3 h-3 text-[#36A333]" />
              {article.category}
            </span>
            <span className="flex items-center gap-1 text-teal-200/80">
              <Clock className="w-3.5 h-3.5" />
              {article.readTime}
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl font-bold font-['Manrope'] text-white leading-snug">
            {article.title}
          </h2>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto text-[#182A30]">
          {/* Key Takeaways Box */}
          <div className="bg-[#F5F8F7] border border-teal-100 rounded-xl p-5 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#05596A] flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#36A333]" />
              Key Takeaways
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-700">
              {article.keyTakeaways.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#36A333] shrink-0 mt-2"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Article Paragraphs */}
          <div className="space-y-4 text-sm sm:text-base leading-relaxed text-gray-700">
            {article.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {/* Mandatory Informational Disclaimer */}
          <div className="bg-amber-50/70 border-l-4 border-amber-500 p-4 rounded-r-lg text-xs text-amber-900 flex items-start gap-2.5">
            <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong>Disclaimer:</strong> Content is provided for general informational purposes and should not be considered tax, legal, investment, or professional advice for any specific situation.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="bg-[#F5F8F7] p-5 sm:p-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-gray-600">
            Need tailored bookkeeping or QuickBooks Online support for your company?
          </div>
          <button
            onClick={() => {
              onClose();
              onOpenConsultation();
            }}
            className="w-full sm:w-auto bg-[#05596A] hover:bg-[#123F49] text-white px-5 py-2.5 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-all shadow-xs hover:shadow-md cursor-pointer border-b-2 border-[#36A333]"
          >
            <span>Discuss With Balanced Books</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#36A333]" />
          </button>
        </div>
      </div>
    </div>
  );
};
