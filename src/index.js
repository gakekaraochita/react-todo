import React from "react";
import ReactDom from "react-dom";
import { App } from "./components/App";
import "./index.css";

const Index = () => {
  return (
    <>
      <div className="container">
        <App />
      </div>
    </>
  );
};
ReactDom.render(<Index />, document.getElementById("root"));
