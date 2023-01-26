import React, { useState } from "react";
import styled from "styled-components";
import {
  Close,
  ConfirmationNumberOutlined,
  MenuOpen,
  Search,
  ShoppingBagOutlined,
} from "@mui/icons-material";
import Menu from "./Menu";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./navbarAnimation.css";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 30px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  color: white;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const MenuOpenBtn = styled.button`
  border: none;
  background-color: transparent;
  color: white;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
`;

const OpenContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

const CloseContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #d10000;
`;

const Language = styled.span`
  font-size: 18px;
  cursor: pointer;
  margin: 0 35px;
  font-weight: 500;
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  padding: 8px;
  background-color: white;
  border-radius: 100px;
`;

const Input = styled.input`
  border: none;
  outline: none;
  font-size: 16px;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: 300;
  letter-spacing: 5px;
  font-size: 40px;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
`;

const ButtonBotique = styled.button`
  display: flex;
  align-items: center;
  border-radius: 100px;
  padding: 12px 32px;
  font-weight: bold;
  border: 2px solid #333;
  background-color: black;
  color: white;
  transition: all 0.7s;

  &:hover {
    cursor: pointer;
    border: 2px solid white;
    background-color: #1a1a1a;
  }
`;

const ButtonTicket = styled.button`
  display: flex;
  align-items: center;
  border-radius: 100px;
  padding: 12px 32px;
  font-weight: bold;
  border: 2px solid #008573;
  background-color: #008573;
  color: white;
  transition: all 0.7s;

  &:hover {
    cursor: pointer;
    border: 2px solid #0a4f51;
    background-color: #0a4f51;
  }
`;

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <Container>
      <Wrapper>
        <Left>
          <MenuOpenBtn onClick={() => setOpen(!open)}>
            {open ? (
              <CloseContainer>
                <Close style={{fontSize: 30}}/>
                CLOSE
              </CloseContainer>
            ) : (
              <OpenContainer>
                <MenuOpen />
                MENU
              </OpenContainer>
            )}
          </MenuOpenBtn>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "grey", fontSize: 20 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>Logo.</Logo>
        </Center>
        <Right>
          <ButtonBotique>
            <ShoppingBagOutlined style={{marginRight: "3px"}}/>
            ONLINE BOUTIQUE
          </ButtonBotique>
          <ButtonTicket>
            <ConfirmationNumberOutlined style={{marginRight: "3px"}}/>
            TICKETS
          </ButtonTicket>
        </Right>
      </Wrapper>
      <TransitionGroup>
        {open ? (
          <CSSTransition timeout={800} classNames="menu-transition">
            <Menu/>
          </CSSTransition>
        ) : null}
      </TransitionGroup>
    </Container>
  );
};

export default Navbar;
