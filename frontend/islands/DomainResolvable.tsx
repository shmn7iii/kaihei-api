import { Status } from "../components/Status.tsx";
import { useMcstatusIoApi } from "../hooks/useMcstatusIoApi.ts";

export function DomainResolvable() {
  const [{ loading, error, result }] = useMcstatusIoApi("mc.shmn7iii.net");

  return (
    <div>
      <Status
        title="Name Resolution"
        badges={[result?.online ? "Working" : "Can't reached"]}
        state={loading
          ? "loading"
          : error || !result?.online
          ? "failure"
          : "success"}
      />
    </div>
  );
}
