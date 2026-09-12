import type { AdditionalRequirements as AdditionalRequirementsData } from "@/types/requirement";

interface AdditionalRequirementsProps {
  data: AdditionalRequirementsData;
  onChange: (
    field: keyof AdditionalRequirementsData,
    value: string
  ) => void;
}

export default function AdditionalRequirements({
  data,
  onChange,
}: AdditionalRequirementsProps) {
  return (
    <section className="space-y-8">
      <div>
        <h2 className="text-2xl font-semibold text-gray-900">
          Additional Requirements
        </h2>

        <p className="mt-2 text-sm text-gray-500">
          Add any extra information that professionals should
          know about your event.
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <label
            htmlFor="technical-requirements"
            className="mb-2 block text-sm font-medium text-gray-800"
          >
            Technical requirements
          </label>

          <textarea
            id="technical-requirements"
            value={data.technicalRequirements}
            onChange={(event) =>
              onChange(
                "technicalRequirements",
                event.target.value
              )
            }
            placeholder="e.g. Sound system, wireless microphones, lighting, stage setup..."
            rows={4}
            className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-gray-900"
          />
        </div>

        <div>
          <label
            htmlFor="special-requests"
            className="mb-2 block text-sm font-medium text-gray-800"
          >
            Special requests
          </label>

          <textarea
            id="special-requests"
            value={data.specialRequests}
            onChange={(event) =>
              onChange(
                "specialRequests",
                event.target.value
              )
            }
            placeholder="e.g. Specific artist preference, special decoration, guest requirements..."
            rows={4}
            className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-gray-900"
          />
        </div>

        <div>
          <label
            htmlFor="additional-notes"
            className="mb-2 block text-sm font-medium text-gray-800"
          >
            Additional notes
          </label>

          <textarea
            id="additional-notes"
            value={data.notes}
            onChange={(event) =>
              onChange("notes", event.target.value)
            }
            placeholder="Anything else you would like us to know..."
            rows={4}
            className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-gray-900"
          />
        </div>
      </div>
    </section>
  );
}