"use client";

import "./RenderSettings.css";

import startRecording
from "../viewport/camera/CameraRecorder";

import { useStudioStore }
from "../store/useStudioStore";



export default function RenderSettings(){



  /* STORE */

  const renderSettings =
    useStudioStore(
      (state)=>
        state.renderSettings
    );



  const setRenderSettings =
    useStudioStore(
      (state)=>
        state.setRenderSettings
    );



  const showRenderSettings =
    useStudioStore(
      (state)=>
        state.showRenderSettings
    );



  const setShowRenderSettings =
    useStudioStore(
      (state)=>
        state.setShowRenderSettings
    );



  /* HIDE */

  if(!showRenderSettings){

    return null;

  }



  /* ORIENTATION */

  const handleOrientation = (
    orientation
  ) => {

    if(

      orientation ===
      "vertical"

    ){

      setRenderSettings({

        orientation:
          "vertical",

        width: 1080,

        height: 1920,

      });

    }



    if(

      orientation ===
      "horizontal"

    ){

      setRenderSettings({

        orientation:
          "horizontal",

        width: 1920,

        height: 1080,

      });

    }



    if(

      orientation ===
      "square"

    ){

      setRenderSettings({

        orientation:
          "square",

        width: 1080,

        height: 1080,

      });

    }

  };



  return(

    <div className="renderOverlay">



      <div className="renderSettings">



        {/* HEADER */}

        <div className="renderHeader">

          <h2>

            🎬 Render Settings

          </h2>



          <button

            className="closeButton"

            onClick={()=>

              setShowRenderSettings(
                false
              )

            }

          >

            ✕

          </button>

        </div>



        {/* ORIENTATION */}

        <div className="settingGroup">

          <label>

            Orientation

          </label>



          <select

            value={

              renderSettings.orientation

            }

            onChange={(e)=>

              handleOrientation(

                e.target.value

              )

            }

          >

            <option value="horizontal">

              Horizontal

            </option>



            <option value="vertical">

              Vertical

            </option>



            <option value="square">

              Square

            </option>

          </select>

        </div>



        {/* FPS */}

        <div className="settingGroup">

          <label>

            FPS

          </label>



          <select

            value={

              renderSettings.fps

            }

            onChange={(e)=>

              setRenderSettings({

                fps: Number(

                  e.target.value

                ),

              })

            }

          >

            <option value={24}>

              24 FPS

            </option>



            <option value={30}>

              30 FPS

            </option>



            <option value={60}>

              60 FPS

            </option>



            <option value={120}>

              120 FPS

            </option>

          </select>

        </div>



        {/* DURATION */}

        <div className="settingGroup">

          <label>

            Duration

          </label>



          <select

            value={

              renderSettings.duration

            }

            onChange={(e)=>

              setRenderSettings({

                duration: Number(

                  e.target.value

                ),

              })

            }

          >

            <option value={5}>

              5 Seconds

            </option>



            <option value={15}>

              15 Seconds

            </option>



            <option value={30}>

              30 Seconds

            </option>



            <option value={60}>

              60 Seconds

            </option>

          </select>

        </div>



        {/* QUALITY */}

        <div className="settingGroup">

          <label>

            Quality

          </label>



          <select

            value={

              renderSettings.quality

            }

            onChange={(e)=>

              setRenderSettings({

                quality:

                  e.target.value,

              })

            }

          >

            <option value="low">

              Low

            </option>



            <option value="medium">

              Medium

            </option>



            <option value="high">

              High

            </option>



            <option value="ultra">

              Ultra

            </option>

          </select>

        </div>



        {/* INFO */}

        <div className="renderInfo">

          <span>

            {renderSettings.width}

            x

            {renderSettings.height}

          </span>



          <span>

            {renderSettings.fps} FPS

          </span>

        </div>



        {/* START */}

        <button

          className="startRenderButton"

          onClick={() => {

            startRecording();

            setShowRenderSettings(
              false
            );

          }}

        >

          🎬 Start Render

        </button>

      </div>

    </div>

  );

}