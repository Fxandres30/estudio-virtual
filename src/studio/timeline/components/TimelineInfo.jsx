"use client";

import {

  memo,

} from "react";



function TimelineInfo({

  currentFrame,

  fps,

  currentTime,

  totalTime,

}){

  return(

    <div className="timelineInfo">

      <span>

        Frame:
        {currentFrame}

      </span>



      <span>

        FPS:
        {fps}

      </span>



      <span>

        Time:
        {currentTime}s

      </span>



      <span>

        Duration:
        {totalTime}s

      </span>

    </div>

  );

}



export default memo(
  TimelineInfo
);