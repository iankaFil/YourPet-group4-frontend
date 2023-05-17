import css from './AddPetPage.module.css';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CurrentSteps from './Steps/CurrentSteps';
// import FirstStep from './Steps/Step1/FirstStep';
// import SecondStep from './Steps/Step2/SecondStep';
// import ThreeStep from './Steps/Step3/ThreeStep';
import FirstSteps from './Steps/Step1/FirstSteps';
import StepsRenderSecond from './Steps/Step2/StepsRenderSecond';
import StepsRenderThree from './Steps/Step3/StepsRenderThree';

import instance from '../../Shared/api/auth-api';

function AddPetPage() {
  const [step, setStep] = useState(1);
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedOption, setSelectedOption] = useState('');
  const [activeButton, setActiveButton] = useState(null);

  const [formData, setFormData] = useState({});

  // {
  //   title: '',
  //   category: '',
  //   name: '',
  //   birthday: '',
  //   breed: '',
  //   place: '',
  //   price: '',
  //   sex: '',
  //   comments: '',
  // }

  useEffect(() => {
    console.log('new state FORM DATA:', formData);
  }, [formData]);

  const navigate = useNavigate();

  const handleOptionChange = (option, number) => {
    console.log(option);
    setFormData(prevData => ({ ...prevData, category: option }));
    setSelectedOption(option);
    setActiveButton(number);
  };

  // const handleNextStep = stepData => {
  //   setFormData(prevData => ({ ...prevData, ...stepData }));
  // };

  // const handlePreviousStep = stepData => {
  //   setFormData(prevData => ({ ...prevData, ...stepData }));
  // };

  const handleNext = stepData => {
    console.log(' YF:FN NEXT ');
    if (selectedOption && currentStep < 3) {
      setStep(step + 1);
      setCurrentStep(currentStep + 1);
    } else {
      alert('Please select a breed');
    }

    setFormData(prevData => {
      return { ...prevData, ...stepData };
    });
  };

  const handlePreviousStep = stepData => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
    setStep(step - 1);
    setFormData(prevData => {
      console.log('++++++++++++++', prevData, stepData);
      return { ...prevData, ...stepData };
    });
  };

  const handleCancel = () => {
    navigate(-1);
  };

  const savePet = async (endpoint, category, data) => {
    try {
      const response = await instance.post(`${endpoint}${category}`, data);
      return response.data;
    } catch (error) {
      return error.message;
    }
  };

  // const savePetToServer = () => {}; //savePetToServer(formData)

  const handleSubmit = stepData => {
    const sendDataForm = { ...formData, ...stepData };

    console.log('handleSubmit   OOOOOOOOOOOOO', sendDataForm);
    // notice-image
    const formDataSend = new FormData();

    for (const key in sendDataForm) {
      formDataSend.append(key, sendDataForm[key]);
      console.log(formData);
    }
    if (sendDataForm.category === 'your-pet') {
      savePet('/pets/', '', formDataSend);
    } else {
      savePet('/notices/user-notices/', sendDataForm.category, formDataSend);
    }

    // /notices/user-notices/

    setFormData(prevData => ({ ...prevData, ...stepData }));
  };

  // event.preventDefault();
  // Логіка для перевірки та відправки форми на бекенд
  // Переадресація користувача на UserPage або NoticesPage в залежності від категорії

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
        <FirstSteps
          handleNext={handleNext}
          handleCancel={handleCancel}
          handleOptionChange={handleOptionChange}
          activeButton={activeButton}
        />
      )}
      {step === 2 && (
        <StepsRenderSecond
          selectedOption={selectedOption}
          handleNext={handleNext}
          handlePreviousStep={handlePreviousStep}
          formData={formData}
        />
      )}
      {step === 3 && (
        <StepsRenderThree
          selectedOption={selectedOption}
          handleNext={handleSubmit}
          handlePreviousStep={handlePreviousStep}
          formData={formData}
        />
      )}
    </div>
  );
}

export default AddPetPage;
