import Head from "next/head";
import { ArchiveLayout } from "../../../components/Layout";
import { supabase } from "../../../lib/initSupabase";
import { Database } from "../../../lib/types/supabase";
import router from "next/router";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { formatDate } from "../../../lib/formatDate";
import Link from "next/link";
type Newletter = Database["public"]["Tables"]["tldr_newsletters"]["Row"];

export const getStaticPaths = async () => {
  const { data: newsletters } = await supabase
    .from("tldr_newsletters")
    .select("url_ext");

  const paths = newsletters?.map(({ url_ext }) => ({
    params: {
      issue: url_ext.toString(),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { issue } }) => {
  const { data: newsletter } = await await supabase
    .from("tldr_newsletters")
    .select("*")
    .eq("url_ext", issue)
    .single();

  return {
    props: {
      newsletter,
    },
  };
};

export default function Newsletter({ newsletter }: { newsletter: Newletter }) {
  console.log(newsletter.content);
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
        <div className="mt-8 lg:mt-16">
          <div className="xl:relative">
            <div className="mx-auto">
              <button
                type="button"
                onClick={() => router.back()}
                aria-label="Go back to articles"
                className="group mb-10 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20 lg:absolute lg:-left-5 lg:mb-0 lg:-mt-2 xl:-top-1.5 xl:left-0 xl:mt-0"
              >
                <ArrowLeftIcon className="h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-700 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400" />
              </button>

              <article>
                <header className="flex flex-col">
                  <time
                    dateTime={newsletter.date as string}
                    className="flex items-center text-base text-zinc-400 dark:text-zinc-500"
                  >
                    <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
                    <span className="ml-3">{formatDate(newsletter.date)}</span>
                  </time>
                  <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-3xl">
                    {newsletter.title}
                  </h1>
                </header>
                <div className="mt-8 prose dark:prose-invert">
                  {newsletter?.content?.intro_ad.map((ad: any) => (
                    <div className="prose dark:prose-invert">
                      <Link className="" href={ad.url}>
                        <h3>{ad.title}</h3>
                      </Link>
                      <div>{ad.content}</div>
                    </div>
                  ))}

                  <h2 className="text-center">{"📱 Big Tech & Startups"}</h2>
                  {newsletter?.content?.big_tech_startups.map((ad: any) => (
                    <div className="prose dark:prose-invert">
                      <Link className="" href={ad.url}>
                        <h3>{ad.title}</h3>
                      </Link>
                      <div>{ad.content}</div>
                    </div>
                  ))}

                  <h2 className="text-center">
                    🚀 Science & Futuristic Technology
                  </h2>
                  {newsletter?.content?.science_futuristic_technology.map(
                    (ad: any) => (
                      <div className="prose dark:prose-invert">
                        <Link className="" href={ad.url}>
                          <h3>{ad.title}</h3>
                        </Link>
                        <div>{ad.content}</div>
                      </div>
                    )
                  )}

                  <h2 className="text-center">
                    💻 Programming, Design & Data Science
                  </h2>
                  {newsletter?.content?.programming_design_data.map(
                    (ad: any) => (
                      <div className="prose dark:prose-invert">
                        <Link className="" href={ad.url}>
                          <h3>{ad.title}</h3>
                        </Link>
                        <div>{ad.content}</div>
                      </div>
                    )
                  )}

                  <h2 className="text-center">🎁 Miscellaneous</h2>
                  {newsletter?.content?.miscellaneous.map((ad: any) => (
                    <div className="prose dark:prose-invert">
                      <Link className="" href={ad.url}>
                        <h3>{ad.title}</h3>
                      </Link>
                      <div>{ad.content}</div>
                    </div>
                  ))}

                  <h2 className="text-center">⚡️ Quick Links</h2>
                  {newsletter?.content?.quick_links.map((ad: any) => (
                    <div className="prose dark:prose-invert">
                      <Link className="" href={ad.url}>
                        <h5>{ad.title}</h5>
                      </Link>
                      <div>{ad.content}</div>
                    </div>
                  ))}
                </div>
              </article>
            </div>
          </div>
        </div>
      </ArchiveLayout>
    </>
  );
}
