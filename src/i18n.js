import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';  // Para cargar los archivos JSON

i18n
  .use(Backend)  // Cargar traducciones desde los archivos JSON
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'es',
    backend: {
      loadPath: '/locales/{{lng}}/translation.json'  // Ruta de los archivos de traducción
    },
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;


