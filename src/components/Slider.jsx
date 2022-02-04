import React, { useState } from "react";
import styled from "styled-components";
import { sliderItems } from "../data";
import ChevronLeftOutlinedIcon from "@mui/icons-material/ChevronLeftOutlined";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
`;

const Arrow = styled.div`
  width: 55px;
  height: 55px;
  border-radius: 50%;
  background-color: transparent;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  bottom: 0;
  left: ${({ direction }) => direction === "left" && "10px"};
  right: ${({ direction }) => direction === "right" && "10px"};
  margin: auto;
  opacity: 0.5;
  color: black;
  z-index: 2;
  cursor: pointer;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  position: relative;
  transform: translateX(${({ slideIndex }) => slideIndex * -100}vw);
  transition: all 1s ease;
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.bg};
`;

const ImageContainer = styled.div`
  flex: 1;
  height: 100%;

  img {
    height: 100%;
  }
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
  h1 {
    font-size: 6.25rem;
    margin-bottom: 50px;
  }
  p {
    font-size: 25px;
    letter-spacing: 0.15em;
    width: 90%;
    margin-bottom: 50px;
  }
`;

const Button = styled.button`
  font-size: 25px;
  padding: 15px;
  background-color: white;
  border: solid black 2px;
  cursor: pointer;
`;

function Slider() {
  const [slideIndex, setSlideIndex] = useState(0);

  const moveSlider = (direction) => {
    if (direction === "right") {
      setSlideIndex(slideIndex < sliderItems.length - 1 ? slideIndex + 1 : 0);
    } else {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => moveSlider("left")}>
        <ChevronLeftOutlinedIcon />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImageContainer>
              <img src={item.img} alt="" />
            </ImageContainer>
            <InfoContainer>
              <h1>{item.title}</h1>
              <p>{item.desc}</p>
              <Button>SHOP NOW!</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => moveSlider("right")}>
        <ChevronRightOutlinedIcon />
      </Arrow>
    </Container>
  );
}

export default Slider;
