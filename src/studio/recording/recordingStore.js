export const recordingState = {

  isRecording:false,

  recordingStartTime:0,

};



/* =========================
   START RECORDING
========================= */

export function startRecordingState(){

  recordingState.isRecording = true;

  recordingState.recordingStartTime =

    Date.now();

}



/* =========================
   STOP RECORDING
========================= */

export function stopRecordingState(){

  recordingState.isRecording = false;

}



/* =========================
   GET RECORD TIME
========================= */

export function getRecordingTime(){



  if(

    !recordingState.isRecording

  ){

    return 0;

  }



  return Math.floor(

    (

      Date.now() -

      recordingState.recordingStartTime

    ) / 1000

  );

}