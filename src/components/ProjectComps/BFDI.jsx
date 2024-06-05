import { Container, FlexLeft, Link, Text, Video } from "./Projects.Styled";

const BFDI = () => {
  return (
    <Container>
      <Video
        style={{ width: "700px" }}
        src="./video/BFDI.mp4"
        autoPlay
        loop
        muted
      />
      <Text>
        HopeIsHere, directed by Black Family Development, Inc., is a
        downloadable mental health assessment specifically designed for minority
        groups facing challenges. Depending on the score obtained, our survey
        directs users to appropriate resources tailored to their specific needs
        and responses.
      </Text>
      <FlexLeft>
        <Link
          href="https://hopeishere.blackfamilydevelopment.org/"
          rel="noopener noreferrer"
          target="_blank"
        >
          HopeIsHere.com
        </Link>
      </FlexLeft>
    </Container>
  );
};

export default BFDI;
