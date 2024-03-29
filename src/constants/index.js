import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  nitk,
  close,
  cee,
  cpp,
  dart,
  java,
  python,
  sql,
  bootstrap,
  css,
  git,
  html,
  ienitk,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  tailwind,
  typescript,
  threejs,
  meta,
  shopify,
  starbucks,
  tesla,
  hiregrad,
  jobit,
  tripguide,
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
    title: "Web Development",
    icon: web,
  },
  {
    title: "App Development",
    icon: mobile,
  },
  {
    title: "AI and ML",
    icon: backend,
  },
  {
    title: "Math and Algorithms",
    icon: creator,
  },
];

const technologies = [
  {
    name: "C",
    icon: cee,
  },
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "JAVA",
    icon: java,
  },
  {
    name: "Python 3",
    icon: python,
  },
  {
    name: "DART",
    icon: dart,
  },
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
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Bootstrap 5",
    icon: bootstrap,
  },
  // {
  //   name: "Tailwind CSS",
  //   icon: tailwind,
  // },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "SQL",
    icon: sql,
  },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Beginning of my Journey",
    company_name: "NITK",
    icon: nitk,
    iconBg: "#383E56",
    date: "December-2021",
    points: [
      "Joined as a fresher in ECE",
      "Dabbled into various technologies",
      "Explored domains in both Hardware in Software",
    ],
  },
  {
    title: "First exposure to a work environment",
    company_name: "IE NITK",
    icon: ienitk,
    iconBg: "#383E56",
    date: "March 2022",
    points: [
      "Selected into IT NITK though a series of interviews",
      "Applied myself along wiwth a few others into making my very first complete application.",
      "Dived deeper into Web Technologies, Data Sctructures and Algorithms, Machine Learning",
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
    name: "AlgoSimulator",
    description:
      "A visual algorithm simulator that displays how everyday Sort, Search and Greedy Algorithms work using easy to understand visual references",
    tags: [
      {
        name: "HTML-5",
        color: "blue-text-gradient",
      },
      {
        name: "CSS-3",
        color: "green-text-gradient",
      },
      {
        name: "p5.JS",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/ImbeSeal/Envision_AlgoSim",
  },
  {
    name: "Resume Classifier",
    description:
      "An application built around a KNN classifer model trained to filter through resumes (in PDF format) by scraping through the Document for keywords and mapping them to available Job Postings online",
    tags: [
      {
        name: "HTML, Bootstrap, JS",
        color: "blue-text-gradient",
      },
      {
        name: "flask.py",
        color: "green-text-gradient",
      },
      {
        name: "python",
        color: "pink-text-gradient",
      },
    ],
    image: hiregrad,
    source_code_link: "https://github.com/nithin290/ResumeClassifier",
  },
];

export { services, technologies, experiences, testimonials, projects };
