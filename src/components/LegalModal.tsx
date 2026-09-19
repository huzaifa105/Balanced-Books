import React from 'react';
import { X, ShieldCheck } from 'lucide-react';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  const isPrivacy = type === 'privacy';

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="relative bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-gray-100 overflow-hidden my-8">
        <div className="bg-[#123F49] text-white p-6 relative border-b border-teal-800">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-gray-300 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Close legal modal"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2 text-xs text-[#5DAD59] font-semibold mb-1">
            <ShieldCheck className="w-4 h-4 text-[#36A333]" />
            <span>Legal Documentation</span>
          </div>
          <h3 className="text-xl font-bold font-['Manrope']">
            {isPrivacy ? 'Privacy Policy' : 'Terms of Use'}
          </h3>
          <p className="text-teal-200 text-xs mt-1">Balanced Books &bull; Founded 2017 &bull; Laredo, TX</p>
        </div>

        <div className="p-6 space-y-4 max-h-[60vh] overflow-y-auto text-xs sm:text-sm text-gray-700 leading-relaxed">
          {isPrivacy ? (
            <>
              <p>
                <strong>Effective Date:</strong> January 1, 2024 (Updated for Balanced Books)
              </p>
              <h4 className="font-bold text-[#05596A] text-sm pt-2">1. Information We Collect</h4>
              <p>
                Balanced Books collects information provided directly by clients and prospective clients, including contact details (name, business name, email address, phone number) and details related to their bookkeeping, cloud accounting, or QuickBooks Online inquiries.
              </p>
              <h4 className="font-bold text-[#05596A] text-sm pt-2">2. How We Use Information</h4>
              <p>
                We use collected information solely to evaluate bookkeeping needs, respond to inquiries, schedule consultations, and deliver contracted bookkeeping and fractional controller services. We do not sell or rent personal or company information to third-party marketers.
              </p>
              <h4 className="font-bold text-[#05596A] text-sm pt-2">3. Confidentiality &amp; Data Security</h4>
              <p>
                Financial data is treated with strict confidentiality. We apply industry-standard security protocols and collaborate through secure cloud-based financial platforms, including QuickBooks Online.
              </p>
              <h4 className="font-bold text-[#05596A] text-sm pt-2">4. Contact Us</h4>
              <p>
                For privacy inquiries, contact us at{' '}
                <a href="mailto:support@BalancedBooks.com" className="text-[#05596A] underline">
                  support@BalancedBooks.com
                </a>.
              </p>
            </>
          ) : (
            <>
              <p>
                <strong>Effective Date:</strong> January 1, 2024
              </p>
              <h4 className="font-bold text-[#05596A] text-sm pt-2">1. Nature of Services</h4>
              <p>
                Balanced Books is an outsourced bookkeeping and financial operations support firm. Balanced Books is not a Certified Public Accounting (CPA) firm and does not provide CPA attest services, formal audits, tax return preparation, or tax legal representation.
              </p>
              <h4 className="font-bold text-[#05596A] text-sm pt-2">2. Educational Content Disclaimer</h4>
              <p>
                All website materials, insights, and resources are provided for general educational purposes and do not constitute formal tax, legal, or investment advisory services.
              </p>
              <h4 className="font-bold text-[#05596A] text-sm pt-2">3. Intellectual Property</h4>
              <p>
                All logos, trademarks, and content on this website are the property of Balanced Books or their respective owners. QuickBooks Online is a trademark of Intuit Inc. Balanced Books is an independent Certified ProAdvisor.
              </p>
              <h4 className="font-bold text-[#05596A] text-sm pt-2">4. Governing Law</h4>
              <p>
                These terms are governed by the laws of the State of Texas, United States.
              </p>
            </>
          )}
        </div>

        <div className="bg-[#F5F8F7] p-4 border-t border-gray-100 text-right">
          <button
            onClick={onClose}
            className="bg-[#05596A] hover:bg-[#123F49] text-white px-5 py-2 rounded-lg text-xs font-semibold cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
