import Image from "next/image";

import logoSRV from "../images/logos/srv.png";
import logoStanford from "../images/logos/stanford.png";
import logoCepheid from "../images/logos/cepheid.png";
import logoLockerverse from "../images/logos/lockerverse.webp";
import logoRec from "../images/logos/rec.png";
import { AcademicCapIcon, BriefcaseIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Resume() {
  let school = [
    {
      company: "San Ramon Valley High School",
      title: "Student",
      logo: logoSRV,
      start: "2015",
      end: "2019",
    },
    {
      company: "Stanford University",
      title: "BS Computer Science: AI/ML, Minor MS&E",
      logo: logoStanford,
      start: "2019",
      end: "2022",
    },
    {
      company: "Stanford University",
      title: "MS Computer Science",
      logo: logoStanford,
      start: "2022",
      end: "2023",
    },
  ];

  let work = [
    {
      company: "Cepheid",
      title: "Data Science Intern",
      logo: logoCepheid,
      start: "June 2021",
      end: "August 2021",
    },
    {
      company: "Stanford Recreation & Wellness",
      title: "Member Services Associate",
      logo: logoRec,
      start: "November 2021",
      end: "April 2022",
    },
    {
      company: "Lockerverse",
      title: "Software Engineer Intern",
      logo: logoLockerverse,
      start: "June 2022",
      end: "August 2022",
    },
  ];

  return (
    <section className="mt-8 lg:mt-0 rounded-2xl border border-zinc-200 p-6 dark:border-zinc-700/40 dark:ring-white/10 dark:hover:ring-white/20">
      <ol className="space-y-4">
        <h2 className="flex text-sm font-semibold text-zinc-800 dark:text-zinc-100">
          <AcademicCapIcon className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500 h-6 w-6 flex-none" />
          <span className="ml-3 self-center">Academics</span>
        </h2>
        {school.map((role, roleIndex) => (
          <li key={roleIndex} className="flex gap-4">
            <div className="relative flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={role.logo}
                alt=""
                className="h-7 w-7 object-contain"
                unoptimized
              />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-800 dark:text-zinc-100">
                {role.company}
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                {role.title}
              </dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                aria-label={`${role.start} until ${role.end}`}
              >
                <time dateTime={role.start}>{role.start}</time>{" "}
                <span aria-hidden="true">—</span>{" "}
                <time dateTime={role.end}>{role.end}</time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>

      <ol className="mt-10 space-y-4">
        <h2 className="flex text-sm font-semibold text-zinc-800 dark:text-zinc-100">
          <BriefcaseIcon className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500 h-6 w-6 flex-none" />
          <span className="ml-3 self-center">Work</span>
        </h2>
        {work.map((role, roleIndex) => (
          <li key={roleIndex} className="flex gap-4">
            <div className="relative flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={role.logo}
                alt=""
                className="h-7 w-7 object-contain"
                unoptimized
              />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-800 dark:text-zinc-100">
                {role.company}
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                {role.title}
              </dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                aria-label={`${role.start} until ${role.end}`}
              >
                <time dateTime={role.start}>{role.start}</time>{" "}
                <span aria-hidden="true">—</span>{" "}
                <time dateTime={role.end}>{role.end}</time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
      <Link
        className="inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-zinc-200 font-medium text-zinc-800 hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-800/60 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70 group mt-6 w-full"
        href="/#"
      >
        Download CV
        <svg
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden="true"
          className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50"
        >
          <path
            d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      </Link>
    </section>
  );
}
