import {

  getMediaRecorder,

  getRecordedChunks,

} from "./startStudioRecording";



export default async function stopStudioRecording(){



  return new Promise((resolve)=>{



    const mediaRecorder =

      getMediaRecorder();



    if(!mediaRecorder){

      resolve(null);

      return;

    }



    /* =========================
       STOP EVENT
    ========================= */

    mediaRecorder.onstop = ()=>{



      const chunks =

        getRecordedChunks();



      /* =========================
         CREATE VIDEO
      ========================= */

      const blob =

        new Blob(

          chunks,

          {

            type:"video/webm",

          }

        );



      /* =========================
         CREATE URL
      ========================= */

      const url =

        URL.createObjectURL(
          blob
        );



      /* =========================
         DOWNLOAD
      ========================= */

      const a =
        document.createElement("a");



      a.href = url;

      a.download =
        "cinevirtualai.webm";



      a.click();



      resolve(url);

    };



    /* =========================
       STOP RECORDING
    ========================= */

    mediaRecorder.stop();

  });

}