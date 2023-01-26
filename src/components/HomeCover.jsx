import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 700px;
  width: 100vw;
  position: relative;
`;

const BackgroundVideoWrapper = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  z-index: -1;
`;

const BackgroundVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  background: url("https://api-www.louvre.fr/sites/default/files/videos/video_1_1_960/video.mp4");
`;

const InfoWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: rgb(0, 0, 0, 0.3);
`;

const AnotherInfoWrapper = styled.div`
  transform: translateX(-180px);
  display: flex;
  flex-direction: column;
  width: 1000px;
`;

const Heading = styled.h1`
  font-size: 70px;
  font-weight: 500;
  width: 800px;
`;

const Button = styled.button`
  width: fit-content;
  border-radius: 100px;
  padding: 17px 55px;
  font-weight: bold;
  font-size: 17px;
  border: 2px solid #008573;
  background-color: #008573;
  color: white;
  transition: all 0.7s;
  display: flex;
  left: 0;
  gap: 10px;
  margin: 100px 0 100px 0;
  cursor: pointer;

  &:hover {
    border: 2px solid #0a4f51;
    background-color: #0a4f51;
  }
`;

const Info = styled.div`
  font-weight: bold;
  display: flex;
  gap: 20px;
`;

const Icon = styled.div`
  height: 10px;
  width: 10px;
  align-self: center;
  background-color: #51c200;
  border-radius: 100%;
  border: 6px solid rgb(0, 128, 0, 0.5);
`;

const OpeningStatus = styled.p`
font-size: 20px;
border-right: 3px solid white;
padding-right: 20px;
`;

const AvailableGalleries = styled.p`
font-size: 20px;
`;

const HomeCover = () => {
  return (
    <Container>
      <BackgroundVideoWrapper>
        <BackgroundVideo
          src="https://api-www.louvre.fr/sites/default/files/videos/video_1_1_960/video.mp4"
          autoPlay="true"
          loop="true"
          muted="true"
        />
      </BackgroundVideoWrapper>
      <InfoWrapper>
        <AnotherInfoWrapper>
          <Heading>ESCAPE WITH THE LOUVRE</Heading>
          <Button>BOOK TICKETS</Button>
          <Info>
            <Icon></Icon>
            <OpeningStatus>
              The museum is open today from 9:00 am to 6:00 pm
            </OpeningStatus>
            <AvailableGalleries>
              See list of available galleries
            </AvailableGalleries>
          </Info>
        </AnotherInfoWrapper>
      </InfoWrapper>
    </Container>
  );
};

export default HomeCover;
