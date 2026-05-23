"use client";

import "./TimelinePanel.css";

import {

  memo,

} from "react";

import useTimelinePlayback
from "./hooks/useTimelinePlayback";

import useAnimationPlayback
from "../animation/hooks/useAnimationPlayback";

import TimelineTopBar
from "./components/TimelineTopBar";

import TimelineTrackArea
from "./components/TimelineTrackArea";



function TimelinePanel(){



  /* =========================
     PLAYBACK
  ========================= */

  useTimelinePlayback();

  useAnimationPlayback();



  return(

    <section className="timelinePanel">

      <TimelineTopBar />



      <TimelineTrackArea />

    </section>

  );

}



export default memo(
  TimelinePanel
);