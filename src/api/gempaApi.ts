import { GempaDirasakanResponse, GempaTerkiniResponse } from "../types/gempaTypes";

export const fetchGempaTerkini = async (): Promise<GempaTerkiniResponse> => {
  const res = await fetch("https://data.bmkg.go.id/DataMKG/TEWS/autogempa.json");
  if (!res.ok) throw new Error("Gagal mengambil data gempa terkini");
  return res.json();
};

export const fetchGempaDirasakan = async (): Promise<GempaDirasakanResponse> => {
  const res = await fetch("https://data.bmkg.go.id/DataMKG/TEWS/gempadirasakan.json");
  if (!res.ok) throw new Error("Gagal mengambil data gempa dirasakan");
  return res.json();
};