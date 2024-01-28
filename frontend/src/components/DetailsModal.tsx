import { Modal, Tooltip } from "flowbite-react";
import { Dispatch, SetStateAction } from "react";
import { FaRegCopy } from "react-icons/fa";
import { ApiResponse } from "@/hooks/useKaiheiStatus";

export type DetailsModalProps = {
  openModal: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  apiResponse: ApiResponse | null;
};

export const DetailsModal = ({
  openModal,
  setOpenModal,
  apiResponse,
}: DetailsModalProps): JSX.Element => {
  const mcServerHost =
    process.env.NEXT_PUBLIC_MC_SERVER_HOST ?? apiResponse?.Host ?? "dummy";
  const mcServerAddress = mcServerHost + ":" + apiResponse?.Port;

  const writeClipboard = (content: string) => {
    navigator.clipboard.writeText(content);
  };

  return (
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
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end">
                    <Tooltip content="Copied!" trigger="click">
                      <button onClick={() => writeClipboard(mcServerAddress)}>
                        <FaRegCopy size={17} />
                      </button>
                    </Tooltip>
                    <p className="ms-2">{mcServerAddress}</p>
                  </div>
                </td>
              </tr>
              <tr className="border-t bg-white">
                <th
                  scope="row"
                  className="whitespace-nowrap px-6 py-4 font-medium text-gray-900"
                >
                  Version
                </th>
                <td className="px-6 py-4 text-right">{apiResponse?.Version}</td>
              </tr>
              <tr className="border-t bg-white">
                <th
                  scope="row"
                  className="whitespace-nowrap px-6 py-4 font-medium text-gray-900"
                >
                  Players
                </th>
                <td className="px-6 py-4 text-right">
                  {apiResponse?.OnlinePlayers}/{apiResponse?.MaxPlayers}
                </td>
              </tr>
              <tr className="border-t bg-white">
                <th
                  scope="row"
                  className="whitespace-nowrap px-6 py-4 font-medium text-gray-900"
                >
                  MOTD
                </th>
                <td className="px-6 py-4 text-right">{apiResponse?.MOTD}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Modal.Body>
    </Modal>
  );
};
