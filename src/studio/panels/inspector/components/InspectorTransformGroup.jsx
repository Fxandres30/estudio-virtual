"use client";

import {

  memo,

} from "react";

import InspectorInput
from "./InspectorInput";

import useInspectorTransforms
from "../hooks/useInspectorTransforms";



function InspectorTransformGroup({

  title,

  values,

  type,

  object,

}){



  const {

    updateTransform,

  } = useInspectorTransforms(
    object
  );



  return(

    <div className="propertyGroup">

      <h3>

        {title}

      </h3>



      {

        ["X","Y","Z"].map(

          (axis,index)=>(

            <InspectorInput

              key={axis}

              axis={axis}

              value={values[index]}

              onChange={(value)=>{

                updateTransform(

                  type,

                  index,

                  value

                );

              }}

            />

          )

        )

      }

    </div>

  );

}



export default memo(
  InspectorTransformGroup
);