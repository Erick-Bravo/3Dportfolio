import { Container, FlexLeft, Link, Text, Video } from "./Projects.Styled";

const Yosemite = () => {
  return (
    <Container>
      <Video
        style={{ width: "700px" }}
        src="./video/Yosemite.mp4"
        autoPlay
        loop
        muted
      />
      <Text>
        Yosemite National Park employs over 2,000 staff members during peak
        season. I had the privilege of being entrusted with completely revamping
        their original black-and-white website. My goal was to transform it into
        an engaging and resourceful platform that employees would look forward
        to visiting as they live and work in Yosemite. (Fun fact: I also used to
        live and work in Yosemite.)
      </Text>
      <FlexLeft>
        <Link
          href="https://www.yoscommunity.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          YosCommunity.com
        </Link>
      </FlexLeft>
    </Container>
  );
};

export default Yosemite;
