import { Dispatch, SetStateAction } from "react";
import { DetailsModal } from "./DetailsModal";
import { ApiResponse } from "@/hooks/useKaiheiStatus";

type StatusHeadingOnlineProps = {
  apiResponse: ApiResponse | null;
  openModal: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
};

export const Online = ({
  apiResponse,
  openModal,
  setOpenModal,
}: StatusHeadingOnlineProps) => {
  return (
    <>
      <h1 className="text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
        Server is{" "}
        <button onClick={() => setOpenModal(true)}>
          <mark className="mx-1 px-2 text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded">
            Online !
          </mark>
        </button>
      </h1>
      <DetailsModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        apiResponse={apiResponse}
      />
    </>
  );
};
