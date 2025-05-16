import { Badge, Button, Col, Container, Dropdown, Form, Row } from "react-bootstrap";
import avatar from "../assets/img/avatar.png";
import { PenFill } from "react-bootstrap-icons";

function Account() {
  return (
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
                <Dropdown>
                  <Dropdown.Toggle variant="outline-light" id="dropdown-basic">
                    <h4 className="mt-3">Languages:</h4>
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
                <h4 className="text-light fs-6 py-2">
                  {" "}
                  <Badge bg="secondary">ALL MANURITY RATINGS</Badge>
                </h4>
                <p>Show titles of all maturity for this profile.</p>
                <Button variant="outline-secondary" className="fs-6 p-1 px-3 my-2 mb-4">
                  EDIT
                </Button>
              </Col>
              <Col className="m-2">
                <h4 className="mt-3">Autoplay controls</h4>
                <Form>
                  {["checkbox", "radio"].map((type) => (
                    <div key={`default-${type}`} className="mb-3">
                      <Form.Check // prettier-ignore
                        type={type}
                        id={`default-${type}`}
                        label={`default ${type}`}
                      />

                      <Form.Check disabled type={type} label={`disabled ${type}`} id={`disabled-default-${type}`} />
                    </div>
                  ))}
                </Form>
              </Col>
            </Col>
          </Row>
          <div className="BOTTONI">
            <Row className="justify-content-between border-top border-secondary mt-4 pt-4">
              <Col xs="auto">
                <a className="link-underline link-underline-opacity-0">
                  <Button variant="outline-secondary" className=" fs-4 p-2 px-1 px-xxs-4 mt-2 me-sm-2 mb-4">
                    SAVE
                  </Button>
                </a>
              </Col>
              <Col xs="auto">
                <a className="link-underline link-underline-opacity-0">
                  <Button variant="outline-secondary" className=" fs-4 p-2 px-1 px-xxs-4 mt-2 me-sm-2 mb-4">
                    CANCEL
                  </Button>
                </a>
              </Col>
              <Col xs="auto">
                <Button variant="outline-secondary" className=" fs-4 p-2 px-1 px-xxs-4 mt-2 me-sm-2 mb-4">
                  DELETE PROFILE
                </Button>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Account;
