import React from "react";
import Weather from "../components/Weather";
import Gempa from "../components/Gempa";
import Navbar from "../components/Navbar";

const Home: React.FC = () => {
  return (
    <div className="bg-blue-50 text-gray-800 dark:bg-gray-900 dark:text-gray-100 scroll-smooth transition-colors duration-300">
      <Navbar />

      {/* HERO SECTION */}
      <section className="min-h-screen flex items-center justify-center flex-col text-center px-6 bg-gradient-to-b from-blue-100 to-blue-50 dark:from-gray-800 dark:to-gray-900 relative select-none pb-24 transition-colors duration-300">
        <div className="max-w-4xl">
          <div className="flex justify-center items-center gap-0 mb-4">
            <img
              src="/assets/icon/LogoWK.svg"
              alt="Waspada-Ku"
              className="w-10 h-0 md:w-20 md:h-20"
            />
            <h1 className="text-3xl md:text-4xl font-bold text-blue-800 dark:text-white tracking-wide">
              Selamat datang di{" "}
              <span className="text-blue-600 dark:text-blue-400">Waspada-Ku</span>, platform
              informasi cuaca & gempa real-time!
            </h1>
          </div>

          <div className="flex justify-center gap-4 flex-wrap mt-4">
            <a
              href="#cuaca"
              className="bg-blue-600 text-white dark:bg-white  dark:text-blue-700 px-6 py-3 rounded-full text-sm font-semibold shadow hover:bg-blue-700 transition inline-flex items-center gap-2"
            >
              <img src="/assets/icon/cuaca.svg" alt="Cuaca Icon" className="w-5 h-5" />
              Cek Cuaca
            </a>

            <a
              href="#gempa"
              className="bg-white border border-blue-600 text-blue-700 dark:bg-gray-700 dark:text-white dark:border-blue-400 px-6 py-3 rounded-full text-sm font-semibold shadow hover:bg-blue-100 dark:hover:bg-white transition inline-flex items-center gap-2"
            >
              <img src="/assets/icon/gempa.svg" alt="Gempa Icon" className="w-5 h-5" />
              Cek Gempa
            </a>
          </div>
        </div>
      </section>

      {/* SECTION: Cuaca & Gempa */}
      <main className="px-4 pt-0 pb-12 max-w-7xl mx-auto space-y-16 -mt-24">
        <section
          id="cuaca"
          className="scroll-mt-28 w-full bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-lg transition-colors duration-300"
        >
          <Weather />
        </section>

        <section
          id="gempa"
          className="scroll-mt-28 bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-lg transition-colors duration-300"
        >
          <Gempa />
        </section>
      </main>
    </div>
  );
};

export default Home;