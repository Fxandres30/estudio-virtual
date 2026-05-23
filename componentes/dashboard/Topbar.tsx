"use client";

import "./Topbar.css";

import { useRouter }
from "next/navigation";

export default function Topbar() {

  const router =
    useRouter();

  return (

    <div className="topbar">

      <div>

        <h2>
          Dashboard
        </h2>

        <p>

          Plataforma cinematográfica virtual impulsada por IA.

        </p>

      </div>

      <button
        className="newProjectButton"
        onClick={() =>
          router.push("/studio")
        }
      >

        + Nuevo Proyecto

      </button>

    </div>

  );

}