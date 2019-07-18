import React from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { UncontrolledCollapse, Button, CardBody, Card } from "reactstrap";

function NASAGrid(props) {
  console.log("nasagridprops", props.nasaData);
  //Turnery Statement
  // const a = 1;
  // const b = 2;
  // a > b ? console.log(true) : console.log(false);
  // const cards = props.nasaData.map(x => <NASACard cardData={x} />);
  if (!props.nasaData) {
    return <h1>"...loading..."</h1>;
  }
  return (
    <div>
      <Button color="primary" id="toggler" style={{ marginBottom: "1rem" }}>
        {props.nasaData.title}
      </Button>
      <UncontrolledCollapse toggler="#toggler">
        <Card>
          <CardBody>
            <img
              src={props.nasaData.url}
              style={{ maxWidth: "700px" }}
              alt="Something"
            />
          </CardBody>
        </Card>
      </UncontrolledCollapse>
      <div className="nasa-card">
        <ParagraphContainer> Date: {props.nasaData.date}</ParagraphContainer>;
        <ParagraphContainer>
          Explanation: {props.nasaData.explanation}
        </ParagraphContainer>
      </div>
      ;
    </div>
  );
}

export default NASAGrid;

const ParagraphContainer = styled.p`
  color: purple;
`;

const HeaderContainer = styled.p`
  color: purple;
`;

export const ButtonContainer = styled.a`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: darkred;
  border: 2px solid darkblue;
`;
