"use client";

interface StepIndicatorProps {
  currentStep: number;
}

const steps = [
  {
    number: 1,
    title: "Event Basics",
  },
  {
    number: 2,
    title: "Category Details",
  },
  {
    number: 3,
    title: "Requirements",
  },
  {
    number: 4,
    title: "Review",
  },
];

export default function StepIndicator({
  currentStep,
}: StepIndicatorProps) {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => {
          const isActive = currentStep === step.number;
          const isCompleted = currentStep > step.number;

          return (
            <div
              key={step.number}
              className="flex flex-1 items-center"
            >
              <div className="flex flex-col items-center">
                <div
                  className={[
                    "flex h-10 w-10 items-center justify-center rounded-full border text-sm font-semibold transition-colors",
                    isActive
                      ? "border-black bg-black text-white"
                      : "",
                    isCompleted
                      ? "border-green-600 bg-green-600 text-white"
                      : "",
                    !isActive && !isCompleted
                      ? "border-gray-300 bg-white text-gray-500"
                      : "",
                  ].join(" ")}
                >
                  {isCompleted ? "✓" : step.number}
                </div>

                <span
                  className={[
                    "mt-2 text-center text-xs font-medium sm:text-sm",
                    isActive || isCompleted
                      ? "text-gray-900"
                      : "text-gray-500",
                  ].join(" ")}
                >
                  {step.title}
                </span>
              </div>

              {index < steps.length - 1 && (
                <div
                  className={[
                    "mx-2 mb-6 h-px flex-1 sm:mx-4",
                    currentStep > step.number
                      ? "bg-green-600"
                      : "bg-gray-200",
                  ].join(" ")}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}