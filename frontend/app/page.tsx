import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 px-6">
      <div className="w-full max-w-2xl rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm sm:p-12">
        <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
          GoPratle
        </p>

        <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900">
          Post your event requirement
        </h1>

        <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-gray-500">
          Tell us about your event and what kind of
          professional you are looking for.
        </p>

        <Link
          href="/requirements/new"
          className="mt-8 inline-flex rounded-lg bg-gray-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-800"
        >
          Create Requirement
        </Link>
      </div>
    </main>
  );
}