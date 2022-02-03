import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  text-align: center;
  padding: 10px;
  background-color: teal;
  color: white;
  font-weight: 500;
`;

function Anouncement() {
  return <Container>Super Deal! Free Shipping on Orders Over $50</Container>;
}

export default Anouncement;
