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
      "Led the rapid development of 3 custom full-stack web apps, digitizing MegaLAN's Stamp Rally System. Successfully deployed and used at an event with 500+ attendees, showcasing efficient skill acquisition, project management and delivery.",
    startTime: "Jun 2023",
    endTime: "Present",
  },
  {
    image: "https://i.imgur.com/saD2CLN.jpg",
    title: "Technical Director",
    society: "UNSW One Piece Society",
    description:
      "Designed and developed a full-stack responsive website, optimizing SEO. Enabled Discord-based content management for future executives, enhancing website manageability and user experience.",
    startTime: "Mar 2023",
    endTime: "Sep 2023",
  },
  {
    image: "https://i.imgur.com/aFJ3Djr.png",
    title: "Secretary",
    society: "UNSW Rhythm Game Society",
    description:
      "Orchestrated significant society growth from 50 to over 600 members. Automated Discord verification and implemented an email inbox notifications system integrated with discord, improving club operations and fostered collaborations with other societies.",
    startTime: "Jun 2022",
    endTime: "Sep 2023",
  },
  {
    image: "https://i.imgur.com/uOYgzPC.png",
    title: "Programming and Development Sub-committee",
    society: "UNSW Computer Enthusiasts Society",
    description:
      "Led the design and development of a full-stack custom stamp rally web app. Utilized Next.js, Prisma, tRPC, TailwindCSS, NextAuth.js, and TypeScript, enhancing MegaLAN's event experience.",
    startTime: "Nov 2022",
    endTime: "Sep 2023",
  },
  {
    image: "https://i.imgur.com/Ic8u02C.png",
    title: "Trainee Lead",
    society: "UNSW Computer Science and Engineering Society",
    description:
      "Trained 3 individuals in building full-stack web applications using the T3 Stack. Together, we developed an educational forum website using Next.js, Prisma, tRPC, TailwindCSS, NextAuth.js, and TypeScript, deployed on Vercel and Supabase.",
    startTime: "Jan 2023",
    endTime: "Jun 2023",
  },
  {
    image: "https://i.imgur.com/Ic8u02C.png",
    title: "Trainee",
    society: "UNSW Computer Science and Engineering Society",
    description:
      "Contributed collaboratively within a team of 5 to build a single-page front-end web application called Loft. Featured customizable widgets such as Pomodoro Timer, Youtube Video Player, Notepad with Text Formatting, and a To-Do List. Utilized technologies such as React, TypeScript, CSS, and ViteJS.",
    startTime: "Sep 2022",
    endTime: "Dec 2022",
  },
  {
    image: "https://i.imgur.com/tc9zGkb.png",
    title: "Music Subcommittee",
    society: "UNSW lo-fi society",
    description:
      "Collaborated with the Music Director to curate and release Lo-fi Society's annual Mixtape on streaming platforms. Enhanced event participation and established impactful connections with fellow society leaders, contributing to the overall improvement of Lo-fi Society's brand image and value.",
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
  {
    title: "UNSW One Piece Society Website",
    description:
      "Leveraged NextJS, TypeScript, tRPC, and Prisma for responsive design. Implemented TailwindCSS for a modern aesthetic. Employed WebP format and compression techniques for optimized image performance. Hosted on Vercel with Supabase integration, ensuring a seamless and efficient user experience.",
    month: "September",
    year: 2023,
    codeLink: "https://github.com/One-Piece-Society/website",
    websiteLink: "https://opsoc.tk/",
    image: "/images/onepiece.webp",
  },
  {
    title: "MegaLAN Full Blossom Quests",
    description:
      "Developed a Stamp Rally Management System, featuring a task creation system for societies within designated rooms. Implemented a QR code scanning mechanism for admin task completion. Introduced a raffle system for winner selection. Utilized NextJS, TypeScript, tRPC, Prisma, and TailwindCSS for seamless integration and optimal functionality during MegaLAN events.",
    month: "September",
    year: 2023,
    codeLink:
      "https://github.com/megalan-association/megalan-quests-full-blossom",
    websiteLink: "https://www.quests.megalan.com.au/",
    image: "/images/fullblossom.webp",
  },
  {
    title: "Discord Verification Bot",
    description:
      "I developed a custom verification bot using Typescript and discord.js for the UNSW Rhythm Game Society. The bot verifies new members by monitoring Google Form submissions, extracting email and Discord tag data. It then sends a verification code via email and prompts users to enter the code for verification on the Discord community server. Upon success the user is given the verified role.",
    month: "June",
    year: 2023,
    codeLink: "https://github.com/unswrgs/rgs-bot",
    image: "/images/discordbot.webp",
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
    image: "/images/atlantis.webp",
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
    image: "/images/ezinvoice.webp",
  },
  {
    title: "Note Sharing Forum",
    description:
      "Lead development of a mock note sharing forum website built by a group of 5 as part of CSESoc's Training Program",
    month: "March",
    year: 2023,
    codeLink: "https://github.com/csesoc/trainee-3-23t1",
    websiteLink: "https://trainee-3-23t1-deploy.vercel.app/",
    image: "/images/forum.webp",
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
    image: "/images/uniclubs.webp",
  },
  {
    title: "Loft",
    description:
      "Loft is a dynamic single-page front-end web application which includes a range of customizable widgets designed to enhance user interaction and productivity. Notable features encompass a Pomodoro Timer, YouTube Video Player, Notepad with Text Formatting, and a To-Do List, with Theme and Font Switching. Loft provides a versatile and engaging platform, showcasing the team's proficiency in React, TypeScript, CSS, and ViteJS.",
    month: "October",
    year: 2022,
    codeLink: "https://github.com/csesoc/trainee-3-22t3",
    websiteLink: "https://loft-ruddy.vercel.app/",
    image: "/images/loft.webp",
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
