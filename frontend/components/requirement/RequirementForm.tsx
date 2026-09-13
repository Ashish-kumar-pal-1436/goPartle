"use client";

import { useState } from "react";
import { createRequirement } from "@/lib/api";

import StepIndicator from "./StepIndicator";
import EventBasics from "./EventBasics"; 

import AdditionalRequirements from "./AdditionalRequirements";
import ReviewStep from "./ReviewStep";

import PlannerFields from "./PlannerFields";
import PerformerFields from "./PerformerFields";
import CrewFields from "./CrewFields";

import type {
  EventBasics as EventBasicsData,
  RequirementCategory,
  RequirementFormData,
} from "@/types/requirement";

const initialEvent: EventBasicsData = {
  name: "",
  type: "",
  startDate: "",
  endDate: "",
  location: "",
  venue: "",
};

const initialFormData: RequirementFormData = {
  event: initialEvent,
  category: "",
  details: {
    budget: "",
    guestCount: "",
    services: [],
    eventStyle: "",
  },
  additionalRequirements: {
    technicalRequirements: "",
    specialRequests: "",
    notes: "",
  },
};

export default function RequirementForm() {
    const [currentStep, setCurrentStep] = useState(1);

    const [formData, setFormData] =
    useState<RequirementFormData>(initialFormData);

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState("");
    const [submitSuccess, setSubmitSuccess] = useState(false);

const handleEventChange = (
  field: keyof EventBasicsData,
  value: string
) => {
  setSubmitError("");

  setFormData((previous) => ({
    ...previous,
    event: {
      ...previous.event,
      [field]: value,
    },
  }));
};

 const handleCategoryChange = (
  category: RequirementCategory
) => {

    setSubmitError("");
  const details: RequirementFormData["details"] =
    category === "planner"
      ? {
          budget: "",
          guestCount: "",
          services: [],
          eventStyle: "",
        }
      : category === "performer"
        ? {
            performanceType: "",
            genre: "",
            numberOfPerformers: "",
            duration: "",
            budget: "",
          }
        : {
            crewType: "",
            numberOfMembers: "",
            workingHours: "",
            equipmentRequired: "",
          };

  setFormData((previous) => ({
    ...previous,
    category,
    details,
  }));
};

const handleNext = () => {
  const error = validateCurrentStep();

  if (error) {
    setSubmitError(error);
    return;
  }

  setSubmitError("");

  if (currentStep < 4) {
    setCurrentStep((previous) => previous + 1);
  }
};

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((previous) => previous - 1);
    }
  };

const handleAdditionalRequirementChange = (
  field: keyof RequirementFormData["additionalRequirements"],
  value: string
) => {

    setSubmitError("");
  setFormData((previous) => ({
    ...previous,
    additionalRequirements: {
      ...previous.additionalRequirements,
      [field]: value,
    },
  }));
}; 

const handleSubmit = async () => {
  if (!formData.category) {
    setSubmitError("Please select a category.");
    return;
  }

  setIsSubmitting(true);
  setSubmitError("");
  setSubmitSuccess(false);

  try {
    await createRequirement({
      event: formData.event,
      category: formData.category,
      details: formData.details,
      additionalRequirements:
        formData.additionalRequirements,
    });

    setSubmitSuccess(true);
  } catch (error) {
    setSubmitError(
      error instanceof Error
        ? error.message
        : "Failed to submit requirement."
    );
  } finally {
    setIsSubmitting(false);
  }
};

const validateCurrentStep = () => {
  if (currentStep === 1) {
    if (!formData.event.name.trim()) {
      return "Event name is required.";
    }

    if (!formData.event.type) {
      return "Please select an event type.";
    }

    if (!formData.event.startDate) {
      return "Start date is required.";
    }

    if (!formData.event.endDate) {
      return "End date is required.";
    }

    if (formData.event.endDate < formData.event.startDate) {
      return "End date cannot be before start date.";
    }

    if (!formData.event.location.trim()) {
      return "Event location is required.";
    }

    if (!formData.category) {
      return "Please select what you are looking for.";
    }
  }

  if (currentStep === 2) {
    if (formData.category === "planner") {
      const details = formData.details as {
        budget: string;
        guestCount: string;
        services: string[];
        eventStyle: string;
      };

      if (!details.budget) {
        return "Planner budget is required.";
      }

      if (!details.guestCount) {
        return "Expected guest count is required.";
      }

      if (details.services.length === 0) {
        return "Please select at least one service.";
      }

      if (!details.eventStyle) {
        return "Please select an event style.";
      }
    }

    if (formData.category === "performer") {
      const details = formData.details as {
        performanceType: string;
        genre: string;
        numberOfPerformers: string;
        duration: string;
        budget: string;
      };

      if (!details.performanceType) {
        return "Performance type is required.";
      }

      if (!details.genre.trim()) {
        return "Genre is required.";
      }

      if (!details.numberOfPerformers) {
        return "Number of performers is required.";
      }

      if (!details.duration) {
        return "Performance duration is required.";
      }

      if (!details.budget) {
        return "Performance budget is required.";
      }
    }

    if (formData.category === "crew") {
      const details = formData.details as {
        crewType: string;
        numberOfMembers: string;
        workingHours: string;
        equipmentRequired: string;
      };

      if (!details.crewType) {
        return "Crew type is required.";
      }

      if (!details.numberOfMembers) {
        return "Number of crew members is required.";
      }

      if (!details.workingHours) {
        return "Working hours are required.";
      }
    }
  }

  return "";
};



  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-10">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Create a Requirement
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Tell us what you need for your event and find
            the right professionals.
          </p>
        </div>

        <div className="mb-10 rounded-xl border border-gray-200 bg-white p-5 sm:p-8">
          <StepIndicator currentStep={currentStep} />
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
          {currentStep === 1 && (
            <EventBasics
              data={formData.event}
              category={formData.category}
              onEventChange={handleEventChange}
              onCategoryChange={handleCategoryChange}
            />
          )}

                 {currentStep === 2 && formData.category === "planner" && (
  <PlannerFields
    data={
      formData.details as {
        budget: string;
        guestCount: string;
        services: string[];
        eventStyle: string;
      }
    }
    onChange={(field, value) => {
      setFormData((previous) => ({
        ...previous,
        details: {
          ...previous.details,
          [field]: value,
        },
      }));
    }}
  />
)}

{currentStep === 2 &&
  formData.category === "performer" && (
    <PerformerFields
      data={
        formData.details as {
          performanceType: string;
          genre: string;
          numberOfPerformers: string;
          duration: string;
          budget: string;
        }
      }
      onChange={(field, value) => {
        setFormData((previous) => ({
          ...previous,
          details: {
            ...previous.details,
            [field]: value,
          },
        }));
      }}
    />
  )}

{currentStep === 2 &&
  formData.category === "crew" && (
    <CrewFields
      data={
        formData.details as {
          crewType: string;
          numberOfMembers: string;
          workingHours: string;
          equipmentRequired: string;
        }
      }
      onChange={(field, value) => {
        setFormData((previous) => ({
          ...previous,
          details: {
            ...previous.details,
            [field]: value,
          },
        }));
      }}
    />
  )}



        {currentStep === 3 && (
  <AdditionalRequirements
    data={formData.additionalRequirements}
    onChange={handleAdditionalRequirementChange}
  />
)}



         {currentStep === 4 && (
  <ReviewStep data={formData} />
)}

           {submitError && (
  <div className="mb-4 rounded-lg border border-red-800 bg-red-950 px-4 py-3 text-sm text-red-300">
    {submitError}
  </div>
)}

{submitSuccess && (
  <div className="mb-4 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
    Requirement submitted successfully.
  </div>
)}

          <div className="mt-10 flex items-center justify-between border-t border-gray-100 pt-6">
            <button
              type="button"
              onClick={handleBack}
              disabled={currentStep === 1}
              className="rounded-lg border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Back
            </button>

            {currentStep < 4 ? (
              <button
                type="button"
                onClick={handleNext}
                className="rounded-lg bg-gray-900 px-6 py-2.5 text-sm font-medium text-white transition hover:bg-gray-800"
              >
                Continue
              </button>
            ) : (

                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={isSubmitting || submitSuccess}
                    className="rounded-lg bg-gray-900 px-6 py-2.5 text-sm font-medium text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-50"
                   >
                     {isSubmitting
                     ? "Submitting..."
                     : submitSuccess
                     ? "Submitted"
                     : "Submit Requirement"}
                 </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}