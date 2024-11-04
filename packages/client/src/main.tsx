import React from "react";
import { createTheme, MantineProvider } from "@mantine/core";
import { createRoot } from "react-dom/client";
import Router from "./router";
import "@mantine/core/styles.css";

const theme = createTheme({});

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <Router />
    </MantineProvider>
  </React.StrictMode>
);
