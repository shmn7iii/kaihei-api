import { Dispatch, SetStateAction } from "react";

type OnlineProps = {
  setOpenModal: Dispatch<SetStateAction<boolean>>;
};

export const Online = ({ setOpenModal }: OnlineProps) => {
  return (
    <button onClick={() => setOpenModal(true)}>
      <mark className="mx-1 px-2 text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded">
        Online !
      </mark>
    </button>
  );
};
