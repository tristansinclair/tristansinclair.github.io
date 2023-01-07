import { useEffect, useState } from "react";
import { supabase } from "../../../lib/initSupabase";
import { Database } from "../../../lib/types/supabase";
import { Card } from "../../../components/Card";
import Link from "next/link";
import { ArchiveLayout } from "../../../components/Layout";
import Head from "next/head";
import { formatDate } from "../../../lib/formatDate";

type Newletters = Database["public"]["Tables"]["tldr_newsletters"]["Row"];
type NewslettersResponse = Omit<Newletters, "id" | "created_at" | "content">;

export default function Archive() {
  const [loading, setLoading] = useState(true);
  const [newsletters, setNewsletters] = useState<NewslettersResponse[]>([]);

  async function getNewsletters() {
    try {
      setLoading(true);

      let { data, error, status } = await supabase
        .from("tldr_newsletters")
        .select("title, date, issue, url_ext")
        .order("date", { ascending: false });

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setNewsletters(data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getNewsletters();
  }, []);

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
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            {
              "TLDR is a daily newsletter with links and TLDRs of the most interesting stories in startups 🚀, tech 📱, and programming 💻!"
            }
          </p>
        </header>
        <div className="mt-16 sm:mt-20">
          <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
            <div className="flex max-w-4xl flex-col space-y-16">
              {newsletters.map(
                (newsletter) =>
                  loading == false && (
                    <Newsletter key={newsletter.date} data={newsletter} />
                  )
              )}
            </div>
          </div>
        </div>
      </ArchiveLayout>
    </>
  );
}

function Newsletter({ data }: { data: NewslettersResponse }) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseliner">
      <Card className="md:col-span-3">
        <Card.Title href={`archive/${data.url_ext}`}>{data.title}</Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={data.date}
          className="md:hidden"
          decorate
        >
          {formatDate(data.date)}
        </Card.Eyebrow>
        <Card.Cta>Read article</Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={data.date}
        className="mt-1 hidden md:block"
      >
        {formatDate(data.date)}
      </Card.Eyebrow>
    </article>
  );
}

export const getStaticProps = async () => {
  const { data } = await supabase
    .from("tldr_newsletters")
    .select("*")
    .order("date", { ascending: false });

  return {
    props: {
      data,
    },
  };
};
