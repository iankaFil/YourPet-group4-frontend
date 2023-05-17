import css from './NoticesCategoriesItem.module.css';

// const NewsItems = ({ id, title, text, date, imgUrl, url }) => {
//   const formattedDate = dayjs(date).format('DD/MM/YYYY');

//   return (
//     <li key={id} className={css.item}>
//       <div className={css.itemLine}></div>
//       <img src={imgUrl} alt={title} loading="lazy" className={css.image}></img>
//       <div className={css.itemBox}>
//         <h2 className={css.title}>{title}</h2>
//         <p className={css.text}>{text}</p>

//         <div className={css.itemWrapper}>
//           <p className={css.date}>{formattedDate}</p>
//           <a href={url} target="_ blank" className={css.link}>
//             Read more
//           </a>
//         </div>
//       </div>
//     </li>
//   );
// };

const CategoryItem = ({ _id, title, imgUrl }) => {
  return (
    // <ul className={css.card_list}>
    <li key={_id} className={css.card_item}>
      <div className="card_wrap">
        <img src={imgUrl} alt={title} className={css.image} />
        <h2 className={css.title}>{title}</h2>
        <button className={css.btn}>Learn more</button>
      </div>
    </li>
    // <li className={css.card_item}>
    //   <div className="card_wrap">
    //     <img alt="dog" className={css.image} />
    //     <h2 className={css.title}>Сute dog looking for a home </h2>
    //     <button className={css.btn}>Learn more</button>
    //   </div>
    // </li>
    // <li className={css.card_item}>
    //   <img alt="dog" className={css.image} />
    //   <h2 className={css.title}>Сute dog looking for a home</h2>
    //   <button className={css.btn}>Learn more</button>
    // </li>
    // <li className={css.card_item}>
    //   <img alt="dog" className={css.image} />
    //   <h2 className={css.title}>Сute dog looking for a home</h2>
    //   <button className={css.btn}>Learn more</button>
    // </li>
    // </ul>
  );
};

export default CategoryItem;
