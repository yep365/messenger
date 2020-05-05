import React from "react";
import { Route } from "react-router-dom";

import { RegisterForm, LoginForm } from "../../modules";
import { CheckInfo } from "./components";
import "./Auth.scss";

const Auth = () => {
  return (
    <section className="auth">
      <div className="auth__content">
        <Route exact path={["/", "/signin"]} component={LoginForm} />
        <Route exact path="/signup" component={RegisterForm} />
        <Route exact path="/signup/verify" component={CheckInfo} />
      </div>
    </section>
  );
};

export default Auth;
