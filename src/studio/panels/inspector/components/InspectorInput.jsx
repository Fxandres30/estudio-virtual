"use client";

import {

  memo,

} from "react";



function InspectorInput({

  axis,

  value,

  onChange,

}){

  return(

    <div className="property">

      <label>

        {axis}

      </label>



      <input

        type="number"

        value={value}

        onChange={(e)=>{

          onChange(
            e.target.value
          );

        }}

      />

    </div>

  );

}



export default memo(
  InspectorInput
);