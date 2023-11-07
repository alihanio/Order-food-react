import ReactDOM from "react-dom";
import styled from "styled-components";

const ModalOverlay = (props) => {
  return (
    <Backdrop>
      <Madalka>{props.children}</Madalka>
    </Backdrop>
  );
};

const portalElement = document.getElementById("portal");

const Modal = (props) => {
  return ReactDOM.createPortal(
    <ModalOverlay>{props.children}</ModalOverlay>,
    portalElement
  );
};

export default Modal;

const Madalka = styled.div`
  position: fixed;
  top: 20vh;
  left: 20%;
  width: 60%;
  background-color: white;
  padding: 1rem;
  border-radius: 14px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 30;
  animation: slide-down 300ms ease-out forwards;
`;
const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 20;
  background-color: rgba(0, 0, 0, 0.75);
`;
