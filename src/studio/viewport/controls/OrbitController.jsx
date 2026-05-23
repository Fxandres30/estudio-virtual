"use client";

import {

  memo,

} from "react";

import {

  OrbitControls,

} from "@react-three/drei";



function OrbitController({

  controlsRef,

}){



  return(

    <OrbitControls

      ref={controlsRef}



      makeDefault



      /* =========================
         PERFORMANCE
      ========================= */

      enableDamping={true}

      dampingFactor={0.05}



      /* =========================
         CAMERA SPEED
      ========================= */

      rotateSpeed={0.7}

      zoomSpeed={0.8}

      panSpeed={0.7}



      /* =========================
         LIMITS
      ========================= */

      minDistance={1}

      maxDistance={100}



      maxPolarAngle={
        Math.PI / 2
      }



      /* =========================
         OPTIMIZATION
      ========================= */

      enablePan={true}

      enableRotate={true}

      enableZoom={true}



      screenSpacePanning={
        false
      }

    />

  );

}



/* =========================
   MEMO
========================= */

export default memo(
  OrbitController
);