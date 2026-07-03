import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router";
import { getRouter } from "./router"; // <-- Yahan hum original router import kar rahe hain
import "./styles.css";

// Apni router.tsx file se properly configured router le rahe hain
const router = getRouter();

// Type safety ke liye register karna
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

// React ko DOM mein render karna
const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  );
}
