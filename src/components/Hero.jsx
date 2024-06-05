import styled, { keyframes } from "styled-components";
import Navbar, { Button, ButtonText } from "./Navbar";
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (max-width: 768px) {
    height: 100vh;
  }
`;

const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    margin: 80px;
  }
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
    justify-content: flex-start;
  }
`;

const Title = styled.h1`
  font-size: 74px;
  color: white;
  @media only screen and (max-width: 768px) {
    text-align: center;
    font-size: 50px;
    padding: 15px 5px;
  }
`;

const WhatIDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
`;
const Line = styled.img`
  height: 5px;
`;
const Subtitle = styled.h2`
  color: #da4ea2;
  font-size: 40px;
`;
const Desc = styled.p`
  font-size: 24px;
  color: lightgrey;
  @media only screen and (max-width: 768px) {
    padding: 20px;
    text-align: center;
  }
`;
const Right = styled.div`
  flex: 3;
  position: relative;
  @media only screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
  }
`;

const Img = styled.img`
  width: 800px;
  height: 400px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;
  @media only screen and (max-width: 768px) {
    width: 200px;
    height: 200px;
  }

  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }
`;

const Hero = () => {
  return (
    <Section>
      <Navbar />
      <Container>
        <Left>
          <Title>Hello! My name is Erick Bravo</Title>
          <WhatIDo>
            <Line src="./img/line.png" />
            <Subtitle>Frontend | Fullstack | Mobile</Subtitle>
          </WhatIDo>
          <Button href="#Who">
            <ButtonText>Learn More</ButtonText>
          </Button>
        </Left>
        <Right>
          <Canvas>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={8} />
            <directionalLight position={[3, 2, 1]} />
            <Sphere args={[1, 100, 200]} scale={2}>
              <MeshDistortMaterial
                color="#3d1c56"
                attach="material"
                distort={0.5}
                speed={2}
              />
            </Sphere>
          </Canvas>
          <Img src="./img/profile.jpeg" />
        </Right>
      </Container>
    </Section>
  );
};

export default Hero;
