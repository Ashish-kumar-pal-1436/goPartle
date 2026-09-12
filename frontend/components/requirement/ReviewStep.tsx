import type {
  RequirementFormData,
} from "@/types/requirement";

interface ReviewStepProps {
  data: RequirementFormData;
}

export default function ReviewStep({
  data,
}: ReviewStepProps) {
  return (
    <section className="space-y-8">
      <div>
        <h2 className="text-2xl font-semibold text-gray-900">
          Review Your Requirement
        </h2>

        <p className="mt-2 text-sm text-gray-500">
          Review the information below before submitting your
          requirement.
        </p>
      </div>

      <div className="space-y-6">
        <div className="rounded-xl border border-gray-200 p-5">
          <h3 className="text-base font-semibold text-gray-900">
            Event Details
          </h3>

          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <ReviewItem
              label="Event name"
              value={data.event.name}
            />

            <ReviewItem
              label="Event type"
              value={data.event.type}
            />

            <ReviewItem
              label="Start date"
              value={data.event.startDate}
            />

            <ReviewItem
              label="End date"
              value={data.event.endDate}
            />

            <ReviewItem
              label="Location"
              value={data.event.location}
            />

            <ReviewItem
              label="Venue"
              value={data.event.venue || "Not provided"}
            />
          </div>
        </div>

        <div className="rounded-xl border border-gray-200 p-5">
          <h3 className="text-base font-semibold text-gray-900">
            Selected Category
          </h3>

          <p className="mt-3 text-sm capitalize text-gray-600">
            {data.category}
          </p>
        </div>

        <div className="rounded-xl border border-gray-200 p-5">
          <h3 className="text-base font-semibold text-gray-900">
            Category Details
          </h3>

          <div className="mt-4 space-y-3">
            {Object.entries(data.details).map(
              ([key, value]) => (
                <div
                  key={key}
                  className="flex flex-col gap-1 border-b border-gray-100 pb-3 last:border-0"
                >
                  <span className="text-xs font-medium uppercase tracking-wide text-gray-400">
                    {formatLabel(key)}
                  </span>

                  <span className="text-sm text-gray-700">
                    {Array.isArray(value)
                      ? value.length > 0
                        ? value.join(", ")
                        : "None selected"
                      : value || "Not provided"}
                  </span>
                </div>
              )
            )}
          </div>
        </div>

        <div className="rounded-xl border border-gray-200 p-5">
          <h3 className="text-base font-semibold text-gray-900">
            Additional Requirements
          </h3>

          <div className="mt-4 space-y-4">
            <ReviewItem
              label="Technical requirements"
              value={
                data.additionalRequirements
                  .technicalRequirements ||
                "Not provided"
              }
            />

            <ReviewItem
              label="Special requests"
              value={
                data.additionalRequirements.specialRequests ||
                "Not provided"
              }
            />

            <ReviewItem
              label="Additional notes"
              value={
                data.additionalRequirements.notes ||
                "Not provided"
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ReviewItem({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div>
      <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
        {label}
      </p>

      <p className="mt-1 text-sm text-gray-700">
        {value}
      </p>
    </div>
  );
}

function formatLabel(value: string) {
  return value
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (character) =>
      character.toUpperCase()
    );
}