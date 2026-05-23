"use client";

import "./ObjectsPanel.css";

import {

  memo,

  useMemo,

} from "react";

import {
  useStudioStore
} from "../store/useStudioStore";



function ObjectsPanel(){



  /* =========================
     STORE
  ========================= */

  const sceneObjects = useStudioStore(
    (state)=>state.sceneObjects
  );



  const removeObject = useStudioStore(
    (state)=>state.removeObject
  );



  const selectObject = useStudioStore(
    (state)=>state.selectObject
  );



  const selectedObject = useStudioStore(
    (state)=>state.selectedObject
  );



  /* =========================
     ICONS
  ========================= */

  const getObjectIcon =
    useMemo(()=>{

      return (type)=>{

        switch(type){

          case "character":
            return "👤";

          case "vehicle":
            return "🚗";

          case "camera":
            return "🎥";

          case "light":
            return "💡";

          case "environment":
            return "🌍";

          default:
            return "📦";

        }

      };

    }, []);



  return(

    <aside className="objectsPanel">



      {/* =========================
          TITLE
      ========================= */}

      <div className="objectsHeader">

        <h2>

          Scene Objects

        </h2>



        <span className="objectsCount">

          {sceneObjects.length}

        </span>

      </div>



      {/* =========================
          OBJECTS
      ========================= */}

      <div className="objectsList">

        {

          sceneObjects.map((object)=>(

            <div

              key={object.id}

              className={`

                objectCard

                ${

                  selectedObject === object.id

                    ? "active"

                    : ""

                }

              `}

            >



              {/* =========================
                  OBJECT INFO
              ========================= */}

              <div

                className="objectInfo"

                onClick={()=>{

                  selectObject(
                    object.id
                  );

                }}

              >



                <div className="preview">

                  {

                    getObjectIcon(
                      object.type
                    )

                  }

                </div>



                <div className="objectMeta">

                  <span className="objectName">

                    {object.name}

                  </span>



                  <span className="objectType">

                    {

                      object.type ||

                      "object"

                    }

                  </span>

                </div>

              </div>



              {/* =========================
                  ACTIONS
              ========================= */}

              <div className="objectActions">



                <button

                  className="editBtn"

                  onClick={()=>{

                    selectObject(
                      object.id
                    );

                  }}

                >

                  ✏️

                </button>



                <button

                  className="deleteBtn"

                  onClick={()=>{

                    removeObject(
                      object.id
                    );

                  }}

                >

                  🗑️

                </button>

              </div>

            </div>

          ))

        }

      </div>

    </aside>

  );

}



export default memo(
  ObjectsPanel
);