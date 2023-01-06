import { ChakraProvider, withDefaultColorScheme } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const theme = extendTheme(
  {
    colors: {
      gray: {
        "50": "#F2F2F2",
        "100": "#DBDBDB",
        "200": "#C4C4C4",
        "300": "#ADADAD",
        "400": "#969696",
        "500": "#808080",
        "600": "#666666",
        "700": "#4D4D4D",
        "800": "#333333",
        "900": "#1A1A1A",
      },
    },
    config: {
      initialColorMode: "dark",
    },
  },
  withDefaultColorScheme({ colorScheme: "yellow" })
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
