import "./Navbar.css";
import AuthButtons from "@/componentes/auth/AuthButtons";

export default function Navbar() {

  return (

    <nav className="navbar">

      <div className="logoContainer">

        <div className="logoCircle"></div>

        <h1 className="logoText">
          CineVirtualAI
        </h1>

      </div>

      <div className="navLinks">

        <a href="#">Inicio</a>

        <a href="#">Demo</a>

        <a href="#">Características</a>

        <a href="#">Planes</a>

        <a href="#">Comunidad</a>

      </div>

      <div className="navButtons">

        <AuthButtons />

      </div>

    </nav>

  );

}