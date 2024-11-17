import "./App.css";
import Header from "@/components/header/header";
// import Index from "@/components/pages/test";
import "./i18n";
import { ThemeProvider } from "@/components/theme-provider"; // Import ThemeProvider

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      {" "}
      {/* Wrap the components with ThemeProvider */}
      <Header type="light" />
      {/* <Index /> */}
    </ThemeProvider>
  );
}

export default App;
