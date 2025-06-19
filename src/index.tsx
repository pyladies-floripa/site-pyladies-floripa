import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { SpaPyladies } from "./screens/SpaPyladies";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <SpaPyladies />
  </StrictMode>,
);
