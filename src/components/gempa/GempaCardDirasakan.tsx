import React, { useState } from "react";
import { GempaDirasakan } from "../../types/gempaTypes";

interface Props {
  data: GempaDirasakan[];
  showAll: boolean;
  toggleShowAll: () => void;
}

const GempaCardDirasakan: React.FC<Props> = ({
  data,
  showAll,
  toggleShowAll,
}) => {
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");

  const toggleSort = () => {
    setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
  };

  const sortedData = [...data].sort((a, b) => {
    const timeA = new Date(a.DateTime).getTime();
    const timeB = new Date(b.DateTime).getTime();
    return sortOrder === "asc" ? timeA - timeB : timeB - timeA;
  });

  const displayed = showAll ? sortedData : sortedData.slice(0, 5);

  return (
    <div className="space-y-4">
      {/* SORT CONTROL */}
      <div className="flex items-center justify-start gap-2">
        <button
          onClick={toggleSort}
          className="inline-flex items-center gap-1 border border-gray-300 dark:border-gray-700 text-sm text-gray-700 dark:text-gray-200 px-4 py-1.5 rounded-full bg-white dark:bg-gray-800 shadow-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition"
        >
          <span>Urutkan:</span>
          <span className="font-semibold">
            {sortOrder === "asc" ? "Terlama" : "Terbaru"}
          </span>
          <span>{sortOrder === "asc" ? "↑" : "↓"}</span>
        </button>
      </div>

      {/* TABEL */}
      <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-semibold">
            <tr>
              <th
                className="px-4 py-3 cursor-pointer hover:underline"
                onClick={toggleSort}
              >
                Waktu {sortOrder === "asc" ? "↑" : "↓"}
              </th>
              <th className="px-4 py-3">Wilayah</th>
              <th className="px-4 py-3">Magnitudo</th>
              <th className="px-4 py-3">Kedalaman</th>
              <th className="px-4 py-3">Dirasakan</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 dark:divide-gray-700 bg-white dark:bg-gray-900">
            {displayed.map((item, idx) => (
              <tr key={idx} className="hover:bg-gray-50 dark:hover:bg-gray-800">
                <td className="px-4 py-3 text-gray-600 dark:text-gray-300">
                  {new Date(item.DateTime).toLocaleString("id-ID")}
                </td>
                <td className="px-4 py-3 text-gray-800 dark:text-white font-medium">
                  {item.Wilayah}
                </td>
                <td className="px-4 py-3 text-gray-700 dark:text-gray-200">
                  {item.Magnitude}
                </td>
                <td className="px-4 py-3 text-gray-700 dark:text-gray-200">
                  {item.Kedalaman}
                </td>
                <td className="px-4 py-3 text-gray-700 dark:text-gray-200">
                  {item.Dirasakan || <span className="italic text-gray-400 dark:text-gray-500">-</span>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* TOGGLE BUTTON */}
      {data.length > 5 && (
        <div className="text-center">
          <button
            onClick={toggleShowAll}
            className="mt-2 text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium"
          >
            {showAll ? "Sembunyikan" : "Lihat Lainnya"}
          </button>
        </div>
      )}
    </div>
  );
};

export default GempaCardDirasakan;