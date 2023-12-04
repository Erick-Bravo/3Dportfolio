import React, { useRef, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
`;

const Video = styled.video`
  height: 600px;
  padding-left: 40px;
`;

const Text = styled.div`
  color: lightgrey;
  font-size: 24px;
  margin-top: 50px;
  width: 775px;
`;

const Driveway = () => {
  const mountRef = useRef(null);

  return (
    <Container>
      <Video src="./video/Lithia.mp4" autoPlay loop muted />
      <Text>
        Driveway.com was a massive project for one of our clients who's goal was
        to be the leader in online vehicle sales. With about a dozen different
        teams cross-collaborating, we made a successful e-commerce site
        where you can purchase one of 40,000+ vehicles, or sell your own vehicle
        without ever having to walk into a dealer.
      </Text>
    </Container>
  );
};

export default Driveway;
