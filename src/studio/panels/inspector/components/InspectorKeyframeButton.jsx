"use client";

import {

  memo,

  useCallback,

} from "react";

import { useStudioStore }
from "../../../store/useStudioStore";

import {

  selectCurrentFrame,

} from "../../../store/selectors/objectSelectors";


function InspectorKeyframeButton({

  object,

}){



  const currentFrame =

    useStudioStore(
      selectCurrentFrame
    );



  const addKeyframe =

    useStudioStore(
      (state)=>
        state.addKeyframe
    );



  const handleAddKeyframe =
    useCallback(()=>{

      addKeyframe({

        objectId:
          object.id,



        frame:
          currentFrame,



        position:[
          ...object.position,
        ],



        rotation:[

          ...(object.rotation || [0,0,0]),

        ],



        scale:[

          ...(object.scale || [1,1,1]),

        ],

      });

    }, [

      object,

      currentFrame,

      addKeyframe,

    ]);



  return(

    <button

      className="addKeyframe"

      onClick={handleAddKeyframe}

    >

      ➕ Add Keyframe

    </button>

  );

}



export default memo(
  InspectorKeyframeButton
);