import React from "react";
import { matchPath } from "react-router";
import { withRouter } from "react-router";
// reactstrap components
import {
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
} from "reactstrap";

function ExamplesNavbar(props) {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);

  let Scroll = require("react-scroll");
  let scroller = Scroll.scroller;

  const match = matchPath("/profile-page", {
    path: props.location.pathname,
    exact: true,
    strict: false,
  });

  React.useEffect(() => {
    if (match && document.documentElement.scrollTop >= 0) {
      setNavbarColor("");
    }
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top " + navbarColor} color="info" expand="lg">
        <Container>
          <UncontrolledDropdown className="button-dropdown">
            <DropdownToggle
              caret
              data-toggle="dropdown"
              href="#pablo"
              id="navbarDropdown"
              tag="a"
              onClick={(e) => e.preventDefault()}
            >
              <span className="button-bar"></span>
              <span className="button-bar"></span>
              <span className="button-bar"></span>
            </DropdownToggle>
            <DropdownMenu aria-labelledby="navbarDropdown">
              <DropdownItem href="#pablo">
                <NavLink
                  href="#"
                  style={{ color: "black", padding: 0 }}
                  onClick={() => {
                    console.log("collapseOpen", collapseOpen);
                    scroller.scrollTo("scrollToProjects", {
                      duration: 3000,
                      delay: 0,
                      smooth: "easeInOutQuart",
                    });
                  }}
                >
                  Projects
                </NavLink>
              </DropdownItem>
              <DropdownItem href="#pablo">
                <NavLink
                  style={{ color: "black", padding: 0 }}
                  href="https://drive.google.com/uc?export=download&id=1f-v4qod5j2j-slkN5YVvdrBSe7rvrZm5"
                >
                  Resume
                </NavLink>
              </DropdownItem>
              <DropdownItem href="#pablo">
                <NavLink
                  style={{ color: "black", padding: 0 }}
                  href="https://www.linkedin.com/in/czclaxton/"
                  target="_blank"
                >
                  LinkedIn
                </NavLink>
              </DropdownItem>
              <DropdownItem href="#pablo">
                <NavLink
                  style={{ color: "black", padding: 0 }}
                  href="https://github.com/czclaxton"
                  target="_blank"
                >
                  Github
                </NavLink>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <div className="navbar-translate">
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
              <NavItem>
                <NavLink
                  href="#"
                  onClick={() => {
                    document.documentElement.classList.toggle("nav-open");
                    scroller.scrollTo("scrollToProjects", {
                      duration: 3000,
                      delay: 0,
                      smooth: "easeInOutQuart",
                    });
                  }}
                >
                  Projects
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://drive.google.com/uc?export=download&id=1rqoT8BydMdC78XfOn7WaMiW1qsG5TW2L"
                  onClick={() =>
                    document.documentElement.classList.toggle("nav-open")
                  }
                >
                  Resume
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://www.linkedin.com/in/czclaxton/"
                  target="_blank"
                  onClick={() =>
                    document.documentElement.classList.toggle("nav-open")
                  }
                >
                  <i className="fab fa-linkedin"></i>
                  <p className="d-lg-none d-xl-none">LinkedIn</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://github.com/czclaxton"
                  target="_blank"
                  onClick={() =>
                    document.documentElement.classList.toggle("nav-open")
                  }
                >
                  <i className="fab fa-github"></i>
                  <p className="d-lg-none d-xl-none">Github</p>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default withRouter(ExamplesNavbar);
