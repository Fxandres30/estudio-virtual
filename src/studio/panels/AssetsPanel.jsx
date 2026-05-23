"use client";

import "./AssetsPanel.css";

import {

  memo,

  useCallback,

  useMemo,

  useState,

} from "react";

import {

  assetsRegistry,

} from "../../../public/assets/assetsRegistry.js";

import { useStudioStore }
from "../store/useStudioStore";

import ObjectsPanel
from "./ObjectsPanel";



/* =========================
   TABS
========================= */

const PANEL_TABS = [

  {

    id:"assets",

    label:"Assets",

  },



  {

    id:"scene",

    label:"Scene",

  },

];



function AssetsPanel(){



  /* =========================
     LOCAL STATE
  ========================= */

  const [tab, setTab] =
    useState("assets");



  /* =========================
     STORE
  ========================= */

  const addObject =

    useStudioStore(
      (state)=>
        state.addObject
    );



  /* =========================
     CHANGE TAB
  ========================= */

  const handleTab =
    useCallback((newTab)=>{

      setTab(newTab);

    }, []);



  /* =========================
     ADD ASSET
  ========================= */

  const handleAddAsset =
    useCallback((asset)=>{

      addObject(asset);

    }, [

      addObject,

    ]);



  /* =========================
     ASSET CARDS
  ========================= */

  const assetCards =
    useMemo(()=>{

      return assetsRegistry.map((asset)=>(

        <div

          key={asset.id}



          className="assetCard"



          onClick={()=>{

            handleAddAsset(asset);

          }}

        >

          {/* =========================
              PREVIEW
          ========================= */}

          <div className="assetPreview">

            📦

          </div>



          {/* =========================
              NAME
          ========================= */}

          <span>

            {asset.name}

          </span>

        </div>

      ));

    }, [

      handleAddAsset,

    ]);



  /* =========================
     TAB BUTTONS
  ========================= */

  const tabButtons =
    useMemo(()=>{

      return PANEL_TABS.map((panelTab)=>(

        <button

          key={panelTab.id}



          className={`

            categoryButton



            ${

              tab === panelTab.id

                ? "active"

                : ""

            }

          `}



          onClick={()=>{

            handleTab(panelTab.id);

          }}

        >

          {panelTab.label}

        </button>

      ));

    }, [

      tab,

      handleTab,

    ]);



  return(

    <aside className="assetsPanel">

      {/* =========================
          TITLE
      ========================= */}

      <h2>

        Assets

      </h2>



      {/* =========================
          CATEGORIES
      ========================= */}

      <div className="categories">

        {tabButtons}

      </div>



      {/* =========================
          ASSETS TAB
      ========================= */}

      {

        tab === "assets" && (

          <div className="assetsList">

            {assetCards}

          </div>

        )

      }



      {/* =========================
          SCENE TAB
      ========================= */}

      {

        tab === "scene" && (

          <ObjectsPanel />

        )

      }

    </aside>

  );

}



/* =========================
   MEMO EXPORT
========================= */

export default memo(
  AssetsPanel
);