"use client";

import {

  memo,

  useMemo,

  useRef,

  useEffect,

} from "react";

import { useFBX }
from "@react-three/drei";

import { useStudioStore }
from "../../studio/store/useStudioStore";

import useSelectionManager
from "../../studio/managers/SelectionManager";

import TransformWrapper
from "../../studio/viewport/controls/TransformWrapper";

import useObjectTransform
from "../../studio/viewport/hooks/useObjectTransform";



function CharacterObject({

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

  const model =
    useFBX(
      object.modelPath
    );




  /* =========================
     STABLE MODEL
  ========================= */

  const clonedModel =
    useMemo(()=>{

      return model.clone(true);

    }, [model]);




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

  ]);




  return(

    <TransformWrapper

      object={object}

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

          object={clonedModel}

          scale={[0.01,0.01,0.01]}

          dispose={null}

        />



      </group>

    </TransformWrapper>

  );

}



export default memo(
  CharacterObject
);