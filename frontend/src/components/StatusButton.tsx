"use client";

import { Button } from "flowbite-react";
import { useState } from "react";
import { DetailsModal } from "./DetailsModal";
import { KaiheiStatus } from "@/hooks/fetchKaiheiStatus";

type StatusButtonProps = {
  kaiheiStatus: KaiheiStatus;
  hostName: string;
  hostResolved: boolean;
};

export const StatusButton = ({
  kaiheiStatus,
  hostName,
  hostResolved,
}: StatusButtonProps) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      {kaiheiStatus.Online ? (
        <>
          <div className="mx-1 px-4 py-1.5 text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded">
            Online !
          </div>

          <div className="fixed left-1/2 bottom-20">
            <Button color="gray" pill onClick={() => setOpenModal(true)}>
              Show details
            </Button>
          </div>
        </>
      ) : (
        <>
          <div className="mx-1 px-4 py-1.5 text-white bg-gray-600 rounded">
            Offline
          </div>

          <div className="fixed left-1/2 bottom-20">
            <Button color="gray" pill disabled>
              Show details
            </Button>
          </div>
        </>
      )}

      <DetailsModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        apiResponse={kaiheiStatus.ApiResponse}
        hostName={hostName}
        hostResolved={hostResolved}
      />
    </>
  );
};
