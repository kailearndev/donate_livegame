import React from "react";
import {
  Modal
} from "react-daisyui";
const ModalCustom = ({ open , content, onClickBackdrop }) => {
  return (
    <>
      <Modal open={open} onClickBackdrop={onClickBackdrop}>
       {content}
      </Modal>
      
    </>
  );
};
export default ModalCustom;
