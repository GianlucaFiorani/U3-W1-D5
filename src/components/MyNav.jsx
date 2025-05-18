import { useState } from "react";
import { Collapse, Dropdown } from "react-bootstrap";
import { BellFill, Search } from "react-bootstrap-icons";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/img/netflix_logo.png";
import avatar from "../assets/img/avatar.png";

function MyNav(props) {
  const [open, setOpen] = useState(false);
  return (
    <Navbar sticky="top" expand="lg" bg="black" data-bs-theme="dark">
      <Container fluid className="px-0">
        <Navbar.Brand href="#">
          <img className="logo" width="110" src={logo} alt="netflix_logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
            <Nav.Link
              active={!props.setting && props.home && true}
              onClick={(e) => {
                e.preventDefault();
                props.reset();
                props.homeLink();
                setTimeout(() => {
                  props.tvShowLink();
                }, 5);
              }}
              href="#"
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#"
              active={!props.setting && props.show && true}
              onClick={(e) => {
                e.preventDefault();
                props.reset();
                props.showLink();
                setTimeout(() => {
                  props.tvShowLink();
                }, 5);
              }}
            >
              TvShow
            </Nav.Link>
            <Nav.Link
              active={!props.setting && props.movie && true}
              onClick={(e) => {
                e.preventDefault();
                props.reset();
                props.movieLink();
                setTimeout(() => {
                  props.tvShowLink();
                }, 5);
              }}
              href="#"
            >
              Movies
            </Nav.Link>
            <Nav.Link active={false} href="#">
              Recently Added
            </Nav.Link>
            <Nav.Link active={false} href="#">
              MyList
            </Nav.Link>
          </Nav>
          <Nav.Link href="#">
            <div className="d-flex">
              <Button
                variant="black"
                onClick={() => {
                  setOpen(!open);
                  props.setting && props.tvShowLink();
                }}
                aria-controls="example-collapse-text"
                aria-expanded={open}
              >
                <Search />
              </Button>

              <Collapse in={open} dimension="width">
                <div id="example-collapse-text">
                  <Form
                    className="d-flex"
                    onSubmit={(e) => {
                      e.preventDefault();
                      props.submitVrify();
                      props.reset();
                      props.homeLink();
                      setTimeout(() => {
                        props.tvShowLink();
                      }, 5);
                    }}
                  >
                    <Form.Control
                      type="text"
                      placeholder="Search"
                      className="me-2"
                      onChange={(e) => {
                        props.search(e.target.value);
                      }}
                    />
                  </Form>
                </div>
              </Collapse>
            </div>
          </Nav.Link>
          <Nav.Link href="#">
            <Button className="p-1" variant="black">
              KIDS
            </Button>
          </Nav.Link>
          <Nav.Link href="#">
            <Button className="p-1" variant="black">
              <BellFill />
            </Button>
          </Nav.Link>

          <Dropdown data-bs-theme="dark">
            <Dropdown.Toggle id="dropdown-button-dark-example1" variant="black">
              <img width="35" src={avatar} alt="netflix_logo" />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item
                onClick={(e) => {
                  e.preventDefault();
                  props.accountLink();
                }}
                href="#"
              >
                Account
              </Dropdown.Item>
              <Dropdown.Item
                onClick={(e) => {
                  e.preventDefault();
                  props.setting ? props.tvShowLink() : props.settingsLink();
                }}
                href="#"
              >
                {props.setting ? "TvShow" : "Settings"}
              </Dropdown.Item>
              <Dropdown.Item href="#">Sing out</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNav;
