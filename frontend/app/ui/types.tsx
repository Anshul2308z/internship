import { Listing, User } from "@anshul/shared-types";

export type Intern = Listing & { type: "intern" };
export type Job = Listing & { type: "job" };

export type { User };
