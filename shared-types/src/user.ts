export interface User {
  id: string;

  name: string;
  email: string;
  image?: string;

  role: "student" | "admin";

  preferences?: {
    preferredRoles?: string[];
    preferredLocation?: string;
    workType?: "remote" | "hybrid" | "onsite";
  };

  createdAt: Date;
  updatedAt: Date;
}