import React from "react";
import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";

import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";

import { store } from "./store";
import Routes from "./routes.tsx";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <MantineProvider
        theme={{
          fontFamily: "Wix Madefor Display, sans-serif",
          headings: { fontFamily: "Raleway, sans-serif" },
        }}
      >
        <Notifications />
        <Routes />
      </MantineProvider>
    </Provider>
  </React.StrictMode>
);
