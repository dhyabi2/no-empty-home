import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import { navItems } from "./nav-items";
import PageTransition from "./components/PageTransition";
import SplashScreen from "./components/SplashScreen";
import Onboarding from "./components/Onboarding";
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Login from './components/Login';
import BottomNavigation from './components/BottomNavigation';

const queryClient = new QueryClient();

const AnimatedRoutes = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleSwipe = (direction) => {
    const currentIndex = navItems.findIndex(item => item.to === location.pathname);
    if (direction === 'left' && currentIndex < navItems.length - 1) {
      navigate(navItems[currentIndex + 1].to);
    } else if (direction === 'right' && currentIndex > 0) {
      navigate(navItems[currentIndex - 1].to);
    }
  };

  if (!user) {
    return <Login />;
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, x: 300 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -300 }}
        transition={{ duration: 0.3 }}
        onPanEnd={(e, info) => {
          if (info.offset.x > 100) {
            handleSwipe('right');
          } else if (info.offset.x < -100) {
            handleSwipe('left');
          }
        }}
      >
        <Routes location={location}>
          {navItems.map(({ to, page }) => (
            <Route
              key={to}
              path={to}
              element={<PageTransition>{page}</PageTransition>}
            />
          ))}
        </Routes>
      </motion.div>
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
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
