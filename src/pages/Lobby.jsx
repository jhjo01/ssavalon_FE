import React, { useState } from "react";
import Header from "../components/header/Header";
import ErrModal from "../components/ui/modal/ErrorModal";

const Lobby = () => {
  const [error, setError] = useState();

  const setEnterErrorHandler = () => {
    setError(1);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      <Header />
      <div>
        <button onClick={setEnterErrorHandler}>enterError</button>
      </div>

      {error && <ErrModal onConfirm={errorHandler} />}
    </>
  );
};

export default Lobby;
