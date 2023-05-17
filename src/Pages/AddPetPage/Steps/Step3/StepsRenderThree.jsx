import React from 'react';
import ThreeStep from './ThreeStep';
import ThreeStepSell from './ThreeStepSell';
import ThreeStepFound from './ThreeStepFound';

const StepsRenderThree = ({
  handleNext,
  handlePreviousStep,
  selectedOption,
}) => {
  return (
    <>
      {selectedOption === 'your pet' || selectedOption === 'in good hands' ? (
        <ThreeStep
          handleNext={handleNext}
          handlePreviousStep={handlePreviousStep}
        />
      ) : (
        ''
      )}
      {selectedOption === 'sell' ? (
        <ThreeStepSell
          handleNext={handleNext}
          handlePreviousStep={handlePreviousStep}
        />
      ) : (
        ''
      )}
      {selectedOption === 'lost/found' ? (
        <ThreeStepFound
          handleNext={handleNext}
          handlePreviousStep={handlePreviousStep}
        />
      ) : (
        ''
      )}
    </>
  );
};

export default StepsRenderThree;
