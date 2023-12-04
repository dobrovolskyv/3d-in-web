import { useAnimations, useGLTF } from '@react-three/drei'
import React, { useEffect, useRef } from 'react';

import planeScene from "../assets/3d/plane.glb"

const Plane = ({isRotation, ...props}) => {
    const ref = useRef();
    const {scene, animations}= useGLTF(planeScene);
    const {actions} = useAnimations(animations, ref);

    useEffect(()=>{
        if(isRotation){
            actions['Take 001'].play();
        } else {
            actions['Take 001'].stop()
        }
    },[actions, isRotation])
  return (
    <mesh {...props} ref={ref}>
        <primitive object={scene}/>
    </mesh>
  )
}

export default Plane