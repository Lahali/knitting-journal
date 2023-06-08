import React, { useState } from "react"

const Modal = ({ isOpenModal, closeModal, deleteProject }) => {
  return (
    <>
      <div
        className={`fixed inset-0 items-center justify-center bg-black bg-opacity-50 ${
          isOpenModal ? "flex" : "hidden"
        }`}
      >
        <div className="p-8 bg-[#FFEEE7] rounded-md m-5">
          <p className="text-3xl leading-10 lg:text-4xl">
            You are about to delete your project permanently. Are you sure you
            want to continue?
          </p>

          <div className="flex flex-row justify-between my-5">
            <button
              onClick={closeModal}
              className="bg-[#A3342C] text-[#FFEEE7] p-3 my-3 rounded w-full mr-3 hover:bg-[#7C2923] text-2xl md:text-3xl lg:text-3xl"
            >
              Cancel
            </button>
            <button
              onClick={deleteProject}
              className="bg-[#A3342C] text-[#FFEEE7] p-3 my-3 rounded w-full ml-3 hover:bg-[#7C2923] text-2xl md:text-3xl lg:text-3xl"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal
