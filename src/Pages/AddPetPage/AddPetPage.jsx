import css from './AddPetPage.module.css';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CurrentSteps from './Steps/CurrentSteps';
import Section from 'Components/Section/Section';
import Background from 'Components/Background/Background';
import FirstSteps from './Steps/Step1/FirstSteps';
import StepsRenderSecond from './Steps/Step2/StepsRenderSecond';
import StepsRenderThree from './Steps/Step3/StepsRenderThree';
import ModalWindow from 'Components/ModalWindow';

import instance from '../../Shared/api/auth-api';

function AddPetPage() {
  const [step, setStep] = useState(1);
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedOption, setSelectedOption] = useState('');
  const [activeButton, setActiveButton] = useState(null);

  const [showModal, setShowModal] = useState(false);

  const [formData, setFormData] = useState({});

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
      return { ...prevData, ...stepData };
    });
  };

  const handleCancel = () => {
    navigate(-1);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    navigate('/user');
  };

  const savePet = async (endpoint, category, data) => {
    try {
      const response = await instance.post(`${endpoint}${category}`, data);
      console.log(response);

      if (response.status === 201) {
        setShowModal(true);
      }

      return response.data;
    } catch (error) {
      return error.message;
    }
  };

  const handleSubmit = stepData => {
    const sendDataForm = { ...formData, ...stepData };
    const { category } = sendDataForm;

    delete sendDataForm.category;

    console.log('handleSubmit   OOOOOOOOOOOOO', sendDataForm);
    // notice-image
    const formDataSend = new FormData();

    for (const key in sendDataForm) {
      formDataSend.append(key, sendDataForm[key]);
    }
    if (category === 'your-pet') {
      savePet('/pets/', '', formDataSend);
    } else {
      savePet('/notices/user-notices/', category, formDataSend);
    }

    setFormData(prevData => ({ ...prevData, ...stepData }));
  };

  return (
    <Section>
      <Background />
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
      {showModal && (
        <ModalWindow
          buttonText="Хорошо"
          onClose={handleCloseModal}
          title="Ваш питомец успешно создан"
        >
          Поздравляю, Ваш питомец был успешно добавлен на наш сайт
        </ModalWindow>
      )}
    </Section>
  );
}

export default AddPetPage;
