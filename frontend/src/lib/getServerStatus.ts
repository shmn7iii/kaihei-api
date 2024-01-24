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

export async function getServerStatus() {
  const url = import.meta.env.PUBLIC_KAIHEI_API_URL;

  try {
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`response.status = ${response.status}, response.statusText = ${response.statusText}`);
    }

    const data = (await response.json()) as ApiResults;
    return data;
  } catch (err) {
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
      Err: "Fetch error: " + err,
    };
    return data;
  }
}
