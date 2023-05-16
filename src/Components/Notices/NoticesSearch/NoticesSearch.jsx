// import { useEffect, UseState } from 'react';
// import { useDispatch } from 'react-redux';
// import { useParams } from 'react-router-dom';

import css from 'Components/Notices/NoticesSearch/NoticesSearch.module.css';

// import { SaerchFormButton, ClearFormButton } from './InputButtons';
import { SaerchFormButton } from './InputButtons';

const NoticesSearch = () => {
  // const [query, setQuery] = useState('');
  // const dispatch = useDispatch();

  // const onSubmit = event => {
  //   event.preventDefault();

  //   const newQuery = event.target.elements.search.value.trim();
  //   if (!newQuery) {
  //     return;
  //   }

  // const requestData = { query: newQuery, category: categoryName };

  // let data = [];

  // if (categoryName === 'favorite') {
  //   dispatch(getNoticesByQweryFavorite(requestData))
  //     .then(result => {
  //       data = result;
  //       onSearch(newQuery);
  //       setQuery('');
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     });
  // } else if (categoryName === 'owner') {
  //   dispatch(getNoticesByQweryOwner(requestData))
  //     .then(result => {
  //       data = result;
  //       onSearch(newQuery);
  //       setQuery('');
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     });
  // } else {
  //   dispatch(getNoticesByQwery(requestData))
  //     .then(result => {
  //       data = result;
  //       onSearch(newQuery);
  //       setQuery('');
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     });
  // }
  // };

  // const handleClearQuery = () => {
  //   setQuery('');
  // };

  return (
    <div className={css.form_wrap}>
      <form className={css.seacrh_form}>
        <input type="text" placeholder="Search" className={css.input} />

        {/* <ClearFormButton id="svg" /> */}
        <SaerchFormButton id="svg" />
      </form>
    </div>
  );
};

export default NoticesSearch;
