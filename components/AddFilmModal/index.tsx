"use client";
import React, { useEffect } from "react";
import Modal from "react-modal";
import { IoClose } from "react-icons/io5";
import AddFilmForm from "../AddFilmForm";
import { useAddModalContext } from "@/context/AddFilmModal";
import { CiSquarePlus } from "react-icons/ci";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.75)",
    zIndex: 1000,
  },
  content: {
    overflow: "hidden auto",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    zIndex: 1010,
    minWidth: "60vw",
    maxWidth: "60vw",
    border: "none",
    borderRadius: "10px",
    background: `var(--addMovie)`,
    color: `var(--textColor)`,
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
};

function AddFilmModal() {
  const { addModal, closeModal } = useAddModalContext();

  useEffect(() => {
    if (addModal) {
      document.documentElement.style.setProperty("--addMovie", "#afb2b6");
      document.documentElement.style.setProperty("--textColor", "#fff");
    }
  }, [addModal]);

  return (
    <Modal isOpen={addModal} onRequestClose={closeModal} style={customStyles}>
      <div className="flex justify-between item-center w-[100%] mb-5">
        <div className="w-[10%]"/>
        <div className="w-[90%] flex justify-center items-center gap-2 text-3xl font-black text-[var(--textColor)]">
          <CiSquarePlus size={35} />
          <h1>Add Movie</h1>
        </div>
        <IoClose onClick={closeModal} className="text-[1.5vw] cursor-pointer text-[#3a3c45]" />
      </div>

      <AddFilmForm />
    </Modal>
  );
}

export default AddFilmModal;
