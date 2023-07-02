import { type AllProjects, type volunteeringDataType } from "~/types/types";

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
      "Produced a track for the Lo-fi; Society Mixtape and provided help where I could with distribution of the songs.",
    startTime: "Apr 2022",
    endTime: "Jan 2023",
  },
];

export const projectsData: AllProjects = {
  2023: [
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
      title: "MegaLAN Atlantis Quests",
      description:
        "An end to end Stamp Rally Management System for an event hosted by 12 societies and 500+ attendees.",
      month: "May",
      codeLink: "https://github.com/unswpcsoc/megalan-t2-bingo-website",
      websiteLink: "https://megalan-atlantis-quests.vercel.app/",
      image:
        "https://media.discordapp.net/attachments/1092987636035092662/1124960255722401842/Screenshot_2023-07-02_at_5.09.42_pm.png",
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
