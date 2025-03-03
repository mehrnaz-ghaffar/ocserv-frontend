import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// import socket from "./socket.ts";

import "./index.css";
import "./utils/i18n.ts";
import App from "./App.tsx";

// socket.on("connect", () => {
//   console.log("Connected to the server:", socket.id);
// });

// socket.emit("message", "Hello from the client!");

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
