import React from "react";
import { GempaTerkini } from "../../types/gempaTypes";

interface Props {
  data: GempaTerkini;
}

const GempaCardTerkini: React.FC<Props> = ({ data }) => {
  return (
    <div className="p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start">
      {/* LEFT: Shakemap */}
      <div className="md:w-[320px] w-full flex-shrink-0">
        <img
          src={`https://data.bmkg.go.id/DataMKG/TEWS/${data.Shakemap}`}
          alt="Peta Shakemap"
        />
      </div>

      {/* RIGHT: Info */}
      <div className="flex-1 space-y-4">
        <p className="text-sm text-gray-500">{data.DateTime} WIB</p>

        <span className="inline-block bg-green-100 text-green-700 text-xs font-medium px-3 py-1 rounded-full">
          Gempa Dirasakan
        </span>

        <p className="text-lg font-semibold text-slate-800">
          Pusat gempa berada di darat {data.Wilayah}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-gray-700 mt-4">
          <div className="flex items-center gap-2">
            <img src="/assets/icon/rss.svg" className="w-4 h-4" alt="rss"/>
            <span>
              <strong>Magnitudo:</strong> {data.Magnitude}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <img src="/assets/icon/ruler.svg" className="w-4 h-4" alt="magnitudo"/>
            <span>
              <strong>Kedalaman:</strong> {data.Kedalaman}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <img src="/assets/icon/mappin.svg" className="w-4 h-4" alt="mappin"/>
            <span>
              <strong>Koordinat:</strong> {data.Lintang} - {data.Bujur}
            </span>
          </div>
        </div>

        <p className="text-sm text-gray-600 pt-2">
          <strong>Potensi:</strong> {data.Potensi}
        </p>

        {data.Dirasakan && (
          <p className="text-sm text-gray-600">
            <strong>Dirasakan:</strong> {data.Dirasakan}
          </p>
        )}

        <div className="pt-3">
          <p className="text-sm text-black font-medium">
            Saran BMKG: <span className="text-blue-700">Hati-hati terhadap gempabumi susulan yang mungkin terjadi</span></p>
          <a
            href="https://bmkg.go.id/gempabumi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 mt-2 text-blue-700 hover:underline text-sm font-semibold"
          >
            Lihat Semua <span>→</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default GempaCardTerkini;