import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getRoundLog } from "../../../store/roundLog";
import { openModal } from "../../../store/modal";

const RoundLog = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRoundLog(props.round));
    return () => {};
  }, []);

  const handleOpenModal = () => {
    dispatch(getRoundLog(props.round));
    dispatch(openModal({ type: "LogCard", isOpen: true }));
  };

  return (
    <>
      <button onClick={handleOpenModal}>라운드</button>
    </>
  );
};

export default RoundLog;
