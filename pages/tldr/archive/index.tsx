import { getAllNewsletters } from "../../../lib/mdxUtils";
import Head from "next/head";
import NewsletterType from "../../../interfaces/newsletters";
import { ArchiveLayout } from "../../../components-tldr/ArchiveLayout";
import { NewsletterCardFull } from "../../../components-tldr/NewsletterCardFull";
import NavLayout from "../../../components-tldr/NavLayout";
import { useRouter } from "next/router";
import { Disclosure, Menu, Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import { Fragment, useState } from "react";
import { Field, Formik } from "formik";

type Props = {
  allNewsletters: NewsletterType[];
};

export const getStaticProps = async () => {
  const allNewsletters = getAllNewsletters([
    "title",
    "date",
    "slug",
    "newsletter",
  ]);

  return {
    props: { allNewsletters },
  };
};

Archive.getLayout = function getLayout(page: any) {
  return (
    <>
      <NavLayout>{page}</NavLayout>
    </>
  );
};

const filters = [
  {
    id: "newsletter",
    name: "Newsletter",
    options: [
      { value: "tech", label: "Tech" },
      { value: "crypto", label: "Crypto" },
    ],
  },
];

export default function Archive({ allNewsletters }: Props) {
  var router = useRouter();
  var newsletterFilter = router.query["newsletter"];

  var filteredNewsletters = allNewsletters;
  if (newsletterFilter) {
    filteredNewsletters = allNewsletters.filter(
      (obj) => obj.newsletter === newsletterFilter
    );
  }

  return (
    <>
      <Head>
        <title>TLDR Archive</title>
        <meta name="description" content="Skills" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="The TLDR Newsletter's Archive" />
      </Head>
      <ArchiveLayout>
        <header>
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            {"Newsletter Archive"}
          </h1>
          <p className="mt-6 max-w-xl text-base text-zinc-600 dark:text-zinc-400">
            {
              "TLDR is a daily newsletter with links and TLDRs of the most interesting stories in startups 🚀, tech 📱, and programming 💻!"
            }
          </p>
        </header>

        <div className="mt-12 sm:mt-20">
          {/* <Filters /> */}
          <div className="lg:border-l lg:border-zinc-100 lg:px-6 lg:dark:border-zinc-700/40">
            <div className="flex max-w-4xl flex-col space-y-4">
              {filteredNewsletters.map((post) => (
                <NewsletterCardFull key={post.slug} newsletter={post} />
              ))}
            </div>
          </div>
        </div>
      </ArchiveLayout>
    </>
  );
}
function Filters() {
  var router = useRouter();
  var newsletterFilter = router.query["newsletter"];
  var filterActive = newsletterFilter ? true : false;

  return (
    <Popover.Group className="mb-4 flex justify-end px-2 sm:items-baseline sm:space-x-8 lg:px-8">
      {filters.map((section, sectionIdx) => (
        <Popover
          as="div"
          key={section.name}
          id={`desktop-menu-${sectionIdx}`}
          className="relative inline-block text-left"
        >
          {({ open }) => (
            <>
              <Popover.Button
                className={clsx(
                  open || filterActive
                    ? "text-tldr-green"
                    : "text-zinc-600 dark:text-zinc-500",
                  "group inline-flex items-center text-base font-medium hover:text-tldr-green focus:outline-none dark:hover:text-tldr-green"
                )}
              >
                <span>{section.name}</span>
                <ChevronDownIcon
                  className={clsx(
                    open ? "" : "rotate-180",
                    filterActive ? "text-tldr-green" : "text-zinc-500",
                    "ml-2 h-5 w-5 transition-transform group-hover:text-tldr-green"
                  )}
                  aria-hidden="true"
                />
              </Popover.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Popover.Panel className="absolute right-0 z-10 mt-2 origin-top-right rounded-md bg-white p-4 shadow-2xl ring-1 ring-black/5 focus:outline-none">
                  <Formik
                    initialValues={{
                      newsletters: [],
                    }}
                    onSubmit={async (values) => {}}
                  >
                    <div className="space-y-4">
                      {section.options.map((option, optionIdx) => (
                        <div key={option.value} className="flex items-center">
                          <Field
                            type="checkbox"
                            name="checked"
                            value={option.value}
                            // defaultValue={option.value}
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          {/* <input
                            id={`filter-${section.id}-${optionIdx}`}
                            name={`${section.id}[]`}
                            defaultValue={option.value}
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          /> */}
                          <label
                            htmlFor={`filter-${section.id}-${optionIdx}`}
                            className="ml-3 whitespace-nowrap pr-6 text-sm font-medium text-gray-900"
                          >
                            {option.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </Formik>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
      ))}
    </Popover.Group>
  );
}
