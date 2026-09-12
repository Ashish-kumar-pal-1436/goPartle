interface PerformerFieldsProps {
  data: {
    performanceType: string;
    genre: string;
    numberOfPerformers: string;
    duration: string;
    budget: string;
  };

  onChange: (
    field: string,
    value: string
  ) => void;
}

export default function PerformerFields({
  data,
  onChange,
}: PerformerFieldsProps) {
  return (
    <section className="space-y-8">
      <div>
        <h2 className="text-2xl font-semibold text-gray-900">
          Performer Details
        </h2>

        <p className="mt-2 text-sm text-gray-500">
          Tell us about the performance you are looking
          for.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="performance-type"
            className="mb-2 block text-sm font-medium text-gray-800"
          >
            Performance type
          </label>

          <select
            id="performance-type"
            value={data.performanceType}
            onChange={(event) =>
              onChange(
                "performanceType",
                event.target.value
              )
            }
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-gray-900"
          >
            <option value="">
              Select performance type
            </option>
            <option value="singer">Singer</option>
            <option value="dj">DJ</option>
            <option value="band">Band</option>
            <option value="dancer">Dancer</option>
            <option value="comedian">Comedian</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="genre"
            className="mb-2 block text-sm font-medium text-gray-800"
          >
            Genre
          </label>

          <input
            id="genre"
            type="text"
            value={data.genre}
            onChange={(event) =>
              onChange("genre", event.target.value)
            }
            placeholder="e.g. Bollywood"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-gray-900"
          />
        </div>

        <div>
          <label
            htmlFor="performer-count"
            className="mb-2 block text-sm font-medium text-gray-800"
          >
            Number of performers
          </label>

          <input
            id="performer-count"
            type="number"
            min="1"
            value={data.numberOfPerformers}
            onChange={(event) =>
              onChange(
                "numberOfPerformers",
                event.target.value
              )
            }
            placeholder="e.g. 1"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-gray-900"
          />
        </div>

        <div>
          <label
            htmlFor="performance-duration"
            className="mb-2 block text-sm font-medium text-gray-800"
          >
            Duration (minutes)
          </label>

          <input
            id="performance-duration"
            type="number"
            min="1"
            value={data.duration}
            onChange={(event) =>
              onChange(
                "duration",
                event.target.value
              )
            }
            placeholder="e.g. 120"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-gray-900"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="performer-budget"
          className="mb-2 block text-sm font-medium text-gray-800"
        >
          Performance budget
        </label>

        <input
          id="performer-budget"
          type="number"
          min="0"
          value={data.budget}
          onChange={(event) =>
            onChange("budget", event.target.value)
          }
          placeholder="e.g. 30000"
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-gray-900"
        />
      </div>
    </section>
  );
}