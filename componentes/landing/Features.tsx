import "./Features.css";
import TarjetaFeature from "./TarjetaFeature";

export default function Features() {

  return (

    <section className="featuresSection">

      <div className="sectionTitle">

        <h2>
          Herramientas cinematográficas virtuales
        </h2>

        <p>
          Construye películas completas usando IA.
        </p>

      </div>

      <div className="featuresGrid">

        <TarjetaFeature
          icono="🎥"
          titulo="Cámaras Virtuales"
          descripcion="Controla tomas cinematográficas."
        />

        <TarjetaFeature
          icono="🧠"
          titulo="IA Cinematográfica"
          descripcion="Genera escenas y movimientos."
        />

        <TarjetaFeature
          icono="🌎"
          titulo="Mundos Virtuales"
          descripcion="Crea espacios 3D realistas."
        />

        <TarjetaFeature
          icono="🎭"
          titulo="Avatares Realistas"
          descripcion="Personajes con expresiones."
        />

      </div>

    </section>

  );

}