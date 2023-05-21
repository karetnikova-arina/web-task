import React from "react";
import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";

import { MantineProvider } from "@mantine/core";

import { store } from "./store";
import Routes from "./routes.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <MantineProvider>
        <Routes />
      </MantineProvider>
    </Provider>
  </React.StrictMode>
);
