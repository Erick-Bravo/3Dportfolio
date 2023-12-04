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
`;

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  position: relative;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;

const Title = styled.h1`
  font-size: 74px;
  color: white;
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
`;

const Who = () => {
  return (
    <Section>
      <Container>
        <Left id="Who">
          <Canvas camera={{fov: 25, position: [5, 5, 5]}}>
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
            with technical teams and stakeholders across all phases of the
            software development lifecycle. I am always learning new tech to stay up-to-date with the latest technologies.
          </Desc>
          <Button href="#Projects">See My Work</Button>
        </Right>
      </Container>
    </Section>
  );
};

export default Who;
