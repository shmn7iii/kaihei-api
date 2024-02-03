import { Suspense } from "react";
import { Loading } from "@/components/Loading";
import { StatusFetcher } from "@/components/StatusFetcher";

export default function Home() {
  return (
    <div className="w-full items-center">
      <div className="flex items-center gap-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl ">
        <h1>Server is</h1>
        <Suspense fallback={<Loading />}>
          <StatusFetcher />
        </Suspense>
      </div>
    </div>
  );
}
