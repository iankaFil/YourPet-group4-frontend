import { useState } from 'react';
import { useDispatch } from 'react-redux';

import css from './NoticesCategoriesItem.module.css';
import { toast } from 'react-toastify';

import { LocationIcon } from 'Components/SvgIcons/LocationIcon';
import { IconTime } from 'Components/SvgIcons/IconTime';
import { FemaleIcon } from 'Components/SvgIcons/FemaleIcon';
import { AddToFavoriteIcon } from 'Components/SvgIcons/AddToFavoriteIcon';
import { ReactComponent as Delete } from 'Components/SvgIcons/Delete.svg';
import { AddToFavorite } from 'Redux/user/user-operation';
import { deleteFromFavorite } from 'Redux/user/user-operation';

import { getToken } from 'Redux/auth/auth-selectors';

const CategoryItem = ({
  _id,
  title,
  imgUrl,
  location,
  sex,
  birthday,
  owner,
  category,
}) => {
  const dispatch = useDispatch();

  const [Favorite, setFavorite] = useState(false);

  const handleFavoriteClick = () => {
    if (!getToken) {
      toast.info(
        'You must be registered or logged in to continue the operation'
      );
      return;
    }

    if (Favorite) {
      toast.error('Removed from favorites');
      dispatch(deleteFromFavorite(_id));
      setFavorite(false);
    } else {
      toast('Added to favorites');
      dispatch(AddToFavorite(_id));
      setFavorite(true);
    }
  };

  // const calcAge = dob => {
  //   if (dob === null) return '?';

  //   const parts = dob.split('.');
  //   const formattedDate = `${parts[2]}-${parts[1]}-${parts[0]}`;
  //   const diffMs = Date.now() - new Date(formattedDate);
  //   const ageDt = new Date(diffMs);

  //   return Math.abs(ageDt.getUTCFullYear() - 1970);
  // };

  return (
    <li key={_id} className={css.card_item}>
      <div className={css.card_wrap}>
        <img src={imgUrl} alt={title} className={css.image} />

        <button
          className={css.favorite_btn}
          type="submit"
          onClick={handleFavoriteClick}
        >
          <AddToFavoriteIcon id="svg" />
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
              {location}
            </button>
          </li>
          <li>
            <button className={css.img_btn}>
              <IconTime id="svg" />
              {/* {calcAge(birthday)} year */}
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
