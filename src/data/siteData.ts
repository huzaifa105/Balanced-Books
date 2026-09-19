import { FAQItem, ResourceArticle } from '../types';

export const COMPANY_INFO = {
  name: 'Balanced Books',
  foundedYear: 2017,
  location: 'Laredo, Texas, United States',
  email: 'support@BalancedBooks.com',
  phone: '+1 (956) 555-0100',
  phoneNote: 'Concept placeholder demo number. Easily updated prior to production deployment.',
  positioning: 'Modern Outsourced Bookkeeping and Financial Operations Partner',
  tagline: 'Bookkeeping Built for Better Business Decisions.',
  mission:
    'Helping clients make better-informed business decisions while embracing online solutions that automate workflows, streamline processes, and support stronger business operations.',
  proAdvisorStatus: 'Certified ProAdvisor Specializing in QuickBooks Online',
  clientGeographies: [
    { city: 'Seattle', state: 'Washington', role: 'Client Location Example' },
    { city: 'San Francisco', state: 'California', role: 'Client Location Example' },
    { city: 'Miami', state: 'Florida', role: 'Client Location Example' },
    { city: 'Dallas', state: 'Texas', role: 'Client Location Example' },
    { city: 'San Antonio', state: 'Texas', role: 'Client Location Example' },
  ],
};

export const HOME_FAQS: FAQItem[] = [
  {
    question: 'What types of businesses does Balanced Books work with?',
    answer:
      'Balanced Books primarily supports startup founders, small businesses, and growing midsize companies that need reliable, organized bookkeeping and structured financial operations support.',
  },
  {
    question: 'Do you work with businesses outside Laredo?',
    answer:
      'Yes. Balanced Books operates through a cloud-based delivery model and works with clients across the United States, including businesses in cities such as Seattle, San Francisco, Miami, Dallas, and San Antonio.',
  },
  {
    question: 'Does Balanced Books work with QuickBooks Online?',
    answer:
      'Yes. Balanced Books is a Certified ProAdvisor specializing in QuickBooks Online, providing setup, cleanup, workflow assistance, and ongoing bookkeeping on the platform.',
  },
  {
    question: 'Can you help clean up existing QuickBooks records?',
    answer:
      'Yes. QuickBooks Online cleanup is one of our primary core services. We help businesses reorganize cluttered records and establish clean, reliable bookkeeping foundations.',
  },
  {
    question: 'Do you offer fractional controller support?',
    answer:
      'Yes. For growing businesses needing higher-level accounting oversight, structured close processes, and clearer visibility into financial information, Balanced Books provides fractional controller services.',
  },
  {
    question: 'Does Balanced Books prepare or file income taxes?',
    answer:
      'No. Balanced Books provides bookkeeping, month-end close, and fractional controller support. We organize your financial records so that they are clean and tax-return ready for your designated tax preparer or CPA firm, but we do not prepare or file tax returns.',
  },
];

export const BOOKKEEPING_FAQS: FAQItem[] = [
  {
    question: 'What does month-end close involve?',
    answer:
      'Our month-end close process involves reconciling all active bank, credit card, and loan accounts, matching merchant fees and deposits, resolving uncategorized transactions, and verifying that your balance sheet and profit & loss statements accurately reflect monthly operations.',
  },
  {
    question: 'How quickly are monthly reports delivered?',
    answer:
      'Depending on document submission timeliness and bank statement availability, we typically deliver reconciled financial statements within 10 to 15 business days following the close of the calendar month.',
  },
  {
    question: 'How do we send you receipts, invoices, and documents?',
    answer:
      'We use secure cloud-based workflows. Documents can be uploaded via secure digital portals, shared cloud folders, or directly through QuickBooks Online receipts functionality, eliminating paper clutter.',
  },
  {
    question: 'What if our books are several months behind?',
    answer:
      'That is very common for growing businesses. We begin with a catch-up or cleanup phase to bring previous months or quarters up to date before transitioning you into a smooth, ongoing monthly close cadence.',
  },
  {
    question: 'Do you file our company tax returns?',
    answer:
      'No. Balanced Books is an outsourced bookkeeping service, not a CPA firm. We deliver "tax-return-ready" books, meaning your records are reconciled, organized, and properly classified so your CPA or tax preparer can file your return efficiently without costly forensic cleanup.',
  },
];

export const CONTROLLER_FAQS: FAQItem[] = [
  {
    question: 'What is the difference between a bookkeeper and a fractional controller?',
    answer:
      'Bookkeeping focuses on recording day-to-day transactions, paying bills, invoicing, and reconciling accounts. A fractional controller provides higher-level oversight: supervising the close, managing complex accruals and revenue recognition, establishing internal controls, and helping leadership interpret financial reports for operational decisions.',
  },
  {
    question: 'How many hours a month does fractional controller support usually require?',
    answer:
      'Controller engagements are customized to your stage and complexity. Some growing businesses need 10 to 20 hours per month for close review and management reporting, while rapidly scaling firms may require ongoing weekly advisory and oversight.',
  },
  {
    question: 'Can you work with our existing internal bookkeeper or team?',
    answer:
      'Yes. We frequently collaborate with internal staff or office managers. We provide the higher-level accounting guidance, close review, and technical oversight while your internal team continues day-to-day transaction handling.',
  },
  {
    question: 'How do controller services help us prepare for financing or CPA review?',
    answer:
      'Lenders and investors expect balance sheets with properly supported schedules for assets, liabilities, and accruals. A controller ensures your numbers adhere to standard GAAP principles and answers sophisticated accounting inquiries directly.',
  },
  {
    question: 'Is fractional controller support suitable for a business under $5M revenue?',
    answer:
      'Absolutely. In fact, companies between $1M and $10M revenue benefit immensely because they have reached a level of accounting complexity that exceeds standard bookkeeping, yet do not require the $175,000+ annual salary of a full-time in-house corporate controller.',
  },
];

export const QUICKBOOKS_FAQS: FAQItem[] = [
  {
    question: 'What does QuickBooks Online cleanup include?',
    answer:
      'Cleanup involves conducting a comprehensive diagnostic review, reconciling historical bank and credit card accounts that have fallen behind, restructuring the chart of accounts, clearing out uncategorized accounts, removing duplicate entries, and verifying that beginning balances tie out accurately.',
  },
  {
    question: 'How long does a QuickBooks cleanup project typically take?',
    answer:
      'Most cleanup projects take between 2 to 4 weeks, depending on the number of months or years of backlog, transaction volume, and the condition of bank statements and documentation.',
  },
  {
    question: 'Why are my bank balances in QuickBooks different from my bank statement?',
    answer:
      'This discrepancy is usually caused by duplicate bank feed downloads, unrecorded manual checks or transfers, deleted transactions, or unreconciled periods. Our Certified ProAdvisor team identifies the exact disconnect and reconciles the register to match statement reality.',
  },
  {
    question: 'Can you train our internal staff after cleaning up our QuickBooks file?',
    answer:
      'Yes. Once the file is clean and organized, we provide workflow guidance and best-practice rules so your team knows how to categorize routine transactions without recreating past clutter.',
  },
  {
    question: 'Will our daily business operations be disrupted during cleanup?',
    answer:
      'No. Because QuickBooks Online is cloud-based, we perform our forensic review and adjustment entries in the background while you continue issuing customer invoices and running your daily business as usual.',
  },
];

export const RESOURCE_ARTICLES: ResourceArticle[] = [
  {
    id: 'tax-return-ready-books-meaning',
    title: 'What "Tax-Return-Ready" Books Really Mean (and Why Your CPA Will Thank You)',
    summary:
      'Understanding what constitutes clean, tax-return-ready records and how proper year-round bookkeeping saves thousands in year-end CPA cleanup fees.',
    category: 'Bookkeeping Basics',
    readTime: '5 min read',
    keyTakeaways: [
      'Tax-return-ready means all bank accounts are fully reconciled through December 31st with zero discrepancy.',
      'A clean chart of accounts aligns directly with tax schedule categories (Form 1120-S, 1065, or Schedule C).',
      'Bookkeeping firms do not replace CPAs; rather, they provide the clean financial foundation that allows CPAs to file accurately.',
    ],
    content: [
      'Every spring, thousands of business owners experience sticker shock when their CPA hands them an unexpected bill for "accounting adjustments and cleanup" before they can even file taxes. This occurs when business books are handed over in an unreconciled, disorganized state.',
      'When Balanced Books prepares "tax-return-ready" books, it means every bank, credit card, and loan account has been mathematically reconciled to third-party statements through the final day of the fiscal year. It means personal expenses have been isolated, depreciation schedules match historical returns, and there are zero dollars sitting in mysterious "Uncategorized Expense" or "Suspense" buckets.',
      'It is crucial to understand that Balanced Books is an outsourced bookkeeping firm, not a CPA firm. We do not calculate tax liability, devise tax shelter strategies, or file federal tax returns. What we do is deliver a pristine, fully substantiated trial balance and supporting balance sheet schedules so your CPA can complete your tax returns efficiently, accurately, and without costly diagnostic delays.',
    ],
  },
  {
    id: 'month-end-close-checklist',
    title: 'The Month-End Close Checklist Every Growing Business Needs',
    summary:
      'A disciplined, step-by-step framework to ensure monthly financial numbers reflect reality and never fall behind schedule.',
    category: 'Financial Operations',
    readTime: '6 min read',
    keyTakeaways: [
      'A disciplined close prevents small bookkeeping discrepancies from compounding into year-end crises.',
      'Reconciling the balance sheet is just as critical as checking profit and loss performance.',
      'Consistency in closing cadence provides leadership with reliable operational metrics by the 10th to 15th of each month.',
    ],
    content: [
      'A reliable month-end close is the heartbeat of healthy financial operations. Without a structured monthly routine, transaction classification drifts, forgotten vendor subscriptions pile up, and leadership operates on outdated intuition rather than verified facts.',
      'A professional month-end close begins with transaction completion: verifying that all customer invoices sent during the period have been posted and that all vendor bills received have been entered. Next, every active bank feed is matched, followed by rigorous account reconciliation against official banking and credit card statements.',
      'The critical step that many internal teams miss is the balance sheet review. Verifying prepaid expense amortization, accrued payroll, loan principal versus interest allocations, and sales tax liabilities ensures that your bottom-line profit reflects true economic activity rather than artificial timing differences.',
      'At Balanced Books, we execute this disciplined timetable every month, delivering dependable financial reporting packages that empower leadership to make informed growth decisions.',
    ],
  },
  {
    id: 'signs-outgrown-basic-bookkeeping',
    title: '5 Signs Your Business Has Outgrown Basic Bookkeeping',
    summary:
      'How to recognize when simple cash-in/cash-out recording is no longer sufficient and your company requires fractional controller oversight.',
    category: 'Growth & Advisory',
    readTime: '5 min read',
    keyTakeaways: [
      'When your business model involves deferred revenue, inventory, or complex payroll, basic bookkeeping falls short.',
      'Leadership spending more than 5 hours per week answering accounting questions indicates an oversight deficit.',
      'Fractional controller support provides executive-level financial governance at a fraction of full-time compensation.',
    ],
    content: [
      'In the earliest days of a business, a simple bookkeeping setup that records expenses and tracks cash deposits is often sufficient. However, as revenue grows past $1M or transaction volume surges, standard data entry quickly reveals its limitations.',
      'The first sign of outgrowing basic bookkeeping is delayed visibility. If your books take 45 to 60 days to close, management cannot use financial statements to make time-sensitive operational choices. Second, if you offer annual SaaS subscriptions, customer retainers, or retain physical inventory, standard cash accounting creates wild, misleading swings in reported monthly profitability.',
      'Third, external stakeholders—including banks evaluating lines of credit or prospective equity investors—demand rigorous balance sheet schedules that entry-level bookkeepers simply are not trained to produce.',
      'Fractional controller services bridge this gap by introducing senior accounting supervision, close governance, and internal controls without committing the business to an executive six-figure overhead.',
    ],
  },
  {
    id: 'quickbooks-bank-feeds-ignored-errors',
    title: 'Why QuickBooks Online Bank Feeds Create More Errors When Ignored',
    summary:
      'Understanding the illusion of automated accounting and why unsupervised bank rules often lead to severe ledger distortion.',
    category: 'QuickBooks Online',
    readTime: '4 min read',
    keyTakeaways: [
      'Automated bank rules will blindly duplicate transactions if transfers and merchant payments are not matched correctly.',
      'QuickBooks Online is a powerful tool, but it requires trained human judgment to maintain data integrity.',
      'Ignoring the bank feed queue creates an inaccurate register balance that does not reflect actual cash position.',
    ],
    content: [
      'QuickBooks Online has revolutionized cloud bookkeeping through automated bank feeds, giving business owners the impression that bookkeeping happens automatically in the background. However, when left unattended, automated feeds frequently create more accounting errors than manual entry ever did.',
      'The most common pitfall occurs with automated rules. When a business transfers funds between a checking account and a savings account or pays off a credit card, an improper bank rule will often record both sides of the transfer as separate expenses and income, artificially inflating revenue and double-counting costs.',
      'Similarly, merchant processors like Stripe or Square deposit net amounts after deducting transaction fees. If the feed is accepted without splitting the gross revenue and merchant processing fee, gross sales are permanently understated on your tax returns.',
      'As a Certified ProAdvisor, Balanced Books manages bank feeds with disciplined matching workflows, ensuring that every automated download is validated against real-world documentation.',
    ],
  },
  {
    id: 'real-cost-of-neglected-bookkeeping',
    title: 'The Real Cost of Neglected Bookkeeping: Beyond the Late Fees',
    summary:
      'The hidden financial leaks, missed deductions, and missed strategic opportunities that occur when books are postponed.',
    category: 'Financial Operations',
    readTime: '5 min read',
    keyTakeaways: [
      'Neglected books obscure cash burn and prevent early detection of unprofitable customer accounts.',
      'Rushed year-end cleanups result in missed legitimate business expense write-offs due to forgotten receipts.',
      'Delayed financial records undermine credibility with lenders, investors, and prospective business acquirers.',
    ],
    content: [
      'When business leaders become overwhelmed, bookkeeping is often the first operational task pushed to the back burner. The justification is easy: "We will catch up on it next quarter." Yet the true cost of neglected bookkeeping stretches far beyond late filing penalties.',
      'The most immediate danger is operating with distorted cash visibility. Without current reconciliations, business owners often confuse cash in the bank with actual discretionary profit, failing to account for upcoming quarterly taxes, payroll liabilities, or delayed vendor invoices.',
      'Furthermore, when cleanups are rushed in February or March before tax deadlines, hundreds of legitimate business expenses are inevitably misclassified or omitted entirely because nobody remembers what a 10-month-old charge was for.',
      'Partnering with Balanced Books establishes continuous, uninterrupted bookkeeping that preserves every allowable tax deduction and protects executive peace of mind year-round.',
    ],
  },
  {
    id: 'fractional-controller-financial-visibility',
    title: 'How Fractional Controller Services Create Financial Visibility for Founders',
    summary:
      'Translating general ledger numbers into actionable operational intelligence that founders can use to guide company trajectory.',
    category: 'Growth & Advisory',
    readTime: '5 min read',
    keyTakeaways: [
      'A controller translates raw debits and credits into structured departmental margins and unit economics.',
      'Close supervision provides founders with confidence when presenting metrics to board members and investors.',
      'Fractional engagement scales flexibly as business transaction volume fluctuates.',
    ],
    content: [
      'Startup founders and growth-stage CEOs are constantly bombarded with raw financial data: bank alerts, credit card notices, and payroll confirmations. Yet having access to data is fundamentally different from having financial visibility.',
      'Fractional controller services provide the analytical layer that turns bookkeeping entries into meaningful business insights. A controller examines not just whether a bill was paid, but what percentage of total revenue that operational category represents compared to budget.',
      'They oversee the month-end closing process to ensure that revenue is matched to the exact period in which the service was performed, preventing misleading month-to-month margin spikes. They review balance sheet accounts to ensure that liabilities are fully recognized and assets are properly depreciated.',
      'For founders steering a company through rapid hiring, product launches, or capital expansion, fractional controller support provides the financial clarity necessary to lead with certainty.',
    ],
  },
];
