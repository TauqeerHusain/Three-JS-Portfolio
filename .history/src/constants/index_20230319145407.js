import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  mongodb,
  git,
  figma,
  jobit,
  tripguide,
  threejs,
  meta,
  shopify,
} from "../assets";
import resturant from "../assets/resturant.png";
import metaversus from "../assets/metaversus.png";
import greenwood from "../assets/company/greenwood.png";
import mjpru from "../assets/company/mjpru.png";
import frontend from "../assets/company/frontend.png";
import gym from "../assets/gym.png";
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
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
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
    name: "Tailwind CSS",
    icon: tailwind,
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
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "High School",
    company_name: "GreenWood Sr Sec School",
    icon: greenwood,
    iconBg: "#383E56",
    date: "March 2015 - April 2016",
    points: [
      "My school life was surely a learning experience. ",
      "The confidence and motivation it gave me, I couldn’t get anywhere else. Most importantly, it is the place where I recognized my uniqueness and individuality.",
      "My school life is no less than a treasure for me which gave me invaluable joys in life.",
      "It is where I started by learning the alphabet and can now solve equations using the same. ",
    ],
  },
  {
    title: "Intermediate",
    company_name: "GreenWood Sr Sec School",
    icon: greenwood,
    iconBg: "#E6DEDD",
    date: "Mar 2017 - April 2018",
    points: [
      "My school life helped me learn about the things which were first mysterious to me.",
      "I got answers to many questions that were always at the back of my mind.",
      "It helped me gain knowledge and excel in studies.",
      "It is through my school life that I realized I have the talent of being a frontend developer.",
    ],
  },
  {
    title: "Graduation",
    company_name: "Mahatma Jyotiba Phule Rohilkhand University",
    icon: mjpru,
    iconBg: "#383E56",
    date: "Mar 2020 - Present",
    points: [
      "Talking about my college life, I had enjoyed my college life to the fullest and had some of the best college days of my life. ",
      "I was a student of one of the most reputed colleges of MJPRU University.",
      "I have completed my B.A. from there.",
      "College Life teaches us many things and builds our confidence to face the challenges and struggles in our future.",
    ],
  },
  {
    title: "Front End Developer",
    company_name: "",
    icon: frontend,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Tauqeer proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Tauqeer does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Tauqeer optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Gericht Resturant",
    description:
      "Web-based platform that allows users to Landing Page, and Fully Responsive Design and beautiful design for developers",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "React-Icons",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: resturant,
    source_code_link:
      "https://github.com/TauqeerHusain/Gericht-Resturant-Landing-Page",
  },
  {
    name: "Metaversus Madness",
    description:
      "Web application that enables users to 3D Feeling, using the NextJs and Frammer Motion and fully responsive web applications",
    tags: [
      {
        name: "NextJs",
        color: "blue-text-gradient",
      },
      {
        name: "Frammer Motion",
        color: "green-text-gradient",
      },
      {
        name: "tailwind ",
        color: "pink-text-gradient",
      },
    ],
    image: metaversus,
    source_code_link: "https://github.com/TauqeerHusain/Metaversus-Madness",
  },
  {
    name: "Golds Gym ",
    description:
      "A comprehensive Gym platform that allows users to see exercises, and perform exercises efficently",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "rest api",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: gym,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
