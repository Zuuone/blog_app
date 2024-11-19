import "./App.css";
import Header from "@/components/header/header";
// import Index from "@/components/pages/test";
import "./i18n";
import { ThemeProvider } from "@/components/theme-provider"; // Import ThemeProvider

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Suspense, lazy } from "react";
import Footer from "@/components/base/footer/footer";
const LazyWriteUsView = lazy(() => import("@/pages/writeUs/views/index"));
const LazyHomeView = lazy(() => import("@/layouts/default/index"));
const LazyAboutView = lazy(() => import("@/pages/aboutUs/views/index"));
const LazyLoginView = lazy(() => import("@/pages/auth/signIn/signIn"));
const LazySignUpView = lazy(() => import("@/pages/auth/signUp/signUp"));

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Header />
        <Routes>
          <Route
            path="home"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <LazyHomeView />
              </Suspense>
            }
          />
          <Route
            path="write"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <LazyWriteUsView />
              </Suspense>
            }
          />
          <Route
            path="about"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <LazyAboutView />
              </Suspense>
            }
          />
          <Route
            path="signIn"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <LazyLoginView />
              </Suspense>
            }
          />
          <Route
            path="signUp"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <LazySignUpView />
              </Suspense>
            }
          />
          <Route path="/" element={<Navigate to="/home" />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  );
}
export default App;
