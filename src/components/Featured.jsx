import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 80px;
`;

const HeadingWrapper = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Heading = styled.h1``;

const CardsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 30px;
  padding: 50px;
`;

const CardWrapper = styled.div`
  border-radius: 4px;
  height: 400px;
  width: 400px;
  transition: all 0.7s;
  background-size: cover;
  background-position: center;
  padding: 20px;
  cursor: pointer;
  transition: all 0.5s ease;

  &:hover {
    transform: scale(1.03);
  }
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

const CardTag = styled.span`
  background-color: white;
  border-radius: 2px;
  font-weight: bold;
  width: fit-content;
  padding: 6px 13px;
`;

const CardInfo = styled.div``

const CardHeading = styled.h2`
  color: white;
  font-weight: bold;
  margin-bottom: 15px;
  text-transform: uppercase;
`;

const CardText = styled.p`
  color: white;
  font-weight: bold;
`;

const Featured = () => {
  const featuredCards = [
    {
      span: "Stories",
      h2: "Myths and Legends",
      p: "Come with us into the Louvre's collections - hear the hidden stories behind their works of art!",
      image:
        "url('https://api-www.louvre.fr/sites/default/files/styles/w1000_h1098_c1/public/2022-02/01_palladion_web.jpg')",
    },
    {
      span: "Exhibitions",
      h2: "Egyptian Antiquities",
      p: "Discover the treasures of ancient Egypt at the Louvre's exhibition on Egyptian Antiquities",
      image:
        "url('https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Great_Sphynx%2C_Louvre_2009.jpg/1200px-Great_Sphynx%2C_Louvre_2009.jpg')",
    },
    {
      span: "Virtual tours",
      h2: "Visit the museum rooms and galleries",
      p: "Enjoy the views!",
      image:
        "url('https://api-www.louvre.fr/sites/default/files/styles/w1246_h1368_c1/public/2021-02/visite-virtuelle-de-l-exposition-figure-d-artiste.jpg')",
    },
    {
      span: "VR",
      h2: "Mona-Lisa: Behind the glass",
      p: "Download the app",
      image:
        "url('https://api-www.louvre.fr/sites/default/files/styles/w1920_h2107_c1/public/2021-03/en-tete-a-tete-avec-la-joconde-appli-vr.jpg')",
    },
  ];
  return (
    <Container>
      <HeadingWrapper>
        <Heading>LOUVRE AT HOME</Heading>
      </HeadingWrapper>
      <CardsContainer>
        {featuredCards.map((card, i) => (
          <CardWrapper key={i} style={{ backgroundImage: card.image }}>
            <CardContent>
              <CardTag>{card.span}</CardTag>
              <CardInfo>
                <CardHeading>{card.h2}</CardHeading>
                <CardText>{card.p}</CardText>
              </CardInfo>
            </CardContent>
          </CardWrapper>
        ))}
      </CardsContainer>
    </Container>
  );
};

export default Featured;
