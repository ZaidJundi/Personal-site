/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Zaid Al-Jundi",
  title: "Hi all, I'm Zaid",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 with expertise in ASP.NET and Angular for building dynamic web applications. Proficient in both frontend and backend development, adept at creating responsive user interfaces and robust server-side functionality. Experienced in tackling diverse challenges in web development projects."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1DQ2tvSMIw5ImmBzvvVTpqkbsMjvJJYa7/view", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/ZaidJundi",
  linkedin: "https://www.linkedin.com/in/zaid-jundi-398596225/",
  gmail: "zaidjundi01@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "A talented software developer with varying levels of experience ranging from beginner to intermediate to advanced in the following areas (Code & Low Code)",
  skills: [
    emoji(
      "⚡ Developing user-friendly and clear front-end interfaces for the web using Angular."
    ),
    emoji("⚡ Designing web page interfaces using Low Code environments like wordpress."),
    emoji(
      "Constructing secure backend interfaces utilizing JWT authentication."
       ),

    emoji(
      "⚡ Implementing  APIs using ASP.NET and testing using Swagger & Postman. "
    ),


    emoji(
      "⚡ Creating organized, robust, and scalable databases using Microsoft SQL."
    )
  ],

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Angular",
      fontAwesomeClassname: "fab fa-angular"
    },

    {
      skillName: "Microsoft-SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Codeigniter",
      fontAwesomeClassname: "fab fa-hotjar"
    },
    {
      skillName: "ASP.NET-Core",
      fontAwesomeClassname: "fab fa-microsoft"
    },
    {
      skillName: "Php-Nativ",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },

    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "Wordpress",
      fontAwesomeClassname: "fab fa-wordpress"
    },
    {
      skillName: "Elementor",
      fontAwesomeClassname: "fab fa-elementor"
    },
  ],
  display: true
};

const educationInfo = {
  display: true, 
  schools: [
    {
      schoolName: "Alquds University",
      logo: require("./assets/images/AlqudsLogo.png"),
      subHeader: "Bachelor in Information Technology",
      duration: "September 2020 - September 2024",
      desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: [
        "Took 8 Theoretical Semesters and Practised 24 months of training periods in software companies.",
        "Completed courses in Software Engineering, Object-Oriented Programming, Data Structures, Databases, Operating Systems, Web and Mobile Development, Software Security, and Software Quality.",
        "Honor List 2 times with Cumulative agv of 85.9"
      ]
    }
    

  ]
};

const techStack = {
  viewSkillBars: true, 
  experience: [
    {
      Stack: "Frontend/Design", 
      progressPercentage: "80%" 
    },
    {
      Stack: "Backend/APIs",
      progressPercentage: "70%"
    },
    {
      Stack: "Database",
      progressPercentage: "90%"
    },
    {
      Stack: "Low Code",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: false 
};

const workExperiences = {
  display: true, 
  experience: [
    {
      role: "Back-End Developer",
      company: "Said Khoury Information Technology Center",
      companylogo: require("./assets/images/AlqudsLogo.png"),
      date: "June 2020 – Mar 2023",
      desc: "I gained significant experience during my tenure at this institution, which is affiliated with Al-Quds University and handles all technological tasks within the university.",
      descBullets: [
        "Utilizing Oracle database for data management and storage.",
        "Working with PHP language to develop web applications.",
        "Implementing CodeIgniter framework for efficient PHP application development.",
        "Integrating and manipulating data within the WordPress content management system."

      ]
    },
    {
      role: "Software Engineer Intern",
      company: "Ijara Islamic Financing  Company",
      companylogo: require("./assets/images/Ijara.png"),
      date: "ٍSep 2023 – Present",
      desc: "I gained significant experience during my time working at this company, which is a financial institution in need of systems to expedite the financing process.",
      descBullets: [
        "Working with the Laserfiche system (low code environment).",
        "Implemented RESTful APIs using ASP.NET and ABP framework.",
        "Working with Microsoft SQL databases.",
        "Working with Angular framework for development tasks."
      ]
    },
    
  ]
};



const openSource = {
  showGithubProfile: true,
  display: true 
};


const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "Event",
  subtitle: emoji(
    "I participated in a summer school at the University of Alcalá in Madrid, Spain in PENS program. 😅"
  ),

  talks: [
    {
      title: "Program that offers numerous benefits.",
      subtitle: "A 12 days of summer in the year 2022 from July 18th to July 29th.",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "http://pens.ps/content/summer-school-2022"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Get in Touch! ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
    status:"Work status: Open for opportunities.",
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
