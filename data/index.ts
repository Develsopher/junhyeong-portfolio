export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "개발자로서 경험하고 배운점을 기록하고 있습니다.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/test5.png",
    spareImg: "",
  },
  {
    id: 2,
    title: "시간과 장소의 제한 없이 원할하게 소통할 수 있습니다.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "다양한 기술에 꾸준히 도전중입니다.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "사용자가 만족을 할 때 개발자로서 가장 큰 보람을 느낍니다.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "꾸준히 성장중인 3년차 개발자입니다.",
    description: "Web Developer",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    // img: "/b5.svg",
    img: "/test11.png",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "문의사항 또는 저에 대해 궁금하시면 언제든지 메일을 보내주세요 🙋‍♂️",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Budget Tracker",
    des: "개인 수익과 지출을 관리할 수 있는 가계부, 리액트쿼리와 차트라이브러리를 활용하여 사용자 경험을 향상시켰습니다.",
    img: "/budget-tracker.png",
    iconLists: [
      "/next.svg",
      "/tail.svg",
      "/ts.svg",
      "/reactquery.svg",
      "/prisma.svg",
    ],
    link: "https://next-buget-tracker.vercel.app",
    github: "https://github.com/Develsopher/next-buget-tracker",
  },
  {
    id: 2,
    title: "AI Jarvis",
    des: "AI 도구 제공 구독 서비스 플랫폼, AI API를 활용하고 유저별 구독관리 시스템 및 결제시스템을 도입하였습니다.",
    img: "/ai-jarvis.png",
    iconLists: [
      "/next.svg",
      "/tail.svg",
      "/ts.svg",
      "/openai.svg",
      "/prisma.svg",
    ],
    link: "https://ai-jarvis-sable.vercel.app",
    github: "https://github.com/Develsopher/ai-jarvis",
  },
  {
    id: 3,
    title: "Every IDE(팀 프로젝트)",
    des: "페어프로그래밍을 위한 IDE 및 스터디 플랫폼, 웹 토근방식의 로그인 구현과 웹 소켓 기반의 기능들을 구현하였습니다.",
    img: "/every-ide.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/vitejs.svg", "/stomp.svg"],
    link: "https://ide-frontend-six.vercel.app",
    github: "https://github.com/every-ide/IDE-FRONTEND",
  },
  {
    id: 4,
    title: "Develsopher's Portfolio",
    des: "Framer motion과 Aceternity UI를 활용하여 사용자에게 재미있는 경험을 주는것을 목표로한 개인 포트폴리오 사이트",
    img: "/my-portfolio.png",
    iconLists: [
      "/next.svg",
      "/tail.svg",
      "/ts.svg",
      "/framer.svg",
      "/three.svg",
    ],
    link: "/ui.apple.com",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/develsopher",
  },
  {
    id: 2,
    img: "/web.svg",
    link: "https://develsopher.com",
  },
  {
    id: 3,
    img: "/instagram.svg",
    link: "https://instagram.com/localhost3ooo",
  },
];
