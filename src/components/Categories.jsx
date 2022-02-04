import React from "react";
import styled from "styled-components";
import { categories } from "../data";
import CategoriesItem from "./CategoriesItem";

const Container = styled.div`
  padding: 20px;
  width: 95%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
`;

const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoriesItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Categories;
