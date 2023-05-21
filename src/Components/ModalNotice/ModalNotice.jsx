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
                Birthday:
                <span className={css.span}>{formatDate(birthday)}</span>
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
              <li className={css.list_item}>
                Email:<span className={css.span}>{owner.email}</span>
              </li>
              <li className={css.list_item}>
                Phone:<span className={css.span}>{owner.phone}</span>
              </li>
            </ul>
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
            <AddToFavoriteIcon fill="#FFF" id="svg" />
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
