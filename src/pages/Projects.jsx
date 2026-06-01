import { projects } from "../data/projects"
import ProjectCard from "../components/ProjectCard"

const caseStudyPaths = {
  1: "/projects/dream-workshop",
  2: "/projects/yihsin",
  3: "/projects/figma-practice" 
}

function Projects() {
  return (
    <section className="projects min-vh-100">
      <div className="container">
        <h1 className="projects-title fs-1 mb-10">
          作品集
        </h1>

        <div className="projects-list d-flex flex-column">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              caseStudyPath={caseStudyPaths[project.id]}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
