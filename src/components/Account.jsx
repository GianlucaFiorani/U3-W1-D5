import { Badge, Button, Col, Container, Dropdown, Form, Row } from "react-bootstrap";
import avatar from "../assets/img/avatar.png";
import logo from "../assets/img/netflix_logo.png";
import { PenFill } from "react-bootstrap-icons";

function Account(props) {
  return (
    <div>
      <img className="logo m-2" width="110" src={logo} alt="netflix_logo" />
      <Container className="mt-5">
        <div className="d-flex justify-content-center">
          <div className="d-flex flex-column">
            <h1 className="border-bottom border-secondary">Edit Profile</h1>
            <Row>
              <Col xs="auto">
                <div className="colImg">
                  <img width="150px" src={avatar} alt="avatar" />
                  <Button className="pen btn btn-dark rounded-pill border-white fs-6 mt-2 me-2pill p-2">
                    <PenFill />
                  </Button>
                </div>
              </Col>
              <Col xs="auto">
                <Col className="m-2 border-bottom border-secondary">
                  <h4 className="bg-secondary bg-opacity-75 p-2">Strive Student</h4>
                  <h4 className="mt-3">Languages:</h4>
                  <Dropdown data-bs-theme="dark" className="py-0 mb-4 ">
                    <Dropdown.Toggle variant="outline-light" id="dropdown-basic">
                      English
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">English</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Italian </Dropdown.Item>
                      <Dropdown.Item href="#/action-3"> French</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Col>
                <Col className="m-2 border-bottom border-secondary">
                  <h4 className="mt-3">Maturity Settings:</h4>
                  <Badge bg="dark" className="py-0 mb-2">
                    {" "}
                    <h4 className="text-light fs-6 my-0 py-2">ALL MANURITY RATINGS</h4>
                  </Badge>
                  <p>Show titles of all maturity for this profile.</p>
                  <Button variant="outline-secondary" className="fs-6 p-1 px-3 my-2 mb-4">
                    EDIT
                  </Button>
                </Col>
                <Col className="m-2">
                  <h4 className="mt-3">Autoplay controls</h4>
                  <Form>
                    {["checkbox"].map((type) => (
                      <div key={`default-${type}`} className="mb-3">
                        <Form.Check // prettier-ignore
                          type={type}
                          id={`default-${type}`}
                          label={`Autoplay next episode in a series on all devices.`}
                        />
                        <Form.Check // prettier-ignore
                          defaultChecked
                          type={type}
                          id={`default-${type}`}
                          label={`Autoplay previews while browsing on all devices.`}
                        />
                      </div>
                    ))}
                  </Form>
                </Col>
              </Col>
            </Row>
            <div>
              <Row className="justify-content-between border-top border-secondary mt-4 pt-4">
                <Col xs="auto" className="p-0">
                  <a className="link-underline link-underline-opacity-0">
                    <Button
                      variant="outline-secondary"
                      className=" fs-4  p-2 px-1 px-xxs-4 mt-2 mx-0 mb-4"
                      onClick={(e) => {
                        e.preventDefault();
                        props.tvShowLink();
                      }}
                    >
                      SAVE
                    </Button>
                  </a>
                </Col>
                <Col xs="auto" className="px-2">
                  <a className="link-underline link-underline-opacity-0">
                    <Button
                      variant="outline-secondary"
                      className=" fs-4  p-2 px-1 px-xxs-4 mt-2 mx-0 mb-4"
                      onClick={(e) => {
                        e.preventDefault();
                        props.tvShowLink();
                      }}
                    >
                      CANCEL
                    </Button>
                  </a>
                </Col>
                <Col xs="auto" className="p-0">
                  <Button
                    variant="outline-secondary"
                    className=" fs-4  p-2 px-1 px-xxs-4 mt-2 mx-0 mb-4"
                    onClick={(e) => {
                      e.preventDefault();
                      props.tvShowLink();
                    }}
                  >
                    DELETE PROFILE
                  </Button>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Account;
