import { translations } from "../data/translations"
import Button from "../components/Button"

function Resume({ lang }) {
  const t = translations[lang]

  return (
    <section className="resume min-vh-100">
      <div className="container resume-inner">

        <h1 className="resume-title text-center">
          {t.resume.title}
        </h1>

        {/* 基本資料 */}
        <div className="resume-block">
          <h3 className="resume-block-title">
            {t.resume.profileTitle}
          </h3>

          <p className="resume-text">
            {t.resume.profileContent}
          </p>

          <div className="resume-contact">
            <Button
              variant="outline"
              href={`mailto:${t.resume.contactInfo.email}`}
            >
              Email
            </Button>

            <Button
              variant="primary"
              href={t.resume.contactInfo.gitHub}
              target="_blank"
            >
              GitHub
            </Button>
          </div>
        </div>

        {/* 職涯目標 */}
        <div className="resume-block">
          <h3 className="resume-block-title">
            {t.resume.objectiveTitle}
          </h3>

          <p className="resume-text resume-preline">
            {t.resume.objectiveContent}
          </p>
        </div>

        {/* 技能 */}
        <div className="resume-block">
          <h3 className="resume-block-title">
            {t.resume.skillsTitle}
          </h3>

          <div className="resume-skills">
            {t.resume.skills?.map((skill, index) => (
              <span key={index} className="resume-skill-tag">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* 專案經驗 */}
        <div className="resume-block">
          <h3 className="resume-block-title">
            {t.resume.projectsTitle}
          </h3>

          <p className="resume-text resume-preline">
            {t.resume.projectsContent}
          </p>
        </div>

        {/* 工作經歷 */}
        <div className="resume-block">
          <h3 className="resume-block-title">
            {t.resume.workTitle}
          </h3>

          <p className="resume-text resume-preline">
            {t.resume.workContent}
          </p>
        </div>

      </div>
    </section>
  )
}

export default Resume