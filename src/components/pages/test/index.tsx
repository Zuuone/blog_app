import i18next from "i18next";
import { useTranslation } from "react-i18next";

const Index = () => {
  const { t } = useTranslation();
  console.log(t("title-translation"));

  const handleChangeLanguage = (lang: string) => {
    i18next.changeLanguage(lang);
  };

  return (
    <div>
      <button onClick={() => handleChangeLanguage("ka")}> Geo </button>
      <button onClick={() => handleChangeLanguage("en")}> Eng </button>
      {/* <button onClick={() => changeColor("en")}> dark </button>
      <button onClick={() => changeColor("en")}> light </button> */}

      <div>{t("title-translation")}</div>
    </div>
  );
};

export default Index;
