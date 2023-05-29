// ContextQ1Detail2.js
import React from "react";
import { useModalStore } from "../../../../../store/2_context";

const ContextQ1Detail2 = () => {
  const { isModalOpen, toggleButton2 } = useModalStore();
  return (
    <>
      <h2>ContextQ1Detail2</h2>
      <button onClick={toggleButton2}>
        {isModalOpen ? "숨기기" : "보이기"}
      </button>
    </>
  );
};

export default ContextQ1Detail2;
