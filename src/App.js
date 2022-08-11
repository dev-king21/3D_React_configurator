import React, { Suspense, useRef  } from "react";
import { useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Model } from "./components/Scene";
import VerticalLinearStepper from "./components/Stepper";
import Setting from "./components/Setting";
import "./css/App.css";
import AppContext from "./context/AppContext";
import Grid from "@mui/material/Grid";
import { ContactShadows, Environment} from '@react-three/drei'
import Loading from './components/Loading';

function App() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [subStep, setSubStep] = React.useState(0);
  const [isloading, setIsloading] = React.useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsloading(true);
    }, 3000);
  });

  return isloading ? (
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
            className="canvas"
            style={{
              height: "100vh",
            }}
            shadows dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 50 }}
          >
        <ambientLight intensity={0.3} />
        <spotLight intensity={0.3} angle={0.1} penumbra={1} position={[5, 25, 20]} />
        <Suspense fallback={null}>
          <mesh rotation={[-Math.PI/2, 0, 0]} position={[0, -0.5, 0]}>
            <planeBufferGeometry attach="geometry" args={[10, 10]} />
            <meshPhongMaterial attach="material" color="white" />
          </mesh>
          <mesh rotation={[0, -Math.PI/2, 0]} position={[5, 0, 0]}>
            <planeBufferGeometry attach="geometry" args={[10, 5]} />
            <meshPhongMaterial attach="material" color="#dddddd" />
          </mesh>
          <mesh rotation={[0, Math.PI/2, 0]} position={[-5, 0, 0]}>
            <planeBufferGeometry attach="geometry" args={[10, 5]} />
            <meshPhongMaterial attach="material" color="#dddddd" />
          </mesh>
          <mesh rotation={[0, 0, 0]} position={[0, 0, -5]}>
            <planeBufferGeometry attach="geometry" args={[10, 5]} />
            <meshPhongMaterial attach="material" color="#dddddd" />
          </mesh>
          <mesh rotation={[0, Math.PI, 0]} position={[0, 0, 5]}>
            <planeBufferGeometry attach="geometry" args={[10, 5]} />
            <meshPhongMaterial attach="material" color="#dddddd" />
          </mesh>
          <Model scale={0.01} position={[-1, -0.5, 0.5]}/>
          <Environment preset="city" />
          <ContactShadows 
            rotation-x={Math.PI / 2} 
            position={[0, -0.8, 0]} 
            opacity={0.25} 
            width={10} 
            height={10} 
            blur={1.5} 
            far={0.8} 
          />
        </Suspense>
        <OrbitControls 
          enableZoom={true}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={-Math.PI / 2}
        />
        </Canvas>
        </Grid>
      </Grid>
    </AppContext.Provider>
  ):(<Loading />);
}

export default App;
