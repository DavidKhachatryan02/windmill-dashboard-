import React from "react";
import SectionTitle from "../components/Typography/SectionTitle";
import {
  Modal,
  Card,
  CardBody,
  ModalHeader,
  ModalBody,
  Button,
} from "@windmill/react-ui";

const InfoModalContent = ({ show, handleClose, infoModalData }) => {
  const {  
    title, 
    description,
    category
  } = infoModalData;

  return (
    <Modal isOpen={show} onClose={handleClose}>
      <ModalHeader>{title}</ModalHeader>
      <SectionTitle>Category - {category}</SectionTitle>
      <ModalBody>
        <Card>
          <CardBody>
            <h2 className="mb-4 font-semibold text-gray-600 dark:text-gray-300">
              Details
            </h2>
            <p
              style={{ whitSpace: "normal", wordWrap: "break-word" }}
              className="text-gray-600 dark:text-gray-400 "
            >
              {description}
            </p>
          </CardBody>
        </Card>
      </ModalBody>
      <Button onClick={handleClose}>Close</Button>
    </Modal>
  );
};

export default InfoModalContent;
