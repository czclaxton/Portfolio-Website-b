import React from "react";

// reactstrap components
import {
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  Button,
} from "reactstrap";

// core components
import ProjectModal from "./ProjectModal";

function Projects() {
  const [modalSmall, setModalSmall] = React.useState(false);
  const [selectedProject, setSelectedProject] = React.useState(null);
  const [pills, setPills] = React.useState("1");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    return function cleanup() {
      document.body.classList.remove("profile-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });

  return (
    <>
      {/* <ExamplesNavbar /> */}
      <div className="wrapper">
        {/* <ProjectsHeader /> */}
        <div className="section">
          <Container containerId="containerElement">
            <Row>
              <Col className="ml-auto mr-auto" md="6" name="scrollToProjects">
                <h2 className="title text-center">Projects</h2>
                <div className="nav-align-center">
                  <Nav
                    className="nav-pills-info nav-pills-just-icons"
                    pills
                    role="tablist"
                  >
                    <NavItem>
                      <NavLink
                        className={pills === "1" ? "active" : ""}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "1.75rem",
                          cursor: "pointer",
                        }}
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("1");
                        }}
                      >
                        1
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={pills === "2" ? "active" : ""}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "1.75rem",
                          cursor: "pointer",
                        }}
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("2");
                        }}
                      >
                        2
                      </NavLink>
                    </NavItem>
                    {/* <NavItem>
                      <NavLink
                        className={pills === "3" ? "active" : ""}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "1.75rem",
                          cursor: "pointer",
                        }}
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("3");
                        }}
                      >
                        3
                      </NavLink>
                    </NavItem> */}
                  </Nav>
                </div>
              </Col>
              <TabContent className="gallery" activeTab={"pills" + pills}>
                <TabPane tabId="pills1">
                  <Col className="ml-auto mr-auto" md="10">
                    <Row className="collections">
                      <Col md="6">
                        <div className="projectWrapper">
                          <img
                            alt="..."
                            className="img-raised"
                            src={require("assets/img/projects/reacttetris/1.png")}
                          ></img>
                          <Button
                            size="lg"
                            color="info"
                            className="projectButton"
                            onClick={() => {
                              setModalSmall(true);
                              setSelectedProject("React Tetris");
                            }}
                          >
                            Learn More
                          </Button>
                          <h3 className="projectTitle">React Tetris</h3>
                        </div>
                        <div className="projectWrapper">
                          <img
                            alt="..."
                            className="img-raised"
                            src={require("assets/img/projects/allegiance/1.png")}
                          ></img>
                          <Button
                            size="lg"
                            color="info"
                            className="projectButton"
                            onClick={() => {
                              setModalSmall(true);
                              setSelectedProject("Allegiance");
                            }}
                          >
                            Learn More
                          </Button>
                          <h3 className="projectTitle">Allegiance</h3>
                        </div>
                      </Col>
                      <Col md="6">
                        <div className="projectWrapper">
                          <img
                            alt="..."
                            className="img-raised"
                            src={require("assets/img/projects/learnlocker/2.png")}
                          ></img>
                          <Button
                            size="lg"
                            color="info"
                            className="projectButton"
                            onClick={() => {
                              setModalSmall(true);
                              setSelectedProject("Learn Locker");
                            }}
                          >
                            Learn More
                          </Button>
                          <h3 className="projectTitle">Learn Locker</h3>
                        </div>
                        <div className="projectWrapper">
                          <img
                            alt="..."
                            className="img-raised"
                            src={require("assets/img/projects/socialbee/1.png")}
                          ></img>
                          <Button
                            size="lg"
                            color="info"
                            className="projectButton"
                            onClick={() => {
                              setModalSmall(true);
                              setSelectedProject("SocialBee");
                            }}
                          >
                            Learn More
                          </Button>
                          <h3 className="projectTitle">SocialBee</h3>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </TabPane>
                <TabPane tabId="pills2">
                  <Col className="ml-auto mr-auto" md="10">
                    <Row className="collections">
                      <Col md="6">
                        <div className="projectWrapper">
                          <img
                            alt="..."
                            className="img-raised"
                            src={require("assets/img/projects/socketiochatapp/1.png")}
                          ></img>
                          <Button
                            size="lg"
                            color="info"
                            className="projectButton"
                            onClick={() => {
                              setModalSmall(true);
                              setSelectedProject("Socket.io Chat App");
                            }}
                          >
                            Learn More
                          </Button>
                          <h3 className="projectTitle">Socket.io Chat App</h3>
                        </div>
                        <div className="projectWrapper">
                          <img
                            alt="..."
                            className="img-raised"
                            src={require("assets/img/projects/reacttimer/1.png")}
                          ></img>
                          <Button
                            size="lg"
                            color="info"
                            className="projectButton"
                            onClick={() => {
                              setModalSmall(true);
                              setSelectedProject("React Timer");
                            }}
                          >
                            Learn More
                          </Button>
                          <h3 className="projectTitle">React Timer</h3>
                        </div>
                      </Col>
                      <Col md="6">
                        <div className="projectWrapper">
                          <img
                            alt="..."
                            className="img-raised"
                            src={require("assets/img/projects/reactxylophone/1.png")}
                          ></img>
                          <Button
                            size="lg"
                            color="info"
                            className="projectButton"
                            onClick={() => {
                              setModalSmall(true);
                              setSelectedProject("React Xylophone");
                            }}
                          >
                            Learn More
                          </Button>
                          <h3 className="projectTitle">React Xylophone</h3>
                        </div>
                        <div className="projectWrapper">
                          <img
                            alt="..."
                            className="img-raised"
                            src={require("assets/img/projects/apitreasurehunter/1.png")}
                          ></img>
                          <Button
                            size="lg"
                            color="info"
                            className="projectButton"
                            onClick={() => {
                              setModalSmall(true);
                              setSelectedProject("API Treasure Hunter");
                            }}
                          >
                            Learn More
                          </Button>
                          <h3 className="projectTitle">API Treasure Hunter</h3>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </TabPane>
                {/* <TabPane tabId="pills3">
                  <Col className="ml-auto mr-auto" md="10">
                    <Row className="collections">
                      <Col md="6">
                      <div className="projectWrapper">
                          <img
                            alt="..."
                            className="img-raised"
                            src={require("assets/img/projects/learnlocker/3.png")}
                          ></img>
                          <Button
                            size="lg"
                            color="info"
                            className="projectButton"
                            onClick={() => {
                              setModalSmall(true);
                              setSelectedProject("Socket.io Chat App");
                            }}
                          >
                            Learn More
                          </Button>
                          <h3 className="projectTitle">Socket.io Chat App</h3>
                        </div>
                        <div className="projectWrapper">
                          <img
                            alt="..."
                            className="img-raised"
                            src={require("assets/img/projects/learnlocker/3.png")}
                          ></img>
                          <Button
                            size="lg"
                            color="info"
                            className="projectButton"
                            onClick={() => {
                              setModalSmall(true);
                              setSelectedProject("Socket.io Chat App");
                            }}
                          >
                            Learn More
                          </Button>
                          <h3 className="projectTitle">Socket.io Chat App</h3>
                        </div>
                      </Col>
                      <Col md="6">
                      <div className="projectWrapper">
                          <img
                            alt="..."
                            className="img-raised"
                            src={require("assets/img/projects/learnlocker/3.png")}
                          ></img>
                          <Button
                            size="lg"
                            color="info"
                            className="projectButton"
                            onClick={() => {
                              setModalSmall(true);
                              setSelectedProject("Socket.io Chat App");
                            }}
                          >
                            Learn More
                          </Button>
                          <h3 className="projectTitle">Socket.io Chat App</h3>
                        </div>
                        <div className="projectWrapper">
                          <img
                            alt="..."
                            className="img-raised"
                            src={require("assets/img/projects/learnlocker/3.png")}
                          ></img>
                          <Button
                            size="lg"
                            color="info"
                            className="projectButton"
                            onClick={() => {
                              setModalSmall(true);
                              setSelectedProject("Socket.io Chat App");
                            }}
                          >
                            Learn More
                          </Button>
                          <h3 className="projectTitle">Socket.io Chat App</h3>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </TabPane> */}
              </TabContent>
            </Row>
          </Container>
        </div>
      </div>
      <ProjectModal
        modalSmall={modalSmall}
        setModalSmall={setModalSmall}
        selectedProject={selectedProject}
      />
    </>
  );
}

export default Projects;
