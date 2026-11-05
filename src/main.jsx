import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./styles/style.css";
import App from "./App";
import "aos/dist/aos.css";
import { LanguageProvider } from './utils/LanguageContext';
import { Analytics } from "@vercel/analytics/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <LanguageProvider>
    <React.StrictMode>
      <App />
      <Analytics />
    </React.StrictMode>
  </LanguageProvider>
);
