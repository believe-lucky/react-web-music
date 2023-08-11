import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import store from "@/store";
import { Provider } from "react-redux";
import "./assets/css/index.css";
import "./assets/css/iconfont.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
