import React, { useState, createContext, useContext } from "react";

const ModalContext = createContext();
export const useModalStore = () => useContext(ModalContext);

function ModalProvider({ children }) {
  const [isButton1Clicked, setIsButton1Clicked] = useState(false);
  const [isButton2Clicked, setIsButton2Clicked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleButton1 = () => {
    setIsButton1Clicked((prevState) => !prevState);
    checkOpenModal();
  };

  const toggleButton2 = () => {
    setIsButton2Clicked((prevState) => !prevState);
    checkOpenModal();
  };

  const checkOpenModal = () => {
    if (isButton1Clicked && isButton2Clicked) {
      setIsModalOpen(true);
    } else {
      setIsModalOpen(false);
    }
  };

  return (
    <ModalContext.Provider
      value={{ isModalOpen, toggleButton1, toggleButton2 }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export default ModalProvider;
