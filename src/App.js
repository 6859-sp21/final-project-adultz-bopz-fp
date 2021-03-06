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
    <div className="App" id="scrollApp">
      <Scrollama onStepEnter={onStepEnter}>
        <Step
          data={0}
          key={0}
          style={{
            opacity: currentStepIndex === 0 ? 1 : 0.2,
          }}
        >
          <div 
            className="App-step"
            style={{
              height: "100vh",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <IntroStep />
          </div>
        </Step>
        <Step data={1} key={1}>
          <div  
            className="App-step"
            style={{
              padding: 0,
              opacity: currentStepIndex === 1 ? 1 : 0.2,
            }}
          >
            <Timeline />
          </div>
        </Step>
        <Step data={3} key={3}>
          <div
            className="App-step"
            style={{
              opacity: currentStepIndex === 3 ? 1 : 0.2,
            }}
          >
            <TutorialStep />
          </div>
        </Step>
        <Step data={4} key={4}>
          <div
            className="App-step"
            style={{
              padding: 0,
              opacity: currentStepIndex === 4 ? 1 : 0.2,
            }}
          >
            <BubbleStep shouldFocus={currentStepIndex === 4} />
          </div>
        </Step>
      </Scrollama>
    </div>
  );
};

export default App;
