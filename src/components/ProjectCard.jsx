import { Link } from "react-router-dom"
import Button from "./Button"

function ProjectCard({ project, caseStudyPath }) {
  const content = project.zh
  const image = project.image.zh

  return (
    <div className="project-card">
      <div className="project-card__image d-flex align-items-center justify-content-center">
        {image ? (
          <img
            src={image}
            alt={content.title}
          />
        ) : (
          <div className="project-card__image-placeholder">
            圖片準備中
          </div>
        )}
      </div>

      <div className="project-card__content d-flex align-items-center justify-content-center">
        <h3 className="project-card__title">
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
          {caseStudyPath && (
            <Link to={caseStudyPath}>
              <Button variant="primary">
                查看案例
              </Button>
            </Link>
          )}

          {project.github && project.github !== "#" && (
            <Button
              variant="outline"
              href={project.github}
              target="_blank"
            >
              GitHub
            </Button>
          )}

          {project.demo && project.demo !== "#" && (
            <Button
              variant="outline"
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
