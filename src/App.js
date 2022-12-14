import React, { Suspense } from "react";
import { useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sky } from "@react-three/drei";
import { Cabbana } from "./components/3d_model/Cabbana";
import { Urban } from "./components/3d_model/Urban";

import VerticalLinearStepper from "./components/LeftSide/Stepper";
import Stepper2 from './components/LeftSide/Stepper2';
import Setting from "./components/LeftSide/Setting";
import "./css/App.css";
import AppContext from "./context/AppContext";
import Grid from "@mui/material/Grid";
import { ContactShadows } from '@react-three/drei'
import Loading from './components/Loading/Loading';
import Loader3d from './components/Loading/Loader3d'

function App() {

  const render = (id) => {
    switch (id) {
      default:
        return null;
      case 0:
        return <Cabbana scale={0.0003} position={[-0.9, -0.465, 0.57]} activeStep={activeStep} subStep={subStep} modelID={id}/>
      case 1:
        return <Urban scale={0.5} position={[-0.9, -0.465, 0.83]} activeStep={activeStep} subStep={subStep} modelID={id} />
        // return <Urban scale={0.015} position={[-1, -0.47, 0.6]} activeStep={activeStep} subStep={subStep} modelID={id} />
    }
  }


  const [modelID, setModelID] = React.useState(0);
  const [activeStep, setActiveStep] = React.useState(0);
  const [subStep, setSubStep] = React.useState(0);
  const [sidebar, setSidebar] = React.useState(true);
  const [isloading, setIsloading] = React.useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsloading(true);
    }, 1000);
  });

  return isloading ? (
    <AppContext.Provider
      value={{
        activeStep,
        setActiveStep,
        subStep,
        setSubStep,
        sidebar,
        setSidebar,
        modelID,
        setModelID,
      }}
    >
      <Grid container spacing={2}>
        {sidebar === true ? 
          <Grid item lg={2} md={3} sm={4} xs={12} className="stepper">
            <VerticalLinearStepper />
          </Grid>
          :
          <Grid className="stepper stepper2">
           <Stepper2 />
          </Grid>
        }
        {sidebar === true ?
          <Grid item lg={3} md={4} sm={8} xs={12} className="config">
          <Setting />
          </Grid>:null
        }
          <Grid item lg={sidebar === true?7:12} md={sidebar === true?5:12} sm={12} xs={12} className="main">
          <Canvas
            className="canvas"
            style={{
              height: "100vh",
            }}
            camera={{ position: [0, 0, -4], fov: 50 }}
            shadows
          >
          <Sky
             distance={450000}
             sunPosition={[5, 1, 8]}
             inclination={0}
             azimuth={0.25}
         />
        <ambientLight intensity={0.3}/>
        <spotLight castShadow intensity={0.4} angle={0.5} penumbra={1} position={[5, 25, 20]} />
        <directionalLight
          intensity = {2.0}
          position={[2, 11, 5]}
          castShadow 
          shadow-mapSize-width={2048} 
          shadow-mapSize-height={2048}
        />
        <Suspense fallback={<Loader3d />}>
          <mesh receiveShadow rotation={[-Math.PI/2, 0, 0]} position={[0, -1.22, 0]}>
            <boxGeometry attach="geometry" args={[8, 8, 1.5]} />
            <meshPhongMaterial attach="material" color="white" />
          </mesh>
          <mesh rotation={[Math.PI/2, 0, 0]} position={[0, 2.5, 0]}>
            <planeGeometry attach="geometry" args={[8, 8, 1.5]} />
            <meshPhongMaterial attach="material" color="#dddddd" transparent opacity={0.1} />
          </mesh>

          <mesh rotation={[0, -Math.PI/2, 0]} position={[4, 0, 0]}>
            <planeBufferGeometry attach="geometry" args={[8, 5]} />
            <meshPhongMaterial attach="material" color="#dddddd" transparent opacity={0.3}/>
          </mesh>
          <mesh rotation={[0, Math.PI/2, 0]} position={[-4, 0, 0]}>
            <planeBufferGeometry attach="geometry" args={[8, 5]} />
            <meshPhongMaterial attach="material" color="#dddddd" transparent opacity={0.3} />
          </mesh>
          <mesh rotation={[0, 0, 0]} position={[0, 0, -4]}>
            <planeBufferGeometry attach="geometry" args={[8, 5]} />
            <meshPhongMaterial attach="material" color="#dddddd" transparent opacity={0.3} />
          </mesh>
          <mesh rotation={[0, Math.PI, 0]} position={[0, 0, 4]}>
            <planeBufferGeometry attach="geometry" args={[8, 5]} />
            <meshPhongMaterial attach="material" color="#dddddd" transparent opacity={0.3} />
          </mesh>
          {render(modelID)}
          {/* <Environment preset="city" /> */}
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
          minDistance={1.5}
          maxDistance={10}
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
