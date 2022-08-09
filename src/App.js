import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Model } from "./Scene";
import VerticalLinearStepper from "./Stepper";
import Setting from "./Setting";
import "./App.css";
import AppContext from "./context/AppContext";
import Grid from "@mui/material/Grid";

function App() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [subStep, setSubStep] = React.useState(0);

  return (
    <AppContext.Provider
      value={{
        activeStep,
        setActiveStep,
        subStep,
        setSubStep,
      }}
    >
      <Grid container spacing={2}>
        <Grid item xl={2} lg={2} md={3} sm={6} xs={12} className="stepper">
          <VerticalLinearStepper />
        </Grid>
        <Grid item xl={3} lg={3} md={4} sm={6} xs={12} className="config">
          <Setting />
        </Grid>
        <Grid item xl={7} lg={7} md={5} sm={12} xs={12} className="main">
          <Canvas
            style={{
              backgroundColor: "#111a21",
              height: "100vh",
            }}
          >
            <ambientLight intensity={1.25} />
            <ambientLight intensity={0.1} />
            <directionalLight intensity={0.4} />
            <Suspense fallback={null}>
              <Model />
            </Suspense>
            <OrbitControls />
          </Canvas>
        </Grid>
      </Grid>
    </AppContext.Provider>
  );
}

export default App;
