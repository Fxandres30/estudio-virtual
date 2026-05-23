"use client";

import {

  memo,

} from "react";



function InspectorEmpty(){

  return(

    <aside className="inspectorPanel">

      <h2>

        Inspector

      </h2>



      <p>

        No object selected

      </p>

    </aside>

  );

}



export default memo(
  InspectorEmpty
);