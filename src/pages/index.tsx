import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import { api } from "~/utils/api";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Is it my turn?</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="pb-32 pt-8">
        <div className="flex flex-row justify-evenly">
          <div className="flex flex-col gap-24">
            <h1 className="text-center text-8xl">
              Never forget who's next again.
            </h1>
            <span className="px-64 text-center text-6xl">
              Select a name, item, or anything you'd like. Without replacement.
            </span>
            <div className="flex flex-row justify-evenly">
              <div className="flex flex-col gap-y-4">
                <span className="text-4xl">Perfect for...</span>
                <ul className="flex flex-col gap-2 text-2xl">
                  <li>
                    <span className="flex flex-row items-center gap-4">
                      <div className="text-4xl">🎲</div>
                      <div>Board game night</div>
                    </span>
                  </li>
                  <li>
                    <span className="flex flex-row items-center gap-4">
                      <div className="text-4xl">🍱</div>
                      <div>Meal planning</div>
                    </span>
                  </li>
                  <li>
                    <span className="flex flex-row items-center gap-4">
                      <div className="text-4xl">🧹</div>
                      <div>Chore duty</div>
                    </span>
                  </li>
                  <li>
                    <span className="flex flex-row items-center gap-4">
                      <div className="text-4xl">🗣️</div>
                      <div>Rotating stand-up leaders</div>
                    </span>
                  </li>
                  <li className="pt-4">...and more!</li>
                </ul>
              </div>
              <div className="flex flex-col justify-center gap-8">
                <div className="flex flex-row justify-evenly">
                  <input
                    type="text"
                    className="w-64 rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 text-lg text-gray-900 focus:border-teal-500 focus:outline-none focus:ring-teal-500"
                    placeholder="Enter your session name"
                    required
                  />
                </div>
                <div className="flex flex-row justify-evenly">
                  <button className="rounded-lg border bg-teal-500 px-5 py-3 text-center text-4xl text-white hover:bg-teal-700">
                    Get started
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
