import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  gpt,
  html,
  css,
  reactjs,
  meme,
  ask,
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
    title: "React Native Developer",
    icon: mobile,
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
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  // {
  //   name: "Node JS",
  //   icon: nodejs,
  // },
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
  {
    name: "figma",
    icon: figma,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Jacob Angel",
    icon: reactjs,
    iconBg: "#383E56",
    date: "December-3-2022",
    points: [
      "Created a landing page clone for site deployment to demonstrate my front-end designing skills",
    ],
  },
  {
    title: "Javascript ",
    company_name: "Rock paper scissors",
    icon: javascript,
    iconBg: "#E6DEDD",
    date: "June-26-2023",
    points: [
      "Created an Interactive javascript app namely Rock paper scissors ",
    ],
  },
  {
    title: "ReactJs",
    company_name: "Meme-generator",
    icon: reactjs,
    iconBg: "#383E56",
    date: "Aug-2023",
    points: [
      "Created a meme-generator that fetches images using a meme API and renders it to the screen",
    ],
  },
];

// const testimonials = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/8.jpg",
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
// ];

const projects = [
  {
    name: "Clone Cloud Hosting site",
    description:
      "Web-based platform that displays cool animations and responsiveness.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS3",
        color: "green-text-gradient",
      },
    ],
    image: ask,
    source_code_link: "https://github.com/E1675ka/Cloud-hosting-website-demo",
  },
  {
    name: "GPT3 Clone website",
    description: "GPT3 landing page with responsiveness and Modern looks",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      // {
      //   name: "restapi",
      //   color: "green-text-gradient",
      // },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: gpt,
    source_code_link: "https://github.com/E1675ka/gpt-web-clone",
  },
  {
    name: "Meme-generator",
    description:
      "A Meme-generator that generates meme from a RestApi and renders it allowing the user to input the text of choice",
    tags: [
      {
        name: "ReactJs",
        color: "blue-text-gradient",
      },
      {
        name: "Memes",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: meme,
    source_code_link: "https://github.com/E1675ka/meme-generator",
  },
];

export { services, technologies, experiences, projects };
// testimonials
