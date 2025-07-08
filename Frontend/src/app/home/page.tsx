"use client";

import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>-</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className="bg-[#111c22] text-white font-sans min-h-screen overflow-x-hidden scroll-smooth">
        <section className="flex flex-col items-center justify-center h-screen relative text-center px-4">
          <div className="absolute top-10 left-10 h-1 w-24 bg-[#ff3cac] rotate-2 rounded-full shadow-lg animate-pulse" />
          <div className="absolute top-24 right-12 h-1 w-24 bg-[#784ba0] -rotate-2 rounded-full shadow-lg animate-pulse delay-100" />
          <div className="absolute bottom-24 left-16 h-1 w-24 bg-[#2b86c5] rotate-3 rounded-full shadow-lg animate-pulse delay-200" />
          <div className="absolute bottom-10 right-10 h-1 w-24 bg-[#00dbde] -rotate-1 rounded-full shadow-lg animate-pulse delay-300" />

          <h1 className="text-5xl sm:text-7xl font-bold mb-6 tracking-tight leading-tight">
            -
          </h1>
          <p className="text-lg sm:text-xl opacity-80 max-w-xl">-</p>
        </section>

        <nav className="fixed top-1/2 right-4 transform -translate-y-1/2 space-y-6 text-sm z-50">
          <a
            href="#work"
            className="block transform hover:scale-105 transition duration-300 opacity-70 hover:opacity-100"
          >
            Work
          </a>
          <a
            href="#lab"
            className="block transform hover:scale-105 transition duration-300 opacity-70 hover:opacity-100"
          >
            Lab
          </a>
          <a
            href="#about"
            className="block transform hover:scale-105 transition duration-300 opacity-70 hover:opacity-100"
          >
            About
          </a>
        </nav>

        <section
          id="work"
          className="min-h-screen flex flex-col justify-center items-center px-4 py-20 text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-8">Selected Work</h2>
          <div className="space-y-10 max-w-2xl">
            <div>
              <h3 className="text-2xl font-semibold mb-2">Project One</h3>
              <p className="text-base opacity-80">-</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2">Project Two</h3>
              <p className="text-base opacity-80">-</p>
            </div>
          </div>
        </section>

        <section
          id="lab"
          className="min-h-screen flex flex-col justify-center items-center px-4 py-20 text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">Lab</h2>
          <p className="max-w-xl text-base opacity-80">-</p>
        </section>

        <section
          id="about"
          className="min-h-screen flex flex-col justify-center items-center px-4 py-20 text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">About</h2>
          <p className="max-w-xl text-base opacity-80">-</p>
        </section>
      </main>
    </>
  );
}
