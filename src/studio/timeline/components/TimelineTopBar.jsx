"use client";

import {

  memo,

} from "react";

import { useStudioStore }
from "../../store/useStudioStore";

import TimelineControls
from "./TimelineControls";

import TimelineInfo
from "./TimelineInfo";



function TimelineTopBar(){



  const currentFrame =

    useStudioStore(
      (state)=>
        state.currentFrame
    );



  const totalFrames =

    useStudioStore(
      (state)=>
        state.totalFrames
    );



  const fps =

    useStudioStore(
      (state)=>
        state.fps
    );



  const isPlaying =

    useStudioStore(
      (state)=>
        state.isPlaying
    );



  const setIsPlaying =

    useStudioStore(
      (state)=>
        state.setIsPlaying
    );



  const currentTime =

    (currentFrame / fps)
      .toFixed(2);



  const totalTime =

    (totalFrames / fps)
      .toFixed(2);



  return(

    <div className="timelineTop">

      <TimelineControls

        isPlaying={isPlaying}

        handlePlay={()=>{

          setIsPlaying(
            !isPlaying
          );

        }}

      />



      <TimelineInfo

        currentFrame={currentFrame}

        fps={fps}

        currentTime={currentTime}

        totalTime={totalTime}

      />

    </div>

  );

}



export default memo(
  TimelineTopBar
);