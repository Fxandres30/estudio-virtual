import "./HeroPreview.css";

export default function HeroPreview() {

  return (

    <div className="heroRight">

      <div className="cinemaWindow">

        <div className="windowTop">

          <div className="dots">

            <span></span>

            <span></span>

            <span></span>

          </div>

          <p>
            cine-virtual-engine.ai
          </p>

        </div>

        <div className="scenePreview">

          <div className="previewOverlay"></div>

          <div className="cameraHud">

            <span>REC</span>

          </div>

          <div className="floatingCard floatingOne">

            Cámara Virtual

          </div>

          <div className="floatingCard floatingTwo">

            IA Render

          </div>

          <div className="floatingCard floatingThree">

            Personaje 3D

          </div>

        </div>

      </div>

    </div>

  );

}