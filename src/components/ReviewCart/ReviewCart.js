import React from 'react';

import useReviews from '../../hooks/useReviews';

import './ReviewCart.css';

const ReviewCart = (props) => {
    const [reviews, setReviews] = useReviews();

    const { name, img, rating, text } = props.review;

    return (

        <div>

            <div className='custom-review'>
                <img src={img} alt="" />
                <h6>Name:{name}</h6>
                <p><small>Ratting: {rating}</small> </p>
                <p><small>Comment: {text}</small> </p>
            </div>
        </div>






    );
};

export default ReviewCart;