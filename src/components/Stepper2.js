import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import AppContext from "../context/AppContext";
import { steps } from "../utils/constant";
import { BsChevronCompactRight } from "react-icons/bs";

export default function Stepper2() {
  const { activeStep, setSidebar } =
    React.useContext(AppContext);

  const sideShow = () => {
    setSidebar(true);
  }

  return (
    <Box sx={{ maxWidth: 400, position: 'relative' }} className="p-3">
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              className="labels"
            >
            </StepLabel>
          </Step>
        ))}
      </Stepper>
      <div className="toggle-sidebar" onClick={sideShow}>
        <BsChevronCompactRight />
      </div>
    </Box>
  );
}
