export type ProjectCardDataType = {
  title: string;
  description: string;
  month: string;
  year?: number;
  websiteLink?: string;
  codeLink?: string;
  image?: string;
};

export type VolunteeringDataType = {
  image: string;
  society: string;
  title: string;
  startTime: string;
  endTime: string;
  description?: string;
};

export type CompetencyGradeCode = "CM" | "CO" | "CN";

export type CourseResultType =
  | {
      type: "mark";
      mark: number;
    }
  | {
      type: "competency";
      code: CompetencyGradeCode;
    };

export type CourseTerm = "T1" | "T2" | "T3";

export type CourseAchievementCardDataType = {
  course: string;
  result?: CourseResultType;
  description: string;
  year: number;
  term?: CourseTerm;
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
  logo?: string;
  logoAlt?: string;
  callToAction?: {
    label: string;
    href: string;
  };
};
