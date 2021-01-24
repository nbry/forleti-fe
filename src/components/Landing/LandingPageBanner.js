import React, { useEffect, useState } from "react";
import DefaultBanner from "../BannerContent/DefaultBanner";
import AuthForm from "../AuthForm/AuthForm";
import LandingPageBannerContext from "./LandingPageBannerContext";
import { useHistory } from "react-router-dom";

function LandingPageBanner({ setBanner }) {
  const [checked, setChecked] = useState(false);
  const [bannerContent, setBannerContent] = useState(setBanner);
  const history = useHistory();

  const changeContent = (content) => {
    setChecked(false);
    setBannerContent(content);
    history.push(content === "default" ? "/" : `/${content}`);
  };

  useEffect(() => {
    setChecked(true);
  }, [checked]);

  return (
    <LandingPageBannerContext.Provider
      value={{
        checked,
        setChecked,
        bannerContent,
        setBannerContent,
        changeContent,
      }}>
      {bannerContent === "default" ? <DefaultBanner /> : <AuthForm />}
    </LandingPageBannerContext.Provider>
  );
}

export default LandingPageBanner;
