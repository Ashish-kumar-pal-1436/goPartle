export type RequirementCategory = "planner" | "performer" | "crew";

export type EventType =
  | "wedding"
  | "corporate"
  | "birthday"
  | "concert"
  | "festival"
  | "private"
  | "other";

export interface EventBasics {
  name: string;
  type: EventType | "";
  startDate: string;
  endDate: string;
  location: string;
  venue: string;
}

export interface PlannerDetails {
  budget: string;
  guestCount: string;
  services: string[];
  eventStyle: string;
}

export interface PerformerDetails {
  performanceType: string;
  genre: string;
  numberOfPerformers: string;
  duration: string;
  budget: string;
}

export interface CrewDetails {
  crewType: string;
  numberOfMembers: string;
  workingHours: string;
  equipmentRequired: string;
}

export type CategoryDetails =
  | PlannerDetails
  | PerformerDetails
  | CrewDetails;

export interface AdditionalRequirements {
  technicalRequirements: string;
  specialRequests: string;
  notes: string;
}

export interface RequirementFormData {
  event: EventBasics;
  category: RequirementCategory | "";
  details: CategoryDetails;
  additionalRequirements: AdditionalRequirements;
}

export interface RequirementPayload {
  event: EventBasics;
  category: RequirementCategory;
  details: CategoryDetails;
  additionalRequirements: AdditionalRequirements;
}

export interface RequirementResponse {
  success: boolean;
  message: string;
  data?: {
    _id: string;
    event: EventBasics;
    category: RequirementCategory;
    details: CategoryDetails;
    additionalRequirements: AdditionalRequirements;
    createdAt: string;
    updatedAt: string;
  };
}