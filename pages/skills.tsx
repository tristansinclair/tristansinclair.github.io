import Head from "next/head";

export default function SKills() {
  return (
    <>
      <Head>
        <title>Skills - Tristan Sinclair</title>
        <meta name="description" content="Skills" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="overflow-hidden py-16 lg:py-24 lg:px-12">
        <div className="relative mx-auto max-w-xl px-10 lg:max-w-6xl lg:px-8">
          <h1 className="py-6 text-4xl font-bold tracking-tight sm:text-5xl text-zinc-800 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-red-400 dark:to-pink-600">
            Skills
          </h1>
          <p className="text-base text-zinc-600 dark:text-zinc-400">Skills</p>
        </div>
      </main>
    </>
  );
}
