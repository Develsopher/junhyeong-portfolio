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
    title:
      "서비스 런칭을 위해 기획, 개발, 운영의 전과정에 직접 참여하였습니다.",
    description: "3년차 개발자",
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
    des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
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
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
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
    title: "Every IDE",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/every-ide.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/vitejs.svg", "/stomp.svg"],
    link: "https://ide-frontend-six.vercel.app",
    github: "https://github.com/every-ide/IDE-FRONTEND",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
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
