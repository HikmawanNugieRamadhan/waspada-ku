import React, { useEffect, useState } from "react";
import { fetchCuaca } from "../api/weatherApi";
import { PrakiraanCuaca, CuacaItem } from "../types/weatherTypes";

const Weather: React.FC = () => {
  const [data, setData] = useState<PrakiraanCuaca | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchCuaca("35.78.09.1006");
        setData(result);
      } catch (err) {
        setError("Gagal memuat data cuaca.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  if (loading) return <p className="text-center mt-10 dark:text-white">Loading...</p>;
  if (error || !data)
    return (
      <p className="text-center text-red-500 dark:text-red-400">
        {error || "Data kosong"}
      </p>
    );

  const lokasi = data.data[0].lokasi;
  const cuacaList: CuacaItem[] = data.data[0].cuaca.flat();
  const availableDates = Array.from(
    new Set(
      cuacaList.map((item) =>
        new Date(item.local_datetime).toLocaleDateString("id-ID")
      )
    )
  );
  const filteredCuaca = selectedDate
    ? cuacaList.filter(
        (item) =>
          new Date(item.local_datetime).toLocaleDateString("id-ID") ===
          selectedDate
      )
    : [];

  return (
    <div className="w-full flex flex-col items-center">
      {/* TITLE */}
      <div className="mb-6 text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <img src="/assets/icon/cuaca.svg" alt="Cuaca Icon" className="w-6 h-6" />
          <h1 className="text-2xl md:text-3xl font-bold text-blue-800 dark:text-white">
            Prakiraan Cuaca
          </h1>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          {lokasi.desa}, {lokasi.kecamatan}, {lokasi.kotkab}, {lokasi.provinsi}
        </p>
      </div>

      {/* FORM */}
      {!showForm ? (
        <button
          onClick={() => setShowForm(true)}
          className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-full shadow hover:bg-blue-700 transition inline-flex items-center gap-2"
        >
          <img src="/assets/icon/cuaca.svg" alt="Icon" className="w-4 h-4" />
          Yuk cek cuaca!
        </button>
      ) : (
        <>
          <div className="my-6 w-full flex justify-center">
            <select
              className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 dark:text-white rounded-lg px-4 py-2 text-sm shadow-sm focus:outline-none"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
            >
              <option value="">Pilih Tanggal</option>
              {availableDates.map((tanggal) => (
                <option key={tanggal} value={tanggal}>
                  {tanggal}
                </option>
              ))}
            </select>
          </div>

          {/* LIST */}
          {selectedDate && filteredCuaca.length > 0 ? (
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {filteredCuaca.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-blue-50 dark:bg-gray-700 rounded-xl shadow-md p-4 flex flex-col items-center text-center transition-colors"
                >
                  <img
                    src={item.image}
                    alt={item.weather_desc}
                    className="w-16 h-16 mb-2"
                  />
                  <p className="font-semibold text-blue-800 dark:text-blue-300">
                    {item.weather_desc}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-300">
                    {new Date(item.local_datetime).toLocaleTimeString("id-ID", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                  <p className="text-sm mt-1 text-gray-700 dark:text-gray-200">
                    🌡️ {item.t}°C
                  </p>
                </div>
              ))}
            </div>
          ) : selectedDate ? (
            <p className="text-center text-gray-500 dark:text-gray-300">
              Tidak ada data cuaca.
            </p>
          ) : (
            <p className="text-center text-gray-500 dark:text-gray-300">
              Silakan pilih tanggal untuk melihat cuaca.
            </p>
          )}
        </>
      )}
    </div>
  );
};

export default Weather;