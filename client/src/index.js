import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import store from "./store";
import {Provider} from "react-redux";

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
  <Provider store={store}><App /></Provider>,
  document.getElementById("root")
);
