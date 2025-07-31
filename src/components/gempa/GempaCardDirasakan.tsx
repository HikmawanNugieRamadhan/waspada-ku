import React from "react";
import { GempaDirasakan } from "../../types/gempaTypes";

interface Props {
  data: GempaDirasakan[];
  showAll: boolean;
  toggleShowAll: () => void;
}

const GempaCardDirasakan: React.FC<Props> = ({ data, showAll, toggleShowAll }) => {
  const displayed = showAll ? data : data.slice(0, 5);

  return (
    <div className="space-y-4">
      <div className="overflow-x-auto rounded-xl border border-gray-200 shadow">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-gray-50">
            <tr className="text-left text-gray-700 font-medium">
              <th className="px-4 py-3 whitespace-nowrap">Waktu</th>
              <th className="px-4 py-3 whitespace-nowrap">Wilayah</th>
              <th className="px-4 py-3 whitespace-nowrap">Magnitudo</th>
              <th className="px-4 py-3 whitespace-nowrap">Kedalaman</th>
              <th className="px-4 py-3 whitespace-nowrap">Dirasakan</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {displayed.map((item, i) => (
              <tr key={i} className="hover:bg-gray-50">
                <td className="px-4 py-2 whitespace-nowrap text-gray-600">
                  {new Date(item.DateTime).toLocaleString("id-ID")}
                </td>
                <td className="px-4 py-2 whitespace-nowrap text-gray-800 font-medium">{item.Wilayah}</td>
                <td className="px-4 py-2 whitespace-nowrap">{item.Magnitude}</td>
                <td className="px-4 py-2 whitespace-nowrap">{item.Kedalaman}</td>
                <td className="px-4 py-2 whitespace-nowrap">
                  {item.Dirasakan || <span className="text-gray-400 italic">-</span>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {data.length > 5 && (
        <div className="text-center">
          <button
            onClick={toggleShowAll}
            className="mt-4 text-blue-600 hover:underline font-medium text-sm"
          >
            {showAll ? "Sembunyikan" : "Lihat Lainnya"}
          </button>
        </div>
      )}
    </div>
  );
};

export default GempaCardDirasakan;