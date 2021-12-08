import { HelmetProvider } from "react-helmet-async";
import { Route, Routes } from "react-router-dom";
import { AllProjectsPage } from './pages/all-projects.page';
import { Home } from "./pages/home/home.page";
import { Resume } from './pages/resume/resume.page';

function App() {
  return (
    <HelmetProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/" element={<Resume />} /> */}
        <Route path="resume" element={<Resume />} />
        <Route path="all-projects" element={<AllProjectsPage />} />
      </Routes>
    </HelmetProvider>
  )
}

export default App
