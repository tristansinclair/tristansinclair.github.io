import Head from "next/head";
import ModeToggle from "../components/ModeToggle";
import MoreAboutMe from "../components/MoreAboutMe";
import Resume from "../components/Resume";
import Introduction from "../components/Introduction";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tristan Sinclair</title>
        <meta
          name="description"
          content="Welcome page to Tristan Sinclair's website."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="overflow-hidden py-16 lg:py-24 lg:px-12">
        <div className="relative mx-auto max-w-xl px-10 lg:max-w-6xl lg:px-8">
          <div className="flex justify-end">
            <ModeToggle />
          </div>

          <div className="mt-2 place-items-center lg:mt-0 lg:grid lg:grid-cols-3 lg:gap-12">
            <Introduction />
          </div>

          <div className="mt-8 place-items-center lg:mt-12 lg:grid lg:grid-cols-2 lg:gap-12">
            <MoreAboutMe />
            <Resume />
          </div>
        </div>
      </main>
    </>
  );
}
