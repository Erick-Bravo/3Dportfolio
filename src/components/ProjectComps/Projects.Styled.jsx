import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const Video = styled.video`
  height: 600px;
  padding-left: 40px;
  @media only screen and (max-width: 768px) {
    height: 250px;
  }
`;

export const Text = styled.div`
  color: lightgrey;
  font-size: 24px;
  margin-top: 50px;
  width: 775px;
  @media only screen and (max-width: 768px) {
    font-size: 15px;
    width: 100%;
  }
`;

export const FlexLeft = styled.div`
    display: flex;
    width: 775px;
    justify-content: flex-start;
`

export const Link = styled.a`
   font-size: 25px;
   text-decoration: none;
   color: #6fbae0;
   margin-top: 20px;
`