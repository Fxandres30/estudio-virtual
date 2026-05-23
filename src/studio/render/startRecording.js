export default async function startRecording(

  canvas,

  duration = 5000,

){

  /* =========================
     STREAM
  ========================= */

  const stream =

    canvas.captureStream(60);



  /* =========================
     RECORDER
  ========================= */

  const recorder =

    new MediaRecorder(

      stream,

      {

        mimeType:
          "video/webm",

      }

    );



  const chunks = [];



  recorder.ondataavailable =

    (event)=>{

      if(

        event.data.size > 0

      ){

        chunks.push(
          event.data
        );

      }

    };



  /* =========================
     STOP
  ========================= */

  recorder.onstop = ()=>{



    const blob =

      new Blob(

        chunks,

        {

          type:
            "video/webm",

        }

      );



    const url =

      URL.createObjectURL(
        blob
      );



    const a =
      document.createElement("a");



    a.href = url;

    a.download =
      "cinevirtualai.webm";



    a.click();



    URL.revokeObjectURL(
      url
    );



  };



  /* =========================
     START
  ========================= */

  recorder.start();



  setTimeout(()=>{

    recorder.stop();

  }, duration);

}