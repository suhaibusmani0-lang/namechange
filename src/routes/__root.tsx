import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet, createRootRouteWithContext } from "@tanstack/react-router";
import { SiteHeader, SiteFooter, FloatingCTAs } from "../components/site";

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  component: RootComponent,
});

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