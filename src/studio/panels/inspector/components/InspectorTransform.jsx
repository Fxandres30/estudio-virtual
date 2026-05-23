"use client";

import {

  memo,

} from "react";

import InspectorTransformGroup
from "./InspectorTransformGroup";



function InspectorTransform({

  object,

}){

  return(

    <>

      <InspectorTransformGroup

        title="Position"

        values={object.position}

        type="position"

        object={object}

      />



      <InspectorTransformGroup

        title="Rotation"

        values={

          object.rotation ||

          [0,0,0]

        }

        type="rotation"

        object={object}

      />



      <InspectorTransformGroup

        title="Scale"

        values={

          object.scale ||

          [1,1,1]

        }

        type="scale"

        object={object}

      />

    </>

  );

}



export default memo(
  InspectorTransform
);