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
  cyber,
  dron,
  handarbeit,
  iphone,
  keyboard,
  macbook,
  robot,
  sketch,
  spiel,
  team,
  mannheim,
  adesso,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

export const aboutText = [
  {
    subTitle: 'introduction',
    mainTitle: 'overview',
    text: "My study of business administration enables me to actively engage in IT and combine two passions. For years, nothing has brought me more joy than applying programming languages such as TypeScript, ECMA Script 6, ReactJS, various CSS frameworks, HTML, and Git, and engaging in web development and gaining practical experience. With my passion for creating visually stunning and user-friendly websites, I possess six months of practical experience in a professional context. I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!",
  },
];

export const aboutCard = [
  {
    title: 'React JS',
    icon: web,
  },
  {
    title: 'Typescript',
    icon: mobile,
  },
  {
    title: 'ECMA Script 6',
    icon: backend,
  },
  {
    title: 'Three JS',
    icon: creator,
  },
];

export const ShowcaseImgs = [
  { id: 1, src: cyber },
  { id: 2, src: dron },
  { id: 3, src: handarbeit },
  { id: 4, src: iphone },
  { id: 5, src: keyboard },
  { id: 6, src: macbook },
  { id: 7, src: robot },
  { id: 8, src: sketch },
  { id: 9, src: spiel },
  // { id: 10, src: team },
];

export const experienceText = [
  {
    subTitle: 'what I have done so far',
    mainTitle: 'experience',
  },
];

export const experiences = [
  {
    title: 'Business Administration Student',
    company_name: 'Mannehim University',
    icon: mannheim,
    iconBg: '#FF9900',
    date: 'Sep 2019 - Aug 2022',
    points: [
      'Combined her passion for programming with her studies in Business Administration, actively dedicating herself to IT and web development',
      "Bachelor's degree from the University of Mannheim, specializing in SQL database management, object-oriented programming in Java, and SAP",
      'Attended Koc University in Istanbul, focusing on Python programming, data analysis, and utilizing Jupyter Notebook',
      "Wrote a Bachelor's thesis titled 'Success Factors in Team-AI Collaboration' with a focus on IT",
    ],
  },
  {
    title: 'Frontend Developer Trainee',
    company_name: 'Adesso',
    icon: adesso,
    iconBg: '#ffffff',
    date: 'July 2022 - June 2023',
    points: [
      'Developing user interfaces and web applications using React.js and Angular.js',
      'Collaborating with UX designers to create scalable and reusable components',
      'Integrating APIs and third-party libraries to enhance application functionality',
      'Collaborated with cross-functional teams to develop and maintain web applications, contributing to the creation of high-quality products',
      'Implemented responsive and ensured cross-browser compatibility for seamless user experiences',
    ],
  },
  {
    title: 'Frontend Developer',
    company_name: 'Adesso',
    icon: adesso,
    iconBg: '#ffffff',
    date: 'June 2023 - Current',
    points: [
      'Transitioned to a position as a Frontend Developer in the Line of Business Digital Experience after Traineeship',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products',
      'Implementing responsive design and ensuring cross-browser compatibility',
      'Participating in code reviews and providing constructive feedback to other developers',
    ],
  },
];

export const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

export const worksText = [
  {
    subTitle: 'my work',
    mainTitle: 'projects',
    text: 'Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and leve demos in it. It refelects my ability to solve complex problems, work with different techs and manage projects effectiviely.',
  },
];

export const projects = [
  {
    name: '3D Three JS React',
    description:
      'In this project, you will learn to create stunning 3D graphics using ThreeJS and React Three Fiber, apply stylish and responsive designs, bring the website to life with animations using GSAP, make your code reusable and scalable, implement email functionality, and optimize performance with Suspense and Preload.',
    tags: [
      {
        name: 'react JS',
        color: 'blue-text-gradient',
      },
      {
        name: 'three JS',
        color: 'green-text-gradient',
      },
      {
        name: 'GSAP',
        color: 'pink-text-gradient',
      },
    ],
    image: tripguide,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Next JS Animation',
    description:
      'In a Next.js project, it was implemented GSAP animations using Tailwind CSS, and improved responsiveness with perfectly placed media queries while noting the challenges of tailwind.',
    tags: [
      {
        name: 'react JS',
        color: 'blue-text-gradient',
      },
      {
        name: 'nextjs',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: carrent,
    source_code_link: 'https://modern-3d-nextjs-animation-website.vercel.app/',
  },
  {
    name: 'React JS Restaurant',
    description:
      'In the ReactJS and Tailwind CSS-based project, I learned about the reusability of functional components, proper file and folder structure in React, mastering flex and grid properties, understanding the CSS BEM model, implementing animations and gradients, utilizing DataMap for data import, achieving responsive design.',
    tags: [
      {
        name: 'react JS',
        color: 'blue-text-gradient',
      },
      {
        name: 'SCSS',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: jobit,
    source_code_link: 'https://react-js-with-modern-ui-ux-hosting.vercel.app/',
  },
];

export const contactText = [
  {
    subTitle: 'get in touch',
    mainTitle: 'contact',
    text: 'Feel free to contact me',
  },
];
