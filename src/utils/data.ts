import {
  type ProjectCardDataType,
  type AllProjects,
  type volunteeringDataType,
  type CourseAchievementCardDataType,
  type CompetitionCardDataType,
} from "~/types/types";

export const volunteeringData: volunteeringDataType[] = [
  {
    image: "https://i.imgur.com/SDIhsOC.png",
    title: "Development Team Lead",
    society: "UNSW MegaLAN",
    description:
      "Lead Development of two Custom Full Stack Web-Apps to Digitise MegaLAN's Stamp Rally System during my First and Second Year of University. These Apps were used at an event with 500+ attendees, hosted by 12 UNSW societies and Developed in under 3 Weeks Each. I enjoyed the challenge of learning, designing, developing and deploying/hosting a full-stack app which involved database design, frontend and backend development. I learnt 4 new frameworks to achieve the successful outcomes showcasing my ability to efficiently pick up new skills.",
    startTime: "Jun 2023",
    endTime: "Present",
  },
  {
    image: "https://i.imgur.com/saD2CLN.jpg",
    title: "Technical Director",
    society: "UNSW One Piece Society",
    description:
      "Designed and Developed a Full Stack Responsive Website with SEO and the ability to fully edit all data on the website from Discord, making the website easier to manage for future executives. Alongside this I have improved quality of life for the team by implementing a custom google script to post previews of new emails on the one piece society gmail to Discord.",
    startTime: "Mar 2023",
    endTime: "Sep 2023",
  },
  {
    image: "https://i.imgur.com/aFJ3Djr.png",
    title: "Secretary",
    society: "UNSW Rhythm Game Society",
    description:
      "I joined our society's executive team at its inception with 50 members and, within a year, orchestrated its growth to over 600 members. I improved our operations by automating a Discord verification system for non-UNSW students using Google Scripts and a custom bot as well as a discord integrated notfications system for new emails sent to the club inbox. I fostered collaborations with fellow UNSW society executives, expanding our influence and forming strategic partnerships. Additionally, I played a pivotal role in organizing and hosting our presence at four MegaLAN events and monthly meetups. My commitment to transparent governance was evident through meticulous minute-keeping for EGMs, AGMs, and executive meetings.",
    startTime: "Jun 2022",
    endTime: "Sep 2023",
  },
  {
    image: "https://i.imgur.com/uOYgzPC.png",
    title: "Programming and Development Sub-committee",
    society: "UNSW Computer Enthusiasts Society",
    description:
      "I lead the design and development of the first version of full-stack custom stamp rally web-app during my first year for MegaLAN which was initially managed by PCsoc. This included features such as, admin dashboard to manage tasks, admins, and complete a task, a user dashboard with a list of incomplete and completed tasks cards, a leaderboard page, and a raffle page to decide the winner using the Fisher-Yates shuffle algorithm. Built using the Next.js, Prisma, tRPC, TailwindCSS, NextAuth.js and Typescript.",
    startTime: "Nov 2022",
    endTime: "Sep 2023",
  },
  {
    image: "https://i.imgur.com/Ic8u02C.png",
    title: "Trainee Lead",
    society: "UNSW Computer Science and Engineering Society",
    description:
      "Trained 3 trainees in how to build full-stack web applications using the T3 Stack during my second year. Together we built a forum website where students could share their notes and post questions using Next.js, Prisma, tRPC, TailwindCSS, NextAuth.js and Typescript and deployed on vercel and supabase.",
    startTime: "Jan 2023",
    endTime: "Jun 2023",
  },
  {
    image: "https://i.imgur.com/Ic8u02C.png",
    title: "Trainee",
    society: "UNSW Computer Science and Engineering Society",
    description:
      "Worked in a team of 5 to build a single page front-end web application for studying and productivity called Loft. This contained widgets like Customisable Pomodoro Timer, Youtube Video Player, Notepad with Text Formatting and a To Do List, with customisable themes and fonts using React, Typescript, CSS and ViteJS.",
    startTime: "Sep 2022",
    endTime: "Dec 2022",
  },
  {
    image: "https://i.imgur.com/tc9zGkb.png",
    title: "Music Subcommittee",
    society: "UNSW lo-fi society",
    description:
      "Assisted the Music Director in organising and publishing Lo-fi; Society's yearly Mixtape onto streaming platforms. Improved engagement at events, and formed strong connections with other society leaders as part of improving Lo-fi; society's perceived brand image and value.",
    startTime: "Apr 2022",
    endTime: "Jan 2023",
  },
];

export const projectsData: AllProjects = {
  2023: [
    {
      title: "MegaLAN Atlantis Quests",
      description:
        "An end to end Stamp Rally Management System for an event hosted by 12 societies and 500+ attendees.",
      month: "May",
      codeLink: "https://github.com/unswpcsoc/megalan-t2-bingo-website",
      websiteLink: "https://megalan-atlantis-quests.vercel.app/",
      image: "https://i.imgur.com/l61jfFn.png",
    },
    {
      title: "EZ Invoice",
      description:
        "Developed e-invoice management website with sales and customer tracking as well as invoice generation, validation and rendering in a team as part of the SENG2021 Requirements and Design Workshop Course.",
      month: "April",
      codeLink: "https://github.com/HARI-PRMD/SENG2021-application",
      websiteLink:
        "https://se2021-23t1-einvoicing-frontend-f14a-di-git-342b0e-merryrosalie.vercel.app/",
      image: "https://i.imgur.com/xf6wZFL.png",
    },
    {
      title: "Note Sharing Forum",
      description:
        "Lead development of a mock note sharing forum website built by a group of 5 as part of CSESoc's Training Program",
      month: "March",
      codeLink: "https://github.com/csesoc/trainee-3-23t1",
      websiteLink: "https://trainee-3-23t1-deploy.vercel.app/",
      image: "https://i.imgur.com/UE71tGE.png",
    },
  ],
  2022: [
    {
      title: "UniClubs",
      description:
        "A Clubs and Events Discovery Website Designed and Developed by Me",
      month: "December",
      codeLink: "https://github.com/HARI-PRMD/uni-clubs-frontend",
      websiteLink: "https://uniclubs.vercel.app/",
      image: "https://i.imgur.com/H0IEwLa.png",
    },
    {
      title: "Loft",
      description:
        "A Pomodoro Timer, Productivity Website Developed in a team as part of CSESoc's Training Program",
      month: "October",
      codeLink: "https://github.com/csesoc/trainee-3-22t3",
      image: "https://i.imgur.com/DgWjrLu.png",
    },
  ],
};

export const technologiesLangFrameworksData: { name: string; url: string }[] = [
  {
    name: "Javascript",
    url: "https://i.imgur.com/I31PHHR.png",
  },
  {
    name: "Typescript",
    url: "https://i.imgur.com/jrvq4Xa.png",
  },
  {
    name: "Python",
    url: "https://i.imgur.com/3LjYzQF.png",
  },
  {
    name: "Regex",
    url: "https://i.imgur.com/zlN3kQM.png",
  },
  {
    name: "HTML",
    url: "https://i.imgur.com/8toiYql.png",
  },

  {
    name: "CSS",
    url: "https://i.imgur.com/HctithI.png",
  },
  {
    name: "TailwindCSS",
    url: "https://i.imgur.com/aeJcPyk.png",
  },
  {
    name: "React",
    url: "https://i.imgur.com/Wz5XgWU.png",
  },
  {
    name: "Next.js",
    url: "https://i.imgur.com/0lieJI8.png",
  },
  {
    name: "Express.js",
    url: "https://i.imgur.com/YDFvuAO.png",
  },
  {
    name: "tRPC",
    url: "https://i.imgur.com/Q8zXteA.png",
  },
  {
    name: "Zod",
    url: "https://i.imgur.com/vUBmb5z.png",
  },
  {
    name: "NextAuth.js",
    url: "https://i.imgur.com/SE1wuLc.png",
  },
  {
    name: "Prisma",
    url: "https://i.imgur.com/btJeW2A.png",
  },
];

export const technologiesToolsData: { name: string; url: string }[] = [
  {
    name: "Github",
    url: "https://i.imgur.com/graG8M4.png",
  },
  {
    name: "npm",
    url: "https://i.imgur.com/y2xDgiR.png",
  },
  {
    name: "Vercel",
    url: "https://i.imgur.com/QhLoN4g.png",
  },
  {
    name: "Supabase",
    url: "https://i.imgur.com/Ot66zDz.png",
  },
  {
    name: "Figma",
    url: "https://i.imgur.com/bHoKOUF.png",
  },
  {
    name: "Confluence",
    url: "https://i.imgur.com/N2FJy08.png",
  },
  {
    name: "Jira",
    url: "https://i.imgur.com/09s9Gn0.png",
  },
];

export const projectsDataV2: ProjectCardDataType[] = [
  //   {
  //     title: "BaGLsoc Discord Verification Bot",
  //     description:
  //       "I developed a custom verification bot using Typescript and discord.js for the BaGL Society. The bot verifies new members by monitoring Google Form submissions, extracting email and Discord tag data, upon form submission the user is given the verified role.",
  //     month: "August",
  //     year: 2023,
  //     codeLink: "https://github.com/BaGLsoc/bagel-bot",
  //     image:
  //       "https://i.imgur.com/bObcFOg.png",
  //   },
  {
    title: "UNSW One Piece Society Website",
    description:
      "Designed and developed a full stack website for unsw one piece society with SEO, backend and db support making it scalable and easy to update.",
    month: "September",
    year: 2023,
    codeLink: "https://github.com/One-Piece-Society/website",
    websiteLink: "https://opsoc.tk/",
    image: "https://i.imgur.com/AW0X5s1.png",
  },
  {
    title: "MegaLAN Full Blossom Quests",
    description:
      "Lead development of custom stamp rally system for Sydney's biggest LAN event hosted by 11 UNSW Societies and Clubs.",
    month: "September",
    year: 2023,
    codeLink:
      "https://github.com/megalan-association/megalan-quests-full-blossom",
    websiteLink: "https://www.quests.megalan.com.au/",
    image: "https://i.imgur.com/YTPPqR4.png",
  },
  {
    title: "Discord Verification Bot",
    description:
      "I developed a custom verification bot using Typescript and discord.js for the UNSW Rhythm Game Society. The bot verifies new members by monitoring Google Form submissions, extracting email and Discord tag data. It then sends a verification code via email and prompts users to enter the code for verification on the Discord community server. Upon success the user is given the verified role.",
    month: "June",
    year: 2023,
    codeLink: "https://github.com/unswrgs/rgs-bot",
    image: "https://i.imgur.com/ajDLDvs.png",
  },
  {
    title: "MegaLAN Atlantis Quests",
    description: `
# 🔱 MegaLAN Atlantis Quests Website
A Stamp Rally Website Developed for MegaLAN Atlantis during 2023 by @HARI-PRMD and @VishnuPrateek1
## 🐬 Documentation
You can find documentation on how to use it as an admin here: [Documentation](https://confirmed-smoke-6f8.notion.site/Megalan-Quests-User-Guide-f6784968de434e87aa44e4df6624fab7)
The website is available here: [Website](https://megalan-atlantis-quests.vercel.app/)

## 🦑 Tech Stack
This is a [T3 Stack](https://create.t3.gg/) project bootstrapped with \`create-t3-app\`.
- [Next.js](https://nextjs.org)
- [NextAuth.js](https://next-auth.js.org)
- [Prisma](https://prisma.io)
- [Tailwind CSS](https://tailwindcss.com)
- [tRPC](https://trpc.io)
- Typescript
## 🌊 Deployment
Deployed using \`Vercel\` and \`Supabase\` for free,
    `,
    month: "May",
    year: 2023,
    codeLink: "https://github.com/unswpcsoc/megalan-t2-bingo-website",
    websiteLink: "https://megalan-atlantis-quests.vercel.app/",
    image: "https://i.imgur.com/l61jfFn.png",
  },
  {
    title: "EZ Invoice",
    description:
      "Developed e-invoice management website with sales and customer tracking as well as invoice generation, validation and rendering in a team as part of the SENG2021 Requirements and Design Workshop Course.",
    month: "April",
    year: 2023,
    codeLink: "https://github.com/HARI-PRMD/SENG2021-application",
    websiteLink:
      "https://se2021-23t1-einvoicing-frontend-f14a-di-git-342b0e-merryrosalie.vercel.app/",
    image: "https://i.imgur.com/xf6wZFL.png",
  },
  {
    title: "Note Sharing Forum",
    description:
      "Lead development of a mock note sharing forum website built by a group of 5 as part of CSESoc's Training Program",
    month: "March",
    year: 2023,
    codeLink: "https://github.com/csesoc/trainee-3-23t1",
    websiteLink: "https://trainee-3-23t1-deploy.vercel.app/",
    image: "https://i.imgur.com/UE71tGE.png",
  },

  {
    title: "UNSW Arc Web Scraper",
    description:
      "A python web scraper to retrieve club data from UNSW Arc's website, Developed by Me.",
    month: "February",
    year: 2023,
    codeLink: "https://github.com/HARI-PRMD/unsw-arc-scraper",
  },

  {
    title: "UniClubs",
    description:
      "A Clubs and Events Discovery Website Designed and Developed by Me",
    month: "December",
    year: 2022,
    codeLink: "https://github.com/HARI-PRMD/uni-clubs-frontend",
    websiteLink: "https://uniclubs.vercel.app/",
    image: "https://i.imgur.com/H0IEwLa.png",
  },
  {
    title: "Loft",
    description:
      "A Pomodoro Timer, Productivity Website Developed in a team as part of CSESoc's Training Program",
    month: "October",
    year: 2022,
    codeLink: "https://github.com/csesoc/trainee-3-22t3",
    websiteLink: "https://loft-ruddy.vercel.app/",
    image: "https://i.imgur.com/DgWjrLu.png",
  },
];

export const CourseAchievementCardData: CourseAchievementCardDataType[] = [
  {
    course: "Engineering Design and Professional Practice (DESN2000)",
    description:
      "Developed a prototype of a Educational Finance Management Mobile App called Figma Life in Figma, and maintained a Design Journal Documenting the entire design process methods used and followed.",
    year: 2023,
    grade: 88,
  },
  {
    course: "Requirements and Design Workshop (SENG2021)",
    description:
      "Developed e-invoice management website using the T3 stack and an ExpressJS backend API for invoice validation and rendering in a team.",
    year: 2023,
    grade: 81,
  },
  {
    course: "Backend Development (COMP1531)",
    description:
      "Developed an ExpressJS Backend written in Typescript for a Microsoft Teams clone in a team of 5.",
    year: 2022,
    grade: 85,
  },
];

export const CompetitionCardData: CompetitionCardDataType[] = [
  {
    title: "Tied 1st place, and Won Raffle in CTF Competition",
    description:
      "Tied with 1st place in points achieved and flags captured, in an individuals CTF competition and won prizes in the raffle afterwards.",
    issuedBy: "UNSW Security Society (SecSoc)",
    year: 2023,
  },
  {
    title: "Placed Top 10 in Beginner CTF ",
    description:
      "Placed 7th among 40+ teams in the Security Society & Computer Science Engineering Society Beginners Capture the Flag Competition.",
    issuedBy:
      "UNSW Security Society (SecSoc) & UNSW Computer Science Engineering Society (CSESoc)",
    year: 2022,
  },
];
