"use client";

import {

  memo,

} from "react";

import { useStudioStore }
from "../../store/useStudioStore";



function GridFloor(){



  /* =========================
     STORE
  ========================= */

  const clearSelection =
    useStudioStore(
      (state)=>
        state.clearSelection
    );



  return(

    <mesh

      rotation={[-Math.PI / 2,0,0]}

      receiveShadow



      onClick={()=>{

        clearSelection();

      }}

    >



      <planeGeometry

        args={[200,200]}

      />



      <meshStandardMaterial

        color="#1a1a1a"

      />



    </mesh>

  );

}



export default memo(
  GridFloor
);