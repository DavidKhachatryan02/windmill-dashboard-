// import React, { useState } from "react";

// import {
//   Modal,
//   ModalHeader,
//   ModalBody,
//   ModalFooter,
//   Button,
// } from "@windmill/react-ui";

// function ModalToAdd(props) {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const openModal = () => {
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <>
//       <Modal isOpen={isModalOpen} onClose={closeModal}>
//         <ModalHeader>Add Level</ModalHeader>
//         <select
//           class="block w-52 text-gray-700 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
//           name="category"
//           onChange={(e) => props.setCategory(e.target.value)}
//         >
//           <option value="">Select category</option>
//           <option value="ReactJS">ReactJS</option>
//           <option value="JS">JS</option>
//           <option value="Logic">Logic</option>
//           <option value="html">html</option>
//         </select>
//         <div class=" relative ">
//           <label for="required-email" class="text-gray-700">
//             Enter title
//           </label>
//           <input
//             onChange={(event) => props.setTitle(event.target.value)}
//             type="text"
//             id="title"
//             class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
//             name="title"
//           />
//         </div>
//         <label class="text-gray-700" for="name">
//           <textarea
//             class="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
//             id="comment"
//             placeholder="Enter description"
//             name="comment"
//             rows="5"
//             cols="40"
//             onChange={(event) => props.setBody(event.target.value)}
//           ></textarea>
//         </label>

//         <ModalFooter>
//           <div className="hidden sm:block">
//             <Button layout="outline" onClick={closeModal}>
//               Cancel
//             </Button>
//           </div>
//           <div className="hidden sm:block">
//             <Button onClick={props.addNewPost}>Add</Button>
//           </div>
//           <div className="block w-full sm:hidden">
//             <Button block size="large" layout="outline" onClick={closeModal}>
//               Cancel
//             </Button>
//           </div>
//           <div className="block w-full sm:hidden">
//             <Button block size="large" onClick={props.addNewPost}>
//               Add
//             </Button>
//           </div>
//         </ModalFooter>
//       </Modal>
//     </>
//   );
// }

// export default ModalToAdd(openModal, closeModal);
