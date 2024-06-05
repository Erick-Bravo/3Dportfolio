import Default from "./ProjectComps/Default";
import Driveway from "./ProjectComps/Driveway";
import Yosemite from "./ProjectComps/Yosemite";
import BFDI from "./ProjectComps/BFDI";
import styled from "styled-components";
import { useState } from "react";
import HTP from "./ProjectComps/HTP";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;
const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    /* justify-content: none; */
  }
`;
const Left = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  @media only screen and (max-width: 768px) {
    padding: 20px;
    justify-content: center;
    align-items: flex-start;
  }
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  @media only screen and (max-width: 768px) {
    /* justify-content: center; */
  }
`;
const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media only screen and (max-width: 768px) {
    padding-top: 70px;
    /* height: 200px */
  }
`;
const ListItem = styled.li`
  font-size: 90px;
  font-weight: bold;
  cursor: pointer;
  color: ${(props) => props.color};
  -webkit-text-stroke: 1px white;
  /* position: relative; */

  @media only screen and (max-width: 768px) {
    font-size: 30px;

  }

  /* ::after {
    content: ${(props) => props.text};
    position: absolute;
    top: 0;
    left: 0;
    color: pink;
    width: 0px;
    overflow: hidden;
    white-space: nowrap;
  } */

  &:hover {
    color: pink;
    ::after {
      animation: moveText 0.5s linear both;

      @keyframes moveText {
        to {
          width: 100%;
        }
      }
    }
  }
`;

const data = ["Projects:", "HTP Mobile", "Driveway", "Yosemite", "BFDI"];

const Works = () => {
  const [work, setWork] = useState("Projects:");
  return (
    <Section>
      <Container>
        <Left id="Projects">
          <List>
            {data.map((item) => (
              <ListItem
                key={item}
                text={item}
                color={work === item ? "pink" : "transparent"}
                onClick={() => setWork(item)}
              >
                {item}
              </ListItem>
            ))}
          </List>
        </Left>
        <Right>
          {work === "Projects:" && <Default />}
          {work === "Driveway" && <Driveway />}
          {work === "Yosemite" && <Yosemite />}
          {work === "BFDI" && <BFDI />}
          {work === "HTP Mobile" && <HTP />}
        </Right>
      </Container>
    </Section>
  );
};

export default Works;
