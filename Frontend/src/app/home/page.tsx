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
        <section className="flex flex-col items-center justify-center h-screen relative text-center px-4" id="coffee">
          <div className="absolute top-10 left-10 h-1 w-24 bg-[#ff3cac] rotate-2 rounded-full shadow-lg animate-pulse" />
          <div className="absolute top-24 right-12 h-1 w-24 bg-[#784ba0] -rotate-2 rounded-full shadow-lg animate-pulse delay-100" />
          <div className="absolute bottom-24 left-16 h-1 w-24 bg-[#2b86c5] rotate-3 rounded-full shadow-lg animate-pulse delay-200" />
          <div className="absolute bottom-10 right-10 h-1 w-24 bg-[#00dbde] -rotate-1 rounded-full shadow-lg animate-pulse delay-300" />

          <h1 className="text-5xl sm:text-7xl font-bold mb-6 tracking-tight leading-tight">
            CoffeePOS
          </h1>
          <p className="text-lg sm:text-xl opacity-80 max-w-xl">2025</p>
        </section>

        <nav className="fixed top-1/2 right-4 -translate-y-1/2 flex flex-col items-center gap-10 z-50">
          <a
            href="#coffee"
            className="text-sm transform -rotate-[270deg] origin-center hover:scale-105 transition duration-300 opacity-70 hover:opacity-100"
          >
            Home
          </a>
          <a
            href="#signup"
            className="text-sm transform -rotate-[270deg] origin-center hover:scale-105 transition duration-300 opacity-70 hover:opacity-100"
          >
            SignUp
          </a>
          <a
            href="#signin"
            className="text-sm transform -rotate-[270deg] origin-center hover:scale-105 transition duration-300 opacity-70 hover:opacity-100"
          >
            SignIn
          </a>
          <a
            href="#about"
            className="text-sm transform -rotate-[270deg] origin-center hover:scale-105 transition duration-300 opacity-70 hover:opacity-100"
          >
            About
          </a>
        </nav>

        <section
          id="signup"
          className="min-h-screen flex flex-col justify-center items-center px-4 py-20 text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-8">SignUp</h2>
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
          id="signin"
          className="min-h-screen flex flex-col justify-center items-center px-4 py-20 text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">SignIn</h2>
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
