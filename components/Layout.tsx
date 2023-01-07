import Head from "next/head";
import { formatDate } from "../lib/formatDate";
import { useRouter } from "next/router";
import { SVGProps } from "react";

interface Props {
  children: React.ReactNode;
}

export const PageLayout: React.FunctionComponent<Props> = (props: Props) => {
  return (
    <>
      <div className="flex justify-center py-12 px-8">
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full">{props.children}</div>
        </div>
      </div>
    </>
  );
};

export const ArchiveLayout: React.FunctionComponent<Props> = (props: Props) => {
  return (
    <>
      <div className="flex justify-center py-12 px-8">
        <div className="flex w-full max-w-3xl lg:px-8">
          <div className="w-full">{props.children}</div>
        </div>
      </div>
    </>
  );
};

function ArrowLeftIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ArticleLayout({ meta, previousPathname }: any) {
  let router = useRouter();
  return (
    <>
      <Head>
        <title>{meta?.title}</title>
        <meta name="description" content={meta?.description} />
      </Head>
      <div className="mt-16 lg:mt-32">
        <div className="xl:relative">
          <div className="mx-auto max-w-2xl">
            {previousPathname && (
              <button
                type="button"
                onClick={() => router.back()}
                aria-label="Go back to articles"
                className="group mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20 lg:absolute lg:-left-5 lg:mb-0 lg:-mt-2 xl:-top-1.5 xl:left-0 xl:mt-0"
              >
                <ArrowLeftIcon className="h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-700 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400" />
              </button>
            )}
            <article>
              <header className="flex flex-col">
                <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-3xl">
                  {meta?.title}
                </h1>
                <time
                  dateTime={meta?.date}
                  className="order-first flex items-center text-base text-zinc-400 dark:text-zinc-500"
                >
                  <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
                  <span className="ml-3">{formatDate(meta?.date)}</span>
                </time>
              </header>
              <div className="mt-8 prose dark:prose-invert">
                {/* {meta?.content.map((section: any) => (
                  <div>section?.title</div>
                ))} */}
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  );
}

{
  /* <h3 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-3xl">
        Academics
      </h3>
      <div className="mt-3 space-y-3 text-base text-zinc-600 dark:text-zinc-400">
        <p>
          As a student-athlete studying computer science at Stanford, I've had a
          challenging but rewarding experience during my time in college.
          Balancing my academic commitments while doing my best to excel on the
          field requires time management and discipline.
        </p>
        <p>
          I've learned to be organized and efficient with my time in order to
          ensure that I am able to complete my coursework, attend practices and
          games, and still have time for rest and other activities.
        </p>
      </div> */
}
