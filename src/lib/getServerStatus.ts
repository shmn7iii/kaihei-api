export interface Error {
  ping: string;
  query: string;
}

export interface Debug {
  ping: boolean;
  query: boolean;
  error: Error;
}

export interface Players {
  online: number;
  max: number;
}

export interface Motd {
  raw: string[];
  clean: string[];
  html: string[];
}

export interface ApiResults {
  ip: string;
  port: number;
  online: boolean;
  version: boolean | null;
  players: Players | null;
  motd: Motd | null;
  debug: Debug;
}

export async function getServerStatus() {
  const url = "https://api.mcsrvstat.us/3/" + import.meta.env.PUBLIC_MC_SERVER_HOST;
  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = (await response.json()) as ApiResults;
  return data;
}
