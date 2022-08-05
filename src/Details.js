import * as React from 'react';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Gallery from './Gallery';
import Grid from '@mui/material/Grid';
import AppContext from './context/AppContext';
import steps from './config';

export default function Content() {

    const {
        activeStep,
        setActiveStep,
        subStep,
        setSubStep,
      } = React.useContext(AppContext);
    

    const handleNext = () => {        
        if (steps[activeStep].detail === undefined || steps[activeStep].detail.length === subStep + 1) {
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
            setSubStep(0);
        }
        else {
            setSubStep((prevSubStep) => prevSubStep + 1);
        }
      };
    
      const handleBack = () => {
        if (subStep === 0) {
            setActiveStep((prevActiveStep) => prevActiveStep - 1);
            setSubStep(steps[activeStep-1].detail.length - 1);
        }
        else {
            setSubStep((prevSubStep) => prevSubStep - 1);
        }
      };
    
    return (
    <div class="content">
        <Gallery />
        <Divider />
        <div className="prev-next" container spacing={2} columns={16}>
            <Grid container spacing={2} columns={16}>
                <Grid item xs={8}>
                    <Button variant="contained" color="primary" size="medium" className="prev-btn" onClick={handleBack} disabled={(activeStep === 0 && subStep === 0)}>
                    Previous
                    </Button>
                </Grid>
                <Grid item xs={8}>
                    <Button variant="contained" color="primary" size="medium" className="next-btn" onClick={handleNext}>
                    Next
                    </Button>
                </Grid>
            </Grid>
        </div>
    </div>
  );
}
