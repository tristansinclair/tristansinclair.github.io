import Image from "next/image";

export function HeroSection() {
  return (
    <div className="relative">
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
          <div className="absolute inset-0 h-full w-full">
            <Image
              className="object-cover"
              src="https://stanforddaily.com/wp-content/uploads/2023/01/Runout_SG_112622_0163-1.jpg"
              alt="People working on laptops"
              fill
            />
            <div className="absolute inset-0 bg-cardinal-red mix-blend-multiply" />
          </div>
          <div className="relative py-16 px-6 sm:py-24 lg:py-32 lg:px-8">
            <h3 className="text-center text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Support
            </h3>
            <h1 className="text-center text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Stanford Athletes
            </h1>
            <p className="mx-auto mt-6 max-w-lg text-center text-xl text-zinc-200 sm:max-w-3xl">
              By using our platform, users can directly support Stanford
              athletes and contribute to their success on and off the field.
            </p>
            <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
              <div className="space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0">
                <a
                  href="#"
                  className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-cardinal-red-700 shadow-sm hover:bg-zinc-100 sm:px-8"
                >
                  Learn more
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center rounded-md border border-transparent bg-cardinal-red-700 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-cardinal-red sm:px-8"
                >
                  Support now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
