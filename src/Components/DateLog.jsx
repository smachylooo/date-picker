import React from 'react';

const DateLog = ({day, month, year, isActive}) => {
    return(
        <div className="">
            <p className='result'><span className="result-number">{isActive ? year : "--"}</span> <i>years</i></p>
            <p className='result'><span className="result-number">{isActive ? month : "--"}</span> <i>months</i></p>
            <p className='result'><span className="result-number">{isActive ? day : "--"}</span> <i>days</i></p>
        </div>
    );
};

export default DateLog;