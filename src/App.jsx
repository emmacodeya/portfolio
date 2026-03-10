import { Routes, Route } from "react-router-dom"
import { useState } from "react"

import Navbar from "./components/Navbar"

import Home from "./pages/Home"
import About from "./pages/About"
import Projects from "./pages/Projects"
import Resume from "./pages/Resume"

function App() {
  const [dark, setDark] = useState(true)
  const [lang, setLang] = useState("zh")

  return (
    <div className={dark ? "app dark" : "app"}>
      <Navbar
        dark={dark}
        setDark={setDark}
        lang={lang}
        setLang={setLang}
      />

      <Routes>
      <Route index element={<Home lang={lang} />} />
      <Route path="/about" element={<About lang={lang} />} />
      <Route path="/projects" element={<Projects lang={lang} />} />
      <Route path="/resume" element={<Resume lang={lang} />} />
    </Routes>
    </div>
  )
}

export default App