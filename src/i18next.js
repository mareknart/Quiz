import i18next from "i18next";
import plTranslation from "./translations/pl/translations.json";
import plCountries from "./translations/pl/countries.json"
import enTranslation from "./translations/en/translations.json";
import enCountries from './translations/en/countries.json'
import { initReactI18next } from "react-i18next";

i18next.use(initReactI18next).init({
  fallbackLng: "pl",
  resources: {
    pl: {
      translation: plTranslation,
      countries: plCountries,
    },
    en: {
      translation: enTranslation,
      countries: enCountries
    },
  },
  ns:["translation"],
  defaultNS: "translation"
});

export default i18next;
