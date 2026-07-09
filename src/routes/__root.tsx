import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  HeadContent,
} from "@tanstack/react-router";
import { SiteHeader, SiteFooter, FloatingCTAs } from "../components/site";

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient;
}>()({
  head: () => ({
    meta: [
      {
        title: "Name Change Expert by Home2Home Services",
      },
      {
        name: "description",
        content:
          "India's trusted legal documentation desk for Name Change, Gazette Notification, Affidavit, Newspaper Publication, PAN & Aadhaar updates.",
      },
      {
        property: "og:title",
        content: "Name Change Expert by Home2Home Services",
      },
      {
        property: "og:description",
        content:
          "India's trusted legal documentation desk for Name Change, Gazette Notification, Affidavit, Newspaper Publication, PAN & Aadhaar updates.",
      },
      {
        property: "og:url",
        content: "https://namechangeexpert.in",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        property: "og:image",
        content: "https://namechangeexpert.in/og-image.jpg",
      },
    ],
  }),
  component: RootComponent,
});

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <HeadContent />

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