import React from "react";
import ReactDOM from "react-dom/client";
// import Header from "./header.jsx";
import User from "./User";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <User name="Albert" expertise="Fronted Developer" />
    <User name="Geoffroy" expertise="Back-end Developer" />
    <User name="Pauline" expertise="Full stack Developer" />
    <User name="Kenza" expertise="Full stack Developer" />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
