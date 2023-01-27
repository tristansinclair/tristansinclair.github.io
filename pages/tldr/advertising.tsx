import Head from "next/head";

Advertise.getLayout = function getLayout(page: any) {
  return (
    <>
      <NavLayout>{page}</NavLayout>
    </>
  );
};

export default function Advertise() {
  return (
    <>
      <Head>
        <title>TLDR Advertising</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="relative py-0 pb-12 lg:py-24 lg:px-12">
        <div className="relative mx-auto w-full px-10 lg:max-w-6xl lg:px-8">
          <WhySection />
        </div>
      </main>
    </>
  );
}

import {
  BanknotesIcon,
  FingerPrintIcon,
  RocketLaunchIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import NavLayout from "../../components-tldr/NavLayout";
import clsx from "clsx";

const features = [
  {
    name: "Reach",
    description:
      "Purchasing a spot as an advertiser on our platform gives your company access to a large audience of 850,000 readers who are interested in technology.",
    icon: UsersIcon,
  },
  {
    name: "Targeted Audience",
    description:
      "By advertising in a newsletter about tech, companies can target an audience that is specifically interested in technology-related products or services, increasing the likelihood of conversions.",
    icon: FingerPrintIcon,
  },
  {
    name: "Credibility",
    description:
      "Being featured as an advertiser in our reputable newsletter can help build trust and credibility for your company among our target audience.",
    icon: RocketLaunchIcon,
  },
  {
    name: "Cost-Effective",
    description:
      "Advertising in a newsletter can be a cost-effective way for your company to reach their target audience compared to more traditional forms of advertising such as television or print.",
    icon: BanknotesIcon,
  },
];

function WhySection() {
  const colors = [
    "bg-tldr-blue",
    "bg-tldr-yellow",
    "bg-tldr-green",
    "bg-tldr-red",
  ];
  return (
    <div className="overflow-hidden">
      <div className="relative gap-0 p-1 lg:grid lg:grid-cols-3 lg:gap-12">
        <div className="lg:col-span-1">
          <h2 className="text-4xl font-bold tracking-tight text-zinc-700 dark:text-zinc-200 sm:text-4xl">
            Reach your target audience and elevate your business to new heights.
          </h2>
        </div>
        <dl className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-x-12 lg:col-span-2 lg:mt-0">
          {features.map((feature, idx) => (
            <div
              key={feature.name}
              className="rounded-2xl bg-white/90 px-4 py-3 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10"
            >
              <dt>
                <div
                  className={clsx(
                    colors[idx % 4],
                    "flex h-12 w-12 items-center justify-center rounded-xl text-white dark:text-zinc-200"
                  )}
                >
                  <feature.icon className="h-8 w-8" aria-hidden="true" />
                </div>
                <p className="mt-6 text-xl font-semibold leading-8 text-zinc-700 dark:text-zinc-200">
                  {feature.name}
                </p>
              </dt>
              <dd className="mt-2 text-base text-zinc-500 dark:text-zinc-400">
                {feature.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
