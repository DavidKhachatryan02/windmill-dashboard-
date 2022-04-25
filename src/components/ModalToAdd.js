import React, { useState } from "react";
import SectionTitle from "../components/Typography/SectionTitle";
import { Modal, ModalHeader, ModalFooter, Button } from "@windmill/react-ui";

function ModalToAdd({ closeModal, addNewPost, isModalOpen }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const createPost = () => {
    if (title.length && description.length && category.length) {
      addNewPost({
        title,
        description,
        category,
      });
    } else {
      setErrorMessage("Please fill all the fields");
    }
  };

  return (
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
        <SectionTitle>Enter title</SectionTitle>
        <input
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          id="title"
          className=" rounded-lg border-transparent flex-1 
              appearance-none border border-gray-300 w-full py-2 px-4 bg-white 
             text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none
             focus:ring-2 focus:ring-purple-600 focus:border-transparent"
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
      {!!errorMessage && (
        <label className="text-red-500 pt-2">{errorMessage}</label>
      )}
      <ModalFooter>
        <div className="hidden sm:block">
          <Button layout="outline" onClick={closeModal}>
            Cancel
          </Button>
        </div>
        <div className="hidden sm:block">
          <Button onClick={createPost}>Add</Button>
        </div>
        <div className="block w-full sm:hidden">
          <Button block size="large" layout="outline" onClick={closeModal}>
            Cancel
          </Button>
        </div>
        <div className="block w-full sm:hidden"></div>
      </ModalFooter>
    </Modal>
  );
}

export default ModalToAdd;
