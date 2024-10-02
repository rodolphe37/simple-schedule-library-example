import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { LocaleProvider } from "./appComponents/context/LocaleContext.tsx";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./appComponents/context/ThemeContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <LocaleProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </LocaleProvider>
    </ThemeProvider>
  </StrictMode>
);
