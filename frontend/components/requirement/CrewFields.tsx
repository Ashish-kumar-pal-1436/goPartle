interface CrewFieldsProps {
  data: {
    crewType: string;
    numberOfMembers: string;
    workingHours: string;
    equipmentRequired: string;
  };

  onChange: (
    field: string,
    value: string
  ) => void;
}

export default function CrewFields({
  data,
  onChange,
}: CrewFieldsProps) {
  return (
    <section className="space-y-8">
      <div>
        <h2 className="text-2xl font-semibold text-gray-900">
          Event Crew Details
        </h2>

        <p className="mt-2 text-sm text-gray-500">
          Tell us about the crew support your event needs.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="crew-type"
            className="mb-2 block text-sm font-medium text-gray-800"
          >
            Crew type
          </label>

          <select
            id="crew-type"
            value={data.crewType}
            onChange={(event) =>
              onChange(
                "crewType",
                event.target.value
              )
            }
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-gray-900"
          >
            <option value="">Select crew type</option>
            <option value="event-staff">
              Event Staff
            </option>
            <option value="technical">
              Technical Crew
            </option>
            <option value="security">
              Security
            </option>
            <option value="hospitality">
              Hospitality
            </option>
            <option value="setup">
              Setup & Breakdown
            </option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="crew-members"
            className="mb-2 block text-sm font-medium text-gray-800"
          >
            Number of members
          </label>

          <input
            id="crew-members"
            type="number"
            min="1"
            value={data.numberOfMembers}
            onChange={(event) =>
              onChange(
                "numberOfMembers",
                event.target.value
              )
            }
            placeholder="e.g. 10"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-gray-900"
          />
        </div>

        <div>
          <label
            htmlFor="working-hours"
            className="mb-2 block text-sm font-medium text-gray-800"
          >
            Working hours
          </label>

          <input
            id="working-hours"
            type="number"
            min="1"
            value={data.workingHours}
            onChange={(event) =>
              onChange(
                "workingHours",
                event.target.value
              )
            }
            placeholder="e.g. 8"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-gray-900"
          />
        </div>

        <div>
          <label
            htmlFor="equipment"
            className="mb-2 block text-sm font-medium text-gray-800"
          >
            Equipment required
          </label>

          <input
            id="equipment"
            type="text"
            value={data.equipmentRequired}
            onChange={(event) =>
              onChange(
                "equipmentRequired",
                event.target.value
              )
            }
            placeholder="e.g. Lighting equipment"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-gray-900"
          />
        </div>
      </div>
    </section>
  );
}