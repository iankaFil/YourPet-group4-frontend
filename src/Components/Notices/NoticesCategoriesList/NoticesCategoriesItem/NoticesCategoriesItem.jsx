import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import css from './NoticesCategoriesItem.module.css';
import { toast } from 'react-toastify';

import { LocationIcon } from 'Components/SvgIcons/LocationIcon';
import { IconTime } from 'Components/SvgIcons/IconTime';
import { FemaleIcon } from 'Components/SvgIcons/FemaleIcon';
import { AddToFavoriteIcon } from 'Components/SvgIcons/AddToFavoriteIcon';

import { ReactComponent as Delete } from 'Components/SvgIcons/Delete.svg';
import { ReactComponent as PawIcon } from 'Components/SvgIcons/paw.svg';
import { addToFavorite, deleteFromFavorite } from 'Redux/user/user-operation';

import { isUserLogin } from 'Redux/auth/auth-selectors';
import { getUser } from 'Redux/auth/auth-selectors';

import ModalNotice from 'Components/ModalNotice/ModalNotice';

const CategoryItem = ({
  _id,
  title,
  photoURL,
  price,
  place,
  sex,
  birthday,
  owner,
  category,
  name,
  breed,
  comments,
  ...restProps
}) => {
  // console.log(
  //   'PROPSSSSSSS',
  //   owner,
  //   _id,
  //   title,
  //   photoURL,
  //   price,
  //   place,
  //   sex,
  //   birthday,
  //   owner,
  //   category,
  //   name,
  //   breed,
  //   comments
  // );

  // console.log('REST PROPS', restProps);
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);

  const user = useSelector(getUser);
  const isLogin = useSelector(isUserLogin);

  const handleLearnClick = () => {
    setShowModal(true);
  };

  function handleCloseModal() {
    setShowModal(false);
  }

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

  return (
    <li key={_id} className={css.card_item}>
      <div className={css.card_wrap}>
        <img src={photoURL} alt={title} className={css.image} />
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
          <p className={css.sell_btn}>Sell</p>
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
        <button className={css.btn} onClick={handleLearnClick}>
          Learn more
          <PawIcon />
        </button>
        {showModal && (
          <ModalNotice
            _id={_id}
            owner={owner}
            onClose={handleCloseModal}
            title={title}
            name={name}
            birthday={birthday}
            breed={breed}
            place={place}
            sex={sex}
            photoURL={photoURL}
            comments={comments}
          />
        )}
      </div>
    </li>
  );
};

export default CategoryItem;
