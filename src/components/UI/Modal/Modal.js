import React from "react"
import "./Modal.css"
import BackDrop from "../Backdrop/Backdrop"

const Modal = (props) => {
  return (
    <React.Fragment>
      <BackDrop show={props.show} clicked={props.modalClose} />
      <div
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.show ? "1" : "0",
        }}
        className="Modal"
      >
        {props.children}
      </div>
    </React.Fragment>
  )
}

export default Modal
