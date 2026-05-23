"use client";

import {

  memo,

  useCallback,

} from "react";

import { useStudioStore }
from "../../store/useStudioStore";

import startStudioRecording
from "../../recording/startStudioRecording";

import stopStudioRecording
from "../../recording/stopStudioRecording";

import {

  startRecordingState,

  stopRecordingState,

} from "../../recording/recordingStore";



function TimelineControls(){



  /* =========================
     STORE
  ========================= */

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



  /* =========================
     PLAY / STOP
  ========================= */

  const handlePlay =
    useCallback(async ()=>{



      /* =========================
         STOP RECORDING
      ========================= */

      if(isPlaying){

        setIsPlaying(false);

        stopRecordingState();

        await stopStudioRecording();

        return;

      }



      /* =========================
         START RECORDING
      ========================= */

      const canvas =

        document.querySelector(
          "canvas"
        );



      if(!canvas){

        return;

      }



      await startStudioRecording(
        canvas
      );



      startRecordingState();

      setIsPlaying(true);



    }, [

      isPlaying,

      setIsPlaying,

    ]);



  return(

    <div className="timelineControls">

      <button

        className={`

          timelinePlay

          ${

            isPlaying

              ? "playing"

              : ""

          }

        `}

        onClick={handlePlay}

      >

        {

          isPlaying

            ? "⏹ Stop"

            : "▶ Play"

        }

      </button>

    </div>

  );

}



export default memo(
  TimelineControls
);