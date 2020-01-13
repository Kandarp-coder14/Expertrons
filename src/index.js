import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./main.css";
import "../src/components/sign_in";
import SignIn from "../src/components/sign_in";
import SignUp from "../src/components/sign_up";
import Header from "../src/components/header";
import Home from "./components/Home";
import Homee from "./components/home_main";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Route path="/" exact component={Homee} />

        <Route path="/home" exact component={Home} />
        {/* <Route path="/" exact component={HomeMain}> */}

        <Route path="/signup" exact component={SignUp} />
        <Route path="/signin" exact component={SignIn} />
      </div>
    </Router>
  );
}

ReactDOM.render(<App />, document.querySelector("body"));
