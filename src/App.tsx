import { Route, Routes } from "react-router-dom";
import { Resume } from './resume/resume.page';

function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      <Route path="/" element={<Resume />} />
      <Route path="resume" element={<Resume />} />
    </Routes>
  )
}

export default App
