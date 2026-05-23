"use client";

import "./TopBar.css";

import {

  memo,

  useCallback,

  useMemo,

} from "react";

import { useStudioStore }
from "../store/useStudioStore";

import {

  selectTransformMode,

} from "../store/selectors/editorSelectors";



/* =========================
   TOOL LIST
========================= */

const TOOL_LIST = [

  {

    id:"translate",

    icon:"🖐",

    label:"Move",

  },



  {

    id:"rotate",

    icon:"🔄",

    label:"Rotate",

  },



  {

    id:"scale",

    icon:"📏",

    label:"Scale",

  },

];



function TopBar(){



  /* =========================
     STORE
  ========================= */

  const transformMode =

    useStudioStore(
      selectTransformMode
    );



  const setTransformMode =

    useStudioStore(
      (state)=>
        state.setTransformMode
    );



  /* =========================
     TOOL TOGGLE
  ========================= */

  const handleTool =
    useCallback((mode)=>{

      if(transformMode === mode){

        setTransformMode(null);

        return;

      }



      setTransformMode(mode);

    }, [

      transformMode,

      setTransformMode,

    ]);



  /* =========================
     TOOL BUTTONS
  ========================= */

  const toolButtons =
    useMemo(()=>{

      return TOOL_LIST.map((tool)=>(

        <button

          key={tool.id}

          className={`

            toolButton

            ${

              transformMode === tool.id

                ? "active"

                : ""

            }

          `}

          onClick={()=>{

            handleTool(tool.id);

          }}

        >

          {tool.icon} {tool.label}

        </button>

      ));

    }, [

      transformMode,

      handleTool,

    ]);



  return(

    <header className="topbar">



      {/* =========================
          LEFT
      ========================= */}

      <div className="topbarLeft">

        <h1>

          CineVirtualAI Studio

        </h1>

      </div>



      {/* =========================
          CENTER
      ========================= */}

      <div className="transformTools">

        {toolButtons}

      </div>



      {/* =========================
          RIGHT
      ========================= */}

      <div className="topbarButtons">



        {/* SAVE */}

        <button className="saveButton">

          💾 Save

        </button>



        {/* FINAL EXPORT */}

        <button

          className="renderButton"

          disabled

          title="Coming Soon"

        >

          🎬 Render

        </button>

      </div>

    </header>

  );

}



/* =========================
   MEMO EXPORT
========================= */

export default memo(
  TopBar
);