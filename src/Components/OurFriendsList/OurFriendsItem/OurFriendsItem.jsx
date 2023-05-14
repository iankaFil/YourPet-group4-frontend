import React from 'react';
import css from './OurFriendsItem.module.css';
import TimePicker from 'Components/TimePicker/TimePicker';

const OurFriendsItem = ({ id, title, address, imgUrl, phone, email }) => {
  return (
    <li key={id} className={css.item}>
      <img src={imgUrl} alt={title} loading="lazy"></img>
      <h2>{title}</h2>
      <p>
        <TimePicker />
      </p>
      <p>{address}</p>
      <p>{phone}</p>
      <p>{email}</p>
    </li>
    // <>
    //   <li className={css.item}>
    //     <div>
    //       <img src="./src/Shared/images/logo2.jpg" alt="PartnerLogo"></img>
    //     </div>
    //     <div>
    //       <h2>TestTitle</h2>
    //       <h3>Time:</h3>
    //       <TimePicker />
    //       <h3>Address:</h3>
    //       <p>Text</p>
    //       <h3>Email:</h3>
    //       <p>Text</p>
    //       <h3>Phone:</h3>
    //       <p>Text</p>
    //     </div>
    //   </li>
    //   <li className={css.item}>
    //     <div>
    //       <img src="./src/Shared/images/logo2.jpg" alt="PartnerLogo"></img>
    //     </div>
    //     <div>
    //       <h2>TestTitle</h2>
    //       <h3>Time:</h3>
    //       <TimePicker />
    //       <h3>Address:</h3>
    //       <p>Text</p>
    //       <h3>Email:</h3>
    //       <p>Text</p>
    //       <h3>Phone:</h3>
    //       <p>Text</p>
    //     </div>
    //   </li>
    //   <li className={css.item}>
    //     <div>
    //       <img src="./src/Shared/images/logo2.jpg" alt="PartnerLogo"></img>
    //     </div>
    //     <div>
    //       <h2>TestTitle</h2>
    //       <h3>Time:</h3>
    //       <TimePicker />
    //       <h3>Address:</h3>
    //       <p>Text</p>
    //       <h3>Email:</h3>
    //       <p>Text</p>
    //       <h3>Phone:</h3>
    //       <p>Text</p>
    //     </div>
    //   </li>
    //   <li className={css.item}>
    //     <div>
    //       <img src="./src/Shared/images/logo2.jpg" alt="PartnerLogo"></img>
    //     </div>
    //     <div>
    //       <h2>TestTitle</h2>
    //       <h3>Time:</h3>
    //       <TimePicker />
    //       <h3>Address:</h3>
    //       <p>Text</p>
    //       <h3>Email:</h3>
    //       <p>Text</p>
    //       <h3>Phone:</h3>
    //       <p>Text</p>
    //     </div>
    //   </li>
    //   <li className={css.item}>
    //     <div>
    //       <img src="./src/Shared/images/logo2.jpg" alt="PartnerLogo"></img>
    //     </div>
    //     <div>
    //       <h2>TestTitle</h2>
    //       <h3>Time:</h3>
    //       <TimePicker />
    //       <h3>Address:</h3>
    //       <p>Text</p>
    //       <h3>Email:</h3>
    //       <p>Text</p>
    //       <h3>Phone:</h3>
    //       <p>Text</p>
    //     </div>
    //   </li>
    //   <li className={css.item}>
    //     <div>
    //       <img src="./src/Shared/images/logo2.jpg" alt="PartnerLogo"></img>
    //     </div>
    //     <div>
    //       <h2>TestTitle</h2>
    //       <h3>Time:</h3>
    //       <TimePicker />
    //       <h3>Address:</h3>
    //       <p>Text</p>
    //       <h3>Email:</h3>
    //       <p>Text</p>
    //       <h3>Phone:</h3>
    //       <p>Text</p>
    //     </div>
    //   </li>
    //   <li className={css.item}>
    //     <div>
    //       <img src="./src/Shared/images/logo2.jpg" alt="PartnerLogo"></img>
    //     </div>
    //     <div>
    //       <h2>TestTitle</h2>
    //       <h3>Time:</h3>
    //       <TimePicker />
    //       <h3>Address:</h3>
    //       <p>Text</p>
    //       <h3>Email:</h3>
    //       <p>Text</p>
    //       <h3>Phone:</h3>
    //       <p>Text</p>
    //     </div>
    //   </li>
    //   <li className={css.item}>
    //     <div>
    //       <img src="./src/Shared/images/logo2.jpg" alt="PartnerLogo"></img>
    //     </div>
    //     <div>
    //       <h2>TestTitle</h2>
    //       <h3>Time:</h3>
    //       <TimePicker />
    //       <h3>Address:</h3>
    //       <p>Text</p>
    //       <h3>Email:</h3>
    //       <p>Text</p>
    //       <h3>Phone:</h3>
    //       <p>Text</p>
    //     </div>
    //   </li>
    //   <li className={css.item}>
    //     <div>
    //       <img src="./src/Shared/images/logo2.jpg" alt="PartnerLogo"></img>
    //     </div>
    //     <div>
    //       <h2>TestTitle</h2>
    //       <h3>Time:</h3>
    //       <TimePicker />
    //       <h3>Address:</h3>
    //       <p>Text</p>
    //       <h3>Email:</h3>
    //       <p>Text</p>
    //       <h3>Phone:</h3>
    //       <p>Text</p>
    //     </div>
    //   </li>
    // </>
  );
};

export default OurFriendsItem;
