import React from 'react'
import styled from 'styled-components'
import Product from './Product'
import {popularProducts} from "../data.js"

const Container = styled.div`
    padding: 20px;
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
`

const Products = () => {
  return (
    <Container>
      {popularProducts.map((item)=>(
        <Product item={item} key={item.id}/>
      ))}
    </Container>
  )
}

export default Products