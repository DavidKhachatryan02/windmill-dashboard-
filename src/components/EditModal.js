import React, { useEffect, useState } from "react";
import SectionTitle from "../components/Typography/SectionTitle";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  Label,
} from "@windmill/react-ui";

const EditModalContent = ({
  handleCloseEdit,
  showEdit,
  editPost,
  currentData,
}) => {
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    if (currentData) {
      const { id, title, description, category } = currentData;
      setId(id);
      setTitle(title);
      setDescription(description);
      setCategory(category);
    }
  }, [currentData]);

  const save = () => {
    if (title.length && description.length && category.length) {
      editPost({
        id,
        title,
        description,
        category,
      });
      handleCloseEdit();
    } else {
      setErrorMessage("Fill all the fields.");
    }
  };

  return (
    <Modal isOpen={showEdit} onClose={handleCloseEdit}>
      <ModalHeader>Edit post</ModalHeader>
      <ModalBody>
        <select
          key={category}
          className="block w-52 text-gray-700 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
          name="category"
          onChange={(e) => setCategory(e.target.value)}
          defaultValue={category}
        >
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
              value={title}
              type="text"
              className="mt-1"
              id="title"
              name="title"
              onChange={(event) => {
                setTitle(event.target.value);
              }}
            />
          </Label>
        </div>
        <br></br>
        <label className="text-gray-700">
          <h2>Enter new description</h2>
          <br></br>
          <textarea
            className="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            id="comment"
            value={description}
            name="comment"
            rows="5"
            cols="40"
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </label>
        {!!errorMessage && (
          <label className="text-red-500 pt-2">{errorMessage}</label>
        )}
      </ModalBody>
      <ModalFooter>
        <div className="hidden sm:block">
          <Button layout="outline" onClick={handleCloseEdit}>
            Cancel
          </Button>
        </div>
        <div className="hidden sm:block">
          <Button onClick={save}>Save</Button>
        </div>
      </ModalFooter>
    </Modal>
  );
};

export default EditModalContent;
