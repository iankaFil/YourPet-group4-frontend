import css from '../AddPetPage/AddPetPage.module.css';

export const App = () => {
  return (
    <div className={css.AddPetContainer}>
      <h2 className={css.AddPet}>Add pet</h2>
      <ul className={css.StepList}>
        <li className={css.StepItemActive}>
          Choose option <div className={css.StepActive}></div>
        </li>
        <li className={css.StepItem}>
          Personal details <div className={css.StepNonActive}></div>
        </li>
        <li className={css.StepItem}>
          More info <div className={css.StepNonActive}></div>
        </li>
      </ul>
      <ul className={css.ChooseOptionList}>
        <li className={css.ChooseOptionPetItem}>
          <button className={css.PetButton} type="button">
            your pet
          </button>
        </li>
        <li className={css.ChooseOptionPetItem}>
          <button className={css.PetButton} type="button">
            sell
          </button>
        </li>
        <li className={css.ChooseOptionPetItem}>
          <button className={css.PetButton} type="button">
            lost/found
          </button>
        </li>
        <li className={css.ChooseOptionPetItem}>
          <button className={css.PetButton} type="button">
            in good hands
          </button>
        </li>
      </ul>
      <ul className={css.LinkAddPEt}>
        <li className={css.LinkAddPEtItem}>
          <a className={css.LinkAddPEtLitkCancel} href="#">
            Cancel
          </a>
        </li>
        <li className={css.LinkAddPEtItem}>
          <a className={css.LinkAddPEtLitk} href="#">
            Next
          </a>
        </li>
      </ul>
    </div>
  );
};
