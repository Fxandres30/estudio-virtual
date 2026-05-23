"use client";

import {

  memo,

  useMemo,

} from "react";

import { useStudioStore }
from "../../../store/useStudioStore";

import TimelineKeyframe
from "./TimelineKeyframe";



function TimelineTrack({

  object,

}){



  const keyframes =

    useStudioStore(
      (state)=>
        state.keyframes
    );



  const objectKeyframes =
    useMemo(()=>{

      return keyframes.filter(

        (keyframe)=>

          keyframe.objectId ===
          object.id

      );

    }, [

      keyframes,

      object.id,

    ]);



  return(

    <div className="timelineTrack">



      <div className="timelineTrackLabel">

        📦 {object.name}

      </div>



      <div className="timelineTrackContent">

        {

          objectKeyframes.map(

            (keyframe)=>(

              <TimelineKeyframe

                key={keyframe.id}

                keyframe={keyframe}

              />

            )

          )

        }

      </div>

    </div>

  );

}



export default memo(
  TimelineTrack
);