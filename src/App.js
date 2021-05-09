import { useState } from "react";
import "./App.css";
import { Scrollama, Step } from 'react-scrollama'
import BubbleStep from "./steps/BubbleStep";
import { IntroStep } from './steps/StorySteps';
import Timeline from './Timeline';
import TutorialStep from "./steps/TutorialStep";

export const VIEW_ALL_OPTION = {
  label: "your favorite artist",
  value: "all",
  type: "all",
};

const App = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState(null);

  const onStepEnter = ({ data }) => {
    setCurrentStepIndex(data);
  };

  return (
    <div className="App">
      <Scrollama onStepEnter={onStepEnter}>
        <Step
          data={0}
          key={0}
          style={{
            opacity: currentStepIndex === 0 ? 1 : 0.2,
          }}
        >
          <div className="App-step">
            <IntroStep />
          </div>
        </Step>
        <Step data={6} key={6}>
          <div  
            className="App-step"
            style={{
              padding: 0,
              opacity: currentStepIndex === 6 ? 1 : 0.2,
            }}
          >
            <Timeline />
          </div>
        </Step>
        <Step data={2} key={2}>
          <div
            className="App-step"
            style={{
              opacity: currentStepIndex === 2 ? 1 : 0.2,
            }}
          >
            <TutorialStep />
          </div>
        </Step>
        <Step data={7} key={7}>
          <div
            className="App-step"
            style={{
              padding: 0,
              opacity: currentStepIndex === 7 ? 1 : 0.2,
            }}
          >
            <BubbleStep shouldFocus={currentStepIndex === 6} />
          </div>
        </Step>
      </Scrollama>
    </div>
  );
};

export default App;
