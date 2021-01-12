import React, { useEffect, useState } from "react";
import { Collapse } from "@material-ui/core";
import DefaultBanner from "./BannerContent/DefaultBanner";
import AuthForm from "../AuthForm/AuthForm";

function LandingPageBanner() {
  const [checked, setChecked] = useState(false);
  const [bannerContent, setBannerContent] = useState("default");

  return (
    <>
      {bannerContent === "default" ? (
        <DefaultBanner
          checked={checked}
          setChecked={setChecked}
          setBannerContent={setBannerContent}
        />
      ) : (
        <AuthForm
          authForm={bannerContent}
          checked={checked}
          setChecked={setChecked}
          setBannerContent={setBannerContent}
        />
      )}
    </>
  );
}

export default LandingPageBanner;
