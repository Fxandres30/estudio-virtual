"use client";

import {

  memo,

  useMemo,

} from "react";



function TimelineMarkers({

  totalFrames,

}){



  const markers =
    useMemo(()=>{

      return Array.from(

        { length:20 },

        (_,index)=>{

          const left =

            (index / 19)
            * 100;



          return(

            <div

              key={index}

              className="timelineMarker"

              style={{

                left:`${left}%`,

              }}

            >

              <span>

                {

                  Math.floor(

                    (totalFrames / 19)

                    * index

                  )

                }

              </span>

            </div>

          );

        }

      );

    }, [

      totalFrames,

    ]);



  return(

    <>

      {markers}

    </>

  );

}



export default memo(
  TimelineMarkers
);