import type {
  RequirementPayload,
  RequirementResponse,
} from "@/types/requirement";

const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export const createRequirement = async (
  payload: RequirementPayload
): Promise<RequirementResponse> => {
  const response = await fetch(`${API_URL}/api/requirements`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data: RequirementResponse = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to create requirement");
  }

  return data;
};