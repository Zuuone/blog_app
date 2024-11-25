import "./App.css";
import Header from "@/components/header/header";
// import Index from "@/components/pages/test";
import "./i18n";
import { ThemeProvider } from "@/components/ui/theme-provider"; // Import ThemeProvider

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";
import Footer from "@/components/base/footer/footer";
import { supabase } from "@/supabase";
// import { useAuthContext } from "@/context/auth/hooks/useAuthContext";
import AuthGuard from "@/components/route-guards/auth";
import { useSetAtom } from "jotai";
import { userAtom } from "@/store/auth";
// import { supabase } from "@/supabase";
// import { useAuthContext } from "@/context/auth/hooks/useAuthContext";
const LazyWriteUsView = lazy(() => import("@/pages/writeUs/views/index"));
const LazyHomeView = lazy(() => import("@/layouts/default/index"));
const LazyAboutView = lazy(() => import("@/pages/aboutUs/views/index"));
const LazyLoginView = lazy(() => import("@/pages/auth/signIn/signIn"));
const LazySignUpView = lazy(() => import("@/pages/auth/signUp/signUp"));
const LazyAuthorFourView = lazy(
  () => import("@/pages/authors/author4/views/index"),
);
const LazyAuthorFiveView = lazy(
  () => import("@/pages/authors/author5/views/index"),
);
const LazyAuthorSixView = lazy(
  () => import("@/pages/authors/author6/views/index"),
);
const LazyProfileView = lazy(
  () => import("@/pages/account/view/profile/index"),
);

function App() {
  // const [, setUser] = useAtom(userAtom);
  const setUser = useSetAtom(userAtom);
  // const { handleSetUser } = useAuthContext();
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      // handleSetUser(session);
      setUser(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      console.log("Session: ", session);
      // handleSetUser(session);
      setUser(session);
    });

    return () => subscription.unsubscribe();
  }, [setUser]);
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
            path="profile"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <LazyProfileView />
              </Suspense>
            }
          />
          <Route
            path="signIn"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <AuthGuard>
                  <LazyLoginView />
                </AuthGuard>
              </Suspense>
            }
          />
          <Route
            path="signUp"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <AuthGuard>
                  <LazySignUpView />
                </AuthGuard>
              </Suspense>
            }
          />
          <Route
            path="author/4"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <LazyAuthorFourView />
              </Suspense>
            }
          />
          <Route
            path="author/5"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <LazyAuthorFiveView />
              </Suspense>
            }
          />
          <Route
            path="author/6"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <LazyAuthorSixView />
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
