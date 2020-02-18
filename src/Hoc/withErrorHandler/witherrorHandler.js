import React from "react";
import Modal from "../../components/UI/Modal/Modal";
import Auxilliary from "../Auxilliary";

const witherrorHandler = WrappedComponents => {
  return props => {
    return (
      <Auxilliary>
        <Modal>Something did not work</Modal>
        <WrappedComponents {...props} />
      </Auxilliary>
    );
  };
};

export default witherrorHandler;
