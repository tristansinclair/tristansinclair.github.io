import Head from "next/head";
import NewsletterType from "../../interfaces/newsletters";
import { getRecentNewsletters } from "../../lib/mdxUtils";
import { Field, Form, Formik, FormikHelpers } from "formik";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import NavLayoutNew from "../../components-tldr/NavLayoutNew";
import NewsletterCard from "../../components-tldr/NewsletterCard";
import { supabase } from "../../lib/initSupabase";

type Props = {
  allNewsletters: NewsletterType[];
};

interface Subscribe {
  email: string;
  tech_newsletter: boolean;
}

export const getStaticProps = async () => {
  const allNewsletters = getRecentNewsletters([
    "title",
    "date",
    "slug",
    "newsletter",
  ]);

  return {
    props: { allNewsletters },
  };
};

TLDR.getLayout = function getLayout(page: any) {
  return (
    <>
      <NavLayoutNew>{page}</NavLayoutNew>
    </>
  );
};

export default function TLDR({ allNewsletters }: Props) {
  let router = useRouter();

  async function handleSubscribe(values: Subscribe) {
    try {
      const { data, error } = await supabase
        .from("subscribers")
        .insert(values)
        .eq("email", values.email)
        .select();

      if (error) {
        console.log("error", error);
        if (error.code == "23505") {
          toast.error("This email is already signed up!");
        } else {
          toast.error(error.message);
        }
        return;
      }
      if (data === null) {
        toast.error("Sorry, there was an issue subscribing.");
        return;
      }

      console.log(data);
      router.push("tldr/archive");
      toast.success("Welcome to the TLDR Newsletter!");
    } finally {
      return;
    }
  }

  return (
    <>
      <Head>
        <title>TLDR Redesign</title>
        <meta name="description" content="Skills" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="relative  py-0 lg:py-24 lg:px-12">
        <div className="relative mx-auto max-w-xl px-10 lg:max-w-6xl lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12">
            <div>
              <h1 className="mt-12 lg:mt-24 font-bold tracking-tight text-8xl xl:text-9xl text-shadow-lg shadow-zinc-300 dark:text-shadow-none">
                <span className="text-tldr-blue">T</span>
                <span className="text-tldr-yellow">L</span>
                <span className="text-tldr-green">D</span>
                <span className="text-tldr-red">R</span>
              </h1>
              <h3 className="text-zinc-700 dark:text-zinc-200 mt-3 text-lg  sm:mt-5 sm:text-xl lg:text-xl xl:text-2xl">
                Byte sized news for busy techies: a free daily newsletter of the
                most interesting stories in startups 🚀, tech 📱, and
                programming 💻!
              </h3>
              <Formik
                initialValues={{
                  email: "",
                  tech_newsletter: true,
                }}
                onSubmit={async (
                  values: Subscribe,
                  { setSubmitting }: FormikHelpers<Subscribe>
                ) => {
                  handleSubscribe(values);
                }}
              >
                <Form>
                  <div className="sm:flex mt-6">
                    <div className="min-w-0 flex-1">
                      <Field
                        required
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        className="block w-full rounded-md px-4 py-3 transition min-w-0 flex-auto appearance-none border border-zinc-900/10 bg-white  shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-tldr-green-500 focus:outline-none focus:ring-4 focus:ring-tldr-green-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-tldr-green-400 dark:focus:ring-tldr-green-400/10 sm:text-sm"
                      />
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-3">
                      <button
                        type="submit"
                        className="block w-full rounded-md bg-tldr-green-500 py-3 px-4 font-medium text-white shadow hover:bg-tldr-green-600 focus:outline-none focus:ring-2 focus:ring-tldr-green-300 focus:ring-offset-2 focus:ring-offset-zinc-900"
                      >
                        Subscribe
                      </button>
                    </div>
                  </div>
                </Form>
              </Formik>
            </div>
            <div className="relative overflow-y-hidden mt-8 lg:mt-0 max-h-64 lg:max-h-max">
              <div className="absolute top-0 w-full h-12 lg:h-24 bg-gradient-to-b from-zinc-50 dark:from-zinc-900 to-transparent z-40" />
              <div className="absolute bottom-0 w-full h-12 lg:h-24 bg-gradient-to-t from-zinc-50 dark:from-zinc-900 to-transparent z-40" />

              <div className="animate-marquee">
                {allNewsletters.map((post) => (
                  <div key={post.slug}>
                    <NewsletterCard newsletter={post} />
                    <div className="h-3"></div>
                  </div>
                ))}
              </div>

              <div className="absolute top-0 animate-marquee2">
                {allNewsletters.map((post) => (
                  <div key={post.slug}>
                    <NewsletterCard newsletter={post} />
                    <div className="h-3"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
