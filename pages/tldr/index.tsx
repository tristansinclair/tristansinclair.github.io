import Head from "next/head";
import { TLDRHeader } from "../../components-tldr/TldrHeader";
import Link from "next/link";
import PostType from "../../interfaces/posts";
import { getRecentPosts } from "../../lib/mdxUtils";
import { formatDate } from "../../lib/formatDate";

type Props = {
  allPosts: PostType[];
};

export default function TLDR({ allPosts }: Props) {
  return (
    <>
      <Head>
        <title>TLDR Redesign</title>
        <meta name="description" content="Skills" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <TLDRHeader /> */}
      <main className="overflow-hidden py-16 lg:py-24 lg:px-12">
        <div className="relative mx-auto max-w-xl px-10 lg:max-w-6xl lg:px-8">
          <div className="mt-8 lg:mt-12 lg:grid lg:grid-cols-2 lg:gap-12">
            <div className="self-center">
              <h1 className="font-bold tracking-tight text-8xl xl:text-9xl">
                <span className="text-tldr-blue">T</span>
                <span className="text-tldr-yellow">L</span>
                <span className="text-tldr-green">D</span>
                <span className="text-tldr-red">R</span>
              </h1>
              <h3 className="text-zinc-800 dark:text-zinc-200 mt-3 text-lg  sm:mt-5 sm:text-xl lg:text-xl xl:text-2xl">
                Byte sized news for busy techies: a free daily newsletter of the
                most interesting stories in startups 🚀, tech 📱, and
                programming 💻!
              </h3>

              <form
                action="#"
                className="sm:mx-auto sm:max-w-xl lg:mx-0 mt-3 sm:mt-4"
              >
                <div className="sm:flex">
                  <div className="min-w-0 flex-1">
                    <label htmlFor="email" className="sr-only">
                      Email address
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      className="block w-full rounded-md border-0 px-4 py-3 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-offset-2 focus:ring-offset-gray-900"
                    />
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <button
                      type="submit"
                      className="block w-full rounded-md bg-indigo-500 py-3 px-4 font-medium text-white shadow hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-offset-2 focus:ring-offset-gray-900"
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
                <p className="mt-3 text-sm text-gray-300 sm:mt-4">
                  Join 750,000 readers for{" "}
                  <a href="#" className="font-medium text-white">
                    one daily email
                  </a>
                  .
                </p>
              </form>
            </div>
            <div className="relative overflow-y-hidden mt-8 sm:mt-0 max-h-64 md:max-h-max">
              <div className="absolute top-0 w-full h-12 md:h-24 bg-gradient-to-b from-zinc-900 to-transparent z-50" />
              <div className="absolute bottom-0 w-full h-12 md:h-24 bg-gradient-to-t from-zinc-900 to-transparent z-50" />

              <div className="animate-marquee">
                {allPosts.map((post) => (
                  <>
                    <NewsletterCard key={post.slug} newsletter={post} />
                    <div className="h-3"></div>
                  </>
                ))}
              </div>

              <div className="absolute top-0 animate-marquee2">
                {allPosts.map((post) => (
                  <>
                    <NewsletterCard key={post.slug + "1"} newsletter={post} />
                    <div className="h-3"></div>
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

function NewsletterCard({ newsletter }: { newsletter: PostType }) {
  return (
    <Link href={"tldr/archive/" + newsletter.slug}>
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

export const getStaticProps = async () => {
  const allPosts = getRecentPosts(["title", "date", "slug", "newsletter"]);

  return {
    props: { allPosts },
  };
};
