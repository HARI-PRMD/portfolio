export type ProjectCardDataType = {
  title: string;
  description: string;
  month: string;
  year?: number;
  websiteLink?: string;
  codeLink?: string;
  image?: string;
};

export type AllProjects = {
  [key: number]: ProjectCardDataType[];
};

export type volunteeringDataType = {
  image: string;
  society: string;
  title: string;
  startTime: string;
  endTime: string;
  description?: string;
};

export type CourseAchievementCardDataType = {
  course: string;
  grade: number;
  description: string;
  year: number;
};

export type CompetitionCardDataType = {
  issuedBy: string;
  title: string;
  description: string;
  year: number;
};

export type ExperienceItem = {
  company: string;
  title: string;
  location: string;
  start: string;
  end: string;
  highlights: string[];
  callToAction?: {
    label: string;
    href: string;
  };
};
