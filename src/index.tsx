import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import "./index.css";
import { App } from "./App";
import { AppSkeleton } from "./components/AppSkeleton/AppSkeleton";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <RecoilRoot>
        <React.Suspense fallback={<AppSkeleton />}>
          <App />
        </React.Suspense>
      </RecoilRoot>
    </BrowserRouter>
  </React.StrictMode>
);
