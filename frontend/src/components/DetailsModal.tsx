import { Modal, Table, Tooltip } from "flowbite-react";
import { Dispatch, SetStateAction } from "react";
import { FaRegCopy } from "react-icons/fa";
import { ApiResponse } from "@/hooks/fetchKaiheiStatus";

export type DetailsModalProps = {
  openModal: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  apiResponse: ApiResponse | null;
  hostName: string;
  hostResolved: boolean;
};

export const DetailsModal = ({
  openModal,
  setOpenModal,
  apiResponse,
  hostName,
  hostResolved,
}: DetailsModalProps): JSX.Element => {
  const writeClipboard = (content: string) => {
    navigator.clipboard.writeText(content);
  };

  return (
    <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
      <Modal.Header>Details</Modal.Header>
      <Modal.Body>
        <Table className="text-base">
          <Table.Body className="divide-y">
            <Table.Row>
              <Table.Cell className="text-gray-900 font-medium">
                Address
              </Table.Cell>
              <Table.Cell className="text-gray-500 text-right">
                <div className="flex items-center justify-end">
                  <div className="mt-2">
                    <Tooltip content="Copied!" trigger="click">
                      <button onClick={() => writeClipboard(hostName)}>
                        <FaRegCopy size={17} />
                      </button>
                    </Tooltip>
                  </div>
                  <p className="ms-2">{hostName}</p>
                </div>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell className="text-gray-900 font-medium">
                Version
              </Table.Cell>
              <Table.Cell className="text-gray-500 text-right">
                {apiResponse?.Version}
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell className="text-gray-900 font-medium">
                MOTD
              </Table.Cell>
              <Table.Cell className="text-gray-500 text-right">
                {apiResponse?.MOTD}
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell className="text-gray-900 font-medium">
                Players
              </Table.Cell>
              <Table.Cell className="text-gray-500 text-right">
                {apiResponse?.OnlinePlayers}/{apiResponse?.MaxPlayers}
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell className="text-gray-900 font-medium">
                Resolve status
              </Table.Cell>
              <Table.Cell className="text-gray-500 text-right">
                {hostResolved ? "Resolved" : "Error while resolving host."}
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </Modal.Body>
    </Modal>
  );
};
