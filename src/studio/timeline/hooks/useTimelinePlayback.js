"use client";

import {

  useEffect,

} from "react";

import { useStudioStore }
from "../../store/useStudioStore";



export default function
useTimelinePlayback(){



  const isPlaying =

    useStudioStore(
      (state)=>
        state.isPlaying
    );



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



  const fps =

    useStudioStore(
      (state)=>
        state.fps
    );



  const setCurrentFrame =

    useStudioStore(
      (state)=>
        state.setCurrentFrame
    );



  const setIsPlaying =

    useStudioStore(
      (state)=>
        state.setIsPlaying
    );



  useEffect(()=>{



    if(!isPlaying)
      return;



    const interval =

      setInterval(()=>{



        const nextFrame =

          currentFrame + 1;



        if(

          nextFrame >=
          totalFrames

        ){

          setIsPlaying(false);

          return;

        }



        setCurrentFrame(
          nextFrame
        );



      }, 1000 / fps);



    return ()=>{

      clearInterval(interval);

    };



  }, [

    isPlaying,

    currentFrame,

    totalFrames,

    fps,

    setCurrentFrame,

    setIsPlaying,

  ]);

}