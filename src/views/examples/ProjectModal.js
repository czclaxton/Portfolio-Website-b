import React from "react";

// reactstrap components
import { Button, Modal, ModalBody } from "reactstrap";

const storage = {
  "Learn Locker": {
    github: "https://github.com/learneda",
    site: "https://learnlocker.dev/",
    description:
      "Learn Locker is an application that reduces your time searching through scattered resources all over the internet by keeping all of it in one place.",
  },
};

const ProjectModal = (props) => {
  const { modalSmall, setModalSmall, selectedProject } = props;
  const project = storage[selectedProject];
  return selectedProject === null ? (
    ""
  ) : (
    <Modal
      modalClassName="modal-mini modal-info"
      toggle={() => setModalSmall(false)}
      isOpen={modalSmall}
    >
      <h3
        // style={{ marginBottom: "5px" }}
        className="modal-header justify-content-center"
      >
        {selectedProject}
      </h3>
      {/* <ModalBody>
        <p style={{ fontSize: "1em" }}>{project.description}</p>
      </ModalBody> */}
      <div className="modal-footer">
        <a href={project.github} target="_blank">
          <Button className="modalButton">Github</Button>
        </a>
        <a href={project.site} target="_blank">
          <Button className="modalButton">View Site</Button>
        </a>
      </div>
    </Modal>
  );
};

export default ProjectModal;
