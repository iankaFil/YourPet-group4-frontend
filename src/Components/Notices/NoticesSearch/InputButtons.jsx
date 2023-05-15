import { SearchFormIcon } from 'Components/SvgIcons/SearchFormIcon';
import { ClearFormIcon } from 'Components/SvgIcons/ClearFormIcon';

import css from './NoticesSearch.module.css';

export const SaerchFormButton = () => {
  return (
    <button className={css.inputbutton} type="submit">
      {' '}
      <SearchFormIcon id="svg" />
    </button>
  );
};

export const ClearFormButton = () => {
  return (
    <button className={css.inputbutton} type="submit">
      {' '}
      <ClearFormIcon id="svg" />
    </button>
  );
};
