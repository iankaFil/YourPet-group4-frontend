import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { BsSearch } from 'react-icons/bs';
import { RxCross1 } from 'react-icons/rx';

import css from 'Components/Notices/NoticesSearch/NoticesSearch.module.css';

const NoticesSearch = ({ handleSearchChange, handleChangeCategory }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchValue = searchParams.get('q');

  const [search, setSearch] = useState(searchValue || '');
  
  const handleFormSubmit = event => {
    event.preventDefault();
    handleSearchChange(search);
    setSearchParams({ q: search });
  };

  const handelInputChange = event => {
    setSearch(event.currentTarget.value.toLowerCase().trim());
  };

  const handleClearClick = event => {
    setSearchParams('');
    setSearch('');
    handleSearchChange('');
  };

  return (
    <form className={css.form} onSubmit={handleFormSubmit}>
      <div className={css.formContainer}>
        <input
          type="text"
          placeholder="Search"
          className={css.input}
          onChange={handelInputChange}
          value={search}
          autoComplete="off"
          autoFocus
        />

        <button className={css.btnSearch} type="submit">
          <BsSearch />
        </button>

        {search.length > 0 && (
          <button className={css.btnClear} onClick={handleClearClick}>
            <RxCross1 />
          </button>
        )}
      </div>
    </form>
  );
};

export default NoticesSearch;
