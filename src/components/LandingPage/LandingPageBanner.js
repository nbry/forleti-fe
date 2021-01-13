import React, { useEffect, useState } from "react";
import DefaultBanner from "./BannerContent/DefaultBanner";
import AuthForm from "../AuthForm/AuthForm";

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
    <>
      {bannerContent === "default" ? (
        <DefaultBanner checked={checked} changeContent={changeContent} />
      ) : (
        <AuthForm
          authForm={bannerContent}
          checked={checked}
          changeContent={changeContent}
        />
      )}
    </>
  );
}

export default LandingPageBanner;
