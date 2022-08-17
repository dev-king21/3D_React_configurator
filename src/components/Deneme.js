/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useSnapshot } from "valtio"
import { useFrame } from '@react-three/fiber'
import state from "../state"
import {lengths} from '../utils/constant';
import { Html } from "@react-three/drei";
import * as THREE from 'three'
import { useLoader } from '@react-three/fiber'

function Blades(props) {
  
  console.log("blades props========>", props);
  
  const snap = useSnapshot(state);
  const list = [];
  const texture = useLoader(THREE.TextureLoader, props.texture);
  for (var px1 = props.x_pos, px2 = props.x_pos - props.x_int ; px1 - px2 < props.len ;px1+=props.x_int, px2-=props.x_int) {
    if (props.isTexture === true) {
      list.push(<mesh castShadow receiveShadow geometry={props.blade_geometry} material={props.blade_material} position={[px1, props.y_pos, props.z_pos]} rotation={snap.blades.rotation} >
        <meshBasicMaterial attach="material" map={props.isTexture?texture:null} />
      </mesh>
      )
      if (px1 - px2 + props.x_int * 2 < props.len) list.push(<mesh castShadow receiveShadow geometry={props.blade_geometry} material={props.blade_material} position={[px2, props.y_pos, props.z_pos]} rotation={snap.blades.rotation}>
        <meshBasicMaterial attach="material" map={props.isTexture?texture:null} />
      </mesh>
      )  
    }
    else {
      list.push(<mesh castShadow receiveShadow geometry={props.blade_geometry} material={props.blade_material} position={[px1, props.y_pos, props.z_pos]} rotation={snap.blades.rotation} material-color={props.blade_color} />)
      if (px1 - px2 + props.x_int * 2 < props.len) list.push(<mesh castShadow receiveShadow geometry={props.blade_geometry} material={props.blade_material} position={[px2, props.y_pos, props.z_pos]} rotation={snap.blades.rotation} material-color={props.blade_color} />)  
    }
  }
  return list;
}

export function Model(props) {

  const snap = useSnapshot(state);
  const group = useRef();
  const { nodes, materials } = useGLTF('/deneme.glb')

  const blade_geometry = nodes['YFBXASC195FBXASC188kseklik-EkstrFBXASC195FBXASC188zyon1_ncl1_12'].geometry;
  const blade_material = materials.MaterialFBXASC032FBXASC03531;
  const blade_rotation = [-Math.PI, 0, -2.09];
  const main_material = materials.MaterialFBXASC032FBXASC03525;

  useFrame((state) => {
    // const t = state.clock.getElapsedTime();
    // group.current.rotation.y = Math.sin(t / 4) / 8;
  });

  return (
    <group {...props} dispose={null} ref={group}>
  <group scale={[1, 1, snap.length.height / lengths.int_height]}>

    {props.activeStep + props.subStep === 0 ? <Html scaleFactor={5} position={[-snap.length.width / 2, (snap.length.depth - lengths.int_depth) / 2, 150]}>
          <div className="length-info">{snap.length.depth}mm</div>
    </Html>:null}


{/* baseColumns Start */}
    {/* *****************Colmun A *********************/}
    <group position = {[0, snap.length.depth - lengths.int_depth, 0]} >
      <group position={[ (snap.length.width - lengths.int_width) / 2.0 - snap.columns.pos[0], 0, 0]} >
        <mesh castShadow receiveShadow geometry={nodes['Kes-EkstrFBXASC195FBXASC188zyon7'].geometry} material={main_material} position={[3072.25, -1383.23, 377.87]} rotation={[0, Math.PI / 2, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['YFBXASC195FBXASC188kseklik-EkstrFBXASC195FBXASC188zyon1'].geometry} material={main_material} position={[3001.81, -1271.73, 425.67]} rotation={[0, Math.PI / 2, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Kes-EkstrFBXASC195FBXASC188zyon7'].geometry} material={main_material} position={[3072.25, -1383.23 - lengths.moveLimit, 377.87]} rotation={[0, Math.PI / 2, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['YFBXASC195FBXASC188kseklik-EkstrFBXASC195FBXASC188zyon1'].geometry} material={main_material} position={[3001.81, -1271.73 - lengths.moveLimit, 425.67]} rotation={[0, Math.PI / 2, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['YFBXASC195FBXASC188kseklik-EkstrFBXASC195FBXASC188zyon17'].geometry} material={materials.MaterialFBXASC032FBXASC03527} position={[2945.4, -1388.23 - snap.length.depth + lengths.int_depth, 370.3]} />

        <group position={[3067 + snap.columns.pos[0], 1510.47, 180.48]} rotation={[-Math.PI, 0, -Math.PI]}>
          <mesh castShadow receiveShadow geometry={nodes.mesh_4.geometry} material={materials.MaterialFBXASC032FBXASC03526} />
          <mesh castShadow receiveShadow geometry={nodes.mesh_4_1.geometry} material={materials.MaterialFBXASC032FBXASC03530} 
            material-color = {snap.isDesign ? snap.designStyle:snap.structure.color}
          />
        </group>
      </group>

    {/* *****************Colmun B *********************/}
      <group position={[- (snap.length.width - lengths.int_width) / 2.0 + snap.columns.pos[1], 0, 0]}>
        <mesh castShadow receiveShadow geometry={nodes['Kes-EkstrFBXASC195FBXASC188zyon7_ncl1_1'].geometry} material={main_material} position={[-2797.75, -1383.23, 377.87]} rotation={[0, Math.PI / 2, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['YFBXASC195FBXASC188kseklik-EkstrFBXASC195FBXASC188zyon1_ncl1_1'].geometry} material={main_material} position={[-2868.09, -1271.73, 425.67]} rotation={[0, Math.PI / 2, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Kes-EkstrFBXASC195FBXASC188zyon7_ncl1_1'].geometry} material={main_material} position={[-2797.75, -1383.23 - lengths.moveLimit, 377.87]} rotation={[0, Math.PI / 2, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['YFBXASC195FBXASC188kseklik-EkstrFBXASC195FBXASC188zyon1_ncl1_1'].geometry} material={main_material} position={[-2868.09, -1271.73 - lengths.moveLimit, 425.67]} rotation={[0, Math.PI / 2, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['YFBXASC195FBXASC188kseklik-EkstrFBXASC195FBXASC188zyon17_ncl1_1'].geometry} material={materials.MaterialFBXASC032FBXASC03527} position={[-2811.6, -1384.53 - snap.length.depth + lengths.int_depth, 370.3]} rotation={[0, 0, Math.PI / 2]} />
        <group position={[-2764 - snap.columns.pos[1], 1510.47, 353.48]} rotation={[0, Math.PI / 2, 0]}>
          <mesh castShadow receiveShadow geometry={nodes.mesh_9.geometry} material={materials.MaterialFBXASC032FBXASC03526} />
          <mesh castShadow receiveShadow geometry={nodes.mesh_9_1.geometry} material={materials.MaterialFBXASC032FBXASC03530}
            material-color = {snap.isDesign ? snap.designStyle:snap.structure.color}          
          />
        </group>

      </group>

    {/* *****************Colmun C *********************/}
      <group position={[- (snap.length.width - lengths.int_width) / 2.0 + snap.columns.pos[2], 0, 0]}>
        <mesh castShadow receiveShadow geometry={nodes['Kes-EkstrFBXASC195FBXASC188zyon7_ncl1_2'].geometry} material={main_material} position={[-2942.25, -1383.23, -3634.9]} rotation={[0, -Math.PI / 2, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['YFBXASC195FBXASC188kseklik-EkstrFBXASC195FBXASC188zyon1_ncl1_2'].geometry} material={main_material} position={[-2871.81, -1271.73, -3682.7]} rotation={[0, -Math.PI / 2, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Kes-EkstrFBXASC195FBXASC188zyon7_ncl1_2'].geometry} material={main_material} position={[-2942.25, -1383.23 - lengths.moveLimit, -3634.9]} rotation={[0, -Math.PI / 2, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['YFBXASC195FBXASC188kseklik-EkstrFBXASC195FBXASC188zyon1_ncl1_2'].geometry} material={main_material} position={[-2871.81, -1271.73 - lengths.moveLimit, -3682.7]} rotation={[0, -Math.PI / 2, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['YFBXASC195FBXASC188kseklik-EkstrFBXASC195FBXASC188zyon17_ncl1_2'].geometry} material={materials.MaterialFBXASC032FBXASC03527} position={[-2815.4, -1388.23 - snap.length.depth + lengths.int_depth, -3627.35]} rotation={[-Math.PI, 0, -Math.PI]} />
        <group position={[-2937 - snap.columns.pos[2], 1510.47, -3437.52]}>
          <mesh castShadow receiveShadow geometry={nodes.mesh_14.geometry} material={materials.MaterialFBXASC032FBXASC03526} />
          <mesh castShadow receiveShadow geometry={nodes.mesh_14_1.geometry} material={materials.MaterialFBXASC032FBXASC03530} 
            material-color = {snap.isDesign ? snap.designStyle:snap.structure.color}
          />
        </group>        
      </group>

    {/* *****************Colmun D *********************/}
      <group position={[ (snap.length.width - lengths.int_width) / 2.0 - snap.columns.pos[3], 0, 0]}>
        <mesh castShadow receiveShadow geometry={nodes['Kes-EkstrFBXASC195FBXASC188zyon7_ncl1_3'].geometry} material={main_material} position={[2927.75, -1383.23, -3634.9]} rotation={[0, -Math.PI / 2, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['YFBXASC195FBXASC188kseklik-EkstrFBXASC195FBXASC188zyon1_ncl1_3'].geometry} material={main_material} position={[2998.09, -1271.73, -3682.7]} rotation={[0, -Math.PI / 2, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Kes-EkstrFBXASC195FBXASC188zyon7_ncl1_3'].geometry} material={main_material} position={[2927.75, -1383.23 - lengths.moveLimit, -3634.9]} rotation={[0, -Math.PI / 2, 0]} />
        <mesh castShadow receiveShadow geometry={nodes.Pah1_ncl1_3.geometry} material={materials.MaterialFBXASC032FBXASC03526} position={[2999.04, -1388.23 - lengths.moveLimit, -3544.71]} rotation={[0, -Math.PI / 2, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['YFBXASC195FBXASC188kseklik-EkstrFBXASC195FBXASC188zyon17_ncl1_3'].geometry} material={materials.MaterialFBXASC032FBXASC03527} position={[2941.6, -1384.53 - snap.length.depth + lengths.int_depth, -3627.35]} rotation={[-Math.PI, 0, -Math.PI / 2]} />
        <group position={[2894 + snap.columns.pos[3], 1510.47, -3610.52]} rotation={[0, -Math.PI / 2, 0]}>
          <mesh castShadow receiveShadow geometry={nodes.mesh_19.geometry} material={materials.MaterialFBXASC032FBXASC03526} />
          <mesh castShadow receiveShadow geometry={nodes.mesh_19_1.geometry} material={materials.MaterialFBXASC032FBXASC03530} 
            material-color = {snap.isDesign ? snap.designStyle:snap.structure.color}
          />
        </group>
      </group>
    </group>
{/* baseColumns End */}

{/* extra Columns Start */}
        <group position = {[0, snap.length.depth - lengths.int_depth, 0]}>

    {/* *****************Colmun E *********************/}
          {snap.columns.isShift[4] === true ? 
            <group position={[ (snap.length.width - lengths.int_width) / 2.0 - snap.columns.pos[4], 0, 0]} >
            <mesh castShadow receiveShadow geometry={nodes['Kes-EkstrFBXASC195FBXASC188zyon7'].geometry} material={main_material} position={[3072.25, -1383.23, 377.87]} rotation={[0, Math.PI / 2, 0]} />
            <mesh castShadow receiveShadow geometry={nodes['YFBXASC195FBXASC188kseklik-EkstrFBXASC195FBXASC188zyon1'].geometry} material={main_material} position={[3001.81, -1271.73, 425.67]} rotation={[0, Math.PI / 2, 0]} />
            <mesh castShadow receiveShadow geometry={nodes['Kes-EkstrFBXASC195FBXASC188zyon7'].geometry} material={main_material} position={[3072.25, -1383.23 - lengths.moveLimit, 377.87]} rotation={[0, Math.PI / 2, 0]} />
            <mesh castShadow receiveShadow geometry={nodes['YFBXASC195FBXASC188kseklik-EkstrFBXASC195FBXASC188zyon1'].geometry} material={main_material} position={[3001.81, -1271.73 - lengths.moveLimit, 425.67]} rotation={[0, Math.PI / 2, 0]} />
            <mesh castShadow receiveShadow geometry={nodes['YFBXASC195FBXASC188kseklik-EkstrFBXASC195FBXASC188zyon17'].geometry} material={materials.MaterialFBXASC032FBXASC03527} position={[2945.4, -1388.23 - snap.length.depth + lengths.int_depth, 370.3]} />
            <group position={[3067 + snap.columns.pos[4], 1510.47, 180.48]} rotation={[-Math.PI, 0, -Math.PI]}>
              <mesh castShadow receiveShadow geometry={nodes.mesh_4.geometry} material={materials.MaterialFBXASC032FBXASC03526} />
              <mesh castShadow receiveShadow geometry={nodes.mesh_4_1.geometry} material={materials.MaterialFBXASC032FBXASC03530} 
                material-color = {snap.isDesign ? snap.designStyle:snap.structure.color}
              />
            </group>
          </group>:
          null
          }
    {/* *****************Colmun F *********************/}

          {snap.columns.isShift[5] === true ? 
            <group position={[ (snap.length.width - lengths.int_width) / 2.0, 0, - snap.columns.pos[5]]} >
            <mesh castShadow receiveShadow geometry={nodes['Kes-EkstrFBXASC195FBXASC188zyon7'].geometry} material={main_material} position={[3072.25, -1383.23, 377.87]} rotation={[0, Math.PI / 2, 0]} />
            <mesh castShadow receiveShadow geometry={nodes['YFBXASC195FBXASC188kseklik-EkstrFBXASC195FBXASC188zyon1'].geometry} material={main_material} position={[3001.81, -1271.73, 425.67]} rotation={[0, Math.PI / 2, 0]} />
            <mesh castShadow receiveShadow geometry={nodes['Kes-EkstrFBXASC195FBXASC188zyon7'].geometry} material={main_material} position={[3072.25, -1383.23 - lengths.moveLimit, 377.87]} rotation={[0, Math.PI / 2, 0]} />
            <mesh castShadow receiveShadow geometry={nodes['YFBXASC195FBXASC188kseklik-EkstrFBXASC195FBXASC188zyon1'].geometry} material={main_material} position={[3001.81, -1271.73 - lengths.moveLimit, 425.67]} rotation={[0, Math.PI / 2, 0]} />
            <mesh castShadow receiveShadow geometry={nodes['YFBXASC195FBXASC188kseklik-EkstrFBXASC195FBXASC188zyon17'].geometry} material={materials.MaterialFBXASC032FBXASC03527} position={[2945.4, -1388.23 - snap.length.depth + lengths.int_depth, 370.3]} />
            <group position={[3067 + snap.columns.pos[5], 1510.47, 180.48]} rotation={[-Math.PI, 0, -Math.PI]}>
              <mesh castShadow receiveShadow geometry={nodes.mesh_4.geometry} material={materials.MaterialFBXASC032FBXASC03526} />
              <mesh castShadow receiveShadow geometry={nodes.mesh_4_1.geometry} material={materials.MaterialFBXASC032FBXASC03530} 
                material-color = {snap.isDesign ? snap.designStyle:snap.structure.color}
              />
            </group>
          </group>:
          null
          }



    {/* *****************Colmun G *********************/}
    {snap.columns.isShift[6] === true ? 

    <group position={[ (snap.length.width - lengths.int_width) / 2.0 - snap.columns.pos[6], 0, 0]}>
      <mesh castShadow receiveShadow geometry={nodes['Kes-EkstrFBXASC195FBXASC188zyon7_ncl1_3'].geometry} material={main_material} position={[2927.75, -1383.23, -3634.9]} rotation={[0, -Math.PI / 2, 0]} />
      <mesh castShadow receiveShadow geometry={nodes['YFBXASC195FBXASC188kseklik-EkstrFBXASC195FBXASC188zyon1_ncl1_3'].geometry} material={main_material} position={[2998.09, -1271.73, -3682.7]} rotation={[0, -Math.PI / 2, 0]} />
      <mesh castShadow receiveShadow geometry={nodes['Kes-EkstrFBXASC195FBXASC188zyon7_ncl1_3'].geometry} material={main_material} position={[2927.75, -1383.23 - lengths.moveLimit, -3634.9]} rotation={[0, -Math.PI / 2, 0]} />
      <mesh castShadow receiveShadow geometry={nodes['YFBXASC195FBXASC188kseklik-EkstrFBXASC195FBXASC188zyon1_ncl1_3'].geometry} material={main_material} position={[2998.09, -1271.73 - lengths.moveLimit, -3682.7]} rotation={[0, -Math.PI / 2, 0]} />
      <mesh castShadow receiveShadow geometry={nodes['YFBXASC195FBXASC188kseklik-EkstrFBXASC195FBXASC188zyon17_ncl1_3'].geometry} material={materials.MaterialFBXASC032FBXASC03527} position={[2941.6, -1384.53 - snap.length.depth + lengths.int_depth, -3627.35]} rotation={[-Math.PI, 0, -Math.PI / 2]} />
      <group position={[2894 + snap.columns.pos[6], 1510.47, -3610.52]} rotation={[0, -Math.PI / 2, 0]}>
        <mesh castShadow receiveShadow geometry={nodes.mesh_19.geometry} material={materials.MaterialFBXASC032FBXASC03526} />
        <mesh castShadow receiveShadow geometry={nodes.mesh_19_1.geometry} material={materials.MaterialFBXASC032FBXASC03530} 
          material-color = {snap.isDesign ? snap.designStyle:snap.structure.color}
        />
      </group>
    </group>
    :null}

    {/* *****************Colmun H *********************/}
    {snap.columns.isShift[7] === true ? 
      <group position={[- (snap.length.width - lengths.int_width) / 2.0, 0, -snap.columns.pos[7]]}>
        <mesh castShadow receiveShadow geometry={nodes['Kes-EkstrFBXASC195FBXASC188zyon7_ncl1_1'].geometry} material={main_material} position={[-2797.75, -1383.23, 377.87]} rotation={[0, Math.PI / 2, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['YFBXASC195FBXASC188kseklik-EkstrFBXASC195FBXASC188zyon1_ncl1_1'].geometry} material={main_material} position={[-2868.09, -1271.73, 425.67]} rotation={[0, Math.PI / 2, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['Kes-EkstrFBXASC195FBXASC188zyon7_ncl1_1'].geometry} material={main_material} position={[-2797.75, -1383.23 - lengths.moveLimit, 377.87]} rotation={[0, Math.PI / 2, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['YFBXASC195FBXASC188kseklik-EkstrFBXASC195FBXASC188zyon1_ncl1_1'].geometry} material={main_material} position={[-2868.09, -1271.73 - lengths.moveLimit, 425.67]} rotation={[0, Math.PI / 2, 0]} />
        <mesh castShadow receiveShadow geometry={nodes['YFBXASC195FBXASC188kseklik-EkstrFBXASC195FBXASC188zyon17_ncl1_1'].geometry} material={materials.MaterialFBXASC032FBXASC03527} position={[-2811.6, -1384.53 - snap.length.depth + lengths.int_depth, 370.3]} rotation={[0, 0, Math.PI / 2]} />
        <group position={[-2764 + snap.columns.pos[7], 1510.47, 353.48]} rotation={[0, Math.PI / 2, 0]}>
          <mesh castShadow receiveShadow geometry={nodes.mesh_9.geometry} material={materials.MaterialFBXASC032FBXASC03526} />
          <mesh castShadow receiveShadow geometry={nodes.mesh_9_1.geometry} material={materials.MaterialFBXASC032FBXASC03530}
            material-color = {snap.isDesign ? snap.designStyle:snap.structure.color}          
          />
        </group>
      </group>
      :null
    
    }


  </group>

{/* extraColumns End */}
      <group position={[0, snap.length.depth - lengths.int_depth, 0]}>
{/* Xwidth */}
        <group scale={[(snap.length.width - 340)/(lengths.int_width - 340) * 1.03, 1, 1]}>
          <group>
            <mesh castShadow receiveShadow geometry={nodes['Kes-EkstrFBXASC195FBXASC188zyon1_ncl1_1'].geometry} material={main_material} position={[2915, 1321.77, -3628.52]} rotation={[-Math.PI, 0, -Math.PI]} 
              material-color = {snap.isDesign ? snap.designStyle:snap.structure.color}
            />
            <mesh castShadow receiveShadow geometry={nodes['YFBXASC195FBXASC188kseklik-EkstrFBXASC195FBXASC188zyon1_ncl1_10'].geometry} material={main_material} position={[-2785, 1322.77, -3458.52]} />
          </group>

          <group>
            <mesh castShadow receiveShadow geometry={nodes['Kes-EkstrFBXASC195FBXASC188zyon1'].geometry} material={main_material} position={[-2785, 1321.77, 371.48]} 
              material-color = {snap.isDesign ? snap.designStyle:snap.structure.color}
            />
            <mesh castShadow receiveShadow geometry={nodes['YFBXASC195FBXASC188kseklik-EkstrFBXASC195FBXASC188zyon1_ncl1_6'].geometry} material={main_material} position={[2872, 1601.77, 221.49]} rotation={[-Math.PI, 0, -Math.PI]} />
            <mesh castShadow receiveShadow geometry={nodes['YFBXASC195FBXASC188kseklik-EkstrFBXASC195FBXASC188zyon1_ncl1_11'].geometry} material={main_material} position={[2915, 1322.77, 201.48]} rotation={[-Math.PI, 0, -Math.PI]} />
            {props.activeStep + props.subStep === 0 ? <Html scaleFactor={5} position={[2915-lengths.int_width/2, 1322.77, 201.48]}>
              <div className="length-info">{snap.length.width}mm</div>
            </Html>:null}
          </group>
        </group>
{/* Xwidth */}

{/* Ywidth */}  
        <group>
          <group position={[- (snap.length.width - lengths.int_width) / 2, 0, 0]}>
            <mesh castShadow receiveShadow geometry={nodes['Kes-EkstrFBXASC195FBXASC188zyon1_ncl1_3'].geometry} material={main_material} position={[-2785, 1321.77, 201.48]} rotation={[0, Math.PI / 2, 0]}
              material-color = {snap.isDesign ? snap.designStyle:snap.structure.color}            
             />
            <mesh castShadow receiveShadow geometry={nodes['YFBXASC195FBXASC188kseklik-EkstrFBXASC195FBXASC188zyon1_ncl1_5'].geometry} material={main_material} position={[-2955, 1321.77, -3458.52]} rotation={[0, -Math.PI / 2, 0]} />
            <mesh castShadow receiveShadow geometry={nodes['YFBXASC195FBXASC188kseklik-EkstrFBXASC195FBXASC188zyon1_ncl1_8'].geometry} material={main_material} position={[-2805.5, 1601.77, 158.48]} rotation={[0, Math.PI / 2, 0]} />
            {props.activeStep + props.subStep === 0 ? <Html scaleFactor={5} position={[-2785, 1321.77, -1680 - (snap.length.height - lengths.int_height)/6]}>
              <div className="length-info">{snap.length.height}mm</div>
            </Html>:null}
          </group>

          <group position={[ (snap.length.width - lengths.int_width) / 2, 0, 0]}>
            <mesh castShadow receiveShadow geometry={nodes['YFBXASC195FBXASC188kseklik-EkstrFBXASC195FBXASC188zyon1_ncl1_4'].geometry} material={main_material} position={[3085, 1321.77, 201.48]} rotation={[0, Math.PI / 2, 0]} 
              material-color = {snap.isDesign ? snap.designStyle:snap.structure.color}            
            />
            <mesh castShadow receiveShadow geometry={nodes['Kes-EkstrFBXASC195FBXASC188zyon1_ncl1_2'].geometry} material={main_material} position={[2915, 1321.77, -3458.52]} rotation={[0, -Math.PI / 2, 0]}             />
            {/* <mesh geometry={nodes['YFBXASC195FBXASC188kseklik-EkstrFBXASC195FBXASC188zyon1_ncl1_7'].geometry} material={main_material} position={[2935.5, 1601.77, -3415.52]} rotation={[0, -Math.PI / 2, 0]} /> */}
          </group>
        </group>
{/* Ywidth */}

        <Blades 
          blade_geometry={blade_geometry}
          blade_material={blade_material}
          blade_rotation={blade_rotation}
          blade_color = {snap.isDesign ? snap.designStyle:snap.blades.color}
          x_pos = {22.15}
          y_pos = {1335.74}
          z_pos = {260.48}
          x_int = {200}
          len={snap.length.width}
          isTexture={snap.isTexture}
          texture={snap.blades.texture}
        />
      </group>
      </group>
    </group>
  )
}

useGLTF.preload('/deneme.glb')
