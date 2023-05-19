import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import css from './NoticesCategoriesItem.module.css';
import { toast } from 'react-toastify';

import { LocationIcon } from 'Components/SvgIcons/LocationIcon';
import { IconTime } from 'Components/SvgIcons/IconTime';
import { FemaleIcon } from 'Components/SvgIcons/FemaleIcon';
import { AddToFavoriteIcon } from 'Components/SvgIcons/AddToFavoriteIcon';

import { ReactComponent as Delete } from 'Components/SvgIcons/Delete.svg';
import { addToFavorite, deleteFromFavorite } from 'Redux/user/user-operation';

import { isUserLogin } from 'Redux/auth/auth-selectors';
import { getUser } from 'Redux/auth/auth-selectors';

const CategoryItem = ({
  _id,
  title,
  imgUrl,
  place,
  sex,
  birthday,
  owner,
  category,
}) => {
  const dispatch = useDispatch();

  const user = useSelector(getUser);
  const isLogin = useSelector(isUserLogin);

  const [favorite, setFavorite] = useState(() => {
    if (isLogin && user.favorite.length > 0) {
      if (user.favorite.includes(_id)) {
        return true;
      } else {
        return false;
      }
    }
    return false;
  });

  const handleFavoriteClick = () => {
    console.log('НАЖАТА СЕРД');
    console.log(user);
    console.log('isLogin', isLogin);

    if (!isLogin) {
      toast.info(
        'You must be registered or logged in to continue the operation'
      );
      return;
    }

    if (!favorite) {
      dispatch(addToFavorite(_id));
      setFavorite(true);
    } else {
      dispatch(deleteFromFavorite(_id));
      setFavorite(false);
    }
  };

  // function calcAge(birthDatein) {
  //   const birthDate = new Date(birthDatein);
  //   const currentDate = new Date();
  //   const diffInMilliseconds = Math.abs(currentDate - birthDate);
  //   const millisecondsPerYear = 1000 * 60 * 60 * 24 * 365.25; // учитываем високосные года

  //   const age = Math.floor(diffInMilliseconds / millisecondsPerYear);
  //   return age;
  // }

  function calcAge(birthDatein) {
    const birthDate = new Date(birthDatein);
    const currentDate = new Date();
    const diffInMilliseconds = Math.abs(currentDate - birthDate);
    const millisecondsPerYear = 1000 * 60 * 60 * 24 * 365.25; // учитываем високосные года

    if (diffInMilliseconds < millisecondsPerYear) {
      const millisecondsPerMonth = millisecondsPerYear / 12;
      const ageInMonths = Math.floor(diffInMilliseconds / millisecondsPerMonth);
      return ageInMonths + ' mon';
    } else {
      const ageInYears = Math.floor(diffInMilliseconds / millisecondsPerYear);
      return ageInYears + ' year';
    }
  }

  // const calcAge = dob => {
  //   console.log(dob);
  //   if (dob === null) return '?';
  //   const yearPet = new Date(dob);
  //   const fullYear = yearPet.getFullYear();
  //   const currentYear = new Date();
  //   const fullYearNow = currentYear.getFullYear();
  //   return Math.abs(fullYearNow - fullYear);
  // };

  return (
    <li key={_id} className={css.card_item}>
      <div className={css.card_wrap}>
        <img src={imgUrl} alt={title} className={css.image} />

        <button
          className={
            favorite
              ? `${css.favorite_btn} ${css.favoriteActive}`
              : css.favorite_btn
          }
          type="button"
          onClick={handleFavoriteClick}
        >
          <AddToFavoriteIcon id="svg" fill={favorite ? '#54adff' : 'none'} />
        </button>

        <button
          className={css.delete_btn}
          type="submit"
          onClick={handleFavoriteClick}
        >
          <Delete id="svg" />
        </button>

        <ul className={css.btn_list}>
          <li className={css.list_item}>
            <button className={css.img_btn}>
              <LocationIcon id="svg" />
              {place}
            </button>
          </li>
          <li>
            <button className={css.img_btn}>
              <IconTime id="svg" />
              {calcAge(birthday)}
            </button>
          </li>
          <li>
            <button className={css.img_btn}>
              <FemaleIcon id="svg" />
              {sex}
            </button>
          </li>
        </ul>

        <h2 className={css.title}>{title}</h2>
        <button className={css.btn}>Learn more</button>
      </div>
    </li>
  );
};

export default CategoryItem;
