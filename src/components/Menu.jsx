import {
  ArrowForwardIos,
  Facebook,
  Instagram,
  Pinterest,
  Twitter,
} from "@mui/icons-material";
import styled from "styled-components";

const Container = styled.div`
z-index: 999;
position: absolute;
`;

const Wrapper = styled.div`
  width: 600px;
  background-color: #1a1a1a;
  border: 1px solid #eee;
  color: white;
`;
const Links = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  font-size: 25px;
`;

const Link = styled.a`
  margin: 10px 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.5s ease;
  &:hover {
    transform: translateX(3%);
  }
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
  margin: 0 20px;
`;

const Cards = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 25px;
  font-size: 25px;
`;

const Card = styled.div`
  background-color: #333333;
  margin: 10px 5px;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  height: 100px;
  justify-content: space-between;
  transition: all 0.5s ease;
  &:hover {
    transform: scale(1.03);
  }
`;

const Image = styled.img`
  height: 100%;
  border-radius: 5px;
`;

const SocialLinks = styled.div`
  padding: 30px;
  display: flex;
  justify-content: space-evenly;
`;

const SocialIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  color: white;
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

const Logo = styled.div`
  padding-bottom: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 5px;
  font-size: 40px;
  font-weight: 300;
`;

const Menu = () => {
  return (
    <Container>
      <Wrapper>
        <Links>
          <Link>
            VISIT <ArrowForwardIos />
          </Link>
          <Link>
            EXPLORE <ArrowForwardIos />
          </Link>
          <Link>
            WHAT'S ON <ArrowForwardIos />
          </Link>
        </Links>
        <Hr></Hr>
        <Cards>
          <Card>
            <Image src="https://news.artnet.com/app/news-upload/2017/07/GettyImages-81598919-256x256.jpg" />
            {"SUPPORT THE LOUVRE "}
            <ArrowForwardIos style={{marginRight: "10px"}}/>
          </Card>
          <Card>
            <Image src="https://i.pinimg.com/474x/86/38/e6/8638e6cd3c753a77ec5a97849462d5d7--mona-lisa-smile-most-famous-paintings.jpg" />
            {"E-BOUTIQUE "}
            <ArrowForwardIos style={{marginRight: "10px"}}/>
          </Card>
        </Cards>
        <Hr></Hr>
        <SocialLinks>
          <SocialIcon bg="3B5999">
            <Facebook style={{fontSize:"35px"}} />
          </SocialIcon>
          <SocialIcon bg="E4405F">
            <Instagram style={{fontSize:"35px"}} />
          </SocialIcon>
          <SocialIcon bg="55ACEE">
            <Twitter style={{fontSize:"35px"}} />
          </SocialIcon>
          <SocialIcon bg="E60023">
            <Pinterest style={{fontSize:"35px"}} />
          </SocialIcon>
        </SocialLinks>
        <Logo>Logo.</Logo>
      </Wrapper>
    </Container>
  );
};

export default Menu;
