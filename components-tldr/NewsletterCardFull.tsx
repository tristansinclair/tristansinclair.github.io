import { NewsletterType } from "../interfaces/newsletters";
import { formatDate } from "../lib/formatDate";
import Link from "next/link";

export function NewsletterCardFull({
  newsletter,
}: {
  newsletter: NewsletterType;
}) {
  return (
    <>
      <article className="gap-20 lg:grid lg:grid-cols-4 lg:items-baseline">
        <time
          className="relative z-10 order-first mb-3 hidden items-center pl-3.5 text-sm text-zinc-400 dark:text-zinc-500 lg:block"
          dateTime={newsletter.date}
        >
          <span
            className="absolute inset-y-0 left-0 flex items-center"
            aria-hidden="true"
          >
            <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"></span>
          </span>
          {formatDate(newsletter.date)}
        </time>

        <Link
          className="col-span-3 flex flex-col rounded-2xl bg-white/90 px-4 py-3 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 lg:hover:scale-[103%]"
          href={"archive/" + newsletter.slug}
        >
          <time
            className="order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500 lg:hidden"
            dateTime={newsletter.date}
          >
            <span className="relative flex items-center" aria-hidden="true">
              <span className="mr-3 h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"></span>
              {formatDate(newsletter.date)}
            </span>
          </time>
          <span className="text-base tracking-tight text-zinc-700 dark:text-zinc-200">
            {newsletter.title}
          </span>
          <div
            aria-hidden="true"
            className="relative z-10 mt-4 flex items-center text-sm font-medium text-tldr-green"
          >
            Read article
            <svg
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
              className="ml-1 h-4 w-4 stroke-current"
            >
              <path
                d="M6.75 5.75 9.25 8l-2.5 2.25"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </div>
        </Link>
      </article>
    </>
  );
}
