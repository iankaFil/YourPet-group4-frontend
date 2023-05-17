import React from 'react';
import ThreeStep from './ThreeStep';
import ThreeStepSell from './ThreeStepSell';

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
      {selectedOption === 'sell' || selectedOption === 'lost/found' ? (
        <ThreeStepSell
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
