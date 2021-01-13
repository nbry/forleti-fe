import React, { useEffect, useState } from "react";
import DefaultBanner from "./BannerContent/DefaultBanner";
import AuthForm from "./AuthForm/AuthForm";
import LandingPageBannerContext from "./LandingPageBannerContext";

function LandingPageBanner() {
  const [checked, setChecked] = useState(false);
  const [bannerContent, setBannerContent] = useState("default");

  const changeContent = (content) => {
    setChecked(false);
    setBannerContent(content);
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
      }}
    >
      {bannerContent === "default" ? <DefaultBanner /> : <AuthForm />}
    </LandingPageBannerContext.Provider>
  );
}

export default LandingPageBanner;
