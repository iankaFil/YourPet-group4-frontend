import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { CrossSmallIcon } from '../SvgIcons/CrossSmallIcon';
import { addToFavorite, deleteFromFavorite } from 'Redux/user/user-operation';

import { isUserLogin } from 'Redux/auth/auth-selectors';
import { getUser } from 'Redux/auth/auth-selectors';

import { ReactComponent as Heart } from 'Components/SvgIcons/heart.svg';

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
  owner,
}) => {
  console.log('IKUHDFSIFDIUFI', _id);
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

  const formatDate = dateString => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = String(date.getFullYear());

    return `${day}.${month}.${year}`;
  };

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

  const handleContactClick = phoneNumber => {
    if (!phoneNumber) return;
    window.location.href = `tel:${phoneNumber}`;
  };

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
        <div className={css.mainContent_wrap}>
          <button className={css.closeBtn} onClick={onClose}>
            <CrossSmallIcon id="svg" className={css.crossSmallIcon} />
          </button>
          <div className={css.image_wrap}>
            <img
              // align="center"
              src={photoURL}
              alt="фото зверя"
              className={css.image}
            />
            <p className={css.sell_btn}>Sell</p>
          </div>
          <div className={css.info_wrap}>
            <h2 className={css.title}>{title}</h2>
            <div className={css.list_info}>
              <p className={css.list_item}>
                <span className={css.info}>Name: </span>
                <span className={css.span}>{name}</span>
              </p>
              <p className={css.list_item}>
                <span className={css.info}>Birthday: </span>
                <span className={css.span}>{formatDate(birthday)}</span>
              </p>
              <p className={css.list_item}>
                <span className={css.info}>Breed: </span>
                <span className={css.span}>{breed}</span>
              </p>
              <p className={css.list_item}>
                <span className={css.info}>Place: </span>
                <span className={css.span}>{place}</span>
              </p>
              <p className={css.list_item}>
                <span className={css.info}>The sex: </span>
                <span className={css.span}>{sex}</span>
              </p>
              <p className={css.list_item}>
                <span className={css.info}>Email: </span>
                <span className={css.span}>{owner.email}</span>
              </p>
              <p className={css.list_item}>
                <span className={css.info}>Phone: </span>
                <span className={css.span}>{owner.phone}</span>
              </p>
            </div>
          </div>
        </div>

        <p className={css.comments}>{comments}</p>
        <div className={css.button_wrap}>
          <button
            type="button"
            onClick={handleFavoriteClick}
            className={
              !favorite ? css.addtobutton : `${css.addtobutton} ${css.active}`
            }
          >
            {!favorite ? 'Add to' : 'Remove'}
            <Heart
              className={css.addIcon}
              id="svg"
              onClick={handleFavoriteClick}
            />
          </button>
          <button
            type="button"
            className={css.contactbutton}
            onClick={() => handleContactClick(owner.phone)}
          >
            Contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalNotice;
