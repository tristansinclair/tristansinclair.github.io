import { SparklesIcon, UsersIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import patreonImage from "../images/nil/patreon.png";
import storeImage from "../images/nil/store.png";

export function AlternatingFeatureSection() {
  return (
    <div className="relative overflow-hidden pt-16 pb-32">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-gray-100"
      />
      <div className="relative">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
          <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
            <div>
              <div>
                <span className="flex h-12 w-12 items-center justify-center rounded-md bg-cardinal-red">
                  <UsersIcon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                  Become a Member and Access Exclusive Content
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  Join the exclusive community of supporters who are helping to
                  create NIL opportunities for Stanford Athletes by becoming a
                  Patreon member. With different levels of membership available,
                  you can choose the level that's right for you and get access
                  to exclusive content and perks.
                </p>
                <div className="mt-6">
                  <a
                    href="#"
                    className="inline-flex rounded-md border border-transparent bg-cardinal-red bg-origin-border px-4 py-2 text-base font-medium text-white shadow-sm hover:from-purple-700 hover:to-cardinal-red-700"
                  >
                    Join here
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-8 border-t border-gray-200 pt-6">
              <blockquote>
                <div>
                  <p className="text-base text-gray-500">
                    &ldquo;One of the ideas we had was to get fans and
                    supporters more involved in what goes on in the our daily
                    process. We want to bring the fans closer to our
                    experience.&rdquo;
                  </p>
                </div>
                <footer className="mt-3">
                  <div className="flex items-center space-x-3">
                    <div className="shrink-0">
                      <div className="relative h-6 w-6 overflow-hidden rounded-full">
                        <Image
                          className="object-cover object-top"
                          src="https://images.sidearmdev.com/resize?url=https%3a%2f%2fdxbhsrqyrr690.cloudfront.net%2fsidearm.nextgen.sites%2fgostanford.com%2fimages%2f2022%2f8%2f1%2fTristan_Sinclair_MG_072022__7411.JPG&width=300&type=jpeg"
                          alt=""
                          fill
                        />
                      </div>
                    </div>
                    <div className="text-base font-medium text-gray-700">
                      Tristan Sinclair, Stanford Football
                    </div>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
          <div className="mt-12 px-6 sm:mt-16 lg:mt-0 lg:px-0">
            <div className="relative h-[30rem] w-auto max-w-none overflow-hidden rounded-xl shadow-xl ring-1 ring-black/5 lg:h-full">
              <Image
                className="object-cover"
                src={patreonImage}
                alt="Inbox user interface"
                fill
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-24">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
          <div className="mx-auto max-w-xl px-6 lg:col-start-2 lg:mx-0 lg:max-w-none lg:py-32 lg:px-0">
            <div>
              <div>
                <span className="flex h-12 w-12 items-center justify-center rounded-md bg-cardinal-red">
                  <SparklesIcon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                  Show Your Support with Official Gear
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  Show your support for Stanford Athletes and help create NIL
                  opportunities for them by purchasing official merchandise.
                  Whether you're a fan, a supporter, or just looking for a way
                  to make a difference, our merchandise is the perfect way to
                  show your pride.
                </p>
                <div className="mt-6">
                  <a
                    href="#"
                    className="inline-flex rounded-md border border-transparent bg-cardinal-red bg-origin-border px-4 py-2 text-base font-medium text-white shadow-sm hover:from-purple-700 hover:to-cardinal-red-700"
                  >
                    Shop now
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 px-6 sm:mt-16 lg:mt-0 lg:px-0">
            <div className="relative h-[30rem] w-auto max-w-none overflow-hidden rounded-xl shadow-xl ring-1 ring-black/5 lg:h-full">
              <Image
                className="object-cover"
                src={storeImage}
                alt="Inbox user interface"
                fill
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
