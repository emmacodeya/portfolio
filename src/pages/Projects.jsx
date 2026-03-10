import { projects } from "../data/projects"
import ProjectCard from "../components/ProjectCard"
import { translations } from "../data/translations"

function Projects({ lang }) {
  const t = translations[lang]

  return (
    <section className="projects min-vh-100">
      <div className="container">

        <h1 className="projects-title fs-1 mb-10">
          {t.projects.title}
        </h1>

        <div className="projects-list d-flex flex-column">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              lang={lang}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Projects