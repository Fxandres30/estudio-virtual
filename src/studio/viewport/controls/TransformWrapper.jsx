"use client";

import {

  memo,

} from "react";

import {

  TransformControls,

} from "@react-three/drei";



function TransformWrapper({

  children,

  isSelected,

  transformMode,

  onTransformEnd,

}){



  /* =========================
     NO SELECTED
  ========================= */

  if(!isSelected){

    return children;

  }



  /* =========================
     NO TOOL
  ========================= */

  if(!transformMode){

    return children;

  }



  return(

    <TransformControls

      enabled

      mode={transformMode}



      showX
      showY
      showZ



      size={0.8}



      /* =========================
         SAVE REAL TRANSFORM
      ========================= */

      onMouseUpCapture={()=>{

        onTransformEnd?.();

      }}

    >

      {children}

    </TransformControls>

  );

}



export default memo(
  TransformWrapper
);