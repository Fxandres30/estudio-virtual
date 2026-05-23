"use client";

import {

  memo,

} from "react";



function TimelineCursor({

  currentFrame,

  totalFrames,

}){

  return(

    <div

      className="timelineCursor"

      style={{

        left: `${
          (currentFrame /
          totalFrames) * 100
        }%`,

      }}

    />

  );

}



export default memo(
  TimelineCursor
);