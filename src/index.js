import React from "react";
import ReactDOM from "react-dom";
import {RoomProvider} from "@dpapi/react";

import App from "./App";
import "./index.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <RoomProvider>
    <App />
  </RoomProvider>,
  rootElement
);
