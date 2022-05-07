import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "./Global.css";
export default function Youtube() {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };
  return (
    <div className="youtube">
      <div className="bg_youtube">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <button class="pulse" onClick={handleShow}>
                Pulse
              </button>
            </div>
          </div>
        </div>
      </div>

      <Modal
        className="ModalDiv"
        show={show}
        onHide={handleClose}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <div className="youtubeVideo">
          <iframe
            className=""
            width="560px"
            height="400px"
            src="https://www.youtube.com/embed/dPLleyn5kE4?start=1"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </Modal>
    </div>
  );
}
