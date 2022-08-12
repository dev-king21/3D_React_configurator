import * as React from "react";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Gallery from "./Gallery";
import AppContext from "../context/AppContext";
import { steps } from "../utils/constant";

export default function Setting() {
  const { activeStep, setActiveStep, subStep, setSubStep } =
    React.useContext(AppContext);

  const handleNext = () => {
    if (activeStep === 4) return;
    if (
      steps[activeStep].detail === undefined ||
      steps[activeStep].detail.length === subStep + 1
    ) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setSubStep(0);
    } else {
      setSubStep((prevSubStep) => prevSubStep + 1);
    }
  };

  const handleBack = () => {
    if (subStep === 0) {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
      setSubStep(steps[activeStep - 1].detail.length - 1);
    } else {
      setSubStep((prevSubStep) => prevSubStep - 1);
    }
  };

  return (
    <div className="content w-100">
      <Gallery />
      <Divider />
      <div className="prev-next-btn">
        <Button
          variant="contained"
          color="primary"
          size="medium"
          className="prev-btn step-btn"
          onClick={handleBack}
          disabled={activeStep === 0 && subStep === 0}
        >
          Previous
        </Button>
        <Button
          variant="contained"
          color="primary"
          size="medium"
          className="next-btn step-btn"
          onClick={handleNext}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
