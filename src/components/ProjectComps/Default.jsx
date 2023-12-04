import styled, { keyframes } from "styled-components";

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 40px;
`;

const Default = () => {
  return (
   <Container>Click on a Project</Container>
  )
}

export default Default;