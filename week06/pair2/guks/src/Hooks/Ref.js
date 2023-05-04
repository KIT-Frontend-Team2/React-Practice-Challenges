import React, { useRef } from "react";

const Ref = () => {
  const inputRef = useRef(0);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
};
export default Ref;
