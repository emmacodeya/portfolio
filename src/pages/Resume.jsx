import Button from "../components/Button"

const resume = {
  title: "履歷",
  profileTitle: "個人簡介",
  profileContent: "莊舒婷｜學習心強烈 / 跨部門溝通 / 產品規劃與前端開發經驗 / 細心負責 ",
  contactInfo: {
    email: "kkes60128angel@gmail.com",
    gitHub: "https://github.com/emmacodeya"
  },
  objectiveTitle: "求職目標",
  objectiveContent:
  "目前以產品相關為主要發展方向，過去累積客服管理與產品營運相關經驗，熟悉使用者需求整理、功能驗收、問題分析及跨部門協作流程。\n\n具備基礎前端開發能力與 Figma 操作經驗，能理解產品從需求規劃、設計到開發的流程。希望未來能在產品團隊中協助需求分析、流程優化、文件整理與專案執行，持續累積產品規劃與專案管理能力。",
  skillsTitle: "技能",
  skills: [
    "Figma",
    "Miro",
    "React",
    "JavaScript",
    "HTML5",
    "SCSS / CSS3",
    "Git / GitHub",
    "Postman"
  ],
  projectsTitle: "專案經驗",
  projectsContent:
    "創夢工坊\n協助平台型網站規劃，整理網站架構、使用者流程、Wireframe 與前端頁面實作方向。\n使用 React 建立頁面結構，並搭配 REST API 串接資料。\n\n義歆官網\n參與企業官網內容架構整理、產品資訊呈現、React 前端開發與 RWD 調整。\n協助補強多語系內容呈現與 SEO 基礎設定。",
  workTitle: "工作經驗",
  workContent:
   "APP 產品營運企劃\n參與產品營運、版本規劃、競品研究及功能驗收測試，累積產品開發流程與產品優化經驗。\n\n金流營運專員\n負責交易問題分析、需求整理、異常追蹤與系統驗證，熟悉跨部門協作與營運流程管理。\n\n客服小組長 / 客服專員\n負責第一線使用者服務、問題處理與新人培訓，培養需求分析、溝通協調與問題拆解能力。"
}

function Resume() {
  return (
    <section className="resume min-vh-100">
      <div className="container resume-inner">
        <h1 className="resume-title text-center">
          {resume.title}
        </h1>

        <div className="resume-block">
          <h3 className="resume-block-title">
            {resume.profileTitle}
          </h3>

          <p className="resume-text">
            {resume.profileContent}
          </p>

          <div className="resume-contact">
            <Button
              variant="outline"
              href={`mailto:${resume.contactInfo.email}`}
            >
              Email
            </Button>

            <Button
              variant="primary"
              href={resume.contactInfo.gitHub}
              target="_blank"
            >
              GitHub
            </Button>
          </div>
        </div>

        <div className="resume-block">
          <h3 className="resume-block-title">
            {resume.objectiveTitle}
          </h3>

          <p className="resume-text resume-preline">
            {resume.objectiveContent}
          </p>
        </div>

        <div className="resume-block">
          <h3 className="resume-block-title">
            {resume.skillsTitle}
          </h3>

          <div className="resume-skills">
            {resume.skills.map((skill) => (
              <span key={skill} className="resume-skill-tag">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="resume-block">
          <h3 className="resume-block-title">
            {resume.projectsTitle}
          </h3>

          <p className="resume-text resume-preline">
            {resume.projectsContent}
          </p>
        </div>

        <div className="resume-block">
          <h3 className="resume-block-title">
            {resume.workTitle}
          </h3>

          <p className="resume-text resume-preline">
            {resume.workContent}
          </p>
        </div>
      </div>
    </section>
  )
}

export default Resume
