import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { navItems } from "./nav-items";
import PageTransition from "./components/PageTransition";
import SplashScreen from "./components/SplashScreen";
import Onboarding from "./components/Onboarding";
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { ThemeProvider } from './contexts/ThemeContext';
import Login from './components/Login';
import BottomNavigation from './components/BottomNavigation';

const queryClient = new QueryClient();

const AnimatedRoutes = () => {
  const location = useLocation();
  const { user } = useAuth();

  if (!user) {
    return <Login />;
  }

  return (
    <AnimatePresence mode="wait">
      <PageTransition key={location.pathname}>
        <Routes location={location}>
          {navItems.map(({ to, page }) => (
            <Route key={to} path={to} element={page} />
          ))}
        </Routes>
      </PageTransition>
    </AnimatePresence>
  );
};

const App = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [onboardingCompleted, setOnboardingCompleted] = useState(false);

  useEffect(() => {
    const completed = localStorage.getItem('onboardingCompleted');
    if (completed) {
      setOnboardingCompleted(true);
    }
  }, []);

  const handleSplashFinish = () => {
    setShowSplash(false);
    if (!onboardingCompleted) {
      setShowOnboarding(true);
    }
  };

  const handleOnboardingComplete = () => {
    setShowOnboarding(false);
    setOnboardingCompleted(true);
    localStorage.setItem('onboardingCompleted', 'true');
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <ThemeProvider>
          <AuthProvider>
            {showSplash ? (
              <SplashScreen onFinish={handleSplashFinish} />
            ) : showOnboarding ? (
              <Onboarding onComplete={handleOnboardingComplete} />
            ) : (
              <BrowserRouter>
                <div className="pb-16">
                  <AnimatedRoutes />
                </div>
                <BottomNavigation />
              </BrowserRouter>
            )}
          </AuthProvider>
        </ThemeProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
