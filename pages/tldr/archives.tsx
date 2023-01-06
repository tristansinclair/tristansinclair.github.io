import Head from "next/head";
import { supabase } from "../../lib/initSupabase";

export default function TLDR() {
  const testApi = async () => {
    const { data, error } = await supabase.from("tldr_newsletters").select();
    console.log(data);
  };
  return (
    <>
      <Head>
        <title>TLDR Redesign - Tristan Sinclair</title>
        <meta name="description" content="Skills" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="overflow-hidden py-16 lg:py-24 lg:px-12">
        <div className="relative mx-auto max-w-xl px-10 lg:max-w-6xl lg:px-8">
          <button
            onClick={() => {
              testApi();
            }}
            className="block w-full rounded-md bg-indigo-500 py-3 px-4 font-medium text-white shadow hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-offset-2 focus:ring-offset-gray-900"
          >
            Hit API
          </button>
        </div>
      </main>
    </>
  );
}
