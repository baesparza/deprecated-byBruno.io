import { HelmetProvider } from "react-helmet-async";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/home.page";
import { Resume } from './pages/resume/resume.page';

function App() {
  return (
    <HelmetProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/" element={<Resume />} /> */}
        <Route path="resume" element={<Resume />} />
      </Routes>
    </HelmetProvider>
  )
}

export default App
