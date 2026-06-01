import { Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"

import About from "./pages/About"
import Projects from "./pages/Projects"
import Resume from "./pages/Resume"
import CaseStudy from "./pages/CaseStudy"

function App() {
  return (
    <div className="app dark">
      <Navbar />

      <Routes>
        <Route index element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<CaseStudy />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </div>
  )
}

export default App
