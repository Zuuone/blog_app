import { initReactI18next } from "react-i18next";
import i18n from "i18next";
import titleEn from "@/i18n/en/header/header.json";
import titleKa from "@/i18n/ka/header/header.json";
import signUpEn from "@/i18n/en/signUp/signUp.json";
import signUpKa from "@/i18n/ka/signUp/signUp.json";
import profile_info_ka from "@/i18n/ka/profile_info/profile_info.json";
import profile_info_en from "@/i18n/en/profile_info/profile_info.json";

// import titleKa from "@/i18n/ka/signUp/signUp.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: { ...titleEn, ...signUpEn, ...profile_info_en },
    },
    ka: {
      translation: { ...titleKa, ...signUpKa, ...profile_info_ka },
    },
  },
  lng: "ka",
  fallbackLng: "en",

  interpolation: {
    escapeValue: false,
  },
});
