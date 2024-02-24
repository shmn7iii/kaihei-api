import { useEffect, useState } from "preact/hooks";

export interface Response {
  online: boolean;
}

export type useMcstatusIoApiResult = [
  {
    loading: boolean;
    error: string | null;
    result: Response;
  },
];

export const useMcstatusIoApi = (
  hostName: string,
): useMcstatusIoApiResult => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<Response>({
    online: false,
  });

  const url = "https://api.mcstatus.io/v2/status/java/" + hostName;

  const getKaiheiApiStatus = async () => {
    setLoading(true);

    try {
      const response = await fetch(new URL(url), {
        cache: "no-store",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = (await response.json()) as Response;

      setResult(data);
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
