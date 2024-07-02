import React from 'react';
import "../styles/BirthdayCard.css";
import Star from "../assets/Star.svg";

function BithdayCard() {
    return (
        <div className='birthday akronim-regular'>
            <div className='card'>
                <p className='card-p'>WISHING THE HAPPIEST BIRTHDAY...</p>
                <p className='card-p1'>Dear Tonnipaul,</p>
                <p className='card-p2'>Birthdays are a new start, a fresh beginning and a time to pursue new endeavors with new goals. Move forward with confidence and courage. You are a very special person. May today and all of your days be amazing!</p>
                <div className='card-container'>
                    <img src={Star} alt="star"/>
                </div>
            </div>
        </div>
    );
}

export default BithdayCard