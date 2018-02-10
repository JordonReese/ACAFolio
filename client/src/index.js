import React from "react";
import ReactDOM from "react-dom";
import AppContainer from "./AppContainer";
import "./index.css";
import store from "./store";
import {Provider} from "react-redux";

const oldFetch = window.fetch;
window.fetch = (url, settings = {}) => {
  return oldFetch(url, {...settings,headers: {...settings.headers, authorization: localStorage.getItem("token")}});
};

//CMC comment.  Testing git and Github.

ReactDOM.render(
  <Provider store={store}><AppContainer /></Provider>,
  document.getElementById("root")
);
