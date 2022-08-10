/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/Simple.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.imagetostl_mesh_1.geometry} material={materials.mat0} />
      <mesh geometry={nodes.imagetostl_mesh_2.geometry} material={materials.mat1} />
      <mesh geometry={nodes.imagetostl_mesh_3.geometry} material={materials.mat6} />
    </group>
  )
}

useGLTF.preload('/Simple.glb')