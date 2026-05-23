import "./Planes.css";

export default function Planes() {

  return (

    <section className="plansSection">

      <div className="sectionTitle">

        <h2>
          Planes SaaS
        </h2>

        <p>
          Escala desde creadores individuales hasta estudios virtuales.
        </p>

      </div>

      <div className="plansGrid">

        {/* STARTER */}

        <div className="planCard">

          <h3>
            Starter
          </h3>

          <h1>
            $9
          </h1>

          <p className="planMini">

            Ideal para comenzar

          </p>

          <ul>

            <li>
              ✔ 5 renders IA
            </li>

            <li>
              ✔ Assets básicos
            </li>

            <li>
              ✔ 1 proyecto
            </li>

          </ul>

          <button>

            Empezar

          </button>

        </div>

        {/* PRO */}

        <div className="planCard premiumPlan">

          <div className="premiumTag">

            MÁS POPULAR

          </div>

          <h3>
            Creator Pro
          </h3>

          <h1>
            $39
          </h1>

          <p className="planMini">

            Para creadores serios

          </p>

          <ul>

            <li>
              ✔ Render ilimitado
            </li>

            <li>
              ✔ Escenarios IA
            </li>

            <li>
              ✔ Marketplace
            </li>

            <li>
              ✔ Personajes realistas
            </li>

          </ul>

          <button>

            Probar ahora

          </button>

        </div>

        {/* STUDIO */}

        <div className="planCard">

          <h3>
            Studio
          </h3>

          <h1>
            $99
          </h1>

          <p className="planMini">

            Equipos y productoras

          </p>

          <ul>

            <li>
              ✔ API privada
            </li>

            <li>
              ✔ Equipos
            </li>

            <li>
              ✔ Render 4K
            </li>

          </ul>

          <button>

            Contactar

          </button>

        </div>

      </div>

    </section>

  );

}