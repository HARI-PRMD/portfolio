import {
  type ProjectCardDataType,
  type AllProjects,
  type volunteeringDataType,
  type CourseAchievementCardDataType,
  type CompetitionCardDataType,
  type ExperienceItem,
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

export const experienceData: ExperienceItem[] = [
  {
    company: "Lyra",
    title: "Forward Deployed Engineer",
    location: "Sydney, NSW, Australia",
    start: "June 2025",
    end: "Present",
    highlights: [
      "Embedded with customers to ship Lyra's product into production environments as part of the forward deployed engineering team.",
      "Support go-live efforts from Sydney, ensuring each deployment aligns with rapidly evolving product goals.",
    ],
    logo: "/images/lyra-logo.svg",
    logoAlt: "Lyra logo",
  },
  {
    company: "UNSW",
    title: "Mentor for SENG2021",
    location: "Sydney, NSW, Australia",
    start: "January 2024",
    end: "May 2024",
    highlights: [
      "Mentored 25 students in architecting and developing microservice-based invoice management systems using agile methodologies.",
      "Guided a student team to win the Macquarie Bank Group Prize for best project and presentation.",
      "Delivered supplementary lectures on backend and frontend deployment across six cloud hosting platforms to extend course content.",
    ],
    logo: "https://i.imgur.com/9usq5EW.png",
    logoAlt: "UNSW crest",
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
    url: "/images/github.webp",
  },
  {
    name: "npm",
    url: "/images/npm.webp",
  },
  {
    name: "Vercel",
    url: "/images/vercel.webp",
  },
  {
    name: "Supabase",
    url: "/images/supabase.webp",
  },
  {
    name: "Figma",
    url: "/images/figma.webp",
  },
  {
    name: "Confluence",
    url: "/images/confluence.webp",
  },
  {
    name: "Jira",
    url: "/images/jira.webp",
  },
];

export const projectsDataV2: ProjectCardDataType[] = [
  {
    title: "UNSW One Piece Society Website",
    description: `
# 🏴‍☠️ UNSW One Piece Society's Website

![logo](/doc_images//opsoc-banner-art.webp)

## 🔗 [https://unsw-one-piece-society.vercel.app/](https://unsw-one-piece-society.vercel.app/)

## 👥 Team

The First Version of this website was Designed and Developed by [Hari Pramod](https://hari-portfolio-ten.vercel.app) the First Technical Director of UNSW One Piece Society in 2023, with general assistance and assets from The Marketing Team (2023).

Special thanks to [Alex](https://github.com/Gitalexzhong) for initially deploying the application on his domain, and Jeet and [Colby](https://github.com/ColbyRehn) for Finding Artwork to use in the website.

## 💻 Technology

This is a [NextJS](https://nextjs.org) built with [Typescript](https://www.typescriptlang.org/) that uses [Tailwind CSS](https://tailwindcss.com) for styling.

## 🚀 Deployment

App Deployed on [Vercel](https://vercel.com/home)
    `,
    month: "September",
    year: 2023,
    codeLink: "https://github.com/One-Piece-Society/website",
    websiteLink: "https://opsoc.tk/",
    image: "/images/onepiece.webp",
  },
  {
    title: "MegaLAN Full Blossom Quests",
    description: `
# 🌸 MegaLAN Full Blossom Quests Website

![logo](/doc_images//megalan-logo.png)

A Stamp Rally Website Developed for MegaLAN Full Blossom during September 2023

## 🌼 Team

### 🧑‍💻 Leads

- [Vishnu](https://github.com/VishnuPrateek1)
- [Hari](https://hari-portfolio-ten.vercel.app)

### 💻 Development

- [Max](https://github.com/max8539)
- [Isaac](https://github.com/Gyoumi)

### 🎨 Design

- Renee
- [Christine](https://github.com/Christin322)

## 🍃 Documentation

You can our video on how to use it as an admin here: [Documentation](https://youtu.be/ayUnhIeEo9k)

The website is available here: [Website](https://www.quests.megalan.com.au/)

## 🌺 Tech Stack

This is a [T3 Stack](https://create.t3.gg/) project bootstrapped with \`create-t3-app\`,

- [Next.js](https://nextjs.org)
- [NextAuth.js](https://next-auth.js.org)
- [Prisma](https://prisma.io)
- [Tailwind CSS](https://tailwindcss.com)
- [tRPC](https://trpc.io)
- Typescript

## 🌄 Deployment

Deployed using Vercel and Supabase
    `,
    month: "September",
    year: 2023,
    codeLink:
      "https://github.com/megalan-association/megalan-quests-full-blossom",
    websiteLink: "https://www.quests.megalan.com.au/",
    image: "/images/fullblossom.webp",
  },
  {
    title: "Discord Verification Bot",
    description: `
# UNSW Rhythm Game Society Discord Bot

A bot developed by [@HARI-PRMD](https://github.com/HARI-PRMD) for [UNSW Rhythm Game Society](https://www.arc.unsw.edu.au/get-involved/opportunity?name=Rhythm%20Games%20Society)

## Available Features

- Verifies Users by reading new responses from the Google Verification Form and sending them verification emails. (automatic)
- Ping -> Pong (interaction)
- About Bot (interaction)
    `,
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
    description: `
# 🧾 SENG2021 F14A Discord Moderators Frontend

This webapp was bootstrapped using create-t3-app and built on the [T3 Stack](https://create.t3.gg/).

## 💻 Our Webapp

🔗 Deployed using [Vercel](https://vercel.com) at [https://se2021-23t1-einvoicing-frontend-f14a-di-git-342b0e-merryrosalie.vercel.app](https://se2021-23t1-einvoicing-frontend-f14a-di-git-342b0e-merryrosalie.vercel.app)

## 💡 App Concept

This webapp provides customers and the target market of our [Invoice Rendering API](https://app.swaggerhub.com/apis-docs/JohnieCar15/InvoiceRendering/1.0.0#/) with an interface that allows it to connect with other similar microservices to provide a wholistic experience to the customer rich with features.

## 📝 Documentation

- [Confluence Documentation](https://unswcse.atlassian.net/wiki/spaces/F14ADISCOR/overview)
- [Jira Issue Board](https://unswcse.atlassian.net/jira/software/projects/F14ADISCOR/boards/125)
- [Swagger API Documentation](https://app.swaggerhub.com/apis-docs/JohnieCar15/InvoiceRendering/1.0.0#/)

## 🧑‍💻 T3 Stack Frameworks and Modules

- [React](https://react.dev)
- [Typescript](https://www.typescriptlang.org)
- [Next.js](https://nextjs.org)
- [NextAuth.js](https://next-auth.js.org)
- [Prisma](https://prisma.io)
- [Tailwind CSS](https://tailwindcss.com)
- [tRPC](https://trpc.io)

    `,
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
    description: `
# Loft

## Summary

Loft is a productivity web app with the following widgets,

- Customizable Pomodoro Timer
- Youtube Video Player
- Notepad with Text Formatting
- To Do List

as well as customization settings supporting,

- Themes
  - light mode
  - dark mode
- Fonts
  - Arial
  - Serif
  - Monospace

## How To Start App

\`\`\`bash
  git clone git@github.com:csesoc/trainee-3-22t3.git
  cd frontend
  npm install
  npm run dev
\`\`\`

## Tech Stack

- React
- Typescript
- ViteJS
- CSS

# Gallery

## Widgets

### **Timer**

![Timer](/doc_images/timer_widget.gif)

### **To-Do**

![To Do](/doc_images/to_do_widget.gif)

### **Notes**

![Notes](/doc_images/notes_widget.gif)

### **Video-Player**

![Video Player](/doc_images/video_player_widget.gif)

## Themes

### **Light-Mode**

![Light Mode](/doc_images/light_theme_pic.png)

### **Dark-Mode**

![Dark Mode](/doc_images/dark_theme_pic.png)

## Fonts

### **Monospace**

![mono space](/doc_images/monospace_font_pic.png)

## Change Background Image

![Changed background pic](/doc_images/change_bg_pic.png)
    `,
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
