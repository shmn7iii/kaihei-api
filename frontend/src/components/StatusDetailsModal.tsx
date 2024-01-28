import { Modal } from "flowbite-react";
import { ApiResults } from "@/hooks/useKaiheiApiStatus";
import { Dispatch, SetStateAction } from "react";

export type StatusDetailsModalProps = {
  openModal: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  result: ApiResults | null;
};

export const StatusDetailsModal = ({
  openModal,
  setOpenModal,
  result,
}: StatusDetailsModalProps): JSX.Element => {
  const mcServerHost = process.env.NEXT_PUBLIC_MC_SERVER_HOST;

  return (
    <>
      <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Details</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <table className="w-full text-left text-gray-500 rtl:text-right">
              <tbody>
                <tr className="bg-white">
                  <th
                    scope="row"
                    className="whitespace-nowrap px-6 py-4 font-medium text-gray-900"
                  >
                    Address
                  </th>
                  <td className="px-6 py-4 text-right">{mcServerHost}</td>
                </tr>
                <tr className="border-t bg-white">
                  <th
                    scope="row"
                    className="whitespace-nowrap px-6 py-4 font-medium text-gray-900"
                  >
                    Version
                  </th>
                  <td className="px-6 py-4 text-right">{result?.Version}</td>
                </tr>
                <tr className="border-t bg-white">
                  <th
                    scope="row"
                    className="whitespace-nowrap px-6 py-4 font-medium text-gray-900"
                  >
                    Players
                  </th>
                  <td className="px-6 py-4 text-right">
                    {result?.OnlinePlayers}/{result?.MaxPlayers}
                  </td>
                </tr>
                <tr className="border-t bg-white">
                  <th
                    scope="row"
                    className="whitespace-nowrap px-6 py-4 font-medium text-gray-900"
                  >
                    MOTD
                  </th>
                  <td className="px-6 py-4 text-right">{result?.MOTD}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
