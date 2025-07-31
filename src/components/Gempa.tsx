import React, { useEffect, useState } from "react";
import {
  fetchGempaDirasakan,
  fetchGempaTerkini,
} from "../api/gempaApi";
import {
  GempaDirasakanResponse,
  GempaTerkiniResponse,
  GempaDirasakan,
  GempaTerkini,
} from "../types/gempaTypes";
import GempaCardTerkini from "../components/gempa/GempaCardTerkini";
import GempaCardDirasakan from "../components/gempa/GempaCardDirasakan";

const Gempa: React.FC = () => {
  const [mode, setMode] = useState<"terkini" | "dirasakan">("terkini");
  const [terkini, setTerkini] = useState<GempaTerkini | null>(null);
  const [dirasakan, setDirasakan] = useState<GempaDirasakan[] | null>(null);
  const [showAllDirasakan, setShowAllDirasakan] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      setError("");
      try {
        if (mode === "terkini") {
          const result: GempaTerkiniResponse = await fetchGempaTerkini();
          setTerkini(result.Infogempa.gempa);
        } else {
          const result: GempaDirasakanResponse = await fetchGempaDirasakan();
          setDirasakan(result.Infogempa.gempa);
        }
      } catch (err) {
        console.error(err);
        setError("Gagal memuat data gempa.");
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [mode]);

  return (
    <div className="max-w-5xl mx-auto px-4 py-1">
      {/* HEADER */}
      <div className="mb-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2">
          <img src="/assets/icon/gempa.svg" alt="Icon Gempa" className="w-6 h-6" />
          <h2 className="text-2xl md:text-3xl font-bold text-blue-800">
            {mode === "terkini" ? "Gempa Bumi Terkini" : "15 Gempa Dirasakan"}
          </h2>
        </div>

        <select
          value={mode}
          onChange={(e) => {
            setMode(e.target.value as "terkini" | "dirasakan");
            setShowAllDirasakan(false);
          }}
          className="border border-gray-300 rounded-md px-4 py-2 text-sm shadow-sm focus:outline-none"
        >
          <option value="terkini">Gempa Terkini</option>
          <option value="dirasakan">Gempa Dirasakan</option>
        </select>
      </div>

      {/* CONTENT */}
      {loading ? (
        <p className="text-center">Memuat data...</p>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : mode === "terkini" && terkini ? (
        <GempaCardTerkini data={terkini} />
      ) : mode === "dirasakan" && dirasakan ? (
        <GempaCardDirasakan
          data={dirasakan}
          showAll={showAllDirasakan}
          toggleShowAll={() => setShowAllDirasakan((prev) => !prev)}
        />
      ) : (
        <p className="text-center text-gray-500">
          Tidak ada data untuk ditampilkan.
        </p>
      )}
    </div>
  );
};

export default Gempa;