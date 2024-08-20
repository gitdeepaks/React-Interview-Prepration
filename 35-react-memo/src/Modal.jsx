import React from "react";
import { createPortal } from "react-dom";

export default function Modal({ isOpen, children, onClose }) {
  if (!isOpen) {
    return null;
  }

  return createPortal(
    <div className="">
      <div className="overlay"></div>
      <div className="modal">
        <div className="">
          <span className="close-button" onClick={onClose}>
            X
          </span>
          <div className="modal-content">{children}</div>
        </div>
      </div>
    </div>,
    document.getElementById("modal")
  );
}
