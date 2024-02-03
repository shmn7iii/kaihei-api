import { StatusButton } from "./StatusButton";
import { fetchKaiheiStatus } from "@/hooks/fetchKaiheiStatus";

export const StatusFetcher = async () => {
  const kaiheiStatus = await fetchKaiheiStatus();

  return <StatusButton kaiheiStatus={kaiheiStatus} />;
};
