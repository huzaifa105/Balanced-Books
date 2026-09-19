import React from 'react';
import { X, Calendar, ShieldCheck } from 'lucide-react';
import { ContactForm } from './ContactForm';
import { ServiceCategory } from '../types';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: ServiceCategory;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  defaultService = 'Bookkeeping & Month-End Close',
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="relative bg-white w-full max-w-xl rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
        {/* Header */}
        <div className="bg-[#123F49] text-white p-6 sm:p-7 relative border-b border-teal-800">
          <button
            id="close-consultation-modal-btn"
            onClick={onClose}
            className="absolute top-5 right-5 text-gray-300 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-2 bg-[#36A333]/20 text-[#5DAD59] text-xs font-semibold px-2.5 py-1 rounded-full mb-3">
            <Calendar className="w-3.5 h-3.5 text-[#36A333]" />
            <span>Bookkeeping Consultation</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold font-['Manrope']">
            Schedule a Consultation
          </h3>
          <p className="text-teal-100/90 text-xs sm:text-sm mt-1">
            Discuss your bookkeeping, month-end close, or QuickBooks Online needs with Balanced Books.
          </p>
        </div>

        {/* Form body */}
        <div className="p-6 sm:p-7">
          <ContactForm defaultService={defaultService} isModal={true} />
        </div>

        {/* Footer note */}
        <div className="bg-[#F5F8F7] px-6 py-3 border-t border-gray-100 text-[11px] text-gray-500 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-[#36A333]" />
            <span>Balanced Books &bull; Laredo, TX &bull; Serving Nationwide</span>
          </div>
          <span className="text-[#05596A] font-medium">+1 (956) 555-0100</span>
        </div>
      </div>
    </div>
  );
};
