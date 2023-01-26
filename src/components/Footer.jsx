import React from "react";
import styled from "styled-components";
import {
  ArrowRightAltOutlined,
  Facebook,
  Instagram,
  Pinterest,
  Twitter,
} from "@mui/icons-material";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px;
  background-color: black;
  color: white;
`;

const Wrapper = styled.div``;

const Top = styled.div`
  display: flex;
`;

const TopLeft = styled.div`
  display: flex;
  padding: 10px 50px;
  gap: 100px;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListHeading = styled.h2`
  margin-bottom: 20px;
`;

const ListItem = styled.li`
  margin: 15px 0;
  cursor: pointer;
`;

const HrVertical = styled.hr`
  margin: 0 30px;
  background-color: #575757;
  border: none;
  width: 1px;
`;

const TopRight = styled.div`
  padding: 10px 50px;
`;

const TopRightTop = styled.div`
  padding-bottom: 50px;
  padding-right: 100px;
`;

const SocialsHeading = styled.h2``;

const SocialLinks = styled.div`
  padding: 30px 30px 30px 0px;
  gap: 30px;
  display: flex;
`;

const SocialIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #${(props) => props.bg};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 100%;
  cursor: pointer;
  transition: all 0.7s;
  &:hover {
    opacity: 0.6;
  }
`;

const TopRightBottom = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const MembershipHeading = styled.h2``;

const ImageContainer = styled.div`
  height: 50px;
`;

const Image = styled.img`
  background-color: black;
  height: 100%;
`;

const Anchor = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
const Hr = styled.hr`
  margin: 30px 30px 0px 30px;
  background-color: #575757;
  border: none;
  height: 1px;
`;

const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
`;

const HorizontalList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  gap: 30px;
  margin-bottom: 50px;
`;

const HorizontalListItem = styled.li`
font-size: 13px;
cursor: pointer;
`;

const Logo = styled.p`
  font-size: 40px;
  letter-spacing: 5px;
  font-weight: 300;
`;

const Copyright = styled.p`
  font-size: 13px;
`;

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <Top>
          <TopLeft>
            <List>
              <ListHeading>ABOUT</ListHeading>
              <ListItem>The Louvre in France and around the world</ListItem>
              <ListItem>Visitor rules</ListItem>
              <ListItem>Loans and long-term loans</ListItem>
            </List>
            <List>
              <ListHeading>OUR WEBSITES</ListHeading>
              <ListItem>Online ticketing service</ListItem>
              <ListItem>Online Boutique</ListItem>
              <ListItem>Collection</ListItem>
              <ListItem>Corpus</ListItem>
              <ListItem>Publications</ListItem>
              <ListItem>Donate</ListItem>
              <ListItem>Petite Galerie</ListItem>
              <ListItem>Press</ListItem>
            </List>
            <List>
              <ListHeading>CONTACT</ListHeading>
              <ListItem>FAQ</ListItem>
              <ListItem>Contact us</ListItem>
              <ListItem>Give us your feedback!</ListItem>
              <ListItem>Jobs (in French)</ListItem>
              <ListItem>Private event and film shoots</ListItem>
            </List>
          </TopLeft>
          <HrVertical />
          <TopRight>
            <TopRightTop>
              <SocialsHeading>FOLLOW US</SocialsHeading>
              <SocialLinks>
                <SocialIcon bg="3B5999">
                  <Facebook style={{ fontSize: "35px" }} />
                </SocialIcon>
                <SocialIcon bg="E4405F">
                  <Instagram style={{ fontSize: "35px" }} />
                </SocialIcon>
                <SocialIcon bg="55ACEE">
                  <Twitter style={{ fontSize: "35px" }} />
                </SocialIcon>
                <SocialIcon bg="E60023">
                  <Pinterest style={{ fontSize: "35px" }} />
                </SocialIcon>
              </SocialLinks>
            </TopRightTop>
            <TopRightBottom>
              <MembershipHeading>MEMBERSHIP</MembershipHeading>
              <ImageContainer>
                <Image src="https://www.louvre.fr/assets/logo-amis-blanc-web.png" />
              </ImageContainer>
              <Anchor>
                Become a friend of the Louvre <ArrowRightAltOutlined />
              </Anchor>
            </TopRightBottom>
          </TopRight>
        </Top>
        <Hr />
        <Bottom>
          <HorizontalList>
            <HorizontalListItem>Legal Notice</HorizontalListItem>
            <HorizontalListItem>Privacy policy</HorizontalListItem>
            <HorizontalListItem>Cookies</HorizontalListItem>
            <HorizontalListItem>Credits (in French)</HorizontalListItem>
            <HorizontalListItem>Copyrights</HorizontalListItem>
          </HorizontalList>
          <Logo>Logo.</Logo>
        </Bottom>
        <Copyright>Copyright © 2022 DiviAugusti.</Copyright>
      </Wrapper>
    </Container>
  );
};

export default Footer;
