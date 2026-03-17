import { createRoot } from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import App from "./App.tsx";
import { TeachingPage } from "./pages/TeachingPage.tsx";
import { ProjectsPage } from "./pages/ProjectsPage.tsx";
import { ScrollToTop } from "./components/ScrollToTop.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <HashRouter>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/teaching" element={<TeachingPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
    </Routes>
  </HashRouter>
);
