import i18next from "i18next";
import { en, tr } from "./assets/language";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: en,
      },
      tr: {
        translation: tr,
      },
    },

    fallbackLng: "en",
    lng: "en",

    interpolation: {
      escapeValue: false,
    },
  });

export default i18next;
