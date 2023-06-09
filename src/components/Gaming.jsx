/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 gaming.gltf --transform
Author: BCANG (https://sketchfab.com/BCANG)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/pc-setup-with-gaming-chair-ccccc3cd720d48f4808f0d71161c7dd9
Title: PC Setup with Gaming Chair
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/gaming-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Desk1_blinn2_0.geometry} material={materials.blinn2} />
      <mesh geometry={nodes.Desk1_Masa_Ana_0.geometry} material={materials.Masa_Ana} />
      <mesh geometry={nodes.Desk1_Table_Pipe_0.geometry} material={materials.Table_Pipe} />
      <mesh geometry={nodes.Desk1_lambert2_0.geometry} material={materials.lambert2} />
      <mesh geometry={nodes.Panel_Side_Main_0.geometry} material={materials.Side_Main} />
      <mesh geometry={nodes.Panel_Side_Frame_0.geometry} material={materials.Side_Frame} />
      <mesh geometry={nodes.Wheel4_Teker_0.geometry} material={materials.Teker} />
      <mesh geometry={nodes.Wheel4_Teker_Metal_0.geometry} material={materials.Teker_Metal} />
      <mesh geometry={nodes.Monitor_Monitor_Frame_0.geometry} material={materials.Monitor_Frame} />
      <mesh geometry={nodes.Monitor_wallpaperScreen_0.geometry} material={materials.wallpaperScreen} />
      <mesh geometry={nodes.Cable_CableColor_0.geometry} material={materials.CableColor} />
      <mesh geometry={nodes.Mouse_MouseMaterial_0.geometry} material={materials.MouseMaterial} />
      <mesh geometry={nodes.Keyboard_Keyboard_Main_0.geometry} material={materials.Keyboard_Main} />
      <mesh geometry={nodes.Keyboard_Keyboard_Keys_0.geometry} material={materials.Keyboard_Keys} />
      <mesh geometry={nodes.Case_PC_kasa_0.geometry} material={materials.PC_kasa} />
      <mesh geometry={nodes.Case_PC_powerButton_0.geometry} material={materials.PC_powerButton} />
      <mesh geometry={nodes.Case_PC_PowerButtonColor_0.geometry} material={materials.PC_PowerButtonColor} />
      <mesh geometry={nodes.Case_PC_USB_grey_0.geometry} material={materials.PC_USB_grey} />
      <mesh geometry={nodes.Koltuk_Ayak_Chair_Ayak_0.geometry} material={materials.Chair_Ayak} />
      <mesh geometry={nodes.Koltuk_Chair_Plastic_0.geometry} material={materials.Chair_Plastic} />
      <mesh geometry={nodes.Koltuk_Chair_Fabric_0.geometry} material={materials.Chair_Fabric} />
      <mesh geometry={nodes.Koltuk_Chair_Red_0.geometry} material={materials.Chair_Red} />
    </group>
  )
}

useGLTF.preload('/gaming-transformed.glb')
