import React from "react";
import { Link } from "react-router-dom";

// reactstrap components
import { Button, Container } from "reactstrap";

function LandingPageHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });
  return (
    <>
      <div className="page-header page-header-small">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/bg2.jpg") + ")",
          }}
          ref={pageHeader}
        ></div>
        <div className="content-center">
          <Container>
            <h1 className="title">Hello, I'm Connor Claxton.</h1>
            <div className="text-center">
              <Button
                className="btn-icon"
                color="info"
                target="_blank"
                onClick={(e) => {
                  e.preventDefault();
                  window.open(
                    "https://www.linkedin.com/in/czclaxton/",
                    "_blank"
                  );
                }}
              >
                <i className="fab fa-linkedin"></i>
              </Button>

              <Button
                className="btn-icon"
                color="info"
                onClick={(e) => {
                  e.preventDefault();
                  window.open("https://github.com/czclaxton", "_blank");
                }}
              >
                <i className="fab fa-github"></i>
              </Button>
              <Button
                className="btn-icon"
                color="info"
                onClick={(e) => {
                  e.preventDefault();
                  window.open(
                    "https://drive.google.com/uc?export=download&id=1rqoT8BydMdC78XfOn7WaMiW1qsG5TW2L"
                  );
                }}
              >
                <i className="fab fa fa-arrow-circle-down"></i>
              </Button>
            </div>
            <Link to="/profile-page">
              <Button color="info">
                <h3 style={{ margin: 0 }}>View Projects</h3>
              </Button>
            </Link>
          </Container>
        </div>
      </div>
    </>
  );
}

export default LandingPageHeader;
