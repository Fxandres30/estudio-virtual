"use client";

import { memo }
from "react";

import Model
from "./Model";

import CharacterObject
from "../../../characters/components/CharacterObject";

import { useStudioStore }
from "../../store/useStudioStore";



function SceneObjects(){



  /* =========================
     STORE
  ========================= */

  const transformMode =
    useStudioStore(
      (state)=>
        state.transformMode
    );



  const sceneObjects =
    useStudioStore(
      (state)=>
        state.sceneObjects
    );



  const selectedObject =
    useStudioStore(
      (state)=>
        state.selectedObject
    );




  return(

    <>

      {

        sceneObjects.map((object)=>{



          /* =========================
             CHARACTER
          ========================= */

          if(

            object.type ===

            "character"

          ){

            return(

              <CharacterObject

                key={object.id}

                object={object}



                isSelected={

                  selectedObject ===
                  object.id

                }



                transformMode={
                  transformMode
                }

              />

            );

          }



          /* =========================
             DEFAULT MODEL
          ========================= */

          return(

            <Model

              key={object.id}

              object={object}



              isSelected={

                selectedObject ===
                object.id

              }



              transformMode={
                transformMode
              }

            />

          );

        })

      }

    </>

  );

}



/* =========================
   MEMO
========================= */

export default memo(
  SceneObjects
);