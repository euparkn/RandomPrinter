import React from "react";
import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";
import reportWebVitals from "./reportWebVitals";
import App from "./pages/App";
import "./assets/styles/index.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>
);

reportWebVitals();
