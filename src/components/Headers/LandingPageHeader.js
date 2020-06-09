import React from "react";

// reactstrap components
import { Button, Container } from "reactstrap";

function LandingPageHeader(props) {
  const { imageUrl } = props;

  let pageHeader = React.createRef();
  let Scroll = require("react-scroll");
  let scroller = Scroll.scroller;

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
            backgroundImage: `url(${imageUrl})`,
            filter: "brightness(0.8)",
          }}
          ref={pageHeader}
        ></div>
        <div className="content-center">
          <Container>
            <h1
              className="title"
              style={{
                fontWeight: "500",
                lineHeight: "1.5",
                fontSize: "2.5em",
              }}
            >
              Hello, I'm Connor Claxton.
            </h1>
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
                    "https://drive.google.com/uc?export=download&id=1f-v4qod5j2j-slkN5YVvdrBSe7rvrZm5"
                  );
                }}
              >
                <i className="fab fa fa-arrow-circle-down"></i>
              </Button>
            </div>
            {/* <Link to="/profile-page"> */}
            <Button
              color="info"
              to="scrollToProjects"
              onClick={() =>
                scroller.scrollTo("scrollToProjects", {
                  duration: 3000,
                  delay: 0,
                  smooth: "easeInOutQuart",
                })
              }
            >
              <h3 style={{ margin: 0 }}>View Projects</h3>
            </Button>
            {/* </Link> */}
          </Container>
        </div>
      </div>
    </>
  );
}

export default LandingPageHeader;
