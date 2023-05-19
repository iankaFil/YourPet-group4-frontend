import React from 'react';
import ThreeStep from './ThreeStep';
import ThreeStepSell from './ThreeStepSell';
import ThreeStepFound from './ThreeStepFound';

const StepsRenderThree = ({
  handleNext,
  handlePreviousStep,
  selectedOption,
  formData,
}) => {
  return (
    <>
      {selectedOption === 'your-pet' ? (
        <ThreeStep
          handleNext={handleNext}
          handlePreviousStep={handlePreviousStep}
          formData={formData}
        />
      ) : (
        ''
      )}
      {selectedOption === 'sell' ? (
        <ThreeStepSell
          handleNext={handleNext}
          handlePreviousStep={handlePreviousStep}
          formData={formData}
        />
      ) : (
        ''
      )}
      {selectedOption === 'lost-found' || selectedOption === 'in-good-hands' ? (
        <ThreeStepFound
          handleNext={handleNext}
          handlePreviousStep={handlePreviousStep}
          formData={formData}
        />
      ) : (
        ''
      )}
    </>
  );
};

export default StepsRenderThree;
