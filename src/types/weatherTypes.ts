export interface CuacaItem {
  datetime: string;
  local_datetime: string;
  t: number;
  weather_desc: string;
  image: string;
}

export interface Lokasi {
  provinsi: string;
  kotkab: string;
  kecamatan: string;
  desa: string;
}

export interface PrakiraanCuaca {
  lokasi: Lokasi;
  data: Array<{
    lokasi: Lokasi;
    cuaca: CuacaItem[][];
  }>;
}