import css from './AddPetPage.module.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import CurrentSteps from './Steps/CurrentSteps';
import Section from 'Components/Section/Section';
import Background from 'Components/Background/Background';
import FirstSteps from './Steps/Step1/FirstSteps';
import StepsRenderSecond from './Steps/Step2/StepsRenderSecond';
import StepsRenderThree from './Steps/Step3/StepsRenderThree';
import ModalWindow from 'Components/ModalWindow';
import Loader from 'Components/Loader/Loader';
import instance from '../../Shared/api/auth-api';

function AddPetPage() {
  const [step, setStep] = useState(1);
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedOption, setSelectedOption] = useState('');
  const [activeButton, setActiveButton] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const [formData, setFormData] = useState({});

  const navigate = useNavigate();

  const handleOptionChange = (option, number) => {
    setFormData(prevData => ({ ...prevData, category: option }));
    setSelectedOption(option);
    setActiveButton(number);
  };

  const handleNext = stepData => {
    setIsLoading(true);
    if (selectedOption && currentStep < 3) {
      setStep(step + 1);
      setCurrentStep(currentStep + 1);
    } else {
      toast.info(
        'Please select option!'
      );
    }
    setIsLoading(false);
    setFormData(prevData => {
      return { ...prevData, ...stepData };
    });
  };

  const handlePreviousStep = stepData => {
    setIsLoading(true);
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
    setStep(step - 1);
    setIsLoading(false);
    setFormData(prevData => {
      return { ...prevData, ...stepData };
    });
  };

  const handleCancel = () => {
    navigate(-1);
  };

  const handleCloseModal = () => {
    setShowModal(false);

    switch (formData.category) {
      case 'your-pet':
        navigate('/user');
        break;

      case 'sell':
        navigate('/notices/sell');
        break;

      case 'lost-found':
        navigate('/notices/lost-found');
        break;

      default:
        navigate('/user');
    }
  };

  const savePet = async (endpoint, category, data) => {
    try {
      const response = await instance.post(`${endpoint}${category}`, data);

      if (response.status === 201) {
        setIsLoading(false);
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

    const formDataSend = new FormData();

    for (const key in sendDataForm) {
      formDataSend.append(key, sendDataForm[key]);
    }
    setIsLoading(true);
    if (category === 'your-pet') {
      savePet('/pets/', '', formDataSend);
    } else {
      savePet('/notices/user-notices/', category, formDataSend);
    }

    setFormData(prevData => ({ ...prevData, ...stepData }));
  };

  return (
    <Section>
      {isLoading && <Loader />}
      <Background />
      <div
        className={`${
          step === 3 &&
          (selectedOption === 'sell' ||
            selectedOption === 'lost-found' ||
            selectedOption === 'in-good-hands')
            ? css.WrapperAddPetThree
            : css.WrapperAddPet
        }`}
      >
        <div
          className={`${
            step === 3 &&
            (selectedOption === 'sell' ||
              selectedOption === 'lost-found' ||
              selectedOption === 'in-good-hands')
              ? css.StepInfoMidl
              : ''
          }`}
        >
          {step === 1 && <h2 className={css.AddPet}>Add pet</h2>}
          {selectedOption === 'your-pet' ? (
            <>
              {step === 2 || step === 3 ? (
                <h2 className={css.AddPet}>Add my pet</h2>
              ) : (
                ''
              )}
            </>
          ) : (
            ''
          )}
          {selectedOption === 'sell' ? (
            <>
              {step === 2 || step === 3 ? (
                <h2 className={css.AddPet}>Add pet for sell</h2>
              ) : (
                ''
              )}
            </>
          ) : (
            ''
          )}
          {selectedOption === 'lost-found' ? (
            <>
              {step === 2 || step === 3 ? (
                <h2 className={css.AddPet}>Add lost pet</h2>
              ) : (
                ''
              )}
            </>
          ) : (
            ''
          )}
          {selectedOption === 'in-good-hands' ? (
            <>
              {step === 2 || step === 3 ? (
                <h2 className={css.AddPet}>Add pet in good hands</h2>
              ) : (
                ''
              )}
            </>
          ) : (
            ''
          )}
          <CurrentSteps
            currentStep={currentStep}
            selectedOption={selectedOption}
          />
        </div>
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
          buttonText="Done"
          onClose={handleCloseModal}
          title="Your pet has been added successfully"
        >
          Congratulations, your pet has been successfully added to our site
        </ModalWindow>
      )}
      <ToastContainer autoClose={1400} position="top-center" />
    </Section>
  );
}

export default AddPetPage;
