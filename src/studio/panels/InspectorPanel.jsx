"use client";

import "./InspectorPanel.css";

import {

  memo,

  useMemo,

} from "react";

import { useStudioStore }
from "../store/useStudioStore";

import {

  selectSceneObjects,

  selectSelectedObject,

} from "../store/selectors/objectSelectors";

import InspectorHeader
from "./inspector/components/InspectorHeader";

import InspectorEmpty
from "./inspector/components/InspectorEmpty";

import InspectorKeyframeButton
from "./inspector/components/InspectorKeyframeButton";

import InspectorTransform
from "./inspector/components/InspectorTransform";



function InspectorPanel(){



  const sceneObjects =

    useStudioStore(
      selectSceneObjects
    );



  const selectedObject =

    useStudioStore(
      selectSelectedObject
    );



  const object =
    useMemo(()=>{

      return sceneObjects.find(

        (obj)=>

          obj.id ===
          selectedObject

      );

    }, [

      sceneObjects,

      selectedObject,

    ]);



  if(!object){

    return <InspectorEmpty />;

  }



  return(

    <aside className="inspectorPanel">

      <InspectorHeader />



      <InspectorKeyframeButton

        object={object}

      />



      <InspectorTransform

        object={object}

      />

    </aside>

  );

}



export default memo(
  InspectorPanel
);