"use client";

import { StatusHeading } from "@/components/StatusHeading";
import { useKaiheiApiStatus } from "@/hooks/useKaiheiApiStatus";

const Content = (): JSX.Element => {
  const [{ loading, result }] = useKaiheiApiStatus();

  return (
    <>
      <StatusHeading loading={loading} result={result} />
    </>
  );
};

export default function Home() {
  return (
    <div className="w-full items-center">
      <Content />
    </div>
  );
}
