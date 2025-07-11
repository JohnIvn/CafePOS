"use client";

import Head from "next/head";
import { FaCoffee, FaChartLine, FaMobileAlt } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <Head>
        <title>CoffeePOS</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className="bg-[#111c22] text-white font-sans min-h-screen overflow-x-hidden scroll-smooth relative">
        <div className="absolute top-10 left-10 h-1 w-24 bg-[#ff3cac] rotate-2 rounded-full shadow-lg animate-pulse" />
        <div className="absolute top-24 right-12 h-1 w-24 bg-[#784ba0] -rotate-2 rounded-full shadow-lg animate-pulse delay-100" />
        <div className="absolute bottom-24 left-16 h-1 w-24 bg-[#2b86c5] rotate-3 rounded-full shadow-lg animate-pulse delay-200" />
        <div className="absolute bottom-10 right-10 h-1 w-24 bg-[#00dbde] -rotate-1 rounded-full shadow-lg animate-pulse delay-300" />

        <div className="absolute top-[30%] left-[20%] h-1 w-28 bg-[#ff6a00] rotate-6 rounded-full shadow-md animate-pulse delay-200" />
        <div className="absolute bottom-[30%] right-[18%] h-1 w-28 bg-[#a18cd1] -rotate-6 rounded-full shadow-md animate-pulse delay-300" />

        <div className="absolute top-[40%] right-[30%] w-10 h-10 bg-[#00dbde] rounded-full opacity-30 animate-ping pointer-events-none"></div>
        <div className="absolute bottom-[20%] left-[35%] w-6 h-6 bg-[#ff3cac] rotate-12 shadow-md animate-bounce pointer-events-none"></div>
        <div className="absolute top-[10%] right-[40%] w-16 h-16 bg-gradient-to-tr from-[#784ba0] to-[#2b86c5] rounded-full blur-md animate-spin-slow opacity-20 pointer-events-none"></div>
        <div className="absolute bottom-[10%] left-[10%] h-0.5 w-32 bg-gradient-to-r from-[#ff3cac] via-[#2b86c5] to-[#00dbde] rotate-12 shadow-md pointer-events-none"></div>

        <nav className="fixed top-1/2 right-4 -translate-y-1/2 flex flex-col items-center gap-y-4 z-50">
          {[
            { id: "coffee", text: "Coffee", className: "!my-3" },
            { id: "features", text: "Features", className: "!my-3" },
            { id: "signup", text: "Signup", className: "!my-3" },
            { id: "signin", text: "Signin", className: "!my-3" },
            { id: "about", text: "About", className: "!my-3" },
            { id: "testimonials", text: "Testimonial", className: "!my-6" },
            { id: "contact", text: "Contact", className: "!my-3" },
          ].map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`text-sm transform rotate-90 origin-center whitespace-nowrap px-2 py-1 hover:text-[#00dbde] transition-opacity opacity-80 hover:opacity-100 ${
                item.className || ""
              }`}
            >
              {item.text}
            </a>
          ))}
        </nav>

        <section
          className="flex flex-col items-center justify-center h-screen text-center px-4"
          id="coffee"
        >
          <h1 className="text-5xl sm:text-7xl font-bold mb-6 tracking-tight leading-tight">
            CoffeePOS
          </h1>
          <p className="text-lg sm:text-xl opacity-80 max-w-xl">
            The smarter way to manage your coffee shop in 2025.
          </p>
        </section>

        <section id="features" className="py-20 text-center px-6">
          <h2 className="text-4xl font-bold mb-10">Features</h2>
          <div className="grid sm:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <FaCoffee size={40} />,
                title: "Order Management",
                desc: "Track customer orders and fulfill them seamlessly.",
              },
              {
                icon: <FaChartLine size={40} />,
                title: "Analytics",
                desc: "View sales performance with easy-to-read reports.",
              },
              {
                icon: <FaMobileAlt size={40} />,
                title: "Mobile Friendly",
                desc: "Manage your coffee shop from anywhere on any device.",
              },
            ].map((f, idx) => (
              <div
                key={idx}
                className="bg-white/5 p-6 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
              >
                <div className="mb-4 text-[#00dbde]">{f.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
                <p className="opacity-70">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="signup"
          className="min-h-screen flex flex-col justify-center items-center px-4 py-20 text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-8">Sign Up</h2>
          <form className="w-full max-w-md space-y-6 bg-white/5 p-8 rounded-lg shadow-lg">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-3 rounded bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#00dbde]"
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#00dbde]"
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#00dbde]"
              required
            />
            <button
              type="submit"
              className="w-full bg-[#00dbde] text-[#111c22] font-semibold py-3 rounded hover:bg-[#00c7cb] transition"
            >
              Create Account
            </button>
          </form>
        </section>

        <section
          id="signin"
          className="min-h-screen flex flex-col justify-center items-center px-4 py-20 text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">Sign In</h2>
          <form className="w-full max-w-md space-y-6 bg-white/5 p-8 rounded-lg shadow-lg">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#784ba0]"
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#784ba0]"
              required
            />
            <button
              type="submit"
              className="w-full bg-[#784ba0] text-white font-semibold py-3 rounded hover:bg-[#6c3995] transition"
            >
              Log In
            </button>
          </form>
        </section>

        <section
          id="about"
          className="min-h-screen flex flex-col justify-center items-center px-4 py-20 text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">About</h2>
          <p className="max-w-xl text-base opacity-80 mb-4">
            CoffeePOS is a sleek, cloud-powered point-of-sale system tailored
            specifically for coffee shops and small cafes. Manage orders, track
            inventory, and access analytics from anywhere.
          </p>
          <p className="max-w-xl text-base opacity-60">
            Built with modern technologies like Next.js and Tailwind CSS,
            CoffeePOS is fast, reliable, and optimized for simplicity.
          </p>
        </section>

        <section
          id="testimonials"
          className="py-20 bg-[#0c1317] text-center px-4"
        >
          <h2 className="text-4xl font-bold mb-10">What Our Users Say</h2>
          <div className="flex flex-col sm:flex-row gap-8 justify-center">
            {[
              {
                name: "Emma L.",
                quote:
                  "CoffeePOS transformed the way we run our café. Simple and powerful!",
              },
              {
                name: "Jason T.",
                quote:
                  "We love the analytics and mobile access. Game changer for small businesses.",
              },
              {
                name: "Ava R.",
                quote: "Clean design and super fast. Sign up was seamless!",
              },
            ].map((t, idx) => (
              <div
                key={idx}
                className="bg-white/5 p-6 rounded-lg shadow-md max-w-sm"
              >
                <p className="italic mb-4 opacity-80">“{t.quote}”</p>
                <div className="font-bold">{t.name}</div>
              </div>
            ))}
          </div>
        </section>

        <footer
          id="contact"
          className="bg-[#0a1014] py-12 text-center text-sm opacity-60"
        >
          <p>© {new Date().getFullYear()} CoffeePOS. All rights reserved.</p>
          <p className="mt-2">Contact us: support@coffeepos.com</p>
        </footer>
      </main>
    </>
  );
}
