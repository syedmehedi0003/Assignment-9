import React from 'react';
import './Home.css';
import img from '../../images/download (2).jpg';
import useReviews from '../../hooks/useReviews';
// import Reviews from '../ReviewCart/ReviewCart';
import { Link } from 'react-router-dom';
import ReviewCart from '../ReviewCart/ReviewCart';

const Home = () => {

    const [reviews, setReviews] = useReviews();

    return (
        <div className='home-container container'>

            <div className='banner-part row'>

                <div className="banner-text col-12 col-md-6 ">
                    <h1> <span> T-Shirt For Men</span> <br /> Your First Choice </h1>
                    <p>All your embroidery needs under one roof. Call to discuss your custom logo today! Call Today • 40 Years of Experience • Shipping Canada Wide • Off Under Armour partners • Highlights: Catalog Available.</p>
                    <button className='live-btn'>Live demo</button>
                </div>

                <div className="banner-img col-12 col-md-6 ">
                    <img src={img} alt="" />

                </div>

            </div>

            <h3 className='customer'>Customer Reviews</h3>

            <div className='review-container'>

                {
                    reviews.map(review =>
                        <ReviewCart

                            key={reviews.id}
                            review={review}

                        ></ReviewCart>
                    )
                }




            </div>

            <button>
                <Link className='review-btn' to="/reviews"> See All Reviews</Link>
            </button>



        </div >
    );
};

export default Home;