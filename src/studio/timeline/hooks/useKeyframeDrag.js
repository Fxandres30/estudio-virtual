"use client";

import {

  useCallback,

} from "react";

import { useStudioStore }
from "../../store/useStudioStore";



export default function useKeyframeDrag(){



  const totalFrames =

    useStudioStore(
      (state)=>
        state.totalFrames
    );



  const keyframes =

    useStudioStore(
      (state)=>
        state.keyframes
    );



  const setKeyframes =

    useStudioStore(
      (state)=>
        state.setKeyframes
    );



  /* =========================
     DRAG
  ========================= */

  const handleDrag =
    useCallback((

      e,

      keyframeId,

      trackWidth

    )=>{



      const percent =

        Math.max(

          0,

          Math.min(

            1,

            e.clientX / trackWidth

          )

        );



      const newFrame =

        Math.floor(

          percent *
          totalFrames

        );



      const updatedKeyframes =

        keyframes.map(

          (keyframe)=>{

            if(

              keyframe.id ===
              keyframeId

            ){

              return {

                ...keyframe,

                frame:newFrame,

              };

            }



            return keyframe;

          }

        );



      setKeyframes(
        updatedKeyframes
      );



    }, [

      keyframes,

      totalFrames,

      setKeyframes,

    ]);



  return {

    handleDrag,

  };

}