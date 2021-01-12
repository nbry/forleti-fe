import React, { useEffect, useState } from "react";
import { Collapse } from "@material-ui/core";
import DefaultBanner from "./BannerContent/DefaultBanner";
import AuthForm from "../AuthForm/AuthForm";

function LandingPageBanner() {
  const [checked, setChecked] = useState(false);
  const [bannerContent, setBannerContent] = useState("default");

  useEffect(() => {
    setChecked(true);
  }, []);

  return (
    <>
      {bannerContent === "default" ? (
        <Collapse
          in={checked}
          {...(checked ? { timeout: 1000 } : {})}
          collapsedHeight={50}
        >
          <DefaultBanner setBannerContent={setBannerContent} />
        </Collapse>
      ) : (
        <AuthForm
          authForm={bannerContent}
          setBannerContent={setBannerContent}
        />
      )}
    </>
  );
}

export default LandingPageBanner;
