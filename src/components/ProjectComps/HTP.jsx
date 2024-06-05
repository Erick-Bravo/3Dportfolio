import { Container, FlexLeft, Link, Text, Video } from "./Projects.Styled";

const HTP = () => {
  return (
    <Container>
      <Video style={{width: "700px"}} src="./video/Yosemite.mp4" autoPlay loop muted />
      <Text>
        As the sole developer on this project, I took pride in the
        responsibility of restoring this application to the Google Play Store.
        Updating the five-year-old React Native application required significant
        effort, but I was fully up to the task. Thanks to my efforts, the
        company can now confidently rely on their app being back online and
        having new features added regularly.
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
