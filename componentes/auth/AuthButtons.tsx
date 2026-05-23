"use client";

import "./AuthButtons.css";

import { useRouter }
from "next/navigation";

export default function AuthButtons() {

  const router =
    useRouter();

  return (

    <div className="authButtons">

      <button

        className="authLogin"

        onClick={() =>
          router.push("/login")
        }

      >

        Iniciar Sesión

      </button>

      <button

        className="authRegister"

        onClick={() =>
          router.push("/login")
        }

      >

        Comenzar

      </button>

    </div>

  );

}