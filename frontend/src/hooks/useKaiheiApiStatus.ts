import { useEffect, useState } from "react";

export interface Error {
  Syscall: string;
  Err: string;
}

export interface Plugin {
  Name: string;
  Version: string;
}

export interface ApiResults {
  MOTD: string | null;
  Version: string | null;
  ServerVersion: string | null;
  Plugins: Plugin[] | null;
  Map: string | null;
  OnlinePlayers: number | null;
  MaxPlayers: number | null;
  Port: number | null;
  Host: string | null;
  Err: Error | string | null;
}

export type useKaiheiApiStatusResult = [
  {
    loading: boolean;
    result: ApiResults | null;
  }
];

export const useKaiheiApiStatus = (): useKaiheiApiStatusResult => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ApiResults | null>(null);
  const url = process.env.NEXT_PUBLIC_KAIHEI_API_URL || "dummy";

  const getKaiheiApiStatus = async () => {
    setLoading(true);

    try {
      const response = await fetch(new URL(url), {
        cache: "no-store",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = (await response.json()) as ApiResults;

      setResult(data);
    } catch (error) {
      const data: ApiResults = {
        MOTD: null,
        Version: null,
        ServerVersion: null,
        Plugins: null,
        Map: null,
        OnlinePlayers: null,
        MaxPlayers: null,
        Port: null,
        Host: null,
        Err: "Fetch error: " + error,
      };

      setResult(data);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getKaiheiApiStatus();
  }, []);

  return [{ loading, result }];
};
