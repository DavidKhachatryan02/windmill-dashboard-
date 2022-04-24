import React, { useRef, useState } from "react";
import SectionTitle from "../components/Typography/SectionTitle";
import {
  Modal,
  Card,
  CardBody,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  Label
} from "@windmill/react-ui";

import PageTitle from "../components/Typography/PageTitle";
import {
  TableBody,
  TableContainer,
  Table,
  TableHeader,
  TableCell,
} from "@windmill/react-ui";
import RoadmapInfo from "../components/RoadmapInfo";

function RoadMap() {
  const [posts, setPosts] = useState([
    {
      id: Date.now(),
      title: "JS Info",
      description: "details",
      category: "JS",
    },
  ]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  const addNewPost = () => {
    if (title === "" || description === "" || category === "") {
      alert("Please fill all the fields");
    
    }
    else {
    const newPost = {
      id: Date.now(),
      title,
      description,
      category,
    };
   
    setPosts([...posts, newPost]);
    setTitle("");
    setDescription("");
    setCategory("");
    closeModal();
  };
  }
  const removePost = (id) => {
    const tempData = [...posts].filter((post) => post.id !== id);
    setPosts([...tempData]);
  };

  const [infoModalData, setInfoModalData] = useState([]);
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const detailClick = {
    onClick: (e, detail) => {
      setInfoModalData(detail);
      toggleTrueFalse();
    },
  };

  const toggleTrueFalse = () => {
    setShowInfoModal(handleShow);
  };

  const InfoModalContent = () => {
    return (
      <Modal isOpen={show} onClose={handleClose}>
        <ModalHeader>{infoModalData.title}</ModalHeader>
        <SectionTitle>Category - {infoModalData.category}</SectionTitle>
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
                {infoModalData.description}
              </p>
            </CardBody>
          </Card>
        </ModalBody>
        <Button onClick={handleClose}>Close</Button>
      </Modal>
    );
  };

  
  const [showEditModal, setShowEditModal] = useState(false);
  
  const [editModalId, setEditModalId] = useState("");
  const [editModalTitle, setEditModalTitle] = useState("");
  const [editModalCategory, setEditModalCategory] = useState("");
  const [editModalDescription, setEditModalDescription] = useState("");

  const [showEdit, setShowEdit] = useState(false);
  
  const handleCloseEdit = () => {
    setShowEdit(false);
    setEditModalId("");
    setEditModalTitle("");
    setEditModalCategory("");
    setEditModalDescription("");
  };
  const handleShowEdit = () => setShowEdit(true);
  const toggleEditTrueFalse = () => {
    setShowEditModal(handleShowEdit);
  };

  const editClick = {
    onClick: (e, detail) => {
      setEditModalId(detail.id);
      setEditModalTitle(detail.title);
      setEditModalCategory(detail.category);
      setEditModalDescription(detail.description);
      toggleEditTrueFalse();
    },
  };
  

  const editPost = () => {
    const EditedPost = {
      id: editModalId,
      title: editModalTitle,
      description: editModalDescription,
      category: editModalCategory,
    };
    if (
      editModalTitle === "" ||
      editModalDescription === "" ||
      editModalCategory === ""
    ) {
      alert("Please fill all the fields");
    }

    console.log(EditedPost);
  };

  const EditModalContent = () => {
    return (
      <Modal isOpen={showEdit} onClose={handleCloseEdit} style={{}}>
        
        <ModalHeader>Edit post</ModalHeader>
        <ModalBody>
        <select
          className="block w-52 text-gray-700 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
          name="category"
          onChange={(e) => (setEditModalCategory (e.target.value))}
        >
          <option value="">Select Category</option>
          <option value="ReactJS">ReactJS</option>
          <option value="JS">JS</option>
          <option value="Logic">Logic</option>
          <option value="html">html</option>
        </select>
        <div className="relative ">
          <br></br>
          <SectionTitle for="required-email" className="text-gray-700">
            Enter new title
          </SectionTitle>
          <Label>
           <Input
            value={editModalTitle}
            type="text"
            className="mt-1"
            id="title"
            name="title"
            onChange={(event) => {
              setEditModalTitle (event.target.value)
             }}
          /> 
          </Label>
        </div>
        <br></br>
        <label className="text-gray-700" >
         <h2>Enter new description</h2> 
         <br></br>
          <Input
            value={editModalDescription}
            type="textarea"
            id="comment"
            name="comment"

            onChange={(event) =>
              (setEditModalDescription(event.target.value))
            }
          ></Input>
        </label>
        </ModalBody>
        <ModalFooter>
          <div className="hidden sm:block">
            <Button layout="outline" onClick={handleCloseEdit}>
              Cancel
            </Button>
          </div>
          <div className="hidden sm:block">
             <Button onClick={editPost} >Save</Button> 
          </div>
        </ModalFooter>
      </Modal>
    );
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
            <Modal isOpen={isModalOpen} onClose={closeModal}>
              <ModalHeader>Add Level</ModalHeader>
              <select
                className="block w-52 text-gray-700 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                name="category"
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">Select category</option>
                <option value="ReactJS">ReactJS</option>
                <option value="JS">JS</option>
                <option value="Logic">Logic</option>
                <option value="html">html</option>
              </select>
              <div className=" relative ">
              <br></br>
                <SectionTitle>
                  Enter title
                </SectionTitle>
                <input
                  onChange={(e) => setTitle(e.target.value)}
                  type="text"
                  id="title"
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  name="title"
                />
              </div>
              <br></br>
              <label className="text-gray-700" for="name">
                <textarea
                  className="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  id="comment"
                  placeholder="Enter description"
                  name="comment"
                  rows="5"
                  cols="40"
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </label>
              <ModalFooter>
                <div className="hidden sm:block">
                  <Button layout="outline" onClick={closeModal}>
                    Cancel
                  </Button>
                </div>
                <div className="hidden sm:block">
                  <Button onClick={addNewPost}>Add</Button>
                </div>
                <div className="block w-full sm:hidden">
                  <Button
                    block
                    size="large"
                    layout="outline"
                    onClick={closeModal}
                  >
                    Cancel
                  </Button>
                </div>
                <div className="block w-full sm:hidden"></div>
              </ModalFooter>
            </Modal>
            {show ? <InfoModalContent /> : null}
          </TableHeader>
          <TableBody>
            <RoadmapInfo
              posts={posts}
              removePost={removePost}
              detailClick={detailClick}
              editClick={editClick}
            />
          </TableBody>
          {showEdit ? <EditModalContent /> : null}
        </Table>
      </TableContainer>
    </>
  );
}

export default RoadMap;