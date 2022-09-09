import React, { useRef  } from "react";
import { useFrame } from '@react-three/fiber'

export default function Loader3d() {
    const box = useRef()
    useFrame(() => box.current && void (box.current.rotation.x += 0.05, box.current.rotation.y += 0.05))
    return (
     <mesh ref={box}>
      <boxGeometry attach="geometry" args={[0.1, 0.1, 0.1]} />
      <meshStandardMaterial attach="material" color={0x0ff000} />
     </mesh>
    );
}