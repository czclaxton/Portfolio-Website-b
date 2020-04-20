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
  SocialBee: {
    github: "https://github.com/socialbee-app",
    site: "https://social-bee-12b83.firebaseapp.com/",
    description:
      "A social network platform enabling users to signup, upload a profile picture, and update their profile information. Users also can make post and view posts and like and comment on them to interact.",
  },
  Allegiance: {
    github: "https://github.com/Lambda-School-Labs/allegiance-fe",
    site: "https://www.allegiance17.com/",
    description:
      "Allegiance is a sports social media platform that allows sports fans to to support their favorite teams, talk about sports, and interact with other fans.",
  },
  "Socket.io Chat App": {
    github: "https://github.com/czclaxton/chat-app-fe/",
    site: "https://peaceful-kepler-c4c4f2.netlify.app/",
    description:
      "A chat application utilizing websockets to transfer data in real-time.",
  },
  "Typescript Todo App": {
    github: "https://github.com/czclaxton/typescript-todo-list",
    site: "https://keen-goldwasser-f2960c.netlify.app/",
    description: "A simple todo list application created utilizing Typescript.",
  },
  "API Treasure Hunter": {
    github: "https://github.com/Jazeera-Tul-Kunz",
    site: "https://treasure-hunter-miner.netlify.app/",
    description:
      "A React/Python application to navigate dungeon created by a third-party API with the goal of finding treasure and solving the mysteries.",
  },
  "React Timer": {
    github: "https://github.com/czclaxton/react-timer",
    site: "https://reacttimer.netlify.app/",
    description:
      "A timer built with react to learn about how useState modifies values, how useEffect allows us to run code sometimes, and what the heck a 'cleanup function' is.",
  },
  "React Xylophone": {
    github: "https://github.com/czclaxton/react-xylophone",
    site: "https://react-xylophone.now.sh/",
    description:
      "A timer built with react to learn about how useState modifies values, how useEffect allows us to run code sometimes, and what the heck a 'cleanup function' is.",
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
      <h3 className="modal-header justify-content-center">{selectedProject}</h3>
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
