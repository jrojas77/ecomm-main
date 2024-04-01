import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import Header from "./Header";

const App = () => (
  <div className="container">
  Student Form - Base
  <Header />

  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
