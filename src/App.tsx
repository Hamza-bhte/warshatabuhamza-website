/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedServices } from './components/FeaturedServices';
import { ProjectPortfolio } from './components/ProjectPortfolio';
import { AboutUs } from './components/AboutUs';
import { ContactAndQuote } from './components/ContactAndQuote';
import { Footer } from './components/Footer';
import { QuickQuoteModal } from './components/QuickQuoteModal';
import { MessageCircle, AlertCircle, X } from 'lucide-react';
import { WORKSHOP_CONFIG } from './data/workshopData';
import {
  buildWhatsAppChatUrl,
  getWhatsAppLinkAttributes,
  handleWhatsAppClick,
  WHATSAPP_ERROR_EVENT,
  WHATSAPP_ERROR_MESSAGE_AR,
} from './utils/whatsapp';

const SECTION_SEO: Record<string, { title: string; description: string }> = {
  home: {
    title: 'Warshat Abu Hamza | Welding & Metal Fabrication',
    description:
      'Warshat Abu Hamza (ورشة أبو حمزة) is a local welding workshop offering custom iron gates, metal doors, window grills, steel railings, and metal fabrication in Hadda, Bahrah, Jumoom, Makkah, Saudi Arabia.',
  },
  services: {
    title: 'Workshop Services | Warshat Abu Hamza — Welding & Metal Fabrication',
    description:
      'Custom iron gates, metal doors, window security grills, steel railings, carport shades, and metal repair services in Hadda, Bahrah, and Jumoom, Makkah Region.',
  },
  gallery: {
    title: 'Workshop Gallery | Warshat Abu Hamza — Iron Gates, Grills & Metalwork',
    description:
      'Explore recent local welding workshop projects by Warshat Abu Hamza (ورشة أبو حمزة): villa iron gates, sliding steel doors, window grills, staircases, and shade frames.',
  },
  about: {
    title: 'About Us | Warshat Abu Hamza — Local Welding Workshop in Hadda & Bahrah',
    description:
      'Learn about Warshat Abu Hamza (ورشة أبو حمزة), your local welding and metal fabrication workshop serving Hadda, Bahrah, Jumoom, and the Makkah Region.',
  },
  contact: {
    title: 'Contact & Request a Quote | Warshat Abu Hamza (+966 58 276 9542)',
    description:
      'Contact Warshat Abu Hamza (ورشة أبو حمزة) via WhatsApp or phone at +966 58 276 9542 for custom iron gates, doors, window grills, and metal repair estimates.',
  },
};

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedServiceForQuote, setSelectedServiceForQuote] = useState('');
  const [whatsappError, setWhatsappError] = useState<string | null>(null);

  useEffect(() => {
    const syncSectionSeo = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      const seo = SECTION_SEO[hash] || SECTION_SEO.home;
      document.title = seo.title;
      const metaDesc = document.querySelector('meta[name="description"]:not([lang])');
      if (metaDesc) {
        metaDesc.setAttribute('content', seo.description);
      }
    };

    syncSectionSeo();
    window.addEventListener('hashchange', syncSectionSeo);
    return () => window.removeEventListener('hashchange', syncSectionSeo);
  }, []);

  useEffect(() => {
    let dismissTimer: number | undefined;
    const onWhatsAppError = (event: Event) => {
      const customEvent = event as CustomEvent<string>;
      setWhatsappError(customEvent.detail || WHATSAPP_ERROR_MESSAGE_AR);
      window.clearTimeout(dismissTimer);
      dismissTimer = window.setTimeout(() => setWhatsappError(null), 6000);
    };

    window.addEventListener(WHATSAPP_ERROR_EVENT, onWhatsAppError);
    return () => {
      window.removeEventListener(WHATSAPP_ERROR_EVENT, onWhatsAppError);
      window.clearTimeout(dismissTimer);
    };
  }, []);

  const handleOpenQuoteModal = (serviceName?: string) => {
    if (serviceName) {
      setSelectedServiceForQuote(serviceName);
    }
    setIsQuoteModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#101214] text-white flex flex-col font-sans selection:bg-[#F26A32] selection:text-white">
      {/* Top Navigation */}
      <Navbar onOpenQuoteModal={() => handleOpenQuoteModal()} />

      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* 2. Workshop Services & Quality Band */}
        <FeaturedServices onSelectServiceForQuote={(srv) => handleOpenQuoteModal(srv)} />

        {/* 3. Workshop Project Gallery */}
        <ProjectPortfolio onInquireAboutProject={(proj) => handleOpenQuoteModal(proj)} />

        {/* 4. About Us */}
        <AboutUs onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* 5. Contact & Request a Quote */}
        <ContactAndQuote initialService={selectedServiceForQuote} />
      </main>

      {/* 6. Footer */}
      <Footer />

      {/* Arabic-Only WhatsApp Fallback Error Banner (rendered only if opening fails) */}
      {whatsappError && (
        <div
          role="alert"
          dir="rtl"
          lang="ar"
          className="fixed bottom-20 right-5 left-5 sm:left-auto sm:max-w-sm z-50 bg-[#17191B] border border-[#F26A32] text-white px-4 py-3 rounded-xl shadow-2xl flex items-start gap-3"
        >
          <AlertCircle className="w-5 h-5 text-[#F26A32] shrink-0 mt-0.5" />
          <p className="text-xs leading-relaxed flex-1 text-[#F1F2F3] font-medium">
            {whatsappError}
          </p>
          <button
            type="button"
            onClick={() => setWhatsappError(null)}
            className="text-[#9BA1A6] hover:text-white p-0.5 shrink-0"
            aria-label="إغلاق"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Floating Bilingual WhatsApp Contact Button */}
      <aside aria-label="WhatsApp contact — التواصل عبر واتساب" className="fixed bottom-5 right-5 z-40">
        <a
          href={buildWhatsAppChatUrl()}
          {...getWhatsAppLinkAttributes()}
          onClick={(e) => handleWhatsAppClick(e, buildWhatsAppChatUrl())}
          className="flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2.5 rounded-full shadow-2xl shadow-emerald-950/60 transition-all hover:scale-105 active:scale-95 border border-emerald-400/40"
          title={`WhatsApp Warshat Abo Hamza (${WORKSHOP_CONFIG.phoneDisplay}) | واتساب ورشة أبو حمزة (${WORKSHOP_CONFIG.arabicPhoneDisplay})`}
        >
          <MessageCircle className="w-5 h-5 fill-current shrink-0" />
          <div className="flex flex-col leading-tight text-left">
            <span className="text-xs font-bold tracking-wide whitespace-nowrap">
              WhatsApp
            </span>
            <span dir="rtl" lang="ar" className="text-[11px] font-bold whitespace-nowrap">
              واتساب
            </span>
          </div>
        </a>
      </aside>

      {/* Request a Quote Modal */}
      <QuickQuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        preselectedService={selectedServiceForQuote}
      />
    </div>
  );
}
