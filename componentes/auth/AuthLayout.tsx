import "./AuthLayout.css";

import AuthVisual from "./AuthVisual";

import AuthForm from "./AuthForm";

export default function AuthLayout() {

  return (

    <main className="authPage">

      {/* LEFT */}

      <AuthVisual />

      {/* RIGHT */}

      <AuthForm />

    </main>

  );

}