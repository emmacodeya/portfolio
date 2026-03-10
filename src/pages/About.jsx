import { translations } from "../data/translations"
import profile from "../assets/證件照.jpg"
import { useEffect, useRef } from "react"

function About({ lang }) {

  const t = translations[lang]
  const timelineRef = useRef([])

  const skills = [
    { icon: "react-original", name: "React" },
    { icon: "javascript-plain", name: "JavaScript" },
    { icon: "sass-original", name: "SCSS" },
    { icon: "bootstrap-plain", name: "Bootstrap" },
    { icon: "git-plain", name: "Git" }
  ]

  useEffect(() => {

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show")
          }
        })
      },
      { threshold: 0.2 }
    )

    timelineRef.current.forEach((el) => {
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()

  }, [])

  return (

    <section className="about min-vh-100">

      <div className="container">

        {/* Profile */}

        <div className="row align-items-center mb-5">

          <div className="col-lg-5 d-flex justify-content-center">

            <img
              src={profile}
              alt="Emma"
              className="about-avatar img-fluid rounded-circle shadow-lg"
            />

          </div>

          <div className="col-lg-7">

            <h1 className="fs-1 mb-3 about-title">
              {t.about.title}
            </h1>

            <p className="about-text fs-5">
              {t.about.content}
            </p>

          </div>

        </div>


        {/* Skills */}

        <div className="about-section mb-5">

          <h2 className="section-title my-lg-8 my-4">
            {t.about.skills}
          </h2>

          <div className="skills-grid">

            {skills.map((skill, index) => (

              <div
                key={index}
                className="skill-item  p-4 rounded-4 d-flex align-items-center justify-content-center"
              >

                <i
                  className={`devicon-${skill.icon} fs-2 me-2`}
                ></i>

                <span className="fs-4">
                  {skill.name}
                </span>

              </div>

            ))}

          </div>

        </div>


        {/* Timeline */}

        <div className="about-section">

          <h2 className="section-title mt-8">
            {t.about.experience}
          </h2>

          <div className="timeline">

            {t.about.timeline.map((item, index) => (

              <div
                key={index}
                ref={(el) => (timelineRef.current[index] = el)}
                className={`timeline-item  px-5 py-4 ${
                  index % 2 === 0 ? "left" : "right"
                }`}
              >

                <div className="timeline-dot"></div>

                <div className="timeline-content p-4 rounded-4 shadow-sm">

                  <span className="timeline-year fw-semibold">
                    {item.year}
                  </span>

                  <h4 className="timeline-title my-2">
                    {item.title}
                  </h4>

                  <p className="timeline-desc">
                    {item.desc}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>

  )
}

export default About