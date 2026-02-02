import chatify from "@/assets/images/Chatify.png";
import Portfolio from "@/assets/images/portfolio.png";


export const projects = [
  {
    id: 1,
    title: "Chat Application",
    description: [
      "Real-time messaging with Socket.io.",
      "User authentication (Signup/Login) using JWT and bcrypt.",
      "Fully responsive design using Tailwind CSS."
    ],
    github: "https://github.com/Jais-Abhi/CHATIFY.git",
    live: "https://chatify-5hwp.onrender.com/login",
    image: chatify
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: [
      "Personal portfolio website showcasing skills and projects.",
      "Optimized for performance, SEO, and mobile responsiveness.",
      "Built with Next.js, Tailwind CSS, and Framer Motion."
    ],
    github: "https://github.com/Jais-Abhi/PORTFOLIO.git",
    live: "https://portfolio-jais-abhis-projects.vercel.app/",
    image: Portfolio
  },

  
];
