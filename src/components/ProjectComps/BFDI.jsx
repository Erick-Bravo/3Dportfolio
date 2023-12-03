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

const BFDI = () => {
  return (
   <Container>This is the BFDI component</Container>
  )
}

export default BFDI;