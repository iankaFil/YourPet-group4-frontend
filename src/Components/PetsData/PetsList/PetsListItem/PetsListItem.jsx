import React, { useState } from 'react'

import { TrashIcon } from 'Components/SvgIcons'

import dayjs from 'dayjs'; 
import css from './PetsListItem.module.css'

const PetsListItem = ({ _id, photoURL, name, birthday, breed, comments = '', removePet }) => {
    const [imageError, setImageError] = useState(false);
    const formattedDate = dayjs(birthday).format('DD.MM.YYYY');

    const handleImageError = () => {
    setImageError(true);
    };

    const handleClick = () => {
        removePet(_id);
    }

    return (
        <div className={css.petItem}>
            {photoURL && !imageError ? <img src={photoURL} alt={name} className={ css.image} onError={handleImageError}/> : <img src='https://ik.imagekit.io/tc8jxffbcvf/default-movie-portrait_EmJUj9Tda5wa.jpg?tr=fo-auto,di-' alt={name} className={ css.image}/>}
                <div className={css.infoWrap}>
                    <div className={css.trashWrap}>
                        <p><b>Name:</b> {name}</p>
                        <button type='button' className={css.delete_btn} onClick = {handleClick}>
                            <TrashIcon id='svg' className={css.trashIcon}/>
                        </button>
                    </div>
                    <p className={css.infoText}><b>Date of birth:</b> {formattedDate}</p>
                    <p className={css.infoText}><b>Breed:</b> {breed}</p>
                    <p className={css.infoText}><b>Comments:</b> {comments}</p>
                </div>
        </div>
    )
}

export default PetsListItem;