import {
  ArrowUturnLeftIcon,
  ChatBubbleLeftEllipsisIcon,
  DocumentChartBarIcon,
  HeartIcon,
  InboxIcon,
  PencilSquareIcon,
  TrashIcon,
  UsersIcon,
  PresentationChartLineIcon,
  CurrencyDollarIcon,
  RocketLaunchIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Financial Support",
    description:
      "Revenue generated for athletes will allow them to focus on their athletic careers and achieve their goals without worrying about financial constraints.",
    icon: CurrencyDollarIcon,
  },
  {
    name: "Exposure",
    description:
      "The support and exposure provided by fans and the company can help the athletes build their personal brand and increase their visibility, potentially leading to future opportunities both on and off the field.",
    icon: PresentationChartLineIcon,
  },
  {
    name: "Community",
    description:
      "The athletes will benefit from the sense of community and support that comes from having a dedicated group of fans and supporters.",
    icon: UserGroupIcon,
  },
  {
    name: "Professional Development",
    description:
      "The company plans to offer opportunities for professional development and career advancement for the athletes, such as Q&A sessions and private events.",
    icon: RocketLaunchIcon,
  },
];

export function FeatureSection() {
  return (
    <div className="bg-cardinal-red">
      <div className="mx-auto max-w-4xl py-16 px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:px-8 lg:pt-24">
        <h2 className="text-3xl font-bold tracking-tight text-white">
          How our athletes benefit
        </h2>
        <p className="mt-4 max-w-3xl text-lg text-zinc-100">
          Join us in our mission to empower and support the hardworking Stanford
          Athletes. Your support will provide them with the financial resources
          and exposure they need to succeed in their athletic careers.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16">
          {features.map((feature) => (
            <div key={feature.name}>
              <div>
                <span className="flex h-12 w-12 items-center justify-center rounded-md bg-white/10">
                  <feature.icon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </span>
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-medium text-white">
                  {feature.name}
                </h3>
                <p className="mt-2 text-base text-zinc-200">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
