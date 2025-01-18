import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClientProvider } from "@tanstack/react-query";
import socket from "./socket.ts";
import queryClient from "./queryClient";
import "./index.css";
import App from "./App.tsx";

socket.on("connect", () => {
  console.log("Connected to the server:", socket.id);
});

socket.emit("message", "Hello from the client!");

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </StrictMode>
);
