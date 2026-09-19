import React, { useState } from 'react';
import { ContactFormData, ServiceCategory } from '../types';
import { CheckCircle2, AlertCircle, Send, Clock, Shield } from 'lucide-react';

interface ContactFormProps {
  defaultService?: ServiceCategory;
  onSuccess?: () => void;
  isModal?: boolean;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  defaultService = 'Bookkeeping & Month-End Close',
  onSuccess,
  isModal = false,
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    businessName: '',
    email: '',
    phone: '',
    serviceInterest: defaultService,
    message: '',
    consentAgreed: false,
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = (): boolean => {
    const errs: Partial<Record<keyof ContactFormData, string>> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Please enter your full name.';
    if (!formData.businessName.trim()) errs.businessName = 'Please enter your business or company name.';
    if (!formData.email.trim()) {
      errs.email = 'Please enter your work email.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Please enter your contact phone number.';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please share a brief note about your bookkeeping or accounting needs.';
    }
    if (!formData.consentAgreed) {
      errs.consentAgreed = 'Please confirm that you agree to be contacted regarding your inquiry.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate real-world form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      if (onSuccess) onSuccess();
    }, 600);
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl p-8 border border-teal-100 text-center space-y-4 shadow-sm">
        <div className="w-16 h-16 bg-[#36A333]/15 text-[#36A333] rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold text-[#05596A] font-['Manrope']">
          Thank You, {formData.fullName.split(' ')[0]}!
        </h3>
        <p className="text-gray-600 max-w-md mx-auto text-sm leading-relaxed">
          We have received your consultation inquiry for <span className="font-semibold text-gray-900">{formData.businessName}</span>.
          A Balanced Books specialist will review your details and reach out within 1 business day.
        </p>
        <div className="bg-[#F5F8F7] p-4 rounded-xl text-xs text-gray-500 max-w-sm mx-auto text-left space-y-1">
          <div><strong className="text-gray-700">Selected Service:</strong> {formData.serviceInterest}</div>
          <div><strong className="text-gray-700">Contact Email:</strong> {formData.email}</div>
          <div><strong className="text-gray-700">Response Window:</strong> Monday – Friday, 8:00 AM – 5:00 PM CST</div>
        </div>
        <button
          onClick={() => {
            setSubmitted(false);
            setFormData({
              fullName: '',
              businessName: '',
              email: '',
              phone: '',
              serviceInterest: 'Bookkeeping & Month-End Close',
              message: '',
              consentAgreed: false,
            });
          }}
          className="text-xs text-[#05596A] hover:text-[#36A333] font-semibold underline underline-offset-4 pt-2"
        >
          Submit another message or update details
        </button>
      </div>
    );
  }

  return (
    <form
      id="balanced-books-contact-form"
      onSubmit={handleSubmit}
      noValidate
      className={`space-y-4 ${isModal ? '' : 'bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-200'}`}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Full Name */}
        <div>
          <label htmlFor="contact-fullname" className="block text-xs font-semibold text-gray-700 mb-1">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="contact-fullname"
            type="text"
            placeholder="Jane Doe"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-gray-900 focus:outline-hidden transition-colors ${
              errors.fullName
                ? 'border-red-400 bg-red-50/20 focus:border-red-500'
                : 'border-gray-300 focus:border-[#05596A] focus:ring-1 focus:ring-[#05596A]'
            }`}
          />
          {errors.fullName && (
            <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              {errors.fullName}
            </p>
          )}
        </div>

        {/* Business Name */}
        <div>
          <label htmlFor="contact-bizname" className="block text-xs font-semibold text-gray-700 mb-1">
            Business / Company Name <span className="text-red-500">*</span>
          </label>
          <input
            id="contact-bizname"
            type="text"
            placeholder="Acme Growth Co."
            value={formData.businessName}
            onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
            className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-gray-900 focus:outline-hidden transition-colors ${
              errors.businessName
                ? 'border-red-400 bg-red-50/20 focus:border-red-500'
                : 'border-gray-300 focus:border-[#05596A] focus:ring-1 focus:ring-[#05596A]'
            }`}
          />
          {errors.businessName && (
            <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              {errors.businessName}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Work Email */}
        <div>
          <label htmlFor="contact-email" className="block text-xs font-semibold text-gray-700 mb-1">
            Work Email <span className="text-red-500">*</span>
          </label>
          <input
            id="contact-email"
            type="email"
            placeholder="jane@company.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-gray-900 focus:outline-hidden transition-colors ${
              errors.email
                ? 'border-red-400 bg-red-50/20 focus:border-red-500'
                : 'border-gray-300 focus:border-[#05596A] focus:ring-1 focus:ring-[#05596A]'
            }`}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              {errors.email}
            </p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="contact-phone" className="block text-xs font-semibold text-gray-700 mb-1">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            id="contact-phone"
            type="tel"
            placeholder="+1 (555) 000-0000"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-gray-900 focus:outline-hidden transition-colors ${
              errors.phone
                ? 'border-red-400 bg-red-50/20 focus:border-red-500'
                : 'border-gray-300 focus:border-[#05596A] focus:ring-1 focus:ring-[#05596A]'
            }`}
          />
          {errors.phone && (
            <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              {errors.phone}
            </p>
          )}
        </div>
      </div>

      {/* Service of Interest */}
      <div>
        <label htmlFor="contact-service" className="block text-xs font-semibold text-gray-700 mb-1">
          Service of Interest <span className="text-red-500">*</span>
        </label>
        <select
          id="contact-service"
          value={formData.serviceInterest}
          onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value as ServiceCategory })}
          className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-sm text-gray-900 focus:outline-hidden focus:border-[#05596A] focus:ring-1 focus:ring-[#05596A] bg-white transition-colors"
        >
          <option value="Bookkeeping & Month-End Close">Bookkeeping &amp; Month-End Close</option>
          <option value="Fractional Controller Services">Fractional Controller Services</option>
          <option value="QuickBooks Online Cleanup & Support">QuickBooks Online Cleanup &amp; Support</option>
          <option value="General Bookkeeping Support">General Bookkeeping Support</option>
          <option value="Not Sure Yet">Not Sure Yet (Let's Discuss)</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="contact-message" className="block text-xs font-semibold text-gray-700 mb-1">
          Tell Us About Your Bookkeeping Needs <span className="text-red-500">*</span>
        </label>
        <textarea
          id="contact-message"
          rows={3}
          placeholder="Please share your current accounting setup (e.g. QuickBooks Online), recent transaction frequency, or whether you need cleanup vs recurring bookkeeping..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-gray-900 focus:outline-hidden transition-colors ${
            errors.message
              ? 'border-red-400 bg-red-50/20 focus:border-red-500'
              : 'border-gray-300 focus:border-[#05596A] focus:ring-1 focus:ring-[#05596A]'
          }`}
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
            <AlertCircle className="w-3 h-3" />
            {errors.message}
          </p>
        )}
      </div>

      {/* Consent Checkbox */}
      <div className="pt-1">
        <label className="flex items-start gap-2.5 cursor-pointer text-xs text-gray-600">
          <input
            id="contact-consent-checkbox"
            type="checkbox"
            checked={formData.consentAgreed}
            onChange={(e) => setFormData({ ...formData, consentAgreed: e.target.checked })}
            className="mt-0.5 h-4 w-4 rounded-sm border-gray-300 text-[#05596A] focus:ring-[#05596A]"
          />
          <span>
            I agree that Balanced Books may contact me regarding this inquiry. We respect your privacy and never sell client information.
          </span>
        </label>
        {errors.consentAgreed && (
          <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
            <AlertCircle className="w-3 h-3" />
            {errors.consentAgreed}
          </p>
        )}
      </div>

      {/* Submit button */}
      <button
        id="contact-submit-btn"
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[#05596A] hover:bg-[#123F49] text-white py-3 px-6 rounded-lg text-sm font-semibold transition-all shadow-xs hover:shadow-md active:scale-98 flex items-center justify-center gap-2 border-b-2 border-[#36A333] disabled:opacity-70 cursor-pointer"
      >
        {isSubmitting ? (
          <>
            <Clock className="w-4 h-4 animate-spin text-[#36A333]" />
            <span>Submitting Request...</span>
          </>
        ) : (
          <>
            <Send className="w-4 h-4 text-[#36A333]" />
            <span>Send Consultation Request</span>
          </>
        )}
      </button>

      <div className="flex items-center justify-center gap-1.5 text-[11px] text-gray-500 pt-1 text-center">
        <Shield className="w-3.5 h-3.5 text-[#36A333]" />
        <span>Confidential &bull; No obligation &bull; Direct consultation with bookkeeping specialist</span>
      </div>
    </form>
  );
};
