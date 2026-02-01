import { Switch, Route, useLocation } from "wouter";
import { useEffect } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";

// Page Imports
import Home from "@/pages/home";
import TeamsPage from "@/pages/teams";
import GalleryPage from "@/pages/gallery";
import NotFound from "@/pages/not-found";
import EventsPage from "@/pages/events";

// Component Imports
import Navbar from "@/components/Navbar";

/**
 * ScrollToTop Component
 * Ensures that when you change routes (e.g., Home -> Teams), 
 * the page starts at the very top.
 */
function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return null;
}

function Router() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* ScrollToTop helper handles window scroll on route change */}
      <ScrollToTop />
      
      {/* Navbar sits outside the Switch so it stays visible on every page */}
      <Navbar />
      
      <main className="flex-grow">
        <Switch>
          {/* Main Landing Page */}
          <Route path="/" component={Home} />
          
          {/* Teams Page */}
          <Route path="/teams" component={TeamsPage} />
          <Route path="/events" component={EventsPage} />
          {/* Gallery Page */}
          <Route path="/gallery" component={GalleryPage} />
          
          {/* Fallback 404 Page */}
          <Route component={NotFound} />
        </Switch>
      </main>

      {/* Optional: Add a global footer here if needed */}
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;