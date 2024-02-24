import { Status } from "../components/Status.tsx";

export function Browser() {
  return (
    <div>
      <Status
        title="You"
        badges={["Fine"]}
        state={"success"}
      />
    </div>
  );
}
