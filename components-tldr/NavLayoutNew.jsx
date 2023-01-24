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
    <Popover className="relative z-50 px-8 lg:px-12">
      <div className="relative mx-auto w-full lg:max-w-6xl lg:px-8">
        <div className="flex items-center justify-between py-6 lg:justify-start lg:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            {!isHome && (
              <Link href="/tldr">
                <h1 className="text-4xl font-bold tracking-tight shadow-zinc-300 text-shadow-lg dark:text-shadow-none">
                  <span className="text-tldr-blue">T</span>
                  <span className="text-tldr-yellow">L</span>
                  <span className="text-tldr-green">D</span>
                  <span className="text-tldr-red">R</span>
                </h1>
              </Link>
            )}
          </div>
          <div className="px-2 lg:hidden">
            <Popover.Button className="btn-standard group ml-3 inline-flex items-center justify-center">
              <span className="sr-only">Open menu</span>
              <Bars3Icon
                className="h-6 w-6 stroke-zinc-400 transition group-hover:stroke-zinc-500 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400"
                aria-hidden="true"
              />
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
                        : "text-zinc-600 dark:text-zinc-500",
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
                        "ml-2 h-5 w-5 transition-transform group-hover:text-tldr-green"
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
                                  <p className="nav-item-text-main">
                                    {item.name}
                                  </p>
                                  <p className="nav-item-text-sub mt-1">
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

            <Link
              href="/tldr/advertising"
              className="text-base font-medium text-zinc-600 hover:text-tldr-green dark:text-zinc-500"
            >
              Advertising
            </Link>
          </Popover.Group>
          <div className="hidden items-center justify-end lg:flex lg:w-0 lg:flex-1">
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
          className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition lg:hidden "
        >
          {({ close }) => (
            <div className="divide-y-[1px] divide-zinc-200 rounded-2xl bg-white/90 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:divide-zinc-600 dark:bg-zinc-800 dark:ring-white/10">
              <div className="px-5 pt-5 pb-6">
                <div className="flex items-center justify-between">
                  <Link
                    href="/tldr"
                    className="focus:outline-none"
                    onClick={() => close()}
                  >
                    <h1 className="text-4xl font-bold tracking-tight shadow-zinc-300 text-shadow-lg dark:text-shadow-none">
                      <span className="text-tldr-blue">T</span>
                      <span className="text-tldr-yellow">L</span>
                      <span className="text-tldr-green">D</span>
                      <span className="text-tldr-red">R</span>
                    </h1>
                  </Link>
                  <div className="-mr-2">
                    <ModeToggle />
                    <Popover.Button className="btn-standard group ml-3 inline-flex items-center justify-center">
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon
                        className="h-6 w-6 stroke-zinc-400 transition group-hover:stroke-zinc-500 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400"
                        aria-hidden="true"
                      />
                    </Popover.Button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-8">
                    {newsletters.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="nav-item -m-3"
                        onClick={() => close()}
                      >
                        <div
                          className="h-6 w-6 flex-shrink-0"
                          aria-hidden="true"
                        >
                          {item.emoji}
                        </div>
                        <span className="nav-item-text-main ml-3">
                          {item.name}
                        </span>
                      </Link>
                    ))}
                  </nav>
                </div>
              </div>

              <div className="py-6 px-5">
                <p className="text-center text-base font-medium text-zinc-400">
                  Existing subscriber?{" "}
                  <Link
                    href="/tldr/login"
                    className="text-tldr-green hover:text-tldr-green-600"
                    onClick={() => close()}
                  >
                    Sign in
                  </Link>
                </p>
              </div>
            </div>
          )}
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
