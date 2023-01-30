import { useRouter } from "next/router";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import { Fragment } from "react";

type NewsletterFilterType = {
  id: string;
  name: string;
  options: { value: string; id: string; label: string; checked: boolean }[];
};

export default function NewsletterFilter() {
  var router = useRouter();
  var newsletterFilter = router.query["newsletter"];
  var filterActive = newsletterFilter ? true : false;

  // need to have initial state with the check boxes
  // put them in the filters to make things consistent
  // for now...
  var filters: NewsletterFilterType[] = [
    {
      id: "newsletter",
      name: "Newsletter",
      options: [
        {
          value: "tech",
          id: "newsletter",
          label: "Tech",
          checked: (router.query["newsletter"] as string)
            ?.split(",")
            .includes("tech")
            ? true
            : false,
        },
        {
          value: "crypto",
          id: "newsletter",
          label: "Crypto",
          checked: (router.query["newsletter"] as string)
            ?.split(",")
            .includes("crypto")
            ? true
            : false,
        },
      ],
    },
  ];

  function handleCheck(checked: Boolean, id: string, option: any) {
    if (checked) {
      // check if there are any existing filters
      if (router.query[id]) {
        router.query[id] += `,${option.value}`; // comma used to seperate multiple filters
      } else {
        router.query[id] = `${option.value}`;
      }
    }
    if (!checked) {
      if (router.query[id]) {
        let param = router?.query[id]?.toString();
        let array = param?.split(",");
        router.query[id] = array?.filter((param) => param !== option.value);
      }
    }

    // update the state in the filters
    let filteredFilters = filters[0]?.options.filter(
      (item) => item.value === option.value && item.id === id
    );
    filteredFilters.forEach((obj) => {
      obj.checked = !obj.checked;
    });

    // push on the new query params
    router.push({
      query: { ...router.query },
    });
  }

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
                  <div className="space-y-4">
                    {section.options.map((option, optionIdx) => (
                      <div key={option.value} className="flex items-center">
                        <input
                          checked={option.checked}
                          id={`filter-${option.id}-${optionIdx}`}
                          name={`${option.id}[]`}
                          defaultValue={option.value}
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          onChange={(e) => {
                            handleCheck(e.target.checked, option.id, option);
                          }}
                        />
                        <label
                          htmlFor={`filter-${option.id}-${optionIdx}`}
                          className="ml-3 text-sm text-gray-600"
                        >
                          {option.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
      ))}
    </Popover.Group>
  );
}
