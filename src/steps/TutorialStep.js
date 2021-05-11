import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Step1, Step2a, Step2b, Step2c, Step2d } from "./StorySteps";

const TutorialStep = () => {
  return (
    <div>
      <Carousel dynamicHeight={false} showStatus={false} showThumbs={false}>
        <Step1 />
        <Step2a />
        <Step2b />
        <Step2c />
        <Step2d />
      </Carousel>
    </div>
  );
}

export default TutorialStep;