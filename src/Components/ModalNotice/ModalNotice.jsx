import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { CrossSmallIcon } from '../SvgIcons/CrossSmallIcon';
import { fetchAddToFavorite, fetchDeleteFromFavorite } from 'Redux/auth/auth-operations';

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
  price,
  category,
  photoURL,
  comments,
  onClose,
  className,
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
    if (isLogin && user && user.favorite && user.favorite.length > 0) {
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
      dispatch(fetchAddToFavorite(_id));
      setFavorite(true);
    } else {
      dispatch(fetchDeleteFromFavorite(_id));
      setFavorite(false);
    }
  };
  return (
    <div className={`${css.modal} ${className}`} onClick={handleBackdropClick}>
      <div className={css.content}>
        <button className={css.closeBtn} onClick={onClose}>
          <CrossSmallIcon id="svg" className={css.crossSmallIcon} />
        </button>
        <div className={css.content_wrap}>
          <img src={photoURL} alt="фото зверя" className={css.image} />

          <div className={css.info_wrap}>
            <p className={css.sell_btn}>{category}</p>
            <h2 className={css.title}>{title}</h2>
            <div className={css.list_info}>
              <p className={css.list_item}>
                <span className={css.info_title}>Name: </span>
                <span className={css.info_text}>{name}</span>
              </p>
              <p className={css.list_item}>
                <span className={css.info_title}>Birthday: </span>
                <span className={css.info_text}>{formatDate(birthday)}</span>
              </p>
              <p className={css.list_item}>
                <span className={css.info_title}>Breed: </span>
                <span className={css.info_text}>{breed}</span>
              </p>
              <p className={css.list_item}>
                <span className={css.info_title}>Place: </span>
                <span className={css.info_text}>{place}</span>
              </p>
              <p className={css.list_item}>
                <span className={css.info_title}>The sex: </span>
                <span className={css.info_text}>{sex}</span>
              </p>
              {price && category === "sell" &&(
                <p className={css.list_item}>
                  <span className={css.info_title}>Price: </span>
                  <span className={css.info_text}>{price} $</span>
                </p>
              )}
              <p className={css.list_item}>
                <span className={css.info_title}>Email: </span>
                <a className={css.user_contact} href="mailto:{owner.email}">
                  {owner.email}
                </a>
              </p>
              <p className={css.list_item}>
                <span className={css.info_title}>Phone: </span>
                <a className={css.user_contact} href="tel:{owner.phone}">
                  {owner.phone}
                </a>
              </p>
            </div>
          </div>
        </div>

        <p className={css.comments}>
          {' '}
          <span className={css.comments_title}>Comments:</span> {comments}
        </p>
        <div className={css.button_wrap}>
          <button
            type="button"
            className={css.contactbutton}
            onClick={() => handleContactClick(owner.phone)}
          >
            Contact
          </button>
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
        </div>
      </div>
    </div>
  );
};

export default ModalNotice;
