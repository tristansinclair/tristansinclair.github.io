import Head from "next/head";
import Image from "next/image";
import {
  BanknotesIcon,
  FingerPrintIcon,
  RocketLaunchIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import NavLayout from "../../components-tldr/NavLayout";
import clsx from "clsx";

import logoAWS from "../../images/tldr/logos/aws.svg";
import logoAzure from "../../images/tldr/logos/azure.svg";
import logoCloudflare from "../../images/tldr/logos/cloudflare.svg";
import logoLaunchDarkly from "../../images/tldr/logos/launchdarkly.svg";
import logoRetool from "../../images/tldr/logos/retool.svg";
import logoDrata from "../../images/tldr/logos/drata.svg";
import Link from "next/link";
import SplitType from "split-type";
import { useEffect, useRef } from "react";
import gsap from "gsap";

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

      <main className="relative py-0 pb-12 lg:px-12">
        <div className="relative mx-auto mb-24 grid w-full gap-12 px-10 pt-12 lg:max-w-6xl lg:px-8">
          <Intro />
          <WhySection />
          {/* <CompanySection /> */}
          <NeedHelp />
        </div>
      </main>
    </>
  );
}

function Intro() {
  const target = useRef(null);
  const sub = useRef(null);
  useEffect(() => {
    if (target.current) {
      gsap.set(target.current, { visibility: "visible" });
      const text = new SplitType(target.current);
      gsap.from(text.chars, {
        // yPercent: -50,
        y: 100,
        opacity: 0,
        delay: 0.02,
        stagger: 0.05,
        duration: 0.5,
        // scale: 0.5,
        // ease: "expo.out",
      });
      if (sub.current) {
        gsap.set(sub.current, { visibility: "visible" });
        const text = new SplitType(sub.current);
        gsap.from(text, {
          // yPercent: -50,
          y: 100,
          opacity: 0,
          delay: 0.02,
          duration: 0.5,
          // scale: 0.5,
          // ease: "expo.out",
        });
      }
    }
  }, [target, sub]);

  return (
    <div>
      <h2 className="mt-16 text-center text-lg font-semibold text-tldr-blue md:mt-32">
        Advertising
      </h2>
      <h1
        ref={target}
        className="mx-auto overflow-hidden py-1 text-center text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-7xl"
      >
        Reach your target audience.
      </h1>
      <p
        ref={sub}
        className="mx-auto mt-4 max-w-2xl overflow-hidden text-center text-xl text-zinc-600 dark:text-zinc-300"
      >
        Use our platform to reach and engage engineers, entrepreneurs, and young
        creators from all around the world.
      </p>
      <div className="mt-4 flex flex-col items-center justify-center">
        <Link
          href="https://danni763618.typeform.com/to/K4Gdz1?typeform-source=tldr.tech"
          className="flex items-center justify-center rounded-2xl bg-tldr-blue py-3 px-5 text-base font-medium text-white shadow hover:bg-tldr-blue-600 focus:outline-none focus:ring-2 focus:ring-tldr-green-300 focus:ring-offset-2 focus:ring-offset-zinc-900"
        >
          Start now
        </Link>
        <p className=" mb-6 mt-48 text-base text-zinc-700 dark:text-zinc-300 ">
          Used by global companies
        </p>
        <div className="grid w-full grid-cols-2 place-items-center justify-items-stretch gap-8 md:grid-cols-6">
          {companies.map((company) => (
            <div
              key={company.name}
              className={clsx("relative col-span-1 h-6 md:h-8", company.style)}
            >
              <Image
                src={company.logo}
                alt={company.name}
                className={clsx("dark:logo-dark", company.style)}
                fill
              />
            </div>
          ))}
        </div>
        <ul className="grid grid-cols-6">
          {companies.map((company) => (
            <li
              key={company.name}
              className={clsx("relative col-span-1 h-10", company.style)}
            >
              <Image
                src={company.logo}
                alt={company.name}
                className={clsx("dark:logo-dark", company.style)}
                fill
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function NeedHelp() {
  return (
    <div>
      <div className="mx-auto mt-8 lg:flex lg:items-center">
        <div className="lg:w-0 lg:flex-1">
          <h2 className="text-center text-4xl font-semibold text-zinc-800 dark:text-zinc-200">
            Get in touch
          </h2>
          <p className="mt-3 max-w-3xl text-lg text-zinc-500 dark:text-zinc-400">
            Need help getting started but feeling overwhelmed? Don't worry, our
            team is here for you. Reach out to us and we'll guide you through
            the process, step by step.
          </p>
        </div>
        <div className="mt-8 lg:mt-0 lg:ml-8 ">
          <form className="sm:flex">
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email-address"
              type="email"
              autoComplete="email"
              required
              className="w-full rounded-md border border-zinc-900/10 bg-white px-5 py-3 shadow-md shadow-zinc-800/5  transition placeholder:text-zinc-400 focus:border-tldr-blue focus:outline-none focus:ring-4 focus:ring-tldr-blue/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-tldr-blue-400 dark:focus:ring-tldr-blue-400/10 sm:max-w-xs sm:text-sm"
              placeholder="Enter your email"
            />
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:shrink-0">
              <button
                type="submit"
                className="flex w-full items-center justify-center rounded-md bg-tldr-blue py-3 px-5 text-base font-medium text-white shadow hover:bg-tldr-blue-600 focus:outline-none focus:ring-2 focus:ring-tldr-blue-300 focus:ring-offset-2 focus:ring-offset-zinc-900"
              >
                Contact us
              </button>
            </div>
          </form>
          <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-500">
            We'll be in touch within 5 business days. You can also fill out our{" "}
            <Link
              href="https://danni763618.typeform.com/to/K4Gdz1?typeform-source=tldr.tech"
              className="font-medium underline"
            >
              survey.
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
let companies = [
  {
    name: "AWS",
    logo: logoAWS,
    style: "object-contain",
  },
  {
    name: "Launch Darkly",
    logo: logoLaunchDarkly,
    style: "object-contain",
  },
  {
    name: "Azure",
    logo: logoAzure,
    style: "object-contain",
  },
  {
    name: "Cloudflare",
    logo: logoCloudflare,
    style: "object-contain",
  },
  {
    name: "Retool",
    logo: logoRetool,
    style: "object-contain",
  },
  {
    name: "Drata",
    logo: logoDrata,
    style: "object-contain",
  },
];

function CompanySection() {
  return (
    <>
      <h2 className="text-center text-4xl font-semibold text-zinc-800 dark:text-zinc-200">
        Trusted by top global companies
      </h2>
      <div className="grid w-full grid-cols-2 justify-items-stretch gap-8 md:grid-cols-4">
        {companies.map((company) => (
          <div
            key={company.name}
            className={clsx("relative col-span-1 h-10", company.style)}
          >
            <Image
              src={company.logo}
              alt={company.name}
              className={clsx("dark:logo-dark", company.style)}
              fill
            />
          </div>
        ))}
      </div>
    </>
  );
}

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
    <>
      <h2 className="text-center text-4xl font-semibold text-zinc-800 dark:text-zinc-200">
        Why advertise with us?
      </h2>
      <dl className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-x-12">
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
    </>
  );
}
