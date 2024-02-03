"use client";

import { useState } from "react";
import { DetailsModal } from "./DetailsModal";
import { KaiheiStatus } from "@/hooks/fetchKaiheiStatus";

type StatusButtonProps = {
  kaiheiStatus: KaiheiStatus;
};

export const StatusButton = ({ kaiheiStatus }: StatusButtonProps) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      {kaiheiStatus.Online ? (
        <button onClick={() => setOpenModal(true)}>
          <mark className="mx-1 px-2 text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded">
            Online !
          </mark>
        </button>
      ) : (
        <button disabled={true}>
          <mark className="mx-1 px-2 text-white bg-gray-600 rounded">
            Offline
          </mark>
        </button>
      )}

      <DetailsModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        apiResponse={kaiheiStatus.ApiResponse}
      />
    </>
  );
};
