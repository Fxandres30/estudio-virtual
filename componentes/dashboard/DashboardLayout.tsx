"use client";

import "./DashboardLayout.css";

import Sidebar from "./Sidebar";

import Topbar from "./Topbar";

import ModulesGrid from "./ModulesGrid";

export default function DashboardLayout() {

  return (

    <main className="dashboard">

      <Sidebar />

      <section className="dashboardContent">

        <Topbar />

        <ModulesGrid />

      </section>

    </main>

  );

}