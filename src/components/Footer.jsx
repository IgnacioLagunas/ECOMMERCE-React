import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-top: solid 1px rgba(105, 105, 105, 0.37)
`;
const Title = styled.h1`
  font-size: 3rem;
`;
// const Center = styled.div`
  
// `;
// const Right = styled.div`
  
// `;

const Footer = () => {
  return (
    <Container>
      <Title>LAMA.</Title>
      <p>All rights reserved. Lorem ipsum.</p>
    </Container>
  )
}

export default Footer