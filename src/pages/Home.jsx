import { translations } from "../data/translations"
import Button from "../components/Button"
import { Link } from "react-router-dom"

function Home({ lang }) {
  const t = translations[lang]

  return (
    <section className="min-vh-100 d-flex align-items-center home-hero">
      <div className="container text-center">

        <h1 className="hero-title fs-1 fw-bold  mb-10">
          {t.home.title}
        </h1>

        <h2 className="hero-subtitle fs-4  fw-medium lh-base  mb-12">
          {t.home.subtitle}
        </h2>

        <p className="hero-description mx-auto lh-base fs-6  mb-12">
          {t.home.description}
        </p>

          <div className="hero-buttons d-flex justify-content-center gap-4">

            <Link to="/projects">
              <Button variant="primary">
                {t.home.projectBtn}
              </Button>
            </Link>

            <Link to="/resume">
              <Button variant="outline">
                {t.home.resumeBtn}
              </Button>
            </Link>

          </div>

      </div>
    </section>
  )
}

export default Home