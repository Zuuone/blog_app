import { initReactI18next } from "react-i18next";
import i18n from "i18next";
import titleEn from "@/i18n/en/header/header.json";
import titleKa from "@/i18n/ka/header/header.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: titleEn,
    },
    ka: {
      translation: titleKa,
    },
  },
  lng: "en",
  fallbackLng: "en",

  interpolation: {
    escapeValue: false,
  },
});
