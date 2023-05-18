import css from './AddPetPage.module.css';

const AddPetPageTitles = (step, selectedOption) => {
  return (
    <>
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
    </>
  );
};

export default AddPetPageTitles;
