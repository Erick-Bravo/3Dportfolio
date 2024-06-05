import { Container, FlexLeft, Link, Text, Video } from "./Projects.Styled";

const HTP = () => {
  return (
    <Container>
      <Video src="./video/Yosemite.mp4" autoPlay loop muted />
      <Text>
        Yosemite National Park is home to over 2,000 employees during peak
        season. I had the privilege of being asked to completely revamp their
        original black and white website, and turn it into something their
        employees would look forward to visiting for resources as they live and
        work in Yosemite. (Fun Fact: I also used to live and work in Yosemite)
      </Text>
      <FlexLeft>
        <Link
          href="https://www.yoscommunity.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          HTP Mobile on Google Play Store 
        </Link>
      </FlexLeft>
    </Container>
  );
};

export default HTP;
