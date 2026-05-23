"use client";

import {

  useCallback,

} from "react";

import { useStudioStore }
from "../../../store/useStudioStore";

import {

  createTransformArray,

} from "../utils/transformUtils";



export default function useInspectorTransforms(

  object,

){



  const updateObject =

    useStudioStore(
      (state)=>
        state.updateObject
    );



  const updateTransform =
    useCallback((

      type,

      index,

      value

    )=>{



      const transform =

        createTransformArray(

          object[type] ||

          [0,0,0],

          index,

          value

        );



      updateObject(

        object.id,

        {

          [type]:
            transform,

        }

      );



    }, [

      object,

      updateObject,

    ]);



  return {

    updateTransform,

  };

}