import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import AppContext from "../../context/AppContext";
import { steps } from "../../utils/constant";
import state from '../../state';

export default function VerticalLinearStepper() {
  const { activeStep, setActiveStep, subStep, setSubStep,  } =
    React.useContext(AppContext);

  // const handleNext = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep + 1);
  // };

  // const handleBack = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep - 1);
  // };

  const updateSubStep = (index) => {
    state.columns.editing = false;
    setSubStep(index);
  };

  const updateStep = (index) => {
    state.columns.editing = false;
    setActiveStep(index);
    setSubStep(0);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ maxWidth: 400 }} className="p-3">
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              className="labels"
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                updateStep(index);
              }}
            >
              <b className="step-label">{step.label}</b>
            </StepLabel>
            <StepContent>
              <Box sx={{ mb: 2 }}>
                <div>
                  {step.detail?.length && index < 4
                    ? step.detail.map((item, id) => {
                        return (
                          <Button
                            className="round-btn"
                            variant="contained"
                            sx={{
                              mt: 1,
                              mr: 1,
                              backgroundColor:
                                id === subStep
                                  ? "#6774a6 !important"
                                  : "transparent",
                            }}
                            onClick={(e) => {
                              e.stopPropagation();
                              e.preventDefault();
                              updateSubStep(id);
                            }}
                            key={id}
                          >
                            {item}
                          </Button>
                        );
                      })
                    : []}
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )}
    </Box>
  );
}
