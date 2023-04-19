import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  bootstrap,
  reactjs,
  redux,
  socialmedia,
  sportify,
  profolio,
  invoice,
  olx,
  ecommerce,
  tailwind,
  nodejs,
  seja,
  python,
  mongodb,
  git,
  figma,
  docker,
  meta,
  codefeast,
  tmj,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  solidity,
  threejs,
} from "../assets";




export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Blockchain Developer",
    icon: mobile,
  },
  {
    title: "Django Developer",
    icon: backend,
  },
  {
    title: "MERN Stack Mentor",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "solidity",
    icon: solidity,
  },
];

const experiences = [
  {
    title: "MERN Developer",
    company_name: "The Mango Jelly Company",
    icon: tmj,
    iconBg: "#383E56",
    date: "January 2023 - February 2023",
    points: [
      "Developing and maintaining web applications using React.js and node.js.",
      "Integrating open AI, Js embedding , added major UI components and APIs.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "MERN Mentor",
    company_name: "CodeFeast",
    icon: codefeast,
    iconBg: "#E6DEDD",
    date: "February 2023 - present",
    points: [
      "Took classes on Mern Stack for college/passout students.",
      "Solved Queries on Mern Stack, Debugged various codes, helped students build complex projects.",
      "Took live classes at crio.do, Guvi.in and preplaced as a project of codefeast.",
      "Took seminars on Mern stack,enhanced my public speaking and communication skills.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Seja",
    icon: seja,
    iconBg: "#383E56",
    date: "February 2022 - present",
    points: [
      "Python Development and Webflow Development, Migrating website from Wix to Webflow.",
      "web scrapping with BeautifulSoup and using spacy's simple NLP pipeline.",
      "Implementing CMS from scratch.",
      "Managing daily blogs for SEO.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "SocioPedia",
    description:
      "A Social Media website made with MERN Stack and Redux. users can login/register, create post, like others' posts, add them as friends, view user’s profile and toggle the theme of the webpage from light to dark and vice versa. Integrated multer to upload the images.",
    tags: [
      {
        name: "MERN",
        color: "blue-text-gradient",
      },
      {
        name: "Redux",
        color: "pink-text-gradient",
      },
    ],
    image: socialmedia,
    source_code_link: "https://mern-socialmedia-sigma.vercel.app/",
  },
  
  {
    name: "Sportify",
    description:
      "Webapp that connects users living nearby, having interests on a common sport, can add each other as friends and see each others posts. chat with a user or join room/group based on geological location of all palyers and their interests, and plan out for a live match with other groups.",
    tags: [
      {
        name: "MENN",
        color: "blue-text-gradient",
      },
      {
        name: "Redux",
        color: "green-text-gradient",
      },
      {
        name: "Google Cloud",
        color: "pink-text-gradient",
      },
    ],
    image: sportify,
    source_code_link: "https://github.com/",
  },
  {
    name: "Olx Clone",
    description:
      "A Mern Stack Based clone of Olx where users can buy and sell products. users can login/register, list items up for sale and buy products.After buying an item/adding items up for sale the user can view them in their profile page. Integrated cloudinary to upload the images. Deployed the website on vercel.",
    tags: [
      {
        name: "MERN",
        color: "blue-text-gradient",
      },
    ],
    image: olx,
    source_code_link: "https://olx-clone-chi.vercel.app/",
  },
  {
    name: "Profolio",
    description:
      "A react based portfolio website. Integrated a model using threejs, various animation effects acheived using pure css.",
    tags: [
      {
        name: "ReactJs",
        color: "blue-text-gradient",
      },
      {
        name: "Threejs",
        color: "pink-text-gradient",
      },
    ],
    image: profolio,
    source_code_link: "https://portfolio-website-eta-rose.vercel.app/",
  },
  {
    name: "Invoice Generetor",
    description:
      "a webapp to generate invoice/bill of any purchase of a company. Built with tailwind css",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind css",
        color: "green-text-gradient",
      },
    ],
    image: invoice,
    source_code_link: "https://invoice-generator-wheat.vercel.app/",
  },
  
  {
    name: "Mi Clone",
    description:
      "A clone of MI Website made with react and react hooks.Styling acheived by pure css. Deployed on vercel.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
    ],
    image: ecommerce,
    source_code_link: "https://mi-clone-wheat.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
