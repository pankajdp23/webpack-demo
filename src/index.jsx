import React from "react";
import ReactDOM from "react-dom/client";
import _ from "lodash";

import "./test";
import "./index.scss";
import App from "./App";

console.log("from index.js file", _.isString("Hello"));
console.log("api_key", process.env.REACT_APP_API_KEY);
console.log("password", process.env.REACT_APP_PASSWORD);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
