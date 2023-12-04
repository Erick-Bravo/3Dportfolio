import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
`;

export const Video = styled.video`
  height: 600px;
  padding-left: 40px;
`;

export const Text = styled.div`
  color: lightgrey;
  font-size: 24px;
  margin-top: 50px;
  width: 775px;
`