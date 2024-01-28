import { Spinner } from "flowbite-react";
import { ApiResults } from "@/hooks/useKaiheiApiStatus";
import { Dispatch, SetStateAction, useState } from "react";
import { StatusDetailsModal } from "./StatusDetailsModal";

export type StatusHeadingProps = {
  loading: boolean;
  result: ApiResults | null;
};

const Loading = () => {
  return (
    <div className="flex items-center gap-4">
      <h1 className="text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
        Server is{" "}
      </h1>
      <div className="pt-2">
        <Spinner color="gray" size="xl" aria-label="Loading" />
      </div>
    </div>
  );
};

type StatusHeadingOnlineProps = {
  setOpenModal: Dispatch<SetStateAction<boolean>>;
};

const Online = ({ setOpenModal }: StatusHeadingOnlineProps) => {
  return (
    <h1 className="text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
      Server is{" "}
      <button onClick={() => setOpenModal(true)}>
        <mark className="mx-1 px-2 text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded">
          Online !
        </mark>
      </button>
    </h1>
  );
};

const Offline = () => {
  return (
    <h1 className="text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
      Server is{" "}
      <mark className="mx-1 px-2 text-white bg-gray-600 rounded">Offline</mark>
    </h1>
  );
};

export const StatusHeading = ({
  loading,
  result,
}: StatusHeadingProps): JSX.Element => {
  const [openModal, setOpenModal] = useState(false);

  if (loading) return <Loading />;

  return (
    <>
      {result?.Host ? <Online setOpenModal={setOpenModal} /> : <Offline />}
      <StatusDetailsModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        result={result}
      />
    </>
  );
};
