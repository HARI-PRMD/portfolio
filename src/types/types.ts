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

export type AosAnimationType =
  | "fade"
  | "fade-up"
  | "fade-down"
  | "fade-right"
  | "fade-left"
  | "fade-up-right"
  | "fade-up-left"
  | "fade-down-right"
  | "fade-down-left"
  | "zoom-in"
  | "zoom-in-up"
  | "zoom-in-down"
  | "zoom-in-right"
  | "zoom-in-left"
  | "zoom-out"
  | "zoom-out-up"
  | "zoom-out-down"
  | "zoom-out-right"
  | "zoom-out-left"
  | "slide-up"
  | "slide-down"
  | "slide-right"
  | "slide-left"
  | "flip-left"
  | "flip-right";
