import React, { useState } from 'react';
import css from './SecondStep.module.css';
import next from '../../../../Components/SvgIcons/next.svg';
import cancel from '../../../../Components/SvgIcons/cancel.svg';

const SecondStep = ({ handleNext, handlePreviousStep }) => {
  const [petName, setPetName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [breed, setBreed] = useState('');
  const [errors] = useState({});

  // const handleNextValdation = () => {
  //   const validationErrors = {};

  //   if (!petName) {
  //     validationErrors.name = 'Enter a name';
  //   }

  //   if (!birthDate) {
  //     validationErrors.birthdate = 'Enter a date of birth';
  //   }

  //   if (!breed) {
  //     validationErrors.breed = 'Enter a breed';
  //   }

  //   if (Object.keys(validationErrors).length > 0) {
  //     setErrors(validationErrors);
  //     return;
  //   }
  //   handleNext({ petName, birthDate, breed });
  // };

  return (
    <div className={css.FormWrapper}>
      <div className={css.WrapperLabelInput}>
        <label className={css.LabelStep} htmlFor="name">
          Name pet
        </label>
        <input
          className={css.Input}
          type="text"
          id="name"
          value={petName}
          onChange={e => setPetName(e.target.value)}
          placeholder="Type name pet"
        />
        {errors.name && <p className={css.ErrorTextLow}>{errors.name}</p>}
      </div>
      <div className={css.WrapperLabelInput}>
        <label className={css.LabelStep} htmlFor="birthdate">
          Date of birth
        </label>
        <input
          className={css.Input}
          type="text"
          id="birthdate"
          value={birthDate}
          onChange={e => setBirthDate(e.target.value)}
          required
          placeholder="Type date of birth"
        />
        {errors.birthdate && (
          <p className={css.ErrorText}>{errors.birthdate}</p>
        )}
      </div>
      <div className={css.WrapperLabelInput}>
        <label className={css.LabelStep} htmlFor="breed">
          Breed
        </label>
        <input
          className={css.Input}
          type="text"
          id="breed"
          value={breed}
          onChange={e => setBreed(e.target.value)}
          required
          placeholder="Type breed"
        />
        {errors.breed && <p className={css.ErrorTextLow}>{errors.breed}</p>}
      </div>
      <ul className={css.LinkAddPEt}>
        <li>
          <button
            className={css.LinkAddPEtLitkCancel}
            onClick={handlePreviousStep}
          >
            <div className={css.ButtonEl}>
              <img src={cancel} alt="Next" />
              <span>Back</span>
            </div>
          </button>
        </li>
        <li>
          <button className={css.ButtonNext}>
            <div className={css.ButtonEl}>
              <span>Next </span>
              <img src={next} alt="Next" />
            </div>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default SecondStep;
