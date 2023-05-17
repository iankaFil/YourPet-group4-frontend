import React from 'react';
import SecondStep from './SecondStep';
import SecondStepSell from './SecondStepSell';

const StepsRenderSecond = ({
  handleNext,
  handlePreviousStep,
  selectedOption,
}) => {
  return (
    <>
      {selectedOption === 'your pet' || selectedOption === 'in good hands' ? (
        <SecondStep
          handleNext={handleNext}
          handlePreviousStep={handlePreviousStep}
        />
      ) : (
        ''
      )}
      {selectedOption === 'sell' || selectedOption === 'lost/found' ? (
        <SecondStepSell
          handleNext={handleNext}
          handlePreviousStep={handlePreviousStep}
        />
      ) : (
        ''
      )}
    </>
  );
};

export default StepsRenderSecond;
