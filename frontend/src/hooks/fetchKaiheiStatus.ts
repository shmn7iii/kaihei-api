export interface Error {
  Syscall: string;
  Err: string;
}

export interface Plugin {
  Name: string;
  Version: string;
}

export interface ApiResponse {
  MOTD: string;
  Version: string;
  ServerVersion: string;
  Plugins: Plugin[];
  Map: string;
  OnlinePlayers: number;
  MaxPlayers: number;
  Port: number;
  Host: string;
  Err: Error | string;
}

export interface KaiheiStatus {
  Online: boolean;
  ApiResponse: ApiResponse | null;
}

export type useKaiheiStatusResult = [
  {
    loading: boolean;
    error: string | null;
    result: KaiheiStatus;
  }
];

export const fetchKaiheiStatus = async () => {
  const url = process.env.NEXT_PUBLIC_KAIHEI_API_URL ?? "dummy";
  const response = await fetch(new URL(url), {
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = (await response.json()) as ApiResponse;
  const status: KaiheiStatus = {
    Online: !!data.Host,
    ApiResponse: data,
  };

  return status;
};
