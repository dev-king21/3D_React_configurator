import * as React from 'react';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Gallery from './Tab';
import Grid from '@mui/material/Grid';
import AppContext from './context/AppContext';

export default function Content() {

    const {
        activeStep,
        setActiveStep,
      } = React.useContext(AppContext);
    

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        console.log(activeStep);
      };
    
      const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
        console.log(activeStep);
      };
    
    return (
    <div class="content">
        <Gallery />
        <Divider />
        <div className="prev-next" container spacing={2} columns={16}>
            <Grid container spacing={2} columns={16}>
                <Grid item xs={8}>
                    <Button variant="contained" size="medium" className="prev-btn" onClick={handleBack}>
                    Previous
                    </Button>
                </Grid>
                <Grid item xs={8}>
                    <Button variant="contained" size="medium" className="next-btn" onClick={handleNext}>
                    Next
                    </Button>
                </Grid>
            </Grid>
        </div>
    </div>
  );
}
