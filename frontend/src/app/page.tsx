"use client";

import { Heading } from "@/components/Heading";

export const dynamic = "force-dynamic";

const Content = (): JSX.Element => {
  return <Heading />;
};

export default function Home() {
  return (
    <div className="w-full items-center">
      <Content />
    </div>
  );
}
