import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"

function Navbar() {
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
      className={`navbar navbar-expand-lg custom-navbar ${
        scrolled ? "scrolled" : ""
      }`}
    >
      <div className="container">
        <NavLink className="navbar-brand logo" to="/">
          莊舒婷作品集
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarMenu"
        >
          <div className="navbar-nav align-items-center gap-3">
            <NavLink className="nav-link" to="/">
              關於我
            </NavLink>

            <NavLink className="nav-link" to="/projects">
              作品集
            </NavLink>

            <NavLink className="nav-link" to="/resume">
              履歷
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
