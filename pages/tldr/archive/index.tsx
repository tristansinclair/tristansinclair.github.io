import { getAllPosts } from "../../../lib/mdxUtils";
import Head from "next/head";
import PostType from "../../../interfaces/posts";
import { ArchiveLayout } from "../../../components-tldr/ArchiveLayout";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import NavLayout from "../../../components-tldr/NavLayout";
import { NewsletterCardFull } from "../../../components-tldr/NewsletterCardFull";

type Props = {
  allPosts: PostType[];
};

export const getStaticProps = async () => {
  const allPosts = getAllPosts(["title", "date", "slug", "newsletter"]);

  return {
    props: { allPosts },
  };
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
          <div className="lg:border-l lg:border-zinc-100 lg:px-6 lg:dark:border-zinc-700/40">
            <div className="flex max-w-4xl flex-col space-y-4">
              {allPosts.map((post) => (
                <NewsletterCardFull key={post.slug} newsletter={post} />
              ))}
            </div>
          </div>
        </div>
      </ArchiveLayout>
    </>
  );
}


