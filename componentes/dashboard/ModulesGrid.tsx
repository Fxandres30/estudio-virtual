import "./ModulesGrid.css";

import DashboardCard
from "./DashboardCard";

const modules = [

  {

    title:"🎬 Studio",

    desc:"Editor cinematográfico virtual.",

    route:"/studio"

  },

  {

    title:"📁 Projects",

    desc:"Gestión de proyectos virtuales.",

    route:"/projects"

  },

  {

    title:"🎭 Characters",

    desc:"Creación de personajes IA.",

    route:"/characters"

  },

  {

    title:"🌎 Worlds",

    desc:"Escenarios y mundos virtuales.",

    route:"/worlds"

  }

];

export default function ModulesGrid() {

  return (

    <div className="modulesGrid">

      {

        modules.map((module,index)=>(

          <DashboardCard
            key={index}
            module={module}
          />

        ))

      }

    </div>

  );

}