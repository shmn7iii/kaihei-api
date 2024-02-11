export interface Response {
  online: boolean;
}

export async function fetchHostResolvable(hostName: string) {
  const url = "https://api.mcstatus.io/v2/status/java/" + hostName;

  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = (await response.json()) as Response;

  return data;
}
