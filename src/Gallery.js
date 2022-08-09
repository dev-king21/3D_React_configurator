import * as React from 'react';
import Divider from '@mui/material/Divider';
import {steps} from './config/config';
import AppContext from './context/AppContext';
import Dimension from './Dimension';
import DesignStyles from './DesignStyles';
import Colors from './Colors';

export default function Gallery() {

    const {
        activeStep,
        subStep,
      } = React.useContext(AppContext);
    
    const render = (activeStep, subStep) => {
      const currentStep = steps[activeStep].detail[subStep];
      switch(currentStep) {
        case "Dimensions":
          return <Dimension />
        case "Columns":
          return <Dimension />
        case "Design styles":
          return <DesignStyles />
        case "Colors":
          return <Colors />
        case "Side infills":
          return <Dimension />
        case "Lightning":
          return <Dimension />
        case "Comfort&Design',":
          return <Dimension />
        case "Blade rotation":
          return <Dimension />
        case "Overview":
          return <Dimension />
      }
    }

    return (
    <div className="p-3">
        <div className="content-title mb-4">
            <h2>{activeStep < 5 && steps[activeStep].detail[subStep]}</h2>
            <h6 >{activeStep < 5 && steps[activeStep].description[subStep]}</h6>
        </div>
        <Divider />
        {render(activeStep, subStep)}
    </div>
  );
}

