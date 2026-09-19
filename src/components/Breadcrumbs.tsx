import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { PageRoute } from '../types';

interface BreadcrumbsProps {
  items: { label: string; route?: PageRoute }[];
  onRouteChange: (route: PageRoute) => void;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, onRouteChange }) => {
  return (
    <nav aria-label="Breadcrumb" className="py-3 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <ol className="flex items-center space-x-2 text-xs text-gray-500 flex-wrap">
        <li>
          <button
            onClick={() => {
              onRouteChange('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-1 hover:text-[#05596A] transition-colors"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </button>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <React.Fragment key={index}>
              <li>
                <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
              </li>
              <li>
                {item.route && !isLast ? (
                  <button
                    onClick={() => {
                      onRouteChange(item.route!);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-[#05596A] transition-colors font-medium"
                  >
                    {item.label}
                  </button>
                ) : (
                  <span className="text-[#05596A] font-semibold">{item.label}</span>
                )}
              </li>
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
};
