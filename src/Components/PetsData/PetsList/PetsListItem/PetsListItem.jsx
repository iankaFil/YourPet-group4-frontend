import React from 'react'

import { TrashIcon } from 'Components/SvgIcons' 

import css from './PetsListItem.module.css'


const PetsListItem = ({ photo, name, date, breed, comments = '' }) => {

    const handleDeletePhoto = () => {
        console.log('Delete photo')
    }
    return (
        <div className={css.petItem}>
            <div className={css.photoWrap}>
                {photo ? <img src={photo} alt={name} width={240} height={240} /> : <div className={css.default }></div>}
            </div>
            <div className={css.infoWrap}>
                <div className={css.trashWrap}>
                    <p><b>Name:</b> {!name && "Jack"}</p>
                    <button type='button' className={css.delete_btn} onClick={handleDeletePhoto}>
                        <TrashIcon id='svg' className={css.trashIcon}/>
                    </button>
                    
                </div>
                <p className={css.infoText}><b>Date of birth:</b> {!date&& "22.04.2018"}</p>
                <p className={css.infoText}><b>Breed:</b> { !breed&& "Persian cat"}</p>
                <p className={css.infoText}><b>Comments:</b> {!comments && "Jack is a gray Persian cat with green eyes. He loves to be pampered and groomed, and enjoys playing with toys. Although a bitshy, he's a loyal and affectionate lap cat." }</p>
            </div>
        </div>
    )
}

export default PetsListItem;