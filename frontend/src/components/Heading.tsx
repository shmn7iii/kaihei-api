import { useState } from "react";
import { DetailsModal } from "./DetailsModal";
import { Loading } from "./Loading";
import { Offline } from "./Offline";
import { Online } from "./Online";
import { useKaiheiStatus } from "@/hooks/useKaiheiStatus";

const Status = (): JSX.Element => {
  const [{ loading, error, result }] = useKaiheiStatus();
  const [openModal, setOpenModal] = useState(false);

  if (loading) return <Loading />;
  if (error) return <Offline />;

  return (
    <>
      {result.Online ? <Online setOpenModal={setOpenModal} /> : <Offline />}
      <DetailsModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        apiResponse={result.ApiResponse}
      />
    </>
  );
};

export const Heading = () => {
  return (
    <div className="flex items-center gap-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl ">
      <h1>Server is</h1>
      <Status />
    </div>
  );
};
