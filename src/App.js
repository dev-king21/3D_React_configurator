import React, { Suspense, useRef  } from "react";
import { useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sky } from "@react-three/drei";
import { Model } from "./components/Deneme";
import VerticalLinearStepper from "./components/Stepper";
import Setting from "./components/Setting";
import "./css/App.css";
import AppContext from "./context/AppContext";
import Grid from "@mui/material/Grid";
import { ContactShadows } from '@react-three/drei'
import Loading from './components/Loading';
import { useFrame } from '@react-three/fiber'

function Loader() {
  const box = useRef()
  useFrame(() => box.current && void (box.current.rotation.x += 0.05, box.current.rotation.y += 0.05))
  return (
   <mesh ref={box}>
    <boxGeometry attach="geometry" args={[0.1, 0.1, 0.1]} />
    <meshStandardMaterial attach="material" color={0x0ff000} />
   </mesh>
  );
}

function App() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [subStep, setSubStep] = React.useState(0);
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
      }}
    >
      <Grid container spacing={2}>
        <Grid item lg={2} md={3} sm={4} xs={12} className="stepper">
          <VerticalLinearStepper />
        </Grid>
        <Grid item lg={3} md={4} sm={8} xs={12} className="config">
          <Setting />
        </Grid>
        <Grid item lg={7} md={5} sm={12} xs={12} className="main">
          <Canvas
            className="canvas"
            style={{
              height: "100vh",
            }}
            shadows camera={{ position: [0, 0, 4], fov: 50 }}
          >
          <Sky
             distance={450000}
             sunPosition={[5, 1, 8]}
             inclination={0}
             azimuth={0.25}
         />
        <ambientLight intensity={0.4}/>
        <spotLight castShadow intensity={1} angle={0.5} penumbra={1} position={[5, 25, 20]} />
        <directionalLight
          position={[2, 10, 5]} castShadow shadow-mapSize-width={1024} shadow-mapSize-height={1024}
        />
        <Suspense fallback={<Loader />}>
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
          <Model scale={0.0003} position={[0, -0.05, 0.5]}/>
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
