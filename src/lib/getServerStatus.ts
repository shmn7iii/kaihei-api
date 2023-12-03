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
  const response = await fetch("https://api.mcsrvstat.us/3/mc.shmn7iii.net", {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = (await response.json()) as ApiResults;
  return data;
}
