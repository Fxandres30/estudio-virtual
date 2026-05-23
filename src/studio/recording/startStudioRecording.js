let mediaRecorder = null;

let recordedChunks = [];



export default async function startStudioRecording(

  canvas,

){

  /* =========================
     RESET
  ========================= */

  recordedChunks = [];



  /* =========================
     STREAM
  ========================= */

  const stream =

    canvas.captureStream(60);



  /* =========================
     RECORDER
  ========================= */

  mediaRecorder =

    new MediaRecorder(

      stream,

      {

        mimeType:
          "video/webm",

      }

    );



  /* =========================
     CHUNKS
  ========================= */

  mediaRecorder.ondataavailable =

    (event)=>{

      if(

        event.data.size > 0

      ){

        recordedChunks.push(
          event.data
        );

      }

    };



  /* =========================
     START
  ========================= */

  mediaRecorder.start();



  return mediaRecorder;

}



/* =========================
   EXPORT CHUNKS
========================= */

export function getRecordedChunks(){

  return recordedChunks;

}



/* =========================
   EXPORT RECORDER
========================= */

export function getMediaRecorder(){

  return mediaRecorder;

}