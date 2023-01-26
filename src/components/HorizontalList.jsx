import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  padding: 20px;
  border-top: 1px solid #1a1a1a;
`;

const Button = styled.button`
  font-size: 20px;
  font-weight: 600;
  color: white;
  background-color: black;
  border: none;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const HorizontalList = () => {
  return (
    <Container>
      <Button>VISIT</Button>
      <Button>EXPLORE</Button>
      <Button>WHAT'S ON</Button>
    </Container>
  );
};

export default HorizontalList;
