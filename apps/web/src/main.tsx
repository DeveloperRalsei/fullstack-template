import React from "react";
import { MantineProvider } from "@mantine/core";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createRouter, RouterProvider } from "@tanstack/react-router";

import "@mantine/core/styles.css";
import "./styles.css";

import { routeTree } from "./routeTree.gen";
import { theme } from "./config/theme";
const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
    interface Register {
        router: typeof router;
    }
}

const queryClient = new QueryClient();

createRoot(document.getElementById("app")!).render(
    <React.StrictMode>
        <MantineProvider theme={theme} defaultColorScheme="dark">
            <QueryClientProvider client={queryClient}>
                <RouterProvider router={router} />
            </QueryClientProvider>
        </MantineProvider>
    </React.StrictMode>,
);
