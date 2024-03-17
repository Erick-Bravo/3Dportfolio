import { Container, FlexLeft, Link, Text, Video } from "./Projects.Styled";

const Yosemite = () => {
  return (
    <Container>
      <Video src="./video/Yosemite.mp4" autoPlay loop muted />
      <Text>
        Yosemite National Park accommodates over 2,000 employees at its peak
        season. I was honored to be tasked with a overhaul of
        their original black-and-white website, transforming it into a platform
        that employees eagerly anticipate visiting for resources while residing
        and working in Yosemite. (Fun Fact: I have also lived and worked
        in Yosemite)
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
