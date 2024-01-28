"use client";

import { useState } from "react";
import { Loading } from "@/components/Loading";
import { Offline } from "@/components/Offline";
import { Online } from "@/components/Online";
import { useKaiheiStatus } from "@/hooks/useKaiheiStatus";

export const dynamic = "force-dynamic";

const Content = (): JSX.Element => {
  const [{ loading, error, result }] = useKaiheiStatus();
  const [openModal, setOpenModal] = useState(false);

  if (loading) return <Loading />;
  if (error) return <Offline />;

  return (
    <>
      {result.Online ? (
        <Online
          apiResponse={result.ApiResponse}
          openModal={openModal}
          setOpenModal={setOpenModal}
        />
      ) : (
        <Offline />
      )}
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
