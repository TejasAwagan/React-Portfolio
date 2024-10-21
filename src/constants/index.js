import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "07 June 2023 - 30 July 2023",
    role: "Web Developer",
    company: "Jolle",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Rest API", "mongoDB", "Nodejs", "Expressjs"],
  },
];

export const PROJECTS = [
  {
    title: "BookItNow ( Movie Ticket Booking System )",
    image: project1,
    description:
      "Developed a comprehensive movie ticket booking system with roles for both Admin and Local Users. Features included ticket booking, email confirmations, and password reset for users. The project implemented a secure authentication system and a responsive UI, ensuring optimal user experience across devices. MongoDB was used for data storage, with robust validation and security protocols.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Redux", "JWT Token"],
  },
  {
    title: "SignIn and SignUp Form",
    image: project2,
    description:
      "Created a user authentication system with error handling and validation to enhance security and user experience. MongoDB was integrated to store and manage user credentials, ensuring efficient data retrieval and storage.",
    technologies: ["React.js", "Node.js", "MongoDB", 'Express', "JWT Token"],
  },
  {
    title: "Matching Cards Game",
    image: project3,
    description:
      "Developed a memory matching game with essential features such as a dynamic grid layout, card flipping, timer functionality, and move counter. The project included user registration for engagement and win/lose conditions to provide a structured gaming experience​",
    technologies: ["React.js", 'HTML', "CSS", "JavaScript"],
  }
];

export const CONTACT = {
  address: "Aundh, Pune - 411007",
  phoneNo: "+91 7218292094",
  email: "tejas.awagan29@gmail.com",
};
