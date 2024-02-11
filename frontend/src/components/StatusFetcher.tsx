import { StatusButton } from "./StatusButton";
import { fetchHostResolvable } from "@/hooks/fetchHostResolvable";
import { fetchKaiheiStatus } from "@/hooks/fetchKaiheiStatus";

export const StatusFetcher = async () => {
  const kaiheiStatus = await fetchKaiheiStatus();
  const hostName =
    process.env.NEXT_PUBLIC_MC_SERVER_HOST ??
    kaiheiStatus?.ApiResponse?.Host ??
    "dummy";
  const hostResolved = await fetchHostResolvable(hostName);

  return (
    <StatusButton
      kaiheiStatus={kaiheiStatus}
      hostName={hostName}
      hostResolved={hostResolved.online}
    />
  );
};
