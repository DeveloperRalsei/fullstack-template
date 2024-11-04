import React from "react";
import { createTheme, MantineProvider } from "@mantine/core";
import { createRoot } from "react-dom/client";
import Router from "./router";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

import "@mantine/core/styles.css";
import "./index.css";

const theme = createTheme({});

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <I18nextProvider i18n={i18n}>
        <Router />
      </I18nextProvider>
    </MantineProvider>
  </React.StrictMode>
);
