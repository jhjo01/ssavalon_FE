import React from "react";
import Header from "../components/header/Header";
import Lobby from "../components/lobby/Lobby";
import { useCheckLogin } from "./../hooks/useLogin";

const LobbyPage = () => {
  useCheckLogin();
  return (
    <>
      <Header />
      <Lobby />
    </>
  );
};

export default LobbyPage;
