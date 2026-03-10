import Button from "./Button"

function ProjectCard({ project, lang }) {

  const content = project[lang]

  return (
    <div className="project-card">

      {/* image */}
      <div className="project-card__image d-flex align-items-center justify-content-center">
       <img
        src={project.image[lang] || project.image.zh}
        alt={content.title}
      />
      </div>

      {/* content */}
      <div className="project-card__content d-flex align-items-center justify-content-center">

        <h3 className="project-card__title ">
          {content.title}
        </h3>

        <p className="project-card__description">
          {content.description}
        </p>

        <div className="project-card__tech">
          {project.tech.map((item, index) => (
            <span key={index} className="project-card__tag">
              {item}
            </span>
          ))}
        </div>

        <div className="project-card__buttons">

          {project.github && (
            <Button
              variant="outline"
              href={project.github}
              target="_blank"
            >
              GitHub
            </Button>
          )}

          {project.demo && (
            <Button
              variant="primary"
              href={project.demo}
              target="_blank"
            >
              Demo
            </Button>
          )}

        </div>

      </div>

    </div>
  )
}

export default ProjectCard