import React, { createContext, useState } from 'react';
export const TimelineContext = createContext()

const ContextData = ({children}) => {
    const [data,setData] = useState([]);

    return (
     <TimelineContext.Provider value={[data,setData]}>
        {children}
     </TimelineContext.Provider>
    );
};

export default ContextData;