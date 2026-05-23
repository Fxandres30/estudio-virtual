"use client";

import {

  memo,

  useCallback,

  useRef,

} from "react";

import { useStudioStore }
from "../../store/useStudioStore";

import TimelineMarkers
from "./TimelineMarkers";

import TimelineCursor
from "./TimelineCursor";

import TimelineTracks
from "./tracks/TimelineTracks";



function TimelineTrackArea(){



  /* =========================
     REFS
  ========================= */

  const trackRef =
    useRef();



  /* =========================
     STORE
  ========================= */

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



  const setCurrentFrame =

    useStudioStore(
      (state)=>
        state.setCurrentFrame
    );



  /* =========================
     SCRUB
  ========================= */

  const handleScrub =
    useCallback((e)=>{



      if(!trackRef.current)
        return;



      const rect =

        trackRef.current
          .getBoundingClientRect();



      const x =

        e.clientX - rect.left;



      const percent =

        Math.max(

          0,

          Math.min(

            1,

            x / rect.width

          )

        );



      const frame =

        Math.floor(

          percent *
          totalFrames

        );



      setCurrentFrame(
        frame
      );



    }, [

      totalFrames,

      setCurrentFrame,

    ]);



  return(

    <div

      ref={trackRef}

      className="timelineTrackArea"

      onMouseDown={handleScrub}

      onMouseMove={(e)=>{

        if(e.buttons === 1){

          handleScrub(e);

        }

      }}

    >



      {/* =========================
          GRID
      ========================= */}

      <div className="timelineGrid">

        <TimelineMarkers

          totalFrames={totalFrames}

        />

      </div>



      {/* =========================
          CURSOR
      ========================= */}

      <TimelineCursor

        currentFrame={currentFrame}

        totalFrames={totalFrames}

      />



      {/* =========================
          TRACKS
      ========================= */}

      <TimelineTracks />



    </div>

  );

}



export default memo(
  TimelineTrackArea
);