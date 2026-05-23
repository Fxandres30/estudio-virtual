"use client";

import {

  memo,

  useMemo,

} from "react";

import { useStudioStore }
from "../../../store/useStudioStore";

import TimelineTrack
from "./TimelineTrack";



function TimelineTracks(){



  const sceneObjects =

    useStudioStore(
      (state)=>
        state.sceneObjects
    );



  const tracks =
    useMemo(()=>{

      return sceneObjects.map(

        (object)=>(

          <TimelineTrack

            key={object.id}

            object={object}

          />

        )

      );

    }, [

      sceneObjects,

    ]);



  return(

    <>

      {tracks}
    </>

  );

}



export default memo(
  TimelineTracks
);