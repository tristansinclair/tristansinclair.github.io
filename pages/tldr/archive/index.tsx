import { getAllPosts } from "../../../lib/mdxUtils";
import Head from "next/head";
import PostType from "../../../interfaces/posts";
import { ArchiveLayout } from "../../../components-tldr/ArchiveLayout";
// import { Newsletter } from "../../../components-tldr/Newsletter";
import { Card } from "../../../components-tldr/Card";
import { formatDate } from "../../../lib/formatDate";
import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import NavLayout from "../../../components-tldr/NavLayout";

type Props = {
  allPosts: PostType[];
};
Archive.getLayout = function getLayout(page: any) {
  return (
    <>
      <NavLayout>{page}</NavLayout>
    </>
  );
};

export default function Archive({ allPosts }: Props) {
  return (
    <>
      <Head>
        <title>TLDR Archive</title>
        <meta name="description" content="Skills" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="The TLDR Newletter's Archive" />
      </Head>
      <ArchiveLayout>
        <header>
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            {"TLDR Newletter Archive"}
          </h1>
          <p className="max-w-xl mt-6 text-base text-zinc-600 dark:text-zinc-400">
            {
              "TLDR is a daily newsletter with links and TLDRs of the most interesting stories in startups 🚀, tech 📱, and programming 💻!"
            }
          </p>
        </header>
        <div className="mt-12 sm:mt-20">
          <div className="md:border-l md:border-zinc-100 md:px-6 md:dark:border-zinc-700/40">
            <div className="flex max-w-4xl flex-col space-y-4">
              {allPosts.map((post) => (
                <Article key={post.slug} newsletter={post} />
              ))}
            </div>
          </div>
        </div>
      </ArchiveLayout>
    </>
  );
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts(["title", "date", "slug", "newsletter"]);

  return {
    props: { allPosts },
  };
};

function NewsletterCard({ newsletter }: { newsletter: PostType }) {
  return (
    <Link href={"archive/" + newsletter.slug}>
      <article className="flex flex-col rounded-2xl bg-zinc-50 dark:bg-zinc-800/50 px-4 py-3">
        <time
          className="relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500 pl-3.5"
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
      </article>
    </Link>
  );
}

function Article({ newsletter }: { newsletter: PostType }) {
  return (
    <>
      <article className="md:grid md:grid-cols-4 md:items-baseline">
        <div className="group relative flex flex-col items-start">
          <div className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
            <div className="absolute -inset-y-6 -inset-x-4 z-0 scale-95  opacity-0 bg-zinc-50 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl" />
            <Link href={"archive/" + newsletter.slug}>
              <span className="absolute -inset-y-6 -inset-x-4 z-20 sm:-inset-x-6 sm:rounded-2xl" />
              <span className="relative z-10">{newsletter.title}</span>
            </Link>
          </div>

          <div
            // as="time"
            className="md:hidden relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500 pl-3.5"
          >
            <span
              className="absolute inset-y-0 left-0 flex items-center"
              aria-hidden="true"
            >
              <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
            </span>
            {formatDate(newsletter.date)}
          </div>
          <div
            aria-hidden="true"
            className="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500"
          >
            Read newsletter
            <ChevronRightIcon className="ml-1 h-4 w-4 stroke-current" />
          </div>
        </div>

        <div
          // as="time"
          className="mt-1 hidden md:block relative z-10 order-first mb-3 items-center text-sm text-zinc-400 dark:text-zinc-500 pl-3.5"
        >
          <span
            className="absolute inset-y-0 left-0 flex items-center"
            aria-hidden="true"
          >
            <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
          </span>
          {formatDate(newsletter.date)}
        </div>
      </article>
    </>
  );
}
