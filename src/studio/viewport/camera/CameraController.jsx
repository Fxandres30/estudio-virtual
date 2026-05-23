"use client";

import { useEffect }
from "react";

import { useStudioStore }
from "../../store/useStudioStore";

export default function CameraController({

  controlsRef,

}){

  const activeCamera =
    useStudioStore(
      (state) => state.activeCamera
    );



  const cameras =
    useStudioStore(
      (state) => state.cameras
    );



  const currentCamera =
    cameras[activeCamera];



  useEffect(()=>{

    if(!controlsRef.current)
      return;



    controlsRef.current
      .object
      .position
      .set(

        ...currentCamera.position

      );



    controlsRef.current
      .target
      .set(

        ...currentCamera.target

      );



    controlsRef.current.update();

  }, [

    activeCamera,

    currentCamera,

  ]);



  return null;

}