import { useState } from "react";
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Model } from "./Scene";
import VerticalLinearStepper from './Stepper';
import Content from './Details';
import './App.css';
import AppContext from './context/AppContext';

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
      <div className="container">
        <div className="config">
          <VerticalLinearStepper />
        </div>
        <div className="window">
          <div className="setting">
            <Content />
          </div>
          <div className="main">
            <Canvas
              style={{
                backgroundColor: "#111a21",
                width: "90vw",
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

          </div>
        </div>
      </div>

    </AppContext.Provider>
  );
}

export default App;
