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
  Err: Error | null;
}

export async function getServerStatus() {
  const url = import.meta.env.PUBLIC_KAIHEI_API_URL;
  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = (await response.json()) as ApiResults;

  return data;
}
