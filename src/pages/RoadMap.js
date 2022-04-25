import React, { useState } from "react";
import {
  Button,
  TableBody,
  TableContainer,
  Table,
  TableHeader,
  TableCell,
} from "@windmill/react-ui";
// import axios from "axios";
import InfoModalContent from "../components/InfoModal";
import PageTitle from "../components/Typography/PageTitle";
import RoadmapInfo from "../components/RoadmapInfo";
import ModalToAdd from "../components/ModalToAdd";
import EditModalContent from "../components/EditModal";

function RoadMap() {
  const [posts, setPosts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [currentData, setCurrentData] = useState(null);
  const [infoModalData, setInfoModalData] = useState([]);
  const [show, setShow] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const addNewPost = ({ title, description, category }) => {
    const newPost = {
      id: Date.now(),
      title,
      description,
      category,
    };

    setPosts([...posts, newPost]);
    closeModal();
  };
  const removePost = (id) => {
    const tempData = [...posts].filter((post) => post.id !== id);
    setPosts([...tempData]);
  };

  const detailClick = (detail) => {
    setInfoModalData(detail);
    openInfoModal();
  };

  const openInfoModal = () => {
    setShow(true);
  };
  const handleClose = () => setShow(false);

  const handleCloseEdit = () => {
    setShowEdit(false);
  };

  const openEditModal = () => {
    setShowEdit(true);
  };

  const editClick = (detail) => {
    setCurrentData(detail);
    openEditModal();
  };

  const editPost = ({ id, title, description, category }) => {
    if (id) {
      const temp = [...posts];
      const index = temp.findIndex((post) => post.id === id);

      if (index > -1) {
        temp.splice(index, 1, {
          id,
          title,
          description,
          category,
        });
      }

      setPosts([...temp]);
    }
  };

  return (
    <>
      <PageTitle>RoadMap</PageTitle>
      <Button onClick={openModal} justify="center">
        Add Level
      </Button>
      <TableContainer>
        <Table>
          <TableHeader>
            <tr>
              <TableCell>RoadMap Info</TableCell>
            </tr>
            <ModalToAdd
              addNewPost={addNewPost}
              openModal={openModal}
              closeModal={closeModal}
              isModalOpen={isModalOpen}
            />

            <InfoModalContent
              detailClick={detailClick}
              handleClose={handleClose}
              handleShow={openInfoModal}
              show={show}
              infoModalData={infoModalData}
            />
          </TableHeader>
          <TableBody>
            <RoadmapInfo
              posts={posts}
              removePost={removePost}
              detailClick={detailClick}
              editClick={editClick}
            />
          </TableBody>
          <EditModalContent
            editPost={editPost}
            handleCloseEdit={handleCloseEdit}
            showEdit={showEdit}
            currentData={currentData}
          />
        </Table>
      </TableContainer>
    </>
  );
}

export default RoadMap;
