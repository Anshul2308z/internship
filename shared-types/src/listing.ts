export type ListingType = "intern" | "job";

export interface Listing {
  id: string;

  heading: string;
  company: string;
  summary: string;
  workFromHome: boolean;
  compensation: number;
  category: string;
  type: ListingType;

  tags: string[];
  postInternPromise?: string;

  createdBy: string;
  index: number;

  details?: {
    startDate?: string;

    ctcRange?: {
      min: number;
      max: number;
    };

    experienceRequired?: number;
    applyBy?: Date;
    jobType?: string;
    applicantsCount?: number;
    openings?: number;

    responsibilities?: string[];
    benefits?: string[];
    skillsRequired?: string[];

    companyInfo?: {
      website?: string;
      description?: string;
      hiringSince?: string;
      opportunitiesPosted?: number;
      candidatesHired?: number;
    };
  };

  createdAt: Date;
}