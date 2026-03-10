import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import { translations } from "../data/translations"

function Navbar({ dark, setDark, lang, setLang }) {
  const t = translations[lang]
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`navbar navbar-expand-lg custom-navbar
      ${dark ? "dark" : ""}
      ${scrolled ? "scrolled" : ""}`}
    >
      <div className="container">

        {/* Logo */}
        <NavLink className="navbar-brand logo" to="/">
          {t.profile.name}
        </NavLink>

        {/* 手機 hamburger */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarMenu"
        >
          <div className="navbar-nav align-items-center gap-3">

            <NavLink className="nav-link" to="/">
              {t.nav.home}
            </NavLink>

            <NavLink className="nav-link" to="/about">
              {t.nav.about}
            </NavLink>

            <NavLink className="nav-link" to="/projects">
              {t.nav.projects}
            </NavLink>

            <NavLink className="nav-link" to="/resume">
              {t.nav.resume}
            </NavLink>

            {/* 語言 */}
            <button
              className="btn nav-btn"
              onClick={() => setLang(lang === "zh" ? "en" : "zh")}
            >
              {lang === "zh" ? "EN" : "中文"}
            </button>

            {/* Dark Mode */}
            <button
              className="btn nav-btn icon-btn"
              onClick={() => setDark(!dark)}
            >
              {dark ? (
                <i className="bi bi-brightness-high-fill"></i>
              ) : (
                <i className="bi bi-moon-fill"></i>
              )}
            </button>

          </div>
        </div>

      </div>
    </nav>
  )
}

export default Navbar