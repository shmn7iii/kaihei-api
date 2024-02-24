import { Status } from "../components/Status.tsx";
import { useKaiheiStatus } from "../hooks/useKaiheiStatus.ts";

export function MinecraftServer() {
  const [{ loading, error, result }] = useKaiheiStatus();

  return (
    <div>
      <Status
        title="Server"
        badges={result?.Online && result?.ApiResponse?.Version
          ? ["mc.shmn7iii.net", result?.ApiResponse?.Version]
          : ["Server down"]}
        state={loading
          ? "loading"
          : error || !result?.Online
          ? "failure"
          : "success"}
      />
    </div>
  );
}
