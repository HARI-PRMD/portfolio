import {
  type ProjectCardDataType,
  type AllProjects,
  type volunteeringDataType,
  type CourseAchievementCardDataType,
  type CompetitionCardDataType,
} from "~/types/types";

export const volunteeringData: volunteeringDataType[] = [
  {
    image:
      "https://media.discordapp.net/attachments/1092987636035092662/1125067898826801253/Screenshot_2023-07-03_at_12.17.59_am.png",
    title: "Development Team Lead",
    society: "UNSW MegaLAN",
    description:
      "lead development of the first version of the custom MegaLAN Stamp rally system with the Atlantis Quests Website.",
    startTime: "Jun 2023",
    endTime: "Present",
  },
  {
    image:
      "https://cdn.discordapp.com/attachments/956904556132962334/957176629354958869/OP_Logo_small.jpg",
    title: "Technical Director",
    society: "UNSW One Piece Society",
    description: "",
    startTime: "Mar 2023",
    endTime: "Present",
  },
  {
    image:
      "https://media.discordapp.net/attachments/974618772071669770/1004558762138402876/RGS_Logo_AI.png",
    title: "Secretary",
    society: "UNSW Rhythm Game Society",
    description: "",
    startTime: "Jun 2022",
    endTime: "Present",
  },
  {
    image:
      "https://cdn.discordapp.com/attachments/1092987636035092662/1125021072773885972/Screenshot_2023-07-02_at_9.11.57_pm.png",
    title: "Programming and Development Sub-committee",
    society: "UNSW Computer Enthusiasts Society",
    description: "",
    startTime: "Nov 2022",
    endTime: "Present",
  },
  {
    image:
      "https://cdn.discordapp.com/attachments/1092987636035092662/1125022063397191771/csesocwhiteblue.9bc2ecf4.png",
    title: "Trainee Lead",
    society: "UNSW Computer Science and Engineering Society",
    description: "",
    startTime: "Jan 2023",
    endTime: "Jun 2023",
  },
  {
    image:
      "https://cdn.discordapp.com/attachments/1092987636035092662/1125022063397191771/csesocwhiteblue.9bc2ecf4.png",
    title: "Trainee",
    society: "UNSW Computer Science and Engineering Society",
    description:
      "Worked in a team of 5 and built a front-end web app for studying/productivity using React, Typescript, CSS and ViteJS.",
    startTime: "Sep 2022",
    endTime: "Dec 2022",
  },
  {
    image:
      "https://media.discordapp.net/attachments/1092987636035092662/1125065812709998652/unswlofisoc.png",
    title: "Music Subcommittee",
    society: "UNSW lo-fi society",
    description:
      "Produced a song for the Lo-fi; Society Mixtape and provided help where I could with distribution of the songs.",
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
      image:
        "https://media.discordapp.net/attachments/1092987636035092662/1124960255722401842/Screenshot_2023-07-02_at_5.09.42_pm.png",
    },
    {
      title: "EZ Invoice",
      description:
        "Developed e-invoice management website with sales and customer tracking as well as invoice generation, validation and rendering in a team as part of the SENG2021 Requirements and Design Workshop Course.",
      month: "April",
      codeLink: "https://github.com/HARI-PRMD/SENG2021-application",
      websiteLink:
        "https://se2021-23t1-einvoicing-frontend-f14a-di-git-342b0e-merryrosalie.vercel.app/",
      image:
        "https://media.discordapp.net/attachments/1092987636035092662/1125062082858078268/Screenshot_2023-07-02_at_11.54.52_pm.png",
    },
    {
      title: "Note Sharing Forum",
      description:
        "Lead development of a mock note sharing forum website built by a group of 5 as part of CSESoc's Training Program",
      month: "March",
      codeLink: "https://github.com/csesoc/trainee-3-23t1",
      websiteLink: "https://trainee-3-23t1-deploy.vercel.app/",
      image:
        "https://media.discordapp.net/attachments/1092987636035092662/1125069729741148220/Screenshot_2023-07-03_at_12.25.17_am.png",
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
      image:
        "https://media.discordapp.net/attachments/1092987636035092662/1125060553233158245/Screenshot_2023-07-02_at_11.48.49_pm.png",
    },
    {
      title: "Loft",
      description:
        "A Pomodoro Timer, Productivity Website Developed in a team as part of CSESoc's Training Program",
      month: "October",
      codeLink: "https://github.com/csesoc/trainee-3-22t3",
      image:
        "https://media.discordapp.net/attachments/1092987636035092662/1125060877054390302/monospace_font_pic.png",
    },
  ],
};

export const technologiesLangFrameworksData: { name: string; url: string }[] = [
  {
    name: "Javascript",
    url: "https://media.discordapp.net/attachments/1092987636035092662/1132174482665132032/800px-JavaScript-logo.png",
  },
  {
    name: "Typescript",
    url: "https://cdn.discordapp.com/attachments/1092987636035092662/1132173840529764392/2048px-Typescript_logo_2020.png",
  },
  {
    name: "Python",
    url: "https://media.discordapp.net/attachments/1092987636035092662/1132176773669462046/Python-logo-notext.svg-2.png",
  },
  {
    name: "Regex",
    url: "https://media.discordapp.net/attachments/1092987636035092662/1132226116061511720/image-12-2.png",
  },
  {
    name: "HTML",
    url: "https://cdn.discordapp.com/attachments/1092987636035092662/1132184679794085939/image-8.png",
  },

  {
    name: "CSS",
    url: "https://media.discordapp.net/attachments/1092987636035092662/1132183041603813447/css-icon-2048x2028-2rmmfask.png",
  },
  {
    name: "TailwindCSS",
    url: "https://media.discordapp.net/attachments/1092987636035092662/1132184262762835998/Tailwind_CSS_logo.svg-2.png",
  },
  {
    name: "React",
    url: "https://media.discordapp.net/attachments/1092987636035092662/1132174819899752510/2300px-React-icon.png",
  },
  {
    name: "Next.js",
    url: "https://cdn.discordapp.com/attachments/1092987636035092662/1132175597242683502/image-4.png",
  },
  {
    name: "Express.js",
    url: "https://cdn.discordapp.com/attachments/1092987636035092662/1132184947684278272/image-5-2.png",
  },
  {
    name: "tRPC",
    url: "https://media.discordapp.net/attachments/1092987636035092662/1132177024220401745/trpc-logo-741E01B855-seeklogo.png",
  },
  {
    name: "Zod",
    url: "https://media.discordapp.net/attachments/1092987636035092662/1132225561029255298/sDh8bAT3pW8AAAAASUVORK5CYII.png",
  },
  {
    name: "NextAuth.js",
    url: "https://media.discordapp.net/attachments/1092987636035092662/1132195448187260959/logo-sm.png",
  },
  {
    name: "Prisma",
    url: "https://media.discordapp.net/attachments/1092987636035092662/1132178248353189999/image-6.png",
  },
];
export const technologiesToolsData: { name: string; url: string }[] = [
  {
    name: "Github",
    url: "https://cdn.discordapp.com/attachments/1092987636035092662/1132181654551658587/image-7.png",
  },
  {
    name: "npm",
    url: "https://media.discordapp.net/attachments/1092987636035092662/1132182773625540698/2560px-Npm-logo.png",
  },
  {
    name: "Vercel",
    url: "https://media.discordapp.net/attachments/1092987636035092662/1132185309099073646/image-9.png",
  },
  {
    name: "Supabase",
    url: "https://media.discordapp.net/attachments/1092987636035092662/1132185399767339088/supabase-logo-DCC676FFE2-seeklogo.png",
  },
  {
    name: "Figma",
    url: "https://cdn.discordapp.com/attachments/1092987636035092662/1132181881358647346/668cccb3f734f342e07c0185e6d9a975.png",
  },
  {
    name: "Confluence",
    url: "https://media.discordapp.net/attachments/1092987636035092662/1132182167900934154/confluence-logo-D9B07137C2-seeklogo.png",
  },
  {
    name: "Jira",
    url: "https://cdn.discordapp.com/attachments/1092987636035092662/1132182620244029450/Jira-Emblem-2.png",
  },
];

export const projectsDataV2: ProjectCardDataType[] = [
  {
    title: "BaGLsoc Discord Verification Bot",
    description:
      "I developed a custom verification bot using Typescript and discord.js for the BaGL Society. The bot verifies new members by monitoring Google Form submissions, extracting email and Discord tag data, upon form submission the user is given the verified role.",
    month: "August",
    year: 2023,
    codeLink: "https://github.com/BaGLsoc/bagel-bot",
    image:
      "https://cdn.discordapp.com/attachments/1092987636035092662/1142270386139050137/Screenshot_2023-08-19_at_11.34.33_am.png",
  },
  {
    title: "RGS Verification Bot",
    description:
      "I developed a custom verification bot using Typescript and discord.js for the UNSW Rhythm Game Society. The bot verifies new members by monitoring Google Form submissions, extracting email and Discord tag data. It then sends a verification code via email and prompts users to enter the code for verification on the Discord community server. Upon success the user is given the verified role.",
    month: "June",
    year: 2023,
    codeLink: "https://github.com/unswrgs/rgs-bot",
    image:
      "https://media.discordapp.net/attachments/1119108267927404565/1131415578809217054/Screenshot_2023-07-20_at_12.41.26_pm.png",
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
    image:
      "https://media.discordapp.net/attachments/1092987636035092662/1124960255722401842/Screenshot_2023-07-02_at_5.09.42_pm.png",
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
    image:
      "https://media.discordapp.net/attachments/1092987636035092662/1125062082858078268/Screenshot_2023-07-02_at_11.54.52_pm.png",
  },
  {
    title: "Note Sharing Forum",
    description:
      "Lead development of a mock note sharing forum website built by a group of 5 as part of CSESoc's Training Program",
    month: "March",
    year: 2023,
    codeLink: "https://github.com/csesoc/trainee-3-23t1",
    websiteLink: "https://trainee-3-23t1-deploy.vercel.app/",
    image:
      "https://media.discordapp.net/attachments/1092987636035092662/1125069729741148220/Screenshot_2023-07-03_at_12.25.17_am.png",
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
    image:
      "https://media.discordapp.net/attachments/1092987636035092662/1125060553233158245/Screenshot_2023-07-02_at_11.48.49_pm.png",
  },
  {
    title: "Loft",
    description:
      "A Pomodoro Timer, Productivity Website Developed in a team as part of CSESoc's Training Program",
    month: "October",
    year: 2022,
    codeLink: "https://github.com/csesoc/trainee-3-22t3",
    image:
      "https://media.discordapp.net/attachments/1092987636035092662/1125060877054390302/monospace_font_pic.png",
  },
];

export const CourseAchievementCardData: CourseAchievementCardDataType[] = [
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
