"use client";

import {

  useEffect,

  useCallback,

} from "react";

import { useStudioStore }
from "../../store/useStudioStore";



export default function useObjectTransform(

  object,

  groupRef,

){



  /* =========================
     STORE
  ========================= */

  const updateObject =
    useStudioStore(
      (state)=>
        state.updateObject
    );



  const selectedObject =
    useStudioStore(
      (state)=>
        state.selectedObject
    );




  /* =========================
     SYNC STORE -> THREE
  ========================= */

  useEffect(()=>{



    /* =========================
       DO NOT OVERRIDE
       ACTIVE TRANSFORM
    ========================= */

    if(

      selectedObject === object.id

    ){

      return;

    }



    if(!groupRef.current){

      return;

    }



    /* POSITION */

    groupRef.current.position.set(

      ...(object.position || [0,0,0])

    );



    /* ROTATION */

    groupRef.current.rotation.set(

      ...(object.rotation || [0,0,0])

    );



    /* SCALE */

    groupRef.current.scale.set(

      ...(object.scale || [1,1,1])

    );



  }, [

    object.position,

    object.rotation,

    object.scale,

    selectedObject,

  ]);




  /* =========================
     SAVE TRANSFORM
  ========================= */

  const saveTransform = useCallback(()=>{



    if(!groupRef.current){

      return;

    }



    updateObject(

      object.id,

      {

        position:[

          groupRef.current.position.x,

          groupRef.current.position.y,

          groupRef.current.position.z,

        ],



        rotation:[

          groupRef.current.rotation.x,

          groupRef.current.rotation.y,

          groupRef.current.rotation.z,

        ],



        scale:[

          groupRef.current.scale.x,

          groupRef.current.scale.y,

          groupRef.current.scale.z,

        ],

      }

    );



  }, [

    object.id,

    updateObject,

  ]);




  return{

    saveTransform,

  };

}