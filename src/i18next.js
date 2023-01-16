import i18next from "i18next";
import plTranslation from "./data/pl/translations.json";
import enTranslation from "./data/en/translations.json";
import { initReactI18next } from "react-i18next";

i18next.use(initReactI18next).init({
  fallbackLng: "pl",
  resources: {
    pl: {
      translation: plTranslation,
    },
    en: {
      translation: enTranslation,
    },
  },
});

export default i18next;
