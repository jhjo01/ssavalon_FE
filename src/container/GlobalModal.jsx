import Backdrop from "../components/ui/modal/Backdrop";
import { useSelector } from "react-redux";
import { closeModal, selectorModal } from "./../store/modal";
import { useDispatch } from "react-redux";
import ReactDOM from "react-dom";
import CreateRoomModal from "./../components/ui/modal/CreateRoomModal";
import JoinRoomModal from "./../components/ui/modal/JoinRoomModal";

const MODAL_TYPES = {
  CreateRoomModal: "CreateRoomModal",
  JoinRoomModal: "JoinRoomModal",
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
      {ReactDOM.createPortal(
        renderModal(),
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default GlobalModal;
