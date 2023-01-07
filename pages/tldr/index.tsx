import Head from "next/head";

export default function TLDR() {
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
          <TLDRHeader />
          <div className="flex justify-end">
            <ModeToggle />
          </div>
          <div className="mt-8 lg:mt-12 lg:grid lg:grid-cols-2 lg:gap-12">
            <div className="mt-8">
              <h1 className="font-bold tracking-tight text-white sm:mt-5 text-8xl lg:mt-6 xl:text-9xl">
                <span className="text-tldr-blue">T</span>
                <span className="text-tldr-yellow">L</span>
                <span className="text-tldr-green">D</span>
                <span className="text-tldr-red">R</span>
              </h1>
              <h3 className="mt-3 text-lg text-gray-300 sm:mt-5 sm:text-xl lg:text-xl xl:text-2xl">
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
            <div className="relative overflow-y-hidden mt-8 sm:mt-0">
              <div className="absolute top-0 w-full h-24 bg-gradient-to-b from-zinc-900 to-transparent z-50" />
              <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-zinc-900 to-transparent z-50" />

              <div className="animate-marquee">
                <NewsCards />
              </div>

              <div className="absolute top-0 animate-marquee2">
                <NewsCards />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

import ModeToggle from "../../components/ModeToggle";
import { TLDRHeader } from "../../components/TldrHeader";

interface NewsCardInterface {
  date: string;
  title: string;
  description: string;
  category: string;
  newsletter: string;
}

function NewsCard({
  date,
  title,
  description,
  category,
  newsletter,
}: NewsCardInterface) {
  return (
    <div className="rounded-lg bg-white">
      <div className="p-4">
        <p className="mb-1 text-sm text-primary-500">
          <time>{date}</time>
        </p>
        <h3 className="text-xl font-medium text-gray-900">{title}</h3>
        <p className="mt-1 text-gray-500 line-clamp-2">{description}</p>
        <div className="mt-4 flex gap-2">
          <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600">
            {category}
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-indigo-50 px-2 py-1 text-xs font-semibold text-indigo-600">
            {newsletter}
          </span>
        </div>
      </div>
    </div>
  );
}

function NewsCards() {
  return (
    <>
      <NewsCard
        date="2023-01-03"
        title="Tesla to Present the Generation 3 Platform at Investor Day in March 2023"
        description="Tesla's Generation 3 platform will be presented at Investor Day on March 1. The new platform promises to reduce the overall cost of production. It will also be able to produce more vehicles in a smaller area than the current platform. Tesla has been hinting at a new vehicle for months and there are hints it may be unveiled soon."
        category="📱 Big Tech & Startups"
        newsletter="🤖 TLDR"
      />
      <div className="h-3"></div>
      <NewsCard
        date="2023-01-03"
        title="Solana Jumps Double Digits to Reclaim $11"
        description="The price of Solana has gone back to $11 after several days of trading below double-digits. Vitalik Buterin recently tweeted in support of Solana, saying that he hopes the community gets its fair chance to thrive. Solana has lost over 95% of its value since all-time highs. It has slipped from fifth place on the list of the largest cryptocurrencies by market cap to barely staying in the top 20."
        category="📈 Markets & Business"
        newsletter="⚡️ TLDR Crypto"
      />
      <div className="h-3"></div>
      <NewsCard
        date="2023-01-03"
        title="Mafs (Website)"
        description="Mafs is a package containing React components for interactive math. It allows users to build interactive and animated visuals with declarative code. Mafs can create visuals for Bézier curves, Riemann sums, fancy parabolas, projectile motion, and more."
        category="💻 Programming, Design & Data Science"
        newsletter="🤖 TLDR"
      />
      <div className="h-3"></div>
    </>
  );
}
