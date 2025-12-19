import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translations
import translationEN from './en/translation.json';
import translationMR from './mr/translation.json';
import translationHI from './hi/translation.json';

// the translations
const resources = {
  en: {
    translation: translationEN
  },
  mr: {
    translation: translationMR
  },
  hi: {
    translation: translationHI
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'mr',
    debug: false,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

export default i18n;
