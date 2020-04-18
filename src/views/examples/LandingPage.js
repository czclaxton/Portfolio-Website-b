import React from "react";

// Components
import ProfilePage from "./ProfilePage";

// reactstrap components
import {
  Button,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";

function LandingPage() {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      <ExamplesNavbar />
      <div className="wrapper">
        <LandingPageHeader />
        <div className="section section-about-us">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">Who am I?</h2>
                <h5 className="description">
                  I am a developer who is constantly motivated to learn about
                  the latest technologies for both the frontend or backend. I
                  enjoy working in fast paced environments. With a very diverse
                  educational background and cultural experiences I work
                  exceptionally well within a team environment.
                </h5>
              </Col>
            </Row>
            <div className="separator separator-primary"></div>
            <div className="section-story-overview">
              <Row>
                <Col md="6">
                  <div
                    className="image-container image-left"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/login2.jpg") + ")",
                    }}
                  >
                    <p className="blockquote blockquote-info">
                      "If you want to build a ship, don’t drum up the men to
                      gather wood, divide the work and give orders. Instead,
                      teach them to yearn for the vast and endless sea. "{" "}
                      <br></br>
                      <br></br>
                      <small>— Antoine de Saint-Exupéry</small>
                    </p>
                  </div>
                  <div
                    className="image-container"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/learning.jpg") + ")",
                    }}
                  ></div>
                </Col>
                <Col md="5">
                  <div
                    className="image-container image-right"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/bg1-2.jpg") + ")",
                    }}
                  ></div>
                  <h3>How did I get to where I am today?</h3>
                  <p>
                    During High School I had my first exposure to web
                    development. I had learned to build out basic static
                    websites, and studied basic design fundamentals.
                  </p>
                  <p>
                    Once I had began my college career I decided to take a
                    different career route to experience other things, but
                    nothing truly piqued my interest and gave me that intrinsic
                    drive to improve and challenge myself until I decided to
                    revisit web development.
                  </p>
                  <p>
                    Seeing how much the complexity of web development has
                    progressed and also finally building out dynamic web apps
                    has really brought the challenge and passion I wanted to
                    have for a career path.
                  </p>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        <ProfilePage />
        <div className="section section-contact-us text-center">
          <Container>
            <h2 className="title">Want to work with me?</h2>
            <p className="description">Your project is very important.</p>
            <Row>
              <Col className="text-center ml-auto mr-auto" lg="6" md="8">
                <InputGroup
                  className={
                    "input-lg" + (firstFocus ? " input-group-focus" : "")
                  }
                >
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="now-ui-icons users_circle-08"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Name..."
                    type="text"
                    onFocus={() => setFirstFocus(true)}
                    onBlur={() => setFirstFocus(false)}
                  ></Input>
                </InputGroup>
                <InputGroup
                  className={
                    "input-lg" + (lastFocus ? " input-group-focus" : "")
                  }
                >
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="now-ui-icons ui-1_email-85"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Email..."
                    type="text"
                    onFocus={() => setLastFocus(true)}
                    onBlur={() => setLastFocus(false)}
                  ></Input>
                </InputGroup>
                <div className="textarea-container">
                  <Input
                    cols="80"
                    name="name"
                    placeholder="Type a message..."
                    rows="4"
                    type="textarea"
                  ></Input>
                </div>
                <div className="send-button">
                  <Button
                    block
                    className="btn-round"
                    color="info"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    size="lg"
                  >
                    Send Message
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        {/* <TransparentFooter /> */}
      </div>
    </>
  );
}

export default LandingPage;
