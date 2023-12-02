import styled from "styled-components";
import Navbar from "./Navbar";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;

const Hero = () => {
  return (
    <Section>
      <Navbar />
      <Container>
        <Left>
          <Title>Hello! My name is Erick Bravo</Title>
          <Header>
            <Line src="./img/line.png" />
            <Subtitle>Software Developer</Subtitle>
          </Header>
        </Left>
        <Right>
            {/*3D model */}
            <Img src="moon.png" />
        </Right>
      </Container>
    </Section>
  );
};

export default Hero;
