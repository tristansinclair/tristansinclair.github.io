import { getAllNewsletters } from "../../../lib/mdxUtils";
import Head from "next/head";
import NewsletterType from "../../../interfaces/newsletters";
import { ArchiveLayout } from "../../../components-tldr/ArchiveLayout";
import { NewsletterCardFull } from "../../../components-tldr/NewsletterCardFull";
import NavLayout from "../../../components-tldr/NavLayout";

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

export default function Archive({ allNewsletters }: Props) {
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
            {"Newsletter Archive"}
          </h1>
          <p className="mt-6 max-w-xl text-base text-zinc-600 dark:text-zinc-400">
            {
              "TLDR is a daily newsletter with links and TLDRs of the most interesting stories in startups 🚀, tech 📱, and programming 💻!"
            }
          </p>
        </header>
        <div className="mt-12 sm:mt-20">
          <div className="lg:border-l lg:border-zinc-100 lg:px-6 lg:dark:border-zinc-700/40">
            <div className="flex max-w-4xl flex-col space-y-4">
              {allNewsletters.map((post) => (
                <NewsletterCardFull key={post.slug} newsletter={post} />
              ))}
            </div>
          </div>
        </div>
      </ArchiveLayout>
    </>
  );
}
