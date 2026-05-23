"use client";

import "./Sidebar.css";

import { usePathname }
from "next/navigation";

import { useRouter }
from "next/navigation";



export default function Sidebar() {

  const router =
    useRouter();



  const pathname =
    usePathname();



  return (

    <aside className="sidebar">

      {/* LOGO */}

      <h1 className="sidebarLogo">

        CineVirtualAI

      </h1>



      {/* MENU */}

      <div className="sidebarMenu">



        {/* STUDIO */}

        <button

          className={

            pathname === "/studio"

              ? "active"

              : ""

          }

          onClick={() =>

            router.push("/studio")

          }

        >

          🎬 Studio

        </button>



        {/* PROJECTS */}

        <button

          className={

            pathname === "/projects"

              ? "active"

              : ""

          }

          onClick={() =>

            router.push("/projects")

          }

        >

          📁 Projects

        </button>



        {/* CHARACTERS */}

        <button

          className={

            pathname === "/characters"

              ? "active"

              : ""

          }

          onClick={() =>

            router.push("/characters")

          }

        >

          🎭 Characters

        </button>



        {/* WORLDS */}

        <button

          className={

            pathname === "/worlds"

              ? "active"

              : ""

          }

          onClick={() =>

            router.push("/worlds")

          }

        >

          🌎 Worlds

        </button>



        {/* ASSETS */}

        <button

          className={

            pathname === "/assets"

              ? "active"

              : ""

          }

          onClick={() =>

            router.push("/assets")

          }

        >

          🧱 Assets

        </button>



        {/* AI TOOLS */}

        <button

          className={

            pathname === "/ai-tools"

              ? "active"

              : ""

          }

          onClick={() =>

            router.push("/ai-tools")

          }

        >

          🧠 AI Tools

        </button>

      </div>



      {/* FOOTER */}

      <div className="sidebarFooter">

        v0.1 Alpha

      </div>

    </aside>

  );

}