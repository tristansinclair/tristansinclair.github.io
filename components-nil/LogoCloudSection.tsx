import Image from "next/image";

export function LogoCloudSection() {
  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl py-16 px-6 lg:px-8">
        <p className="text-center text-base font-semibold text-gray-500">
          Supported and sponsored by
        </p>
        <div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <div className="relative h-12 w-full">
              <Image
                src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg"
                alt="Tuple"
                fill
              />
            </div>
          </div>
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <div className="relative h-12 w-full">
              <Image
                src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg"
                alt="Mirage"
                fill
              />
            </div>
          </div>
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <div className="relative h-12 w-full">
              <Image
                src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg"
                alt="StaticKit"
                fill
              />
            </div>
          </div>
          <div className="col-span-1 flex justify-center md:col-span-2 md:col-start-2 lg:col-span-1">
            <div className="relative h-12 w-full">
              <Image
                src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg"
                alt="Transistor"
                fill
              />
            </div>
          </div>
          <div className="col-span-2 flex justify-center md:col-span-2 md:col-start-4 lg:col-span-1">
            <div className="relative h-12 w-full">
              <Image
                src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg"
                alt="Workcation"
                fill
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
