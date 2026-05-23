"use client";

import {

  memo,

  useMemo,

  useCallback,

} from "react";

import { useStudioStore }
from "../../../store/useStudioStore";



function TimelineKeyframe({

  keyframe,

}){



  /* =========================
     STORE
  ========================= */

  const totalFrames =

    useStudioStore(
      (state)=>
        state.totalFrames
    );



  const selectedKeyframe =

    useStudioStore(
      (state)=>
        state.selectedKeyframe
    );



  const setSelectedKeyframe =

    useStudioStore(
      (state)=>
        state.setSelectedKeyframe
    );



  /* =========================
     POSITION
  ========================= */

  const left =
    useMemo(()=>{

      return (

        keyframe.frame /

        totalFrames

      ) * 100;

    }, [

      keyframe.frame,

      totalFrames,

    ]);



  /* =========================
     SELECT
  ========================= */

  const handleSelect =
    useCallback(()=>{

      setSelectedKeyframe(

        keyframe.id

      );

    }, [

      keyframe.id,

      setSelectedKeyframe,

    ]);



  /* =========================
     ACTIVE
  ========================= */

  const isSelected =

    selectedKeyframe ===
    keyframe.id;



  return(

    <div

      className={`

        timelineKeyframe

        ${

          isSelected

            ? "selected"

            : ""

        }

      `}

      style={{

        left:`${left}%`,

      }}

      onClick={handleSelect}

    />

  );

}



export default memo(
  TimelineKeyframe
);