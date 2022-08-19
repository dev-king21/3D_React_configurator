import * as React from "react";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Gallery from "./Gallery";
import AppContext from "../context/AppContext";
import { steps } from "../utils/constant";
import { useSnapshot } from 'valtio';
import state from '../state';
import { BsChevronCompactLeft, BsChevronCompactUp } from "react-icons/bs";

export default function Setting() {
  const { activeStep, setActiveStep, subStep, setSubStep, setSidebar } =
    React.useContext(AppContext);

  const snap = useSnapshot(state);

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

  const handlePrev = () => {
    if (subStep === 0) {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
      setSubStep(steps[activeStep - 1].detail.length - 1);
    } else {
      setSubStep((prevSubStep) => prevSubStep - 1);
    }
  };

  const handleBack = () => {
    state.columns.editing = false;
  }

  const sideHide = () => {
    setSidebar(false);
  }

  return (
    <div className="content w-100" sx={{ position: 'relative' }}>
      <div className="toggle-sidebar-2" onClick={sideHide}>
        {window.matchMedia('(min-width: 900px)').matches ? 
          <BsChevronCompactLeft />:<BsChevronCompactUp />  
        }
      </div>
      <Gallery />
      <Divider />
      {snap.columns.editing === false ?
        activeStep === 4 && subStep === 0?null:
        (
          <div className="prev-next-btn">
        <Button
          variant="contained"
          color="primary"
          size="medium"
          className="prev-btn step-btn"
          onClick={handlePrev}
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
        )
        :
        <div className="text-center prev-next-btn">
          <Button
            variant="contained"
            color="primary"
            size="medium"
            className="back-btn"
            onClick={handleBack}
          >
            Back to Columns
          </Button>
        </div>
      }
    </div>
  );
}
