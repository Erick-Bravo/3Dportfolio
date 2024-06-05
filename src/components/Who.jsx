import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Cube from "./Cube";
import styled from "styled-components";
import { Button } from "./Navbar";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 768px) {
    width: 100%;
    scroll-snap-align: none;
  }
`;

const Left = styled.div`
  flex: 1;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  @media only screen and (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

const Title = styled.h1`
  font-size: 74px;
  color: white;
  @media only screen and (max-width: 768px) {
    font-size: 60px;
  }
`;

const WhatIDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const Line = styled.img`
  height: 5px;
`;
const Subtitle = styled.h2`
  color: #da4ea2;
`;
const Desc = styled.p`
  font-size: 24px;
  color: lightgrey;
  @media only screen and (max-width: 768px) {
    /* width: 100; */
    font-size: 20px; 
    padding: 10px;
  }
`;

const Who = () => {
  return (
    <Section>
      <Container>
        <Left id="Who">
          <Canvas camera={{ fov: 25, position: [5, 5, 5] }}>
            <OrbitControls enableZoom={false} autoRotate={true} />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <Cube />
          </Canvas>
        </Left>
        <Right>
          <Title>Who. I. Am.</Title>
          <WhatIDo>
            <Line src="./img/line.png" />
            <Subtitle>I love being a developer!</Subtitle>
          </WhatIDo>
          <Desc>
            I have a proven track record of collaborating cross-functionally
            with technical teams and stakeholders throughout all phases of the
            software development lifecycle. With four years of experience, I
            have successfully contributed to projects within both large and
            small teams, from established projects to new initiatives. I am
            always enthusiastic about taking on new challenges and contributing
            in any way I can. I continuously stay updated with the latest
            technologies to ensure my skills remain current and relevant. Please
            feel free to reach out to me to discuss my experience and how I can
            contribute to your team.
          </Desc>
          <Button href="#Projects">See My Work</Button>
        </Right>
      </Container>
    </Section>
  );
};

export default Who;
