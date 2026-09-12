interface PlannerFieldsProps {
  data: {
    budget: string;
    guestCount: string;
    services: string[];
    eventStyle: string;
  };

  onChange: (
    field: string,
    value: string | string[]
  ) => void;
}

const services = [
  "Venue Management",
  "Decor & Design",
  "Catering",
  "Guest Management",
  "Photography",
  "Entertainment",
];

export default function PlannerFields({
  data,
  onChange,
}: PlannerFieldsProps) {
  const handleServiceChange = (service: string) => {
    const isSelected = data.services.includes(service);

    const updatedServices = isSelected
      ? data.services.filter((item) => item !== service)
      : [...data.services, service];

    onChange("services", updatedServices);
  };

  return (
    <section className="space-y-8">
      <div>
        <h2 className="text-2xl font-semibold text-gray-900">
          Event Planner Details
        </h2>

        <p className="mt-2 text-sm text-gray-500">
          Tell us what kind of planning support you need.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="planner-budget"
            className="mb-2 block text-sm font-medium text-gray-800"
          >
            Estimated budget
          </label>

          <input
            id="planner-budget"
            type="number"
            min="0"
            value={data.budget}
            onChange={(event) =>
              onChange("budget", event.target.value)
            }
            placeholder="e.g. 150000"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-gray-900"
          />
        </div>

        <div>
          <label
            htmlFor="planner-guests"
            className="mb-2 block text-sm font-medium text-gray-800"
          >
            Expected guests
          </label>

          <input
            id="planner-guests"
            type="number"
            min="1"
            value={data.guestCount}
            onChange={(event) =>
              onChange(
                "guestCount",
                event.target.value
              )
            }
            placeholder="e.g. 200"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-gray-900"
          />
        </div>
      </div>

      <div>
        <label className="mb-3 block text-sm font-medium text-gray-800">
          Services required
        </label>

        <div className="grid gap-3 sm:grid-cols-2">
          {services.map((service) => {
            const selected =
              data.services.includes(service);

            return (
              <label
                key={service}
                className={[
                  "flex cursor-pointer items-center gap-3 rounded-lg border p-4 transition",
                  selected
                    ? "border-gray-900 bg-gray-50"
                    : "border-gray-200 hover:border-gray-400",
                ].join(" ")}
              >
                <input
                  type="checkbox"
                  checked={selected}
                  onChange={() =>
                    handleServiceChange(service)
                  }
                  className="h-4 w-4"
                />

                <span className="text-sm text-gray-700">
                  {service}
                </span>
              </label>
            );
          })}
        </div>
      </div>

      <div>
        <label
          htmlFor="event-style"
          className="mb-2 block text-sm font-medium text-gray-800"
        >
          Event style
        </label>

        <select
          id="event-style"
          value={data.eventStyle}
          onChange={(event) =>
            onChange(
              "eventStyle",
              event.target.value
            )
          }
          className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-gray-900"
        >
          <option value="">Select event style</option>
          <option value="traditional">Traditional</option>
          <option value="modern">Modern</option>
          <option value="luxury">Luxury</option>
          <option value="minimal">Minimal</option>
          <option value="themed">Themed</option>
          <option value="other">Other</option>
        </select>
      </div>
    </section>
  );
}