import React, { useState } from 'react';
import css from './SecondStep.module.css';
import next from '../../../../Components/SvgIcons/next.svg';
import cancel from '../../../../Components/SvgIcons/cancel.svg';
import { validationSchema } from 'Shared/validation/addPetValidation';

const SecondStep = ({ handleNext, handlePreviousStep, formData }) => {
  const [name, setName] = useState(formData.name || '');
  const [birthday, setBirthday] = useState(formData.birthday || '');
  const [breed, setBreed] = useState(formData.breed || '');
  const [errors, setErrors] = useState({});

  const handleNextValidation = () => {
    validationSchema
      .validate({ name, birthday, breed }, { abortEarly: false })
      .then(() => {
        handleNext({ name, birthday, breed });
      })
      .catch(err => {
        console.log(err);
        const validationErrors = {};
        err.inner.forEach(error => {
          validationErrors[error.path] = error.message;
        });
        setErrors(validationErrors);
      });
  };

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
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Type pet name "
        />
        {errors.name && <p className={css.ErrorTextLow}>{errors.name}</p>}
      </div>
      <div className={css.WrapperLabelInput}>
        <label className={css.LabelStep} htmlFor="birthdate">
          Date of birth
        </label>
        <input
          className={css.Input}
          type="date"
          id="birthdate"
          value={birthday}
          onChange={e => setBirthday(e.target.value)}
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
            onClick={() => handlePreviousStep(formData)}
          >
            <div className={css.ButtonEl}>
              <img src={cancel} alt="Next" />
              <span>Back</span>
            </div>
          </button>
        </li>
        <li>
          <button className={css.ButtonNext} onClick={handleNextValidation}>
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
