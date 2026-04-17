import React, { useContext } from 'react';
import { Pie, PieChart, ResponsiveContainer, Cell, Legend, Tooltip } from 'recharts';
import { TimelineContext } from '../../contextData/ContextData';

const TimelinePieChart = () => {
    const [data] = useContext(TimelineContext);

    const chartData = [
        { name: 'Call', value: data.filter(d => d.type === 'Call').length, fill: 'green' },
        { name: 'Text', value: data.filter(d => d.type === 'Text').length, fill: 'blue' },
        { name: 'Video', value: data.filter(d => d.type === 'Video').length, fill: 'black' },
    ];

    return (
        <div className='border border-gray-200 shadow-lg  rounded-2xl container space-y-4 mx-auto my-10 p-10'>

        <div style={{ width: '100%', height: '300px'  }} >
            <h3 className='font-semibold   ml-20 text-xl text-gray-500'>By Interaction Type</h3>
            <ResponsiveContainer>
                <PieChart>
                    <Pie
                        data={chartData}
                        dataKey="value"
                        innerRadius="80%"
                        outerRadius="100%"     
                        cornerRadius="50%"
                        paddingAngle={5}                      
                        >
                {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
                            
                ))}
                    <div>
                        <Legend  />            
                        <Tooltip />
                    </div>
                </Pie>         
                </PieChart>
            </ResponsiveContainer>
        </div>
    </div>
    );
};

export default TimelinePieChart;