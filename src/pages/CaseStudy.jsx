import { Link, useParams } from "react-router-dom"
import Button from "../components/Button"


import dreamImage from "../assets/Dream-Workshop-lg.jpg"
import yihsinImage from "../assets/義歆官網PC.jpg"
import SitemapImage from "../assets/網站地圖.jpg"
import UserFlowImage from "../assets/流程圖.jpg"
import WireframeImage from "../assets/線搞圖.jpg"




const caseStudies = {
  "dream-workshop": {
    title: "創夢工坊",
    subtitle: "創業者與投資人媒合平台",
    links: [
      {
        label: "Demo",
        url: "https://emmacodeya.github.io/Dream-Workshop-React/"
      },
      {
        label: "GitHub",
        url: "https://github.com/emmacodeya/Dream-Workshop-React"
      },
      {
        label: "Figma",
        url: "https://www.figma.com/board/KTJUWjm4gCohkoJE68edCu/%E5%89%B5%E5%A4%A2%E5%B7%A5%E5%9D%8A?node-id=0-1&t=SB1MVvVOA3VoAYbf-1"
      },
      {
        label: "Miro",
        url: "https://miro.com/welcomeonboard/T2paUzc0YzdyZ1p3QU8zeElDQUhabllVNEhFcDY1UjJEZnpSVEkzdzdUT015ZXhuanpMZENaMHRoMXZkckRuQlBRNmhkU2lRSzhHV2trTnErNXdDZVpaaTZVRlVpdHpQWVNFK2VYU3kzbVdaRHZzWWd4SkZBdXBJVUplOHBjQTZBd044SHFHaVlWYWk0d3NxeHNmeG9BPT0hdjE=?share_link_id=631981256593"
      }
    ],
    sections: [
      {
        title: "專案背景",
        content:
          "創夢工坊是一個協助創業者展示專案、讓投資人快速理解專案價值的平台。網站需要支援專案曝光、資訊瀏覽與後台管理。",
        image: dreamImage,
        imageAlt: "創夢工坊專案背景示意圖",
        imageCaption: "創夢工坊首頁截圖"
      },
      {
        title: "我的角色",
        content:
          "協助整理網站架構、規劃頁面內容、拆解使用者流程，並參與 React 前端畫面實作。"
      },
      {
        title: "網站地圖",
        content:
          "整理首頁、專案列表、專案詳情、會員登入、後台管理與專案資料維護等頁面，讓網站結構更清楚。",
        image: SitemapImage,
        imageAlt: "創夢工坊網站地圖",
        imageCaption: "創夢工坊網站地圖",
        links: [
          {
           label: "Figma 網站地圖連結",
           url: "https://www.figma.com/board/KTJUWjm4gCohkoJE68edCu/%E5%89%B5%E5%A4%A2%E5%B7%A5%E5%9D%8A?node-id=0-1&t=SB1MVvVOA3VoAYbf-1"
          }
        ]
      },
      {
        title: "使用者流程圖",
        content:
          "使用者從首頁進入專案列表，篩選感興趣的專案，閱讀詳情後進一步聯繫或收藏。管理者則從後台新增、編輯與審核專案內容。",
        image: UserFlowImage,
        imageAlt: "創夢工坊使用者流程圖",
        imageCaption: "創夢工坊使用者流程圖",
        links: [
          {
            label: "使用者流程圖連結",
            url: "https://miro.com/welcomeonboard/T2paUzc0YzdyZ1p3QU8zeElDQUhabllVNEhFcDY1UjJEZnpSVEkzdzdUT015ZXhuanpMZENaMHRoMXZkckRuQlBRNmhkU2lRSzhHV2trTnErNXdDZVpaaTZVRlVpdHpQWVNFK2VYU3kzbVdaRHZzWWd4SkZBdXBJVUplOHBjQTZBd044SHFHaVlWYWk0d3NxeHNmeG9BPT0hdjE=?share_link_id=631981256593"
          }
        ]
      },
      {
        title: "線稿圖",
        content:
          "先以資訊優先順序拆出首頁、列表頁與詳情頁區塊，確保使用者能快速理解平台用途與專案重點。",
        image: WireframeImage,
        imageAlt: "創夢工坊線稿圖",
        imageCaption: "創夢工坊線稿圖",
        links: [
           {
            label: "線搞圖連結",
            url: "https://miro.com/welcomeonboard/T2paUzc0YzdyZ1p3QU8zeElDQUhabllVNEhFcDY1UjJEZnpSVEkzdzdUT015ZXhuanpMZENaMHRoMXZkckRuQlBRNmhkU2lRSzhHV2trTnErNXdDZVpaaTZVRlVpdHpQWVNFK2VYU3kzbVdaRHZzWWd4SkZBdXBJVUplOHBjQTZBd044SHFHaVlWYWk0d3NxeHNmeG9BPT0hdjE=?share_link_id=631981256593"
          }
        ]
      }
    ]
  },
  "yihsin": {
  title: "義歆官網",
  subtitle: "企業形象網站與產品資訊呈現",
  links: [
    {
      label: "官方網站",
      url: "https://www.yihsinmachine.com/"
    },
    {
      label: "GitHub",
      url: "https://github.com/emmacodeya/YiHsin"
    }
  ],
  sections: [
    {
      title: "專案背景",
      content:
        "義歆需要一個能清楚呈現公司形象、產品項目與服務內容的官方網站，讓潛在客戶能快速理解公司業務與聯絡方式。"
    },
    {
      title: "我的角色",
      content:
        "協助整理網站內容架構，規劃首頁、產品資訊、合作案例與聯絡方式等頁面區塊，並參與 React 前端畫面開發與 RWD 調整。"
    },
    {
      title: "資訊架構整理",
      content:
        "將企業介紹、產品項目、服務流程與聯絡資訊重新整理，讓使用者進入網站後能快速判斷公司提供的服務與產品類型。"
    },
    {
      title: "RWD 與使用體驗",
      content:
        "針對桌機、平板與手機版調整版面，讓產品圖片、文字內容與導覽操作在不同裝置上都能維持清楚易讀。"
    },
    {
      title: "SEO 基礎優化",
      content:
        "協助補強網站標題、內容結構與關鍵資訊呈現，讓搜尋引擎與使用者都能更清楚理解網站主題。"
    },
    {
      title: "最終成果",
      content:
        "完成企業形象網站建置，網站能清楚展示公司服務、產品資訊與聯絡方式，並支援多裝置瀏覽。",
      image: yihsinImage,
      imageAlt: "義歆官網截圖",
      imageCaption: "義歆官網首頁。",
    }
  ]
},
  "figma-practice": {
    title: "Figma 練習",
    subtitle: "產品介面與 Prototype 練習",
    links: [
      {
        label: "Figma 連結",
        url: "https://www.figma.com/design/zISIBBIlzVzlViG3OGX6sp/%E7%B7%B4%E7%BF%92?node-id=102-3&t=M7x6liO84LB9NHhN-1"
      }
    ],
    sections: [
      {
        title: "練習目標",
        content:
        "以生鮮購物 App 為主題進行 Figma 介面練習，整理使用者從首頁瀏覽商品、查看商品列表到進入商品詳情的操作流程，並透過 Prototype 串接主要頁面。",
      }
    ]
  }
}

function CaseStudyLinks({ links }) {
  if (!links?.length) return null

  return (
    <div className="case-study-links">
      {links.map((link) => (
        <a
          href={link.url}
          key={link.label}
          target="_blank"
          rel="noopener noreferrer"
        >
          {link.label}
        </a>
      ))}
    </div>
  )
}

function CaseStudyImage({ section }) {
  if (section.image) {
    return (
      <figure className="case-study-media">
        <img src={section.image} alt={section.imageAlt} />
        {section.imageCaption && (
          <figcaption>{section.imageCaption}</figcaption>
        )}
      </figure>
    )
  }

  if (!section.imageCaption) return null

  return (
    <div className="case-study-media case-study-media--placeholder">
      <span>圖片預留區</span>
      <p>{section.imageCaption}</p>
    </div>
  )
}

function CaseStudy() {
  const { slug } = useParams()
  const study = caseStudies[slug]

  if (!study) {
    return (
      <section className="case-study min-vh-100">
        <div className="container">
          <h1>找不到專案</h1>
          <Link to="/projects">
            <Button variant="primary">回到作品集</Button>
          </Link>
        </div>
      </section>
    )
  }

  return (
    <section className="case-study min-vh-100">
      <div className="container case-study-inner">
        <Link to="/projects" className="case-study-back">
          回到作品集
        </Link>

        <header className="case-study-header">
          <p>專案案例</p>
          <h1>{study.title}</h1>
          <span>{study.subtitle}</span>
          <CaseStudyLinks links={study.links} />
        </header>

        <div className="case-study-sections">
          {study.sections.map((section) => (
            <article className="case-study-section" key={section.title}>
              <h2>{section.title}</h2>
              <p>{section.content}</p>
              <CaseStudyImage section={section} />
              <CaseStudyLinks links={section.links} />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CaseStudy
