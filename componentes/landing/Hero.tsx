import BotonPrimario from "./BotonPrimario";
import "./Hero.css";
import BotonSecundario from "./BotonSecundario";

import HeroPreview from "./HeroPreview";

import HeroStats from "./HeroStats";

export default function Hero() {

  return (

    <section className="heroSection">

      <div className="heroLeft">

        <div className="heroBadge">

          IA • Cine Virtual • Personajes 3D • Render Realista

        </div>

        <h1 className="heroTitle">

          El futuro de la creación cinematográfica virtual impulsada por IA

        </h1>

        <p className="heroDescription">

          Diseña mundos virtuales, controla cámaras cinematográficas y crea escenas completas desde la nube.

        </p>

        <div className="heroButtons">

          <BotonPrimario
            texto="Empezar ahora"
          />

          <BotonSecundario
            texto="Ver Demo"
          />

        </div>

        <HeroStats />

      </div>

      <HeroPreview />

    </section>

  );

}