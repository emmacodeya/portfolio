import dreamImage from "../assets/Dream-Workshop-lg.jpg"
import yihsinImage from "../assets/yihsin-lg.jpg"
import yihsinImageEn from "../assets/yihsin-enlg.jpg"

export const projects = [
  {
    id: 1,
     image: {
      zh: dreamImage
    },
     zh: {
    title: "創夢工坊 專題",
    description:
      "創夢工坊是一個連結創業者與投資人的平台，提供專案展示、投資媒合與資訊交流。平台包含前台網站與後台管理系統，可管理專案資料、會員資訊與平台內容。此專案採用 React 建構前端介面，並透過 REST API 與後端服務進行資料互動。"
  },
    en: {
    title: "Dream Workshop",
    description:
      "Dream Workshop is a platform that connects entrepreneurs and investors, providing project showcases and investment matching. The system includes both a public-facing website and an admin dashboard used to manage projects, users, and platform content. The frontend is built with React and communicates with backend services through REST APIs."
  },
     tech: [
    "React",
    "React Router",
    "SCSS",
    "REST API",
    "Admin Dashboard"
  ],
    github: "https://github.com/emmacodeya/Dream-Workshop-React",
    demo: " https://emmacodeya.github.io/Dream-Workshop-React/"
  },

  {
    id: 2,
    image: {
      zh: yihsinImage,
      en: yihsinImageEn
    },
     zh: {
    title: "義歆實業股份有限公司 官方網站",
    description:
      "為義歆實業股份有限公司設計與開發企業官方網站，展示公司產品與服務。網站採用 React 建構並支援 RWD 響應式設計，提供多語系內容展示，提升企業品牌形象與線上資訊呈現。"
  },
    en: {
    title: "YiHsin Industrial Website",
    description:
      "Designed and developed the official website for YiHsin Industrial Co., Ltd. to present company products and services. The website is built with React and features responsive design and multilingual content to enhance the company's online presence."
  },
     tech: [
    "React",
    "SCSS",
    "Bootstrap",
    "Responsive Design",
    "Multi-language"
  ],
    github: "#",
    demo: "https://www.yihsinmachine.com/"
  }
]