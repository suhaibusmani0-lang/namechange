type zarneticErrorOptions = {
  mechanism?: "manual" | "onerror" | "unhandledrejection" | "react_error_boundary";
  handled?: boolean;
  severity?: "error" | "warning" | "info";
};

type zarneticEvents = {
  captureException?: (
    error: unknown,
    context?: Record<string, unknown>,
    options?: zarneticErrorOptions,
  ) => void;
};

declare global {
  interface Window {
    __zarneticEvents?: zarneticEvents;
  }
}

export function reportzarneticError(error: unknown, context: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  window.__zarneticEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context,
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error",
    },
  );
}
