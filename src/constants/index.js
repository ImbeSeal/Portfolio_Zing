import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
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
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
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
