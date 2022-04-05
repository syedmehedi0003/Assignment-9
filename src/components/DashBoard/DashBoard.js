import React from 'react';
import MyBarChart from '../MyBarChart/MyBarChart';
import MyLineChart from '../MyLineChart/MyLineChart';
import './DashBoard.css';





const DashBoard = () => {
    return (
        <div className='row mt-4'>
            <h2 className='my-4'>This is DashBoard</h2>

            <div className='chart-width  col-lg-6 col-12 '>
                <MyLineChart></MyLineChart>
            </div>


            <div className='chart-width  col-lg-6 col-12 '>
                <MyBarChart></MyBarChart>
            </div>



        </div>
    );
};

export default DashBoard;