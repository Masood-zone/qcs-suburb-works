import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import "./main.css";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
