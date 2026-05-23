"use client";

import { useStudioStore }
from "../../store/useStudioStore";



export default function startRecording(){



  /* STORE */

  const {

    setRecording,

    setRecordTime,

    isRecording,

    renderSettings,

  } = useStudioStore.getState();



  /* PREVENT DOUBLE */

  if(isRecording){

    return;

  }



  /* SETTINGS */

  const {

    fps,

    duration,

    quality,

    orientation,

  } = renderSettings;



  /* QUALITY */

  let bitrate = 8000000;



  if(quality === "low"){

    bitrate = 4000000;

  }



  if(quality === "medium"){

    bitrate = 8000000;

  }



  if(quality === "high"){

    bitrate = 12000000;

  }



  if(quality === "ultra"){

    bitrate = 12000000;

  }



  /* GET CANVAS */

  const canvas =

    document.querySelector(
      "canvas"
    );



  if(!canvas){

    alert("Canvas not found");

    return;

  }



  /* START UI */

  setRecording(true);

  setRecordTime(0);



  /* TIMER */

  let seconds = 0;



  const timer = setInterval(()=>{

    seconds++;

    setRecordTime(seconds);

  }, 1000);



  /* STREAM */

  const stream =

    canvas.captureStream(fps);



  /* RECORDER */

  const recorder =

    new MediaRecorder(stream, {

      mimeType:

        "video/webm",



      videoBitsPerSecond:

        bitrate,

    });



  let chunks = [];



  /* DATA */

  recorder.ondataavailable = (e)=>{

    if(e.data.size > 0){

      chunks.push(e.data);

    }

  };



  /* STOP */

  recorder.onstop = ()=>{



    clearInterval(timer);



    setRecording(false);

    setRecordTime(0);



    const blob = new Blob(

      chunks,

      {

        type: "video/webm",

      }

    );



    const url =

      URL.createObjectURL(blob);



    const a =

      document.createElement("a");



    a.href = url;



    a.download =

      `cinematic_${orientation}_${fps}fps.webm`;



    a.click();



    URL.revokeObjectURL(url);

  };



  /* START */

  recorder.start();



  /* AUTO STOP */

  setTimeout(()=>{

    recorder.stop();

  }, duration * 1000);

}