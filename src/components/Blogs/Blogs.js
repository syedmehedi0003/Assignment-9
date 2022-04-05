import React from 'react';
import './Blogs.css';


const Blogs = () => {
    return (
        <div className='blog'>
            <h2 className='mt-4'>Context API</h2>
            <h6>Context API is the method how to pass data from grandparent to child.It is the alternate way of props drilling.We can efficiently produce  global variable for React app that can be passed around.It is  the  easier and lighter approach to state management using Redux.</h6>

            <h2 className='mt-4'>Semantic Tag</h2>
            <p>A semantic tag or element clearly describes its meaning. That's why it is easy to understand for browser and  developer.We can use it in HTML structure.Some  semantic tag is like: {'<article>,<footer>,<header>,<aside>,<main>,<figcaption>,<figure>,<mark>,<nav>,<section>,<summary>,<time>'}.</p>

        </div>
    );
};

export default Blogs;