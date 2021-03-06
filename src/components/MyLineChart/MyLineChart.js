import React from 'react';
import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import './MyLineChart.css';

const MyLineChart = () => {


    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ];

    return (
        <LineChart className='custom-width' width={500} height={300} data={data}>
            <Line type="monotone" dataKey="sell" stroke="#8884d8" ></Line>
            <Line type="monotone" dataKey="investment" stroke="#8884d8" ></Line>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
        </LineChart>
    );
};

export default MyLineChart;