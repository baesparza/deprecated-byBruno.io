import { Route, Routes } from "react-router-dom";
import { Home } from './home/home.page';
import { Resume } from './resume/resume.page';

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="resume" element={<Resume />} />
      </Routes>
    </main>)
}

export default App
