import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Step2a, Step2b, Step2c, Step2d } from './StorySteps';
import './TutorialStep.css';

const TutorialStep = () => {
  return (
    <div className="tutorial-container">
      <Carousel dynamicHeight={false} showStatus={false}> 
        <Step2a />
        <Step2b />
        <Step2c />
        <Step2d />
      </Carousel>
    </div>
  );
}

export default TutorialStep;