import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "@mantine/core/styles.css";
import "@mantine/tiptap/styles.css";
import "@mantine/carousel/styles.css";
import "@mantine/dropzone/styles.css";
import { createTheme, MantineProvider } from "@mantine/core";

const root = ReactDOM.createRoot(document.getElementById("root")!);

const theme = createTheme({
  // empty
});

root.render(
  <React.StrictMode>
    <MantineProvider theme={theme}>
      <App />
    </MantineProvider>
  </React.StrictMode>
);
