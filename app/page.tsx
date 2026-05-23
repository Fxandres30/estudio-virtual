import "@/estilos/landing.css";

import Navbar from "@/componentes/landing/Navbar";

import Hero from "@/componentes/landing/Hero";

import Features from "@/componentes/landing/Features";

import Planes from "@/componentes/landing/Planes";

export default function Home() {

  return (

    <main className="landing">

      <div className="backgroundGlowOne"></div>

      <div className="backgroundGlowTwo"></div>

      <Navbar />

      <Hero />

      <Features />

      <Planes />

    </main>

  );

}