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
