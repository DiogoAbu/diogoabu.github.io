import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-xhr-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    fallbackLng: "en",

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    },

    react: {
      useSuspense: false
    },

    backend: {
      // for all available options read the backend's repository readme file
      loadPath: "/locales/{{lng}}/{{ns}}.json"
    },

    detection: {
      // order and from where user language should be detected
      order: ["querystring", "localStorage", "subdomain"],

      // keys or params to lookup language from
      lookupQuerystring: "lang",
      lookupLocalStorage: "lang",
      lookupFromSubdomainIndex: 0,

      // cache user language on
      caches: ["localStorage"]
    }
  });

export default i18n;
