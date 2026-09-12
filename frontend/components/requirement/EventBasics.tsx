"use client";

import type {
  EventBasics as EventBasicsData,
  EventType,
  RequirementCategory,
} from "@/types/requirement";

interface EventBasicsProps {
  data: EventBasicsData;
  category: RequirementCategory | "";
  onEventChange: (
    field: keyof EventBasicsData,
    value: string
  ) => void;
  onCategoryChange: (category: RequirementCategory) => void;
}

const eventTypes: {
  value: EventType;
  label: string;
}[] = [
  {
    value: "wedding",
    label: "Wedding",
  },
  {
    value: "corporate",
    label: "Corporate Event",
  },
  {
    value: "birthday",
    label: "Birthday",
  },
  {
    value: "concert",
    label: "Concert",
  },
  {
    value: "festival",
    label: "Festival",
  },
  {
    value: "private",
    label: "Private Event",
  },
  {
    value: "other",
    label: "Other",
  },
];

const categories: {
  value: RequirementCategory;
  title: string;
  description: string;
}[] = [
  {
    value: "planner",
    title: "Event Planner",
    description:
      "Plan and manage the complete event experience.",
  },
  {
    value: "performer",
    title: "Performer",
    description:
      "Find artists, singers, DJs, bands, or other performers.",
  },
  {
    value: "crew",
    title: "Event Crew",
    description:
      "Hire event staff and technical crew for your event.",
  },
];

export default function EventBasics({
  data,
  category,
  onEventChange,
  onCategoryChange,
}: EventBasicsProps) {
  return (
    <section className="space-y-8">
      <div>
        <h2 className="text-2xl font-semibold text-gray-900">
          Tell us about your event
        </h2>

        <p className="mt-2 text-sm text-gray-500">
          Start with the basic details so we can understand
          what you need.
        </p>
      </div>

      <div className="grid gap-6">
        <div>
          <label
            htmlFor="event-name"
            className="mb-2 block text-sm font-medium text-gray-800"
          >
            Event name
          </label>

          <input
            id="event-name"
            type="text"
            value={data.name}
            onChange={(event) =>
              onEventChange("name", event.target.value)
            }
            placeholder="e.g. Rahul & Priya Wedding"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-gray-900"
          />
        </div>

        <div>
          <label
            htmlFor="event-type"
            className="mb-2 block text-sm font-medium text-gray-800"
          >
            Event type
          </label>

          <select
            id="event-type"
            value={data.type}
            onChange={(event) =>
              onEventChange(
                "type",
                event.target.value
              )
            }
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-gray-900"
          >
            <option value="">
              Select event type
            </option>

            {eventTypes.map((eventType) => (
              <option
                key={eventType.value}
                value={eventType.value}
              >
                {eventType.label}
              </option>
            ))}
          </select>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="start-date"
              className="mb-2 block text-sm font-medium text-gray-800"
            >
              Start date
            </label>

            <input
              id="start-date"
              type="date"
              value={data.startDate}
              onChange={(event) =>
                onEventChange(
                  "startDate",
                  event.target.value
                )
              }
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-gray-900"
            />
          </div>

          <div>
            <label
              htmlFor="end-date"
              className="mb-2 block text-sm font-medium text-gray-800"
            >
              End date
            </label>

            <input
              id="end-date"
              type="date"
              value={data.endDate}
              min={data.startDate || undefined}
              onChange={(event) =>
                onEventChange(
                  "endDate",
                  event.target.value
                )
              }
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-gray-900"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="location"
            className="mb-2 block text-sm font-medium text-gray-800"
          >
            Location
          </label>

          <input
            id="location"
            type="text"
            value={data.location}
            onChange={(event) =>
              onEventChange(
                "location",
                event.target.value
              )
            }
            placeholder="e.g. Noida, Uttar Pradesh"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-gray-900"
          />
        </div>

        <div>
          <label
            htmlFor="venue"
            className="mb-2 block text-sm font-medium text-gray-800"
          >
            Venue
            <span className="ml-2 text-xs text-gray-400">
              Optional
            </span>
          </label>

          <input
            id="venue"
            type="text"
            value={data.venue}
            onChange={(event) =>
              onEventChange(
                "venue",
                event.target.value
              )
            }
            placeholder="e.g. The Grand Ballroom"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-gray-900"
          />
        </div>
      </div>

      <div>
        <div className="mb-4">
          <h3 className="text-base font-semibold text-gray-900">
            What are you looking for?
          </h3>

          <p className="mt-1 text-sm text-gray-500">
            Choose the category that best matches your
            requirement.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {categories.map((item) => {
            const isSelected = category === item.value;

            return (
              <button
                key={item.value}
                type="button"
                onClick={() =>
                  onCategoryChange(item.value)
                }
                className={[
                  "rounded-xl border p-5 text-left transition",
                  isSelected
                    ? "border-gray-900 bg-gray-50 ring-1 ring-gray-900"
                    : "border-gray-200 bg-white hover:border-gray-400",
                ].join(" ")}
              >
                <div className="flex items-start justify-between gap-3">
                  <h4 className="font-semibold text-gray-900">
                    {item.title}
                  </h4>

                  <div
                    className={[
                      "flex h-5 w-5 shrink-0 items-center justify-center rounded-full border",
                      isSelected
                        ? "border-gray-900"
                        : "border-gray-300",
                    ].join(" ")}
                  >
                    {isSelected && (
                      <div className="h-2.5 w-2.5 rounded-full bg-gray-900" />
                    )}
                  </div>
                </div>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                  {item.description}
                </p>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}