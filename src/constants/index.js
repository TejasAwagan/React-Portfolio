import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";


export const HERO_CONTENT = `I am a dedicated full stack developer with a passion for building robust and scalable web applications. With a strong foundation in both front-end and back-end technologies, I have developed hands-on expertise in React, Node.js, Express.js, and MongoDB. My focus is on creating solutions that not only meet the technical requirements but also deliver exceptional user experiences. I thrive on leveraging my skills to design and implement innovative applications that help businesses grow and stay ahead in a competitive landscape.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. I’ve gained expertise in a diverse range of technologies, including React, Node.js, Express.js, SQL and MongoDB. My journey began with a curiosity for how things work, and it has since evolved into a fulfilling career where I continually learn and embrace new challenges. I thrive in collaborative environments and enjoy tackling complex problems to deliver high-quality solutions. Beyond coding, I stay active, explore emerging technologies, and actively contribute to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "07 June 2023 - 30 July 2023",
    role: "Web Developer",
    company: "Jolle",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: [
      "Javascript",
      "React.js",
      "Rest API",
      "mongoDB",
      "Nodejs",
      "Expressjs",
    ],
  },
];

export const PROJECTS = [
  {
    title: "BookItNow ( Movie Ticket Booking System )",
    image: project1,
    description:
      "Developed a comprehensive movie ticket booking system with roles for both Admin and Local Users. Features included ticket booking, email confirmations, and password reset for users. The project implemented a secure authentication system and a responsive UI, ensuring optimal user experience across devices. MongoDB was used for data storage, with robust validation and security protocols.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redux",
      "JWT Token",
    ],
    link: "https://movie-booking-system-frontend.onrender.com/",
  },
  {
    title: "SignIn and SignUp Form",
    image: project2,
    description:
      "Created a user authentication system with error handling and validation to enhance security and user experience. MongoDB was integrated to store and manage user credentials, ensuring efficient data retrieval and storage.",
    technologies: ["React.js", "Node.js", "MongoDB", "Express", "JWT Token"],
  },
  {
    title: "Matching Cards Game",
    image: project3,
    description:
      "Developed a memory matching game with essential features such as a dynamic grid layout, card flipping, timer functionality, and move counter. The project included user registration for engagement and win/lose conditions to provide a structured gaming experience​",
    technologies: ["React.js", "HTML", "CSS", "JavaScript"],
    link: "https://game-match.netlify.app",
  },
  {
    title: "Role Based Access Control (RBAC) System",
    image: project4,
    description:
      "Designed and implemented a robust RBAC system using Express.js, Node.js, and JWT tokens, ensuring secure role-based authentication and authorization workflows.Utilized middleware architecture to enforce access control policies dynamically across API routes,minimizing redundant logic and improving scalability. Leveraged database schemas to manage user roles and permissions efficiently, enabling easy addition or modification of roles without impacting system stability",
    technologies: ["Node.js", "express.js", "MongoDB"],
    link: "https://github.com/TejasAwagan/React-Portfolio",
  },
];

export const CONTACT = {
  address: "Aundh, Pune - 411007",
  phoneNo: "+91 7218292094",
  email: "tejas.awagan29@gmail.com",
};
