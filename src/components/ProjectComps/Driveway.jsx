import React, { useRef, useEffect } from "react";
import styled, { keyframes } from "styled-components";

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
`;

const Driveway = () => {
  const mountRef = useRef(null);
  
  return <Container>This is the Driveway component</Container>;
};

export default Driveway;
