import profile from "../assets/證件照.jpg"
import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import Button from "../components/Button"

function About() {
  const timelineRef = useRef([])

  const thinkingItems = [
    "使用者需求分析",
    "網站架構規劃",
    "流程設計",
    "跨部門溝通"
  ]

  const skills = [
    { icon: "figma-plain", name: "Figma" },
    { icon: "react-original", name: "React" },
    { icon: "javascript-plain", name: "JavaScript" },
    { icon: "html5-plain", name: "HTML" },
    { icon: "sass-original", name: "SCSS" },
    { icon: "git-plain", name: "Git" },
    { icon: "postman-plain", name: "Postman" },
    { icon: "trello-plain", name: "Miro" }
  ]

  const journey = [
   {
      year: "2025",
      title: "義歆企業官網",
      desc: "參與企業官網建置，負責網站架構規劃、React 前端開發、多語系功能與 SEO 基礎優化。"
      },

      {
      year: "2025",
      title: "創夢工坊專題",
      desc: "參與平台型網站規劃，負責網站地圖、使用者流程、Wireframe 與前端畫面設計，建立產品規劃與網站架構能力。"
      },

      {
      year: "2022-2026",
      title: "金流營運專員",
      desc: "負責交易問題分析、異常排查、需求整理與系統驗證，並與工程團隊協作追蹤問題，累積部門合作經驗。"
      },

      {
      year: "2020-2022",
      title: "APP 產品營運企劃",
      desc: "參與區塊鏈錢包產品營運與版本規劃，協助市場研究、功能驗收測試及產品優化，開始接觸產品開發流程。"
      },

      {
      year: "2016-2020",
      title: "客服人員 / 客服小組長",
      desc: "累積第一線客戶服務經驗，負責問題分析、客訴處理、新人培訓與流程協作，培養需求理解與溝通能力。"
      }

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

        <div className="about-hero row align-items-center mb-5">

          <div className="col-lg-5 d-flex justify-content-center">

            <img
              src={profile}
              alt="Emma"
              className="about-avatar img-fluid rounded-circle shadow-lg"
            />

          </div>

          <div className="col-lg-7">

            <h1 className="fs-1 mb-3 about-title">
              莊舒婷 Emma
            </h1>

            <p className="about-text fs-6">
              具備客服管理、產品策畫與跨部門協作經驗，熟悉從使用者問題到流程改善的整理方式。<br />
              曾參與網站架構規劃、使用者流程設計與 React 前端開發，完成專題網站與企業形象網站。<br />
              目前持續學習產品規劃與 Figma，希望結合營運經驗與技術背景，朝產品專員方向發展。
            </p>
            <div className="d-flex justify-content-center justify-content-lg-start">
            <Link to="/projects">
              <Button variant="primary">查看作品</Button>
            </Link>
          </div>
          </div>

        </div>

        <div className="about-section mb-5">
          <h2 className="section-title my-lg-8 my-4">
            產品思維
          </h2>

          <div className="thinking-grid">
            {thinkingItems.map((item) => (
              <div className="thinking-card" key={item}>
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="about-section mb-5">

          <h2 className="section-title my-lg-8 my-4">
            技能
          </h2>

          <div className="skills-grid">

            {skills.map((skill, index) => (

              <div
                key={index}
                className="skill-item"
              >

                <i
                  className={`devicon-${skill.icon}`}
                ></i>

                <span>
                  {skill.name}
                </span>

              </div>

            ))}

          </div>

        </div>

        <div className="about-section">

          <h2 className="section-title mt-8">
            職涯歷程
          </h2>

          <div className="timeline">

            {journey.map((item, index) => (

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
