import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { CrossSmallIcon } from '../SvgIcons/CrossSmallIcon';
import { addToFavorite, deleteFromFavorite } from 'Redux/user/user-operation';

import { isUserLogin } from 'Redux/auth/auth-selectors';
import { getUser } from 'Redux/auth/auth-selectors';

import { AddToFavoriteIcon } from 'Components/SvgIcons/AddToFavoriteIcon';

import css from './ModalNotice.module.css';

const ModalNotice = ({
  _id,
  title,
  name,
  birthday,
  breed,
  place,
  sex,
  photoURL,
  comments,
  onClose,
  className = 'Modal content goes here',
}) => {
  const handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.keyCode === 27) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

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

  return (
    <div className={`${css.modal} ${className}`} onClick={handleBackdropClick}>
      <div className={css.modalContent}>
        <div className={css.maincontent_wrap}>
          <button className={css.closeBtn} onClick={onClose}>
            <CrossSmallIcon id="svg" className={css.crossSmallIcon} />
          </button>
          <div className={css.image_wrap}>
            <img src={photoURL} alt="фото зверя" className={css.image} />
          </div>
          <div className={css.info_wrap}>
            <h2 className={css.title}>{title}</h2>
            <ul className={css.list_info}>
              <li className={css.list_item}>
                Name: <span className={css.span}>{name}</span>
              </li>
              <li className={css.list_item}>
                Birthday:<span className={css.span}>{birthday}</span>
              </li>
              <li className={css.list_item}>
                Breed:<span className={css.span}>{breed}</span>
              </li>
              <li className={css.list_item}>
                Place:<span className={css.span}>{place}</span>
              </li>
              <li className={css.list_item}>
                The sex:<span className={css.span}>{sex}</span>
              </li>
              <li className={css.list_item}>Email:</li>
              <li className={css.list_item}>Phone:</li>
            </ul>
          </div>
        </div>

        <p className={css.comments}> Тут должны быть коментарии{comments}</p>
        <div className={css.button_wrap}>
          <button type="button" className={css.addtobutton}>
            Add to <AddToFavoriteIcon id="svg" onClick={handleFavoriteClick} />
          </button>
          <button type="button" className={css.contactbutton}>
            Contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalNotice;
