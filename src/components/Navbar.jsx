import styled from "styled-components";

const Section = styled.div`
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

const Logo = styled.div`
  color: white;
`;

const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const ListItem = styled.li`
  cursor: pointer;
  color: white;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Icon = styled.img`
  width: 20px;
  cursor: pointer;
`;

export const Button = styled.a`
  text-align: "center";
  width: 150px;
  height: 35px;
  margin-top: 15px;
  padding: 10px;
  background-color: #da4ea2;
  color: white;
  border: none;
  font-size: 20px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
`;

export const ButtonText = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Navbar = () => {
  return (
    <Section>
      <Container>
        <Icons>
          <Button href="#Contact">
            <ButtonText>
              Hire Now
            </ButtonText>
          </Button>
        </Icons>
      </Container>
    </Section>
  );
};

export default Navbar;
