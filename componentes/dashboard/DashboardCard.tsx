"use client";

import "./DashboardCard.css";

import { useRouter }
from "next/navigation";

export default function DashboardCard({

  module

}: any) {

  const router =
    useRouter();

  return (

    <div

      className="dashboardCard"

      onClick={() =>
        router.push(module.route)
      }

    >

      <h3>
        {module.title}
      </h3>

      <p>
        {module.desc}
      </p>

    </div>

  );

}