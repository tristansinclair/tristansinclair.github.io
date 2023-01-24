import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import ModeToggle from "../components/ModeToggle";
import Link from "next/link";
import { useRouter } from "next/router";

export default function NavLayoutNew({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
}

const newsletters = [
  {
    name: "Startups, Tech, & Programming",
    description:
      "The latest news, trends, and insights on startups, technology, and programming, curated for tech enthusiasts and entrepreneurs.",
    href: "/tldr/archive?newsletter=tech",
    emoji: "👨‍💻",
  },
  {
    name: "Crypto",
    description:
      "Updates on the latest developments in the cryptocurrency market and field.",
    href: "/tldr/archive?newsletter=crypto",
    emoji: "🪙",
  },
  {
    name: "Founders & Entrepreneurs",
    description:
      "Provides practical advice, insights, and inspiration for technology startup founders and entrepreneurs.",
    href: "/tldr/archive?newsletter=founders",
    emoji: "🙍‍♀️",
  },
];

function Navbar() {
  let curPath = useRouter().pathname;
  let isHome = curPath == "/tldr";
  return (
    <Popover className="relative px-8 lg:px-12 z-50">
      <div className="relative w-full mx-auto lg:max-w-6xl lg:px-8">
        <div className="flex items-center justify-between py-6 lg:justify-start lg:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            {!isHome && (
              <Link href="/tldr">
                <h1 className="font-bold tracking-tight text-4xl text-shadow-lg shadow-zinc-300 dark:text-shadow-none">
                  <span className="text-tldr-blue">T</span>
                  <span className="text-tldr-yellow">L</span>
                  <span className="text-tldr-green">D</span>
                  <span className="text-tldr-red">R</span>
                </h1>
              </Link>
            )}
          </div>
          <div className="-my-2 -mr-2 lg:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden space-x-10 lg:flex">
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={clsx(
                      open || curPath == "/tldr/archive"
                        ? "text-tldr-green"
                        : "text-zinc-500",
                      "group inline-flex items-center text-base font-medium hover:text-tldr-green focus:outline-none"
                    )}
                  >
                    <span>Newsletters</span>
                    <ChevronDownIcon
                      className={clsx(
                        open ? "" : "rotate-180 ",
                        open || curPath == "/tldr/archive"
                          ? "text-tldr-green"
                          : "text-zinc-500",
                        "ml-2 h-5 w-5 group-hover:text-tldr-green transition-transform"
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
                      {({ close }) => (
                        <div className="overflow-hidden rounded-2xl bg-white/90 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10">
                          <div className="relative grid gap-6 sm:gap-8 sm:p-8">
                            {newsletters.map((item) => (
                              <Link
                                key={item.name}
                                href={item.href}
                                className="-m-3 flex items-start rounded-lg p-3 hover:bg-zinc-100/90 dark:hover:bg-zinc-700/90"
                                onClick={() => close()}
                              >
                                <div
                                  className="h-6 w-6 flex-shrink-0"
                                  aria-hidden="true"
                                >
                                  {item.emoji}
                                </div>
                                <div className="ml-4">
                                  <p className="text-base font-medium text-zinc-700 dark:text-zinc-200">
                                    {item.name}
                                  </p>
                                  <p className="mt-1 text-sm text-zinc-400 dark:text-zinc-500">
                                    {item.description}
                                  </p>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>

            <a
              href="#"
              className="text-base font-medium  text-zinc-500 hover:text-tldr-green"
            >
              Advertising
            </a>
          </Popover.Group>
          <div className="hidden items-center justify-end lg:flex lg:flex-1 lg:w-0">
            <ModeToggle />
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition lg:hidden"
        >
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <h1 className="font-bold tracking-tight text-4xl text-shadow-lg shadow-zinc-300 dark:text-shadow-none">
                  <span className="text-tldr-blue">T</span>
                  <span className="text-tldr-yellow">L</span>
                  <span className="text-tldr-green">D</span>
                  <span className="text-tldr-red">R</span>
                </h1>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {newsletters.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                    >
                      <div className="h-6 w-6 flex-shrink-0" aria-hidden="true">
                        {item.emoji}
                      </div>
                      <span className="ml-3 text-base font-medium text-gray-900">
                        {item.name}
                      </span>
                    </a>
                  ))}
                </nav>
              </div>
            </div>
            <div className="space-y-6 py-6 px-5">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                <a
                  href="#"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Pricing
                </a>

                <a
                  href="#"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Docs
                </a>
              </div>
              <div>
                <a
                  href="#"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                >
                  Sign up
                </a>
                <p className="mt-6 text-center text-base font-medium text-gray-500">
                  Existing customer?{" "}
                  <a href="#" className="text-indigo-600 hover:text-indigo-500">
                    Sign in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
