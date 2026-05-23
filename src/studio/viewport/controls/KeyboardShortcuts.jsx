"use client";

import { useEffect }
from "react";

import { useStudioStore }
from "../../store/useStudioStore";

export default function KeyboardShortcuts(){

  const setTransformMode =
    useStudioStore(
      (state) => state.setTransformMode
    );



  useEffect(()=>{

    const handleKeyDown = (e)=>{

      if(e.key === "g"){

        setTransformMode(
          "translate"
        );

      }



      if(e.key === "r"){

        setTransformMode(
          "rotate"
        );

      }



      if(e.key === "t"){

        setTransformMode(
          "scale"
        );

      }

    };



    window.addEventListener(
      "keydown",
      handleKeyDown
    );



    return ()=>{

      window.removeEventListener(
        "keydown",
        handleKeyDown
      );

    };

  }, []);




  return null;

}