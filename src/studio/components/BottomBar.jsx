"use client";

import "./BottomBar.css";

import {

  memo,

  useCallback,

  useMemo,

} from "react";

import { useStudioStore }
from "../store/useStudioStore";

import {

  selectActiveCamera,

  selectSavedCameras,

  selectCameraAction,

  selectSaveCameraAction,

} from "../store/selectors/cameraSelectors";



/* =========================
   STATIC CAMERA LIST
========================= */

const CAMERA_LIST = [

  "cam1",

  "cam2",

  "cam3",

  "cam4",

];



function BottomBar({

  controlsRef,

}){



  /* =========================
     STORE
  ========================= */

  const activeCamera =

    useStudioStore(
      selectActiveCamera
    );



  const savedCameras =

    useStudioStore(
      selectSavedCameras
    );



  const selectCamera =

    useStudioStore(
      selectCameraAction
    );



  const saveCamera =

    useStudioStore(
      selectSaveCameraAction
    );



  /* =========================
     SAVE CAMERA
  ========================= */

  const handleSaveCamera =
    useCallback(()=>{

      if(!controlsRef.current)
        return;



      const cameraPosition = [

        controlsRef.current
          .object
          .position
          .x,



        controlsRef.current
          .object
          .position
          .y,



        controlsRef.current
          .object
          .position
          .z,

      ];



      const target = [

        controlsRef.current
          .target
          .x,



        controlsRef.current
          .target
          .y,



        controlsRef.current
          .target
          .z,

      ];



      saveCamera(

        activeCamera,

        cameraPosition,

        target

      );

    }, [

      controlsRef,

      activeCamera,

      saveCamera,

    ]);



  /* =========================
     CAMERA BUTTONS
  ========================= */

  const cameraButtons =
    useMemo(()=>{

      return CAMERA_LIST.map((cam)=>(

        <button

          key={cam}



          className={`

            cameraButton



            ${

              activeCamera === cam

                ? "active"

                : ""

            }



            ${

              savedCameras[cam]

                ? "saved"

                : ""

            }

          `}



          onClick={()=>{

            selectCamera(cam);

          }}

        >

          📷 {cam.toUpperCase()}

        </button>

      ));

    }, [

      activeCamera,

      savedCameras,

      selectCamera,

    ]);



  return(

    <footer className="bottomBar">

      {/* =========================
          TIMELINE
      ========================= */}

      <div className="timeline">

        🎬 Timeline

      </div>



      {/* =========================
          CAMERA CONTROLS
      ========================= */}

      <div className="cameras">

        {cameraButtons}



        {/* =========================
            SAVE CAMERA
        ========================= */}

        <button

          className="saveCamera"

          onClick={handleSaveCamera}

        >

          💾 Save Camera

        </button>

      </div>

    </footer>

  );

}



/* =========================
   MEMO EXPORT
========================= */

export default memo(
  BottomBar
);