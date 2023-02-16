import Backdrop from "../components/common/modal/Backdrop";
import { useSelector } from "react-redux";
import { closeModal, selectorModal } from "./../store/modal";
import { useDispatch } from "react-redux";
import ReactDOM from "react-dom";
import CreateRoomModal from "./../components/common/modal/CreateRoomModal";
import JoinRoomModal from "./../components/common/modal/JoinRoomModal";
import LogCard from "../components/game/logCard/LogCard";
import ErrorModal from "../components/common/modal/ErrorModal";
import RoundResult from "../components/game/result/RoundResult";
import TrialResult from "../components/game/result/TrialResult";
import GameResult from "../components/game/result/gameResult/GameResult";

const MODAL_TYPES = {
  CreateRoomModal: "CreateRoomModal",
  JoinRoomModal: "JoinRoomModal",
  LogCard: "LogCard",
  ErrorModal: "ErrorModal",
  RoundResult: "RoundResult",
  TrialResult: "TrialResult",
  GameResult: "GameResult",
};

const MODAL_COMPONENTS = [
  {
    type: MODAL_TYPES.CreateRoomModal,
    component: <CreateRoomModal />,
  },
  {
    type: MODAL_TYPES.JoinRoomModal,
    component: <JoinRoomModal />,
  },
  {
    type: MODAL_TYPES.LogCard,
    component: <LogCard />,
  },
  {
    type: MODAL_TYPES.ErrorModal,
    component: <ErrorModal />,
  },
  {
    type: MODAL_TYPES.RoundResult,
    component: <RoundResult />,
  },
  {
    type: MODAL_TYPES.TrialResult,
    component: <TrialResult />,
  },
  {
    type: MODAL_TYPES.GameResult,
    component: <GameResult />,
  },
];

const GlobalModal = () => {
  const { type, isOpen } = useSelector(selectorModal);

  const dispatch = useDispatch();
  if (!isOpen) return;

  const findModal = MODAL_COMPONENTS.find((modal) => {
    return modal.type === type;
  });

  const renderModal = () => {
    return findModal.component;
  };

  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClick={() => dispatch(closeModal())} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(renderModal(), document.getElementById("overlay-root"))}
    </>
  );
};

export default GlobalModal;
