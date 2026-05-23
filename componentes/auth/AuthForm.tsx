"use client";

import { useState } from "react";

import { useRouter }
from "next/navigation";

import "./AuthForm.css";

import InputAuth from "./InputAuth";

import BotonesSociales from "./BotonesSociales";

import { loginUser }
from "@/servicios/auth/login";

import { registerUser }
from "@/servicios/auth/register";

export default function AuthForm() {

  const router =
    useRouter();

  /* MODE */

  const [
    mode,
    setMode
  ] = useState<
    "login" | "register"
  >("login");

  /* INPUTS */

  const [
    nombre,
    setNombre
  ] = useState("");

  const [
    email,
    setEmail
  ] = useState("");

  const [
    password,
    setPassword
  ] = useState("");

  /* LOADING */

  const [
    loading,
    setLoading
  ] = useState(false);

  /* AUTH */

  async function handleAuth(){

    try{

      setLoading(true);

      /* LOGIN */

      if(mode === "login"){

        const { error }
        = await loginUser(
          email,
          password
        );

        if(error){

          alert(error.message);

          return;

        }

      }

      /* REGISTER */

      else{

        const { error }
        = await registerUser(
          nombre,
          email,
          password
        );

        if(error){

          alert(error.message);

          return;

        }

      }

      router.push("/dashboard");

    }

    catch(err){

      console.log(err);

    }

    finally{

      setLoading(false);

    }

  }

  return (

    <section className="authFormSection">

      <div className="authFormBox">

        <h1>

          {

            mode === "login"

            ? "Iniciar Sesión"

            : "Crear Cuenta"

          }

        </h1>

        <p>

          {

            mode === "login"

            ? "Accede a tu estudio virtual."

            : "Comienza a crear cine virtual."

          }

        </p>

        <BotonesSociales />

        {

          mode === "register" && (

            <InputAuth

              placeholder="Nombre completo"

              value={nombre}

              onChange={(e)=>
                setNombre(
                  e.target.value
                )
              }

            />

          )

        }

        <InputAuth

          placeholder="Correo electrónico"

          value={email}

          onChange={(e)=>
            setEmail(
              e.target.value
            )
          }

        />

        <InputAuth

          placeholder="Contraseña"

          type="password"

          value={password}

          onChange={(e)=>
            setPassword(
              e.target.value
            )
          }

        />

        <button

          className="authSubmitButton"

          onClick={handleAuth}

        >

          {

            loading

            ? "Cargando..."

            : mode === "login"

              ? "Entrar"

              : "Crear cuenta"

          }

        </button>

        <div className="authSwitch">

          {

            mode === "login"

            ? (

              <>

                ¿No tienes cuenta?

                <span
                  onClick={() =>
                    setMode("register")
                  }
                >

                  Crear cuenta

                </span>

              </>

            )

            : (

              <>

                ¿Ya tienes cuenta?

                <span
                  onClick={() =>
                    setMode("login")
                  }
                >

                  Iniciar sesión

                </span>

              </>

            )

          }

        </div>

      </div>

    </section>

  );

}