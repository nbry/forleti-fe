import React, { useEffect, useState } from "react";
import { Collapse, Button } from "@material-ui/core";
import DefaultBanner from "./BannerContent/DefaultBanner";

function LandingPageBanner() {
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);

  return (
    <Collapse
      in={checked}
      {...(checked ? { timeout: 1000 } : {})}
      collapsedHeight={50}
    >
      <DefaultBanner />
    </Collapse>
  );
}

export default LandingPageBanner;
