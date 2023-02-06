export function CtaSection() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-4xl py-16 px-6 sm:py-24 lg:flex lg:max-w-7xl lg:items-center lg:justify-between lg:px-8">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">Want to get in touch?</span>
          <span className="-mb-1 block bg-cardinal-red bg-clip-text pb-1 text-transparent">
            Send us an email.
          </span>
        </h2>
        <div className="mt-6 space-y-4 sm:flex sm:space-y-0 sm:space-x-5">
          <a
            href="#"
            className="flex items-center justify-center rounded-md border border-transparent bg-cardinal-red bg-origin-border px-4 py-3 text-base font-medium text-white shadow-sm hover:from-purple-700 hover:to-cardinal-red-700"
          >
            Contact us
          </a>
          {/* <a
            href="#"
            className="flex items-center justify-center rounded-md border border-transparent bg-indigo-50 px-4 py-3 text-base font-medium text-indigo-800 shadow-sm hover:bg-indigo-100"
          >
            Get started
          </a> */}
        </div>
      </div>
    </div>
  );
}
