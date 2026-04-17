import React from 'react';
import TimelinePieChart from '../timelinePieChart/TimelinePieChart';




const Stats = () => {
    return (
        <div>
            <h1 className='font-bold text-4xl my-10 ml-30'>Friendship Analytics</h1>
            <TimelinePieChart></TimelinePieChart>
        </div>
    );
};

export default Stats;