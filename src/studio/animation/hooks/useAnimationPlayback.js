"use client";

import {

  useEffect,

} from "react";

import { useStudioStore }
from "../../store/useStudioStore";

import getKeyframePair
from "../utils/getKeyframePair";

import interpolatePosition
from "../utils/interpolatePosition";

import interpolateRotation
from "../utils/interpolateRotation";

import interpolateScale
from "../utils/interpolateScale";



export default function useAnimationPlayback(){



  const currentFrame =

    useStudioStore(
      (state)=>
        state.currentFrame
    );



  const sceneObjects =

    useStudioStore(
      (state)=>
        state.sceneObjects
    );



  const keyframes =

    useStudioStore(
      (state)=>
        state.keyframes
    );



  const updateObject =

    useStudioStore(
      (state)=>
        state.updateObject
    );



  useEffect(()=>{



    sceneObjects.forEach(

      (object)=>{



        const objectKeyframes =

          keyframes.filter(

            (keyframe)=>

              keyframe.objectId ===
              object.id

          );



        if(

          objectKeyframes.length < 2

        ){

          return;

        }



        const {

          previous,

          next,

        } = getKeyframePair(

          objectKeyframes,

          currentFrame

        );



        if(

          !previous ||
          !next

        ){

          return;

        }



        const range =

          next.frame -
          previous.frame;



        if(range <= 0){

          return;

        }



        const localFrame =

          currentFrame -
          previous.frame;



        const progress =

          localFrame / range;



        /* =========================
           INTERPOLATION
        ========================= */

        const interpolatedPosition =

          interpolatePosition(

            previous.position,

            next.position,

            progress

          );



        const interpolatedRotation =

          interpolateRotation(

            previous.rotation ||

            [0,0,0],

            next.rotation ||

            [0,0,0],

            progress

          );



        const interpolatedScale =

          interpolateScale(

            previous.scale ||

            [1,1,1],

            next.scale ||

            [1,1,1],

            progress

          );



        /* =========================
           UPDATE OBJECT
        ========================= */

        updateObject(

          object.id,

          {

            position:
              interpolatedPosition,



            rotation:
              interpolatedRotation,



            scale:
              interpolatedScale,

          }

        );



      }

    );



  }, [

    currentFrame,

    keyframes,

    sceneObjects,

    updateObject,

  ]);

}