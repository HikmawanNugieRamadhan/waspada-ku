export interface GempaTerkini {
  Tanggal: string;
  Jam: string;
  DateTime: string;
  Coordinates: string;
  Lintang: string;
  Bujur: string;
  Magnitude: string;
  Kedalaman: string;
  Wilayah: string;
  Potensi: string;
  Dirasakan: string;
  Shakemap: string;
}

export interface GempaDirasakan {
  Tanggal: string;
  Jam: string;
  DateTime: string;
  Coordinates: string;
  Lintang: string;
  Bujur: string;
  Magnitude: string;
  Kedalaman: string;
  Wilayah: string;
  Dirasakan: string;
}

export interface GempaTerkiniResponse {
  Infogempa: {
    gempa: GempaTerkini;
  };
}

export interface GempaDirasakanResponse {
  Infogempa: {
    gempa: GempaDirasakan[];
  };
}