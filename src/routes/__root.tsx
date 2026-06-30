import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { SiteHeader, SiteFooter, FloatingCTAs } from "../components/site";

// Importing the favicon asset dynamically since there is no public folder
import faviconAsset from "../assets/favicon.png";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4 font-sans">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-black text-slate-900">404</h1>
        <h2 className="mt-4 text-xl font-bold text-slate-800">Page Not Found</h2>
        <p className="mt-2 text-sm text-slate-500 font-medium leading-relaxed">
          The legal pathway or documentation registry layout you are searching for does not exist or has been relocated.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-6 py-3 text-sm font-bold text-white shadow-md hover:bg-indigo-500 transition-colors"
          >
            Return to Home Terminal
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4 font-sans">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-bold tracking-tight text-slate-900">
          Application Interface Execution Fault
        </h1>
        <p className="mt-2 text-sm text-slate-500 font-medium leading-relaxed">
          An unhandled computational mismatch occurred on our end. Please refresh the diagnostic layout or head back to the main console.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-6 py-3 text-sm font-bold text-white shadow-md hover:bg-indigo-500 transition-colors"
          >
            Retry Execution
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-bold text-slate-700 shadow-sm hover:bg-slate-50 transition-colors"
          >
            Go Home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Name Change Expert Delhi | Official Gazette Notification Platform" },
      { name: "description", content: "Expert legal name change and central government gazette notification consultancy services." },
      { name: "author", content: "Zarnetic" },
      { property: "og:title", content: "Name Change Expert Delhi | Gazette Services" },
      { property: "og:description", content: "Expert legal name change and central government gazette notification consultancy services." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", href: faviconAsset }, // Injecting favicon directly into head bundle
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col bg-slate-50">
        <SiteHeader />
        <main className="flex-grow">
          <Outlet />
        </main>
        <SiteFooter />
        <FloatingCTAs />
      </div>
    </QueryClientProvider>
  );
}