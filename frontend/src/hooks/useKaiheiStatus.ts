import { useEffect, useState } from "react";

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

export const useKaiheiStatus = (): useKaiheiStatusResult => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<KaiheiStatus>({
    Online: false,
    ApiResponse: null,
  });
  const url = process.env.NEXT_PUBLIC_KAIHEI_API_URL ?? "dummy";

  const getKaiheiApiStatus = async () => {
    setLoading(true);

    try {
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

      setResult(status);
    } catch (err) {
      setError("Error occurred: " + err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getKaiheiApiStatus();
  }, []);

  return [{ loading, error, result }];
};
