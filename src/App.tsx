import React, { useState, useEffect } from 'react';
import { PageRoute, ResourceArticle, ServiceCategory } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { ResourceReaderModal } from './components/ResourceReaderModal';
import { LegalModal } from './components/LegalModal';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesOverviewPage } from './pages/ServicesOverviewPage';
import { BookkeepingServicePage } from './pages/BookkeepingServicePage';
import { ControllerServicePage } from './pages/ControllerServicePage';
import { QuickBooksServicePage } from './pages/QuickBooksServicePage';
import { WhoWeHelpPage } from './pages/WhoWeHelpPage';
import { ResourcesPage } from './pages/ResourcesPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<PageRoute>('home');
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [consultationService, setConsultationService] = useState<ServiceCategory>(
    'Bookkeeping & Month-End Close'
  );
  const [selectedArticle, setSelectedArticle] = useState<ResourceArticle | null>(null);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);

  // Synchronize route with URL hash for navigation & sharing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageRoute;
      const validRoutes: PageRoute[] = [
        'home',
        'about',
        'services',
        'services-bookkeeping',
        'services-controller',
        'services-quickbooks',
        'who-we-help',
        'resources',
        'contact',
      ];
      if (validRoutes.includes(hash)) {
        setCurrentRoute(hash);
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleRouteChange = (route: PageRoute) => {
    setCurrentRoute(route);
    window.location.hash = route;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenConsultation = (service?: ServiceCategory) => {
    if (service) {
      setConsultationService(service);
    }
    setIsConsultationOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#182A30] antialiased selection:bg-[#05596A]/20 selection:text-[#05596A]">
      {/* Navigation Bar */}
      <Navbar
        currentRoute={currentRoute}
        onRouteChange={handleRouteChange}
        onOpenConsultation={() => handleOpenConsultation()}
      />

      {/* Main Page Content */}
      <main className="flex-1">
        {currentRoute === 'home' && (
          <HomePage
            onRouteChange={handleRouteChange}
            onOpenConsultation={() => handleOpenConsultation()}
          />
        )}

        {currentRoute === 'about' && (
          <AboutPage
            onRouteChange={handleRouteChange}
            onOpenConsultation={() => handleOpenConsultation()}
          />
        )}

        {currentRoute === 'services' && (
          <ServicesOverviewPage
            onRouteChange={handleRouteChange}
            onOpenConsultation={() => handleOpenConsultation()}
          />
        )}

        {currentRoute === 'services-bookkeeping' && (
          <BookkeepingServicePage
            onRouteChange={handleRouteChange}
            onOpenConsultation={() =>
              handleOpenConsultation('Bookkeeping & Month-End Close')
            }
          />
        )}

        {currentRoute === 'services-controller' && (
          <ControllerServicePage
            onRouteChange={handleRouteChange}
            onOpenConsultation={() =>
              handleOpenConsultation('Fractional Controller Services')
            }
          />
        )}

        {currentRoute === 'services-quickbooks' && (
          <QuickBooksServicePage
            onRouteChange={handleRouteChange}
            onOpenConsultation={() =>
              handleOpenConsultation('QuickBooks Online Cleanup & Support')
            }
          />
        )}

        {currentRoute === 'who-we-help' && (
          <WhoWeHelpPage
            onRouteChange={handleRouteChange}
            onOpenConsultation={() => handleOpenConsultation()}
          />
        )}

        {currentRoute === 'resources' && (
          <ResourcesPage
            onRouteChange={handleRouteChange}
            onOpenConsultation={() => handleOpenConsultation()}
            onSelectArticle={(article) => setSelectedArticle(article)}
          />
        )}

        {currentRoute === 'contact' && (
          <ContactPage onRouteChange={handleRouteChange} />
        )}
      </main>

      {/* Global Footer */}
      <Footer
        onRouteChange={handleRouteChange}
        onOpenConsultation={() => handleOpenConsultation()}
        onOpenPrivacy={() => setLegalModalType('privacy')}
        onOpenTerms={() => setLegalModalType('terms')}
      />

      {/* Interactive Consultation Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        defaultService={consultationService}
      />

      {/* Resource Article Reader Modal */}
      <ResourceReaderModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
        onOpenConsultation={() => {
          setSelectedArticle(null);
          setIsConsultationOpen(true);
        }}
      />

      {/* Legal Information Modal */}
      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}
