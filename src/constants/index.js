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
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  tcl,
  treespond,
  chase,
  oxynLogo,
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
    // title: "Web Developer",
    title: "Frontend/UI Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "UI/UX Designer",
    icon: backend,
  },
  {
    // title: "Content Creator",
    title: "FullStack Developer",
    icon: creator,
  },
];

// if u add more will have more balls
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
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
 
];

const experiences = [
  {
    // change icon bgs from here
    title: " Front End / UI Developer",
    company_name: "Oxyn.io",
    icon: oxynLogo,
    iconBg: "#FFFFFF",
    date: "April 2020 - present",
    points: [
      "Involved in client-side development by leveraging React with Typescript; interacting with AXIOS based RESTful APIs.",
      "Developed a custom reusable React Components Library, ensuring consistency and efficiency in UI development.",
      "Lead UI/UX development from scratch, including wireframing, low and high fidelity employing SASS and Bootstrap 4.",
      "Involved in writing application level code to interact with APIs, Web Services using AJAX, AXIOS, and JSON.",
      "Created Responsive Designs (Mobile/Tablet/Desktop) using HTML, CSS.",
    ],
  },
  {
    title: "Front End Developer",
    company_name: "Tick-Click LLC",
    icon: tcl,
    iconBg: "#0769E0",
    date: "December 2022 - February 2023",
    points: [
      "Actively involved in all aspects of the system design. Understanding of application development lifecycle methodologies.",
      "Deployment and maintenance of all features, using materials ui and Next.JS and redesign daily events website, focusing on enhancing readability, utility, and overall UX",
      "Created cross-browser compatible and standards-compliant CSS-based page layouts.",
      "Enhanced customer engagement and platform performance through effective Ui development and collaboration with cross-functional teams.",
      "Created demos to facilitate and participate in SCRUM meetings and grooming sessions to define and score stories",
    ],
  },
  {
    title: "Front End / UI Developer",
    company_name: "Treespond",
    icon: treespond,
    iconBg: "#FFFFFF",
    date: "August 2017 - April 2020",
    points: [
      "Worked extensively on design and development of UX, UI, IA, HTML, CSS, ReactJS.",
      "Worked closely with back-end developers to find ways to push the limits of existing Web technology in service of creating the best possible user experience.",
      "Worked on Cross-Browser compatibility and fixed the bugs for several browsers.",
      "Wrote code to implement ReactJS/AJAX based application by fetching the response from backend API as a part of JSON.",
      "Interfaced with third-party vendors to customize UI/UX solutions for web verticals.",
    ],
  },
  {
    title: "UI Developer / Consultant",
    company_name: "JPMorgan Chase",
    icon: chase,
    iconBg: "#094878",
    date: "September 2015 - August 2017",
    points: [
      "Implemented and designed user interface for web based customer application.",
      "Ability to rapidly prototype interface designs in hand-coded validating, standards-compliant, and semantically-rich code and be aware of cross-browser compatibility and bugs.",
      "Understanding of application development lifecycle methodologies.",
      "Involved in write application level code to interact with APIs, Web Services using AJAX, JSON and XML.",
      "Created Responsive Designs (Mobile/Tablet/Desktop) using HTML, CSS.",
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

// here are some projects built by me, need to be change, add git urls
const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "3 Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://google.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };


// i can change sim stuff here about my exsperiance 