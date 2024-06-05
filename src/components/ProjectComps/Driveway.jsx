import { Container, FlexLeft, Link, Text, Video } from "./Projects.Styled";

const Driveway = () => {
  return (
    <Container>
      <Video
        style={{ width: "700px" }}
        src="./video/Lithia.mp4"
        autoPlay
        loop
        muted
      />
      <Text>
        Driveway.com was an ambitious project for a client aiming to become a
        leader in online vehicle sales. Working alongside about a dozen
        cross-functional teams, we successfully developed a robust e-commerce
        platform that allows users to purchase from a selection of over 40,000
        vehicles or sell their own vehicles without visiting a dealership.
      </Text>
      <FlexLeft>
        <Link
          href="https://www.driveway.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          Driveway.com
        </Link>
      </FlexLeft>
    </Container>
  );
};

export default Driveway;
