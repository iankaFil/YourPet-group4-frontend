import css from './NoticesCategoriesItem.module.css';

import { LocationIcon } from 'Components/SvgIcons/LocationIcon';
import { IconTime } from 'Components/SvgIcons/IconTime';
import { FemaleIcon } from 'Components/SvgIcons/FemaleIcon';
import { AddToFavorite } from 'Components/SvgIcons/AddToFavorite';

const CategoryItem = ({ _id, title, imgUrl }) => {
  return (
    // <ul className={css.card_list}>
    <li key={_id} className={css.card_item}>
      <div className={css.card_wrap}>
        <img src={imgUrl} alt={title} className={css.image} />

        <button className={css.favorite_btn}>
          <AddToFavorite id="svg" />
        </button>

        <ul className={css.btn_list}>
          <li className={css.list_item}>
            <button className={css.img_btn}>
              <LocationIcon id="svg" />
              Lviv
            </button>
          </li>
          <li>
            <button className={css.img_btn}>
              <IconTime id="svg" />1 year
            </button>
          </li>
          <li>
            <button className={css.img_btn}>
              <FemaleIcon id="svg" />
              Female
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
