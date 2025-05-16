import { Button, Col, Container, Row } from "react-bootstrap";
import paypal from "../assets/img/paypal-logo-black-and-white.png";
import avatar from "../assets/img/avatar.png";
import hd from "../assets/img/hd.png";
import MyNav from "./MyNav";

function Settings() {
  return (
    <div>
      <Container>
        <MyNav />
      </Container>
      <main>
        <div className="d-flex justify-content-center">
          <Container>
            <Row className="flex-md-row py-3">
              <h2 className="border-bottom border-secondary text-dark my-3 pb-3">Account</h2>
              <Col xs="auto" md={4}>
                <h5 className="mb-2 text-secondary">MEMBERSHIP & BILLING</h5>
                <Button variant="light" className="px-5 py-2 my-2">
                  Cancel Membership
                </Button>
              </Col>

              <Col>
                <div className="d-flex">
                  <p className="text-dark">student@strive.school</p>
                  <p className="ms-auto text-primary">
                    <a href=""></a>Change account email
                  </p>
                </div>
                <div className="d-flex">
                  <p className="text-secondary">Password:********</p>
                  <p className="ms-auto text-primary">
                    <a href=""></a>Change password
                  </p>
                </div>

                <div className="d-flex border-bottom border-secondary pb-2">
                  <p className="text-secondary">Phone: 321 044 1279</p>
                  <p className="ms-auto text-primary">
                    <a href=""></a>Change phone number
                  </p>
                </div>
                <div className="d-flex flex-wrap pt-2">
                  <img width="75" src={paypal} alt="paypal logo" />
                  <p className="text-dark ms-2">admin@strive.school</p>
                  <p className="ms-auto text-primary">
                    <a href=""></a>Update pavment primary
                  </p>
                </div>

                <div className="d-flex border-bottom border-secondary pb-2">
                  <p className="ms-auto text-primary">
                    <a href=""></a>Billing details
                  </p>
                </div>

                <div className="d-flex">
                  <p className="ms-auto text-primary">
                    <a href=""></a>Redeem gift card or promo code
                  </p>
                </div>

                <div className="d-flex pb-2">
                  <p className="ms-auto text-primary">
                    <a href=""></a>Where to buy gift cards
                  </p>
                </div>
              </Col>
              <Row className="flex-md-row py-3 border-bottom border-top border-secondary m-0 p-0">
                <Col xs={4}>
                  <h5 className="mb-2 text-secondary">PLAN DETAILS</h5>
                </Col>
                <Col>
                  <div className="d-flex">
                    <p className="text-dark">Premium</p>
                    <div>
                      <img className="border border-dark border-2 rounded-1 p-1 ms-2" width="80" src={hd} alt="" />
                    </div>
                    <p className="ms-auto text-primary">
                      <a href=""></a>Change plan
                    </p>
                  </div>
                </Col>
              </Row>
              <Row className="flex-md-row py-3 border-bottom border-secondary m-0 p-0">
                <Col xs={4}>
                  <h5 className="mb-2 text-secondary">SETTINGS</h5>
                </Col>
                <Col>
                  <div className="d-flex">
                    <p className="text-primary">
                      <a href=""></a>Parental controls
                    </p>
                  </div>
                  <div className="d-flex">
                    <p className="text-primary">
                      <a href=""></a>Test participation
                    </p>
                  </div>
                  <div className="d-flex">
                    <p className="text-primary">
                      <a href=""></a>Manage download devices
                    </p>
                  </div>
                  <div className="d-flex">
                    <p className="text-primary">
                      <a href=""></a>Activate a device
                    </p>
                  </div>
                  <div className="d-flex">
                    <p className="text-primary">
                      <a href=""></a>Recent device streaming activity
                    </p>
                  </div>
                  <div className="d-flex">
                    <p className="text-primary">
                      <a href=""></a>Sign out of all devices
                    </p>
                  </div>
                </Col>
              </Row>
              <Row className="flex-md-row py-3">
                <Col xs={4}>
                  <h5 className="mb-2 text-secondary">MY PROFILE</h5>
                </Col>
                <Col>
                  <div className="d-flex">
                    <div className="d-flex align-items-center gap-3">
                      <img width="40" src={avatar} alt="" />
                      <span className="text-secondary">Strive Student</span>
                    </div>
                    <p className="text-primary ms-auto">
                      <a href=""></a>Manage profile
                    </p>
                  </div>
                  <div className="d-flex">
                    <p className="text-primary ms-auto">
                      <a href=""></a>Add protile email
                    </p>
                  </div>
                </Col>
              </Row>

              <Row className="flex-md-row py-3">
                <Col xs={4}></Col>
                <Col>
                  <p className="text-primary ms-auto">
                    <a href=""></a>Language
                  </p>
                  <p className="text-primary ms-auto">
                    <a href=""></a>Playback settings
                  </p>
                  <p className="text-primary ms-auto">
                    <a href=""></a>Subtitle appearance
                  </p>
                </Col>
                <Col>
                  <p className="text-primary ms-auto">
                    <a href=""></a>Viewing activity
                  </p>
                  <p className="text-primary ms-auto">
                    <a href=""></a>Ratings
                  </p>
                </Col>
              </Row>
            </Row>
          </Container>
        </div>
      </main>
    </div>
  );
}
export default Settings;
