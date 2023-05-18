import React, { useState } from 'react';
import css from './SecondStep.module.css';
import next from '../../../../Components/SvgIcons/next.svg';
import cancel from '../../../../Components/SvgIcons/cancel.svg';
import { validationSchema } from 'Shared/validation/addPetValidation';
import female from '../../../../Components/SvgIcons/female.svg';
import male from '../../../../Components/SvgIcons/male.svg';

const SecondStep = ({ handleNext, handlePreviousStep, formData }) => {
  const [name, setName] = useState(formData.name || '');
  const [birthday, setBirthday] = useState(formData.birthday || '');
  const [breed, setBreed] = useState(formData.breed || '');
  const [title, setTitle] = useState(formData.title || '');
  const [sex, setSex] = useState(formData.sex || '');
  const [place, setPlace] = useState(formData.place || '');
  const [errors, setErrors] = useState({});
  const [activeButton, setActiveButton] = useState(null);

  const handleNextValidation = () => {
    validationSchema
      .validate(
        { sex, place, title, name, birthday, breed },
        { abortEarly: false }
      )
      .then(() => {
        handleNext({ sex, place, title, name, birthday, breed });
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

  const handleOptionChange = (option, number) => {
    setSex(option);
    setActiveButton(number);
  };

  return (
    <div className={css.FormWrapper}>
      <div className={css.WrapperLabelInput}>
        <label className={css.LabelStep} htmlFor="name">
          Title of add
        </label>
        <input
          className={css.Input}
          type="text"
          id="title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Type pet name"
        />
        {errors.name && <p className={css.ErrorTextLow}>{errors.name}</p>}
      </div>
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
          type="text"
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
        <div className={css.SexText}>The Sex</div>
        <ul className={css.sexOption}>
          <li>
            <button
              className={`${css.sexElement} ${
                activeButton === 1 ? css.sexElementActive : ''
              }`}
              type="button"
              onClick={() => handleOptionChange('female', 1)}
            >
              <img src={female} alt="female" />
              Female
            </button>
          </li>
          <li>
            <button
              className={`${css.sexElement} ${
                activeButton === 2 ? css.sexElementActive : ''
              }`}
              onClick={() => handleOptionChange('male', 2)}
            >
              <img src={male} alt="male" />
              Male
            </button>
          </li>
        </ul>
      </div>

      <div className={css.WrapperLabelInput}>
        <label className={css.LabelStep} htmlFor="name">
          Location
        </label>

        <input
          className={css.Input}
          type="text"
          id="name"
          value={place}
          onChange={e => setPlace(e.target.value)}
          placeholder="Type location"
        />
        {errors.name && <p className={css.ErrorTextLow}>{errors.name}</p>}
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
