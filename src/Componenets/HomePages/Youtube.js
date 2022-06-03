import React, { useState } from "react";
import "./Global.css";
import { Modal } from "antd";

export default function Youtube() {
  const [show, setShow] = useState(false);
  const [visible, setVisible] = useState(false);
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
              <button class="pulse" onClick={() => setVisible(true)}>
                Get Start video
              </button>
            </div>
          </div>
        </div>
      </div>

      <Modal
        title="Frontend developer (React js) 1-dars"
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={1000}
      >
        <div className="youtubeVideo">
          <iframe
            className=""
            width="100%"
            height="460px"
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
