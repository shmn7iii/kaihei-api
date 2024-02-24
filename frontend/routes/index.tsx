import { Arrow } from "../components/Arrow.tsx";
import { Browser } from "../islands/Browser.tsx";
import { DomainResolvable } from "../islands/DomainResolvable.tsx";
import { MinecraftServer } from "../islands/MinecraftServer.tsx";

export default function Home() {
  return (
    <div className="w-full">
      <div className="flex justify-between gap-20">
        <Browser />
        <Arrow />
        <DomainResolvable />
        <Arrow />
        <MinecraftServer />
      </div>
    </div>
  );
}
