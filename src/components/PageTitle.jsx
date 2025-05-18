import { useState } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import { BorderWidth, GridFill } from "react-bootstrap-icons";
import { Dropdown } from "react-bootstrap";

function PageTitle(props) {
  const [radioValue, setRadioValue] = useState("1");

  const radios = [
    { name: "GridFill", value: "1" },
    { name: "Radio", value: "2" },
  ];

  return (
    <div className="title mt-4">
      <div className="d-flex justify-content-between">
        <div className="d-flex align-items-center gap-5">
          <h1>
            {props.home && "Home"}
            {props.show && "Tv Shows"}
            {props.movie && "Movies"}
          </h1>
          <Dropdown data-bs-theme="dark">
            <Dropdown.Toggle className="fs-5" id="dropdown-button-dark-example1" variant="outline-light">
              <span className="me-2">Generes </span>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#">Thriller</Dropdown.Item>
              <Dropdown.Item href="#">Action</Dropdown.Item>
              <Dropdown.Item href="#">Suspense </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <ButtonGroup>
          {radios.map((radio, idx) => (
            <ToggleButton
              key={idx}
              id={`radio-${idx}`}
              type="radio"
              variant="outline-secondary"
              name="radio"
              value={radio.value}
              checked={radioValue === radio.value}
              onChange={(e) => {
                setRadioValue(e.currentTarget.value);
                props.changeType();
              }}
            >
              {idx > 0 ? <GridFill /> : <BorderWidth />}
            </ToggleButton>
          ))}
        </ButtonGroup>
      </div>
    </div>
  );
}
export default PageTitle;
