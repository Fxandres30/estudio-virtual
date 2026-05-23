"use client";

import "./Viewport3D.css";

import {

  useRef,

} from "react";

import { Canvas }
from "@react-three/fiber";

import BottomBar
from "../components/BottomBar";

import Lights
from "./scene/Lights";

import GridFloor
from "./scene/GridFloor";

import RenderSettings
from "../render/RenderSettings";

import SceneObjects
from "./scene/SceneObjects";

import OrbitController
from "./controls/OrbitController";

import CameraController
from "./camera/CameraController";

import KeyboardShortcuts
from "./controls/KeyboardShortcuts";

import { useStudioStore }
from "../store/useStudioStore";



export default function Viewport3D(){



  const controlsRef = useRef();



  /* =========================
     STORE
  ========================= */

  const clearSelection =
    useStudioStore(
      (state)=>
        state.clearSelection
    );



  return(

    <main className="viewport3D">



      {/* =========================
          CANVAS
      ========================= */}

      <div className="canvasContainer">

        <Canvas

          dpr={1}

          shadows

          gl={{

            antialias:true,

            alpha:false,



            powerPreference:
              "high-performance",

          }}

          camera={{

            position:[8,5,8],

            fov:50,

            near:0.1,

            far:1000,

          }}

        >



          {/* LIGHTS */}

          <Lights />



          {/* GRID */}

          <GridFloor />



          {/* OBJECT ENGINE */}

          <SceneObjects />



          {/* CAMERA */}

          <CameraController

            controlsRef={controlsRef}

          />



          {/* ORBIT */}

          <OrbitController

            controlsRef={controlsRef}

          />



          {/* SHORTCUTS */}

          <KeyboardShortcuts />

        </Canvas>

      </div>



      {/* UI */}

      <BottomBar

        controlsRef={controlsRef}

      />



      {/* RENDER */}

      <RenderSettings />

    </main>

  );

}