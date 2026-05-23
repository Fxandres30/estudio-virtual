import "./studio.css";

import TopBar
from "./components/TopBar";

import TimelinePanel
from "./timeline/TimelinePanel";

import AssetsPanel
from "./panels/AssetsPanel";

import InspectorPanel
from "./panels/InspectorPanel";

import Viewport3D
from "./viewport/Viewport3D";



export default function StudioLayout(){

  return(

    <section className="studioContainer">

      <TopBar />



      <main className="studioMain">

        {/* LEFT */}

        <AssetsPanel />



        {/* CENTER */}

        <div className="studioCenter">

          <Viewport3D />

          <TimelinePanel />

        </div>



        {/* RIGHT */}

        <InspectorPanel />

      </main>

    </section>

  );

}