import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

const oldFetch = window.fetch;
window.fetch = function fetch(url, settings) {
  const headers = Object.assign(settings ? settings.headers : {},
  {authorization: localStorage.getItem("token")});
  settings = settings || {};
  settings.headers = headers;
  return oldFetch(url, settings);
};

//CMC comment.  Testing git and Github.

ReactDOM.render(
  <App />,
  document.getElementById("root")
);
