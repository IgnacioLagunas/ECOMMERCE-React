import { Search } from "@mui/icons-material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Badge from "@mui/material/Badge";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  height: 80px;
  border-bottom: solid gray 1px;

  a{
    text-decoration: none;
    &:visited{
      color: black;
    }
  }
`;

const Wrapper = styled.div`
  padding: 0 20px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > * {
    flex: 1;
    align-items: center;
    display: flex;
  }
`;

const NavItem = styled.p`
  font-size: 20px;
  margin-right: 2em;
  text-transform: uppercase;
  cursor: pointer;
  
`;

const Left = styled.div`
  h1 {
    margin-right: 2em;
  }
`;

const SearchContainer = styled.div`
  position: relative;

  i {
    position: absolute;
    right: 8px;
    top: 9px;
    color: #625f5f;
  }
`;

const Input = styled.input`
  padding: 10px;
  border: 0.5px solid lightgray;
`;

const Center = styled.div`
  font-weight: bold;
  font-size: 2.5em;
  justify-content: center;
`;
const Right = styled.div`
  justify-content: end;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <NavItem>EN</NavItem>
          <SearchContainer>
            <Input type="text" />

            <i>
              <Search />
            </i>
          </SearchContainer>
        </Left>
        <Center><Link to="/">LAMA.</Link></Center>
        <Right>
          <NavItem><Link to="/register">register</Link></NavItem>
          <NavItem><Link to="/login">sign in</Link></NavItem>
          <NavItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlinedIcon style={{ fontSize: 30 }} />
            </Badge>
          </NavItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
