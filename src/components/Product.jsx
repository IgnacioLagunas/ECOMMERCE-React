import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";


const Container = styled.div`
    flex: 0;
    margin: 10px;
    min-width: 350px;
    height: 350px;
    /* border: lightgreen solid 1px; */
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f5fafd;
    position: relative;

  
`
const Circle = styled.div`
    width: 250px;
    height: 250px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
`
const Image = styled.img`
    height: 80%;
    z-index: 1;
`
const Info = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 10;
    opacity: 0;
    transition: all 0.5s ease;

    &:hover{
      opacity: 1;
    }

    a{
    text-decoration: none;
      &:visited{
        color: black;
      }
    }
    
`
const Icon= styled.div`
    padding: 10px;
    margin: 5px;
    background-color: white;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.5s ease;
    cursor: pointer;

    &:hover{
      background-color: #e9f5f5;
      transform: scale(1.1);

    }
`


const Product = ({item}) => {
  return (
    <Container>
      <Circle/>
      <Image src={item.img}/>
      <Info>
        <Link to="/product">
          <Icon><ShoppingCartOutlined/></Icon>
        </Link>
        <Link to="/product"><Icon><SearchOutlined/></Icon>  </Link>
        <Link to="/product"><Icon><FavoriteBorderOutlined/> </Icon>  </Link>

      </Info>
    </Container>
  )
}

export default Product