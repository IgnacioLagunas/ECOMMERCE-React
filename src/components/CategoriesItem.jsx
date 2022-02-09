import React from "react";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  /* max-width: 450px; */
  margin: 10px;
  height: 70vh;
  position: relative;
`;



const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Info = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h1`
  font-size: 2.5rem;
  color: white;
  margin-bottom: 20px;
`;
const Button = styled.button`
  font-size: 1.25rem;
  padding: 15px;
  background-color: white;
  color: gray;
  border: none;
  cursor: pointer;
  
`;

const CategoriesItem = ({ item }) => {

  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  );
};

export default CategoriesItem;
