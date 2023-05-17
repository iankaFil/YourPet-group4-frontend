import css from './AddPetPage.module.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CurrentSteps from './Steps/CurrentSteps';
import FirstStep from './Steps/Step1/FirstStep';
import SecondStep from './Steps/Step2/SecondStep';
import ThreeStep from './Steps/Step3/ThreeStep';

function AddPetPage() {
  const [step, setStep] = useState(1);
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedOption, setSelectedOption] = useState('');
  const [activeButton, setActiveButton] = useState(null);
  // const [petName, setPetName] = useState('');
  // const [birthDate, setBirthDate] = useState('');
  // const [breed, setBreed] = useState('');
  // const [errors, setErrors] = useState({});

  // const [petPhoto, setPetPhoto] = useState(null);
  // const [comments, setComments] = useState('');

  // const [formData, setFormData] = useState({
  //   title: '',
  //   category: '',
  //   name: '',
  //   birthday: '',
  //   breed: '',
  //   place: '',
  //   price: '',
  //   sex: '',
  //   comments: '',
  // });

  const navigate = useNavigate();

  const handleOptionChange = (option, number) => {
    setSelectedOption(option);
    setActiveButton(number);
  };

  const handleNext = ({ petName, birthdate, breed }) => {
    if (selectedOption && currentStep < 3) {
      setStep(step + 1);
      setCurrentStep(currentStep + 1);
    } else {
      alert('Please select a breed');
    }
    // setPetName(petName);
    // setBirthDate(birthdate);
    // setBreed(breed);
  };

  const handlePreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
    setStep(step - 1);
  };

  const handleCancel = () => {
    navigate(-1);
  };

  const handleSubmit = event => {
    event.preventDefault();
    // Логіка для перевірки та відправки форми на бекенд
    // Переадресація користувача на UserPage або NoticesPage в залежності від категорії
  };

  // const generateStepNameForm = () => {
  //   switch (step) {
  //     case 1:
  //       return;
  //   }
  // };

  return (
    <div className={css.WrapperAddPet}>
      {step === 1 && <h2 className={css.AddPet}>Add pet</h2>}
      {step === 2 && <h2 className={css.AddPet}>Personal Details</h2>}
      {step === 3 && <h2 className={css.AddPet}>More info</h2>}
      <CurrentSteps currentStep={currentStep} />
      {step === 1 && (
        <FirstStep
          handleNext={handleNext}
          handleCancel={handleCancel}
          handleOptionChange={handleOptionChange}
          activeButton={activeButton}
        />
      )}
      {step === 2 && (
        <SecondStep
          handleNext={handleNext}
          handlePreviousStep={handlePreviousStep}
        />
      )}
      {step === 3 && (
        <ThreeStep
          handleNext={handleSubmit}
          handlePreviousStep={handlePreviousStep}
        />
      )}
    </div>
  );
}

export default AddPetPage;
