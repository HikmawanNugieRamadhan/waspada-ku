import { PrakiraanCuaca } from "../types/weatherTypes";

export async function fetchCuaca(adm4: string): Promise<PrakiraanCuaca> {
  const res = await fetch(`https://api.bmkg.go.id/publik/prakiraan-cuaca?adm4=${adm4}`);
  if (!res.ok) throw new Error("Gagal ambil data cuaca");
  return await res.json();
}