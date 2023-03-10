import i18next from "i18next";
import plTranslation from "./translations/pl/translations.json";
import plCountries from "./translations/pl/countries.json";
import plContinents from './translations/pl/continents.json'
import enTranslation from "./translations/en/translations.json";
import enCountries from './translations/en/countries.json'
import enContinents from './translations/en/continents.json'
import { initReactI18next } from "react-i18next";

i18next.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  fallbackLng: "pl",
  resources: {
    pl: {
      translation: plTranslation,
      countries: plCountries,
      continents: plContinents
    },
    en: {
      translation: enTranslation,
      countries: enCountries,
      continents: enContinents
    },
  },
  ns:["translation"],
  defaultNS: "translation"
});

export default i18next;
