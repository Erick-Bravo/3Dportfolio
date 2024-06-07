import styled, { keyframes } from "styled-components";
import { Container } from "./Projects.Styled";

const Box = styled.div`
  font-size: 30px;
  font-weight: bold;
`;

const Default = () => {
  return (
    <Container>
      <Box>Select a Project</Box>
    </Container>
  );
};

export default Default;
