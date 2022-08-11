import * as React from "react";
import Divider from "@mui/material/Divider";
import { steps } from "../utils/constant";
import AppContext from "../context/AppContext";
import Dimension from "./Dimension";
import Columns from "./Columns";
import DesignStyles from "./DesignStyles";
import Colors from "./Colors";
import SideInfills from "./SideInfills";
import Lightning from "./Lightning";
import ComfortDesign from "./ComfortDesign";
import BladeRotation from "./BladeRotation";

export default function Gallery() {
  const { activeStep, subStep } = React.useContext(AppContext);

  const render = (activeStep, subStep) => {
    const currentStep = steps[activeStep].detail[subStep];
    switch (currentStep) {
      default:
        return null;
      case "Dimensions":
        return <Dimension />;
      case "Columns":
        return <Columns />;
      case "Design styles":
        return <DesignStyles />;
      case "Colors":
        return <Colors />;
      case "Side infills":
        return <SideInfills />;
      case "Lightning":
        return <Lightning />;
      case "Comfort&Design":
        return <ComfortDesign />;
      case "Blade rotation":
        return <BladeRotation />;
      case "Overview":
        return <Dimension />;
    }
  };

  return (
    <div className="p-3">
      <div className="content-title mb-4">
        <h2>{activeStep < 5 && steps[activeStep].detail[subStep]}</h2>
        <h6>{activeStep < 5 && steps[activeStep].description[subStep]}</h6>
      </div>
      <Divider className="mb-3" />
      {render(activeStep, subStep)}
    </div>
  );
}
