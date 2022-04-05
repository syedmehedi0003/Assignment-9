import React from 'react';
import '../Home/Home.css';
import useReviews from '../../hooks/useReviews';
import ReviewCart from '../ReviewCart/ReviewCart';

const Reviews = () => {

    const [reviews, setReviews] = useReviews();

    return (
        <div className='home-container container'>


            <h3 className='customer'>Customer Reviews</h3>

            <div className='review-container'>

                {
                    reviews.map(review => <ReviewCart
                        key={reviews.id}
                        review={review}
                    ></ReviewCart>)
                }
            </div>





        </div>
    );
};

export default Reviews;