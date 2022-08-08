import * as React from 'react';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Gallery from './Gallery';
import AppContext from './context/AppContext';
import steps from './config';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Setting() {

    const {
        activeStep,
        setActiveStep,
        subStep,
        setSubStep,
      } = React.useContext(AppContext);
    

    const handleNext = () => {        
        if (activeStep === 4) return;
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
            <Row>
                <Col xl={6} lg={6} md={6} xs={6}>
                    <Button variant="contained" color="primary" size="medium" className="prev-btn step-btn" onClick={handleBack} disabled={(activeStep === 0 && subStep === 0)}>
                    Previous
                    </Button>
                </Col>
                <Col xl={6} lg={6} md={6} xs={6}>
                    <Button variant="contained" color="primary" size="medium" className="next-btn step-btn" onClick={handleNext}>
                    Next
                    </Button>
                </Col>
            </Row>
        </div>
    </div>
  );
}
