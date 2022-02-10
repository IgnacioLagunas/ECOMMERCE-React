import React from 'react'
import styled from 'styled-components'
import Navbar from "../components/Navbar";
import Anouncement from "../components/Anouncement";
import Footer from "../components/Footer";
import { Add, Remove } from '@mui/icons-material';

const Container = styled.div`
  margin: 50px 120px;
  height: 90vh;
  /* background-color: lightblue; */
  display: flex;

`
const ImageContainer = styled.div`
  flex: 1;
  display:flex;
 
`

const Image = styled.img`
  height: 90%;
  width: 80%;
  object-fit: cover;
  margin: 0 auto;
`

const Info = styled.div`
  flex: 1;

  &>*{
    margin-bottom: 2rem;
  }

`
const Title = styled.h1`
  font-weight: 300;
  font-size: 3.5rem;
`
const Description = styled.p`
  width: 80%;
  font-size: 1.2rem;

`
const Price = styled.p`
  font-size: 2.5rem;
  font-weight: 200;

`
const FiltersContainer = styled.div`
     &>*{
    margin-bottom: 2rem;
  }

`
const Filter = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

`
const SmallTitle = styled.p`
  font-weight: 200;
  font-size: 1.5rem;
  margin-right: 0.5em;
  

`
const Color = styled.div`
  height: 1.5rem;
  width: 1.5rem;
  border-radius: 50%;
  margin-right: 0.5em;
  cursor: pointer;
  background-color: ${({color}) => color};


`
const SizeSelector = styled.select`
  padding: 5px 8px;
  border-radius: 0;
  border: solid dimgray 1px;
  cursor: pointer;



`
const AddContainer = styled.div`
  display: flex;
  width: 30%;
  justify-content: space-between;
`
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  

`
const Amount = styled.div`
  font-size: 1.3rem;
  border-radius: 10px;
  border: 1px solid teal;
  height: 2rem;
  width: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0.5rem;

`
const Button = styled.button`
    padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover{
      background-color: #f8f4f4;
  }
`

const SingleProduct = () => {
  return (
    <>
    <Navbar/>
    <Anouncement/>
    <Container>
      <ImageContainer>
        <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
      </ImageContainer>
      <Info>
        <Title>Denim Jumpsuit</Title>
        <Description> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
            iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
            tristique tortor pretium ut. Curabitur elit justo, consequat id
            condimentum ac, volutpat ornare.</Description>
        <Price>$ 20</Price>
        <FiltersContainer>
          <Filter>
            <SmallTitle>Color:</SmallTitle>
            <Color color="darkblue"/>
            <Color color="#101010"/>
            <Color color= "dimgray"/>
          
          </Filter>
          <Filter>
            <SmallTitle>Size:</SmallTitle>
            <SizeSelector>
              <option value="">XS</option>
              <option value="">L</option>
              <option value="">XL</option>
            </SizeSelector>
          </Filter>
        </FiltersContainer>
        <AddContainer>
        <AmountContainer>
          <Remove style={{cursor: "pointer"}}/>
          <Amount>3</Amount>
          <Add style={{cursor: "pointer"}}/>
        </AmountContainer>
          <Button> ADD TO CART</Button>
        </AddContainer>

      </Info>
    </Container>
    <Footer/>
    </>
  )
}

export default SingleProduct