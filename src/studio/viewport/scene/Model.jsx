"use client";

import {

  useGLTF,

} from "@react-three/drei";

import {

  memo,

  useMemo,

  useRef,

  useEffect,

} from "react";

import * as THREE
from "three";

import { useStudioStore }
from "../../store/useStudioStore";

import useSelectionManager
from "../../managers/SelectionManager";

import TransformWrapper
from "../controls/TransformWrapper";

import useObjectTransform
from "../hooks/useObjectTransform";



function Model({

  object,

  isSelected,

  transformMode,

}){



  /* =========================
     REFS
  ========================= */

  const groupRef = useRef();




  /* =========================
     SELECTION
  ========================= */

  const {

    selectObject,

  } = useSelectionManager();




  /* =========================
     STORE
  ========================= */

  const setActiveTransformSave =
    useStudioStore(
      (state)=>
        state.setActiveTransformSave
    );




  /* =========================
     LOAD MODEL
  ========================= */

  const { scene } =
    useGLTF(

      object.path ||

      object.modelPath

    );




  /* =========================
     STABLE MODEL
  ========================= */

  const clonedScene =
    useMemo(()=>{

      const clone =
        scene.clone(true);



      clone.traverse((child)=>{

        if(child.isMesh){



          child.castShadow = true;

          child.receiveShadow = true;



          if(child.material){

            child.material.side =
              THREE.FrontSide;

          }

        }

      });



      return clone;

    }, [scene]);




  /* =========================
     TRANSFORM ENGINE
  ========================= */

  const {

    saveTransform,

  } = useObjectTransform(

    object,

    groupRef

  );




  /* =========================
     ACTIVE SAVE CALLBACK
  ========================= */

  useEffect(()=>{

    if(isSelected){

      setActiveTransformSave(

        saveTransform

      );

    }

  }, [

    isSelected,

    saveTransform,

    setActiveTransformSave,

  ]);




  return(

    <TransformWrapper

      isSelected={isSelected}

      transformMode={transformMode}

      onTransformEnd={saveTransform}

    >



      <group

        ref={groupRef}



        onClick={(e)=>{

          e.stopPropagation();



          selectObject(
            object.id
          );

        }}

      >



        <primitive

          object={clonedScene}

          dispose={null}

        />



      </group>

    </TransformWrapper>

  );

}



export default memo(
  Model
);