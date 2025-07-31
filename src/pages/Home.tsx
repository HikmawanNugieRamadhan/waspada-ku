import React from "react";
import Weather from "../components/Weather";
import Gempa from "../components/Gempa";
import Navbar from "../components/Navbar";

const Home: React.FC = () => {
  return (
    <div className="bg-blue-50 text-gray-800 scroll-smooth">
      <Navbar />

      {/* HERO SECTION */}
      <section className="min-h-screen flex items-center justify-center flex-col text-center px-6 bg-gradient-to-b from-blue-100 to-blue-50 relative select-none">
        <div className="max-w-4xl">
          <div className="flex justify-center items-center gap-0 mb-4">
            <img
              src="/assets/icon/logoWK.svg"
              alt="Waspada-Ku"
              className="w-10 h-0 md:w-20 md:h-20"
            />
            <h1 className="text-3xl md:text-4xl font-bold text-blue-800 tracking-wide">
              Selamat datang di <span className="text-blue-600">Waspada-Ku</span>, platform informasi cuaca & gempa real-time!
            </h1>
          </div>

          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="#cuaca"
              className="bg-blue-600 text-white px-6 py-3 rounded-full text-sm font-semibold shadow hover:bg-blue-700 transition inline-flex items-center gap-2"
            >
              <img src="/assets/icon/cuaca.svg" alt="Cuaca Icon" className="w-5 h-5" />
              Cek Cuaca
            </a>

            <a
              href="#gempa"
              className="bg-white border border-blue-600 text-blue-700 px-6 py-3 rounded-full text-sm font-semibold shadow hover:bg-blue-100 transition inline-flex items-center gap-2"
            >
              <img src="/assets/icon/gempa.svg" alt="Gempa Icon" className="w-5 h-5" />
              Cek Gempa
            </a>
          </div>
        </div>

        {/* SVG WAVE DIVIDER */}
        <div className="absolute bottom-0 w-full overflow-hidden leading-[0] rotate-180">
          <svg className="relative block w-full h-[80px]" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,288L40,272C80,256,160,224,240,208C320,192,400,192,480,202.7C560,213,640,235,720,229.3C800,224,880,192,960,181.3C1040,171,1120,181,1200,186.7C1280,192,1360,192,1400,192L1440,192L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* SECTION: Cuaca & Gempa */}
      <main className="px-4 pt-0 pb-12 max-w-6xl mx-auto space-y-16 -mt-6">
        <section id="cuaca" className="scroll-mt-28 bg-white p-8 rounded-3xl shadow-lg">
          <Weather />
        </section>

        <section id="gempa" className="scroll-mt-28 bg-white p-8 rounded-3xl shadow-lg">
          <Gempa />
        </section>
      </main>
    </div>
  );
};

export default Home;