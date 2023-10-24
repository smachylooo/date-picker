import React from 'react';

const DateLog = ({day, month, year}) => {
    return(
        <div className="">
            <p className='result'><span className="result-number">{year ? year : "--"}</span> <i>years</i></p>
            <p className='result'><span className="result-number">{month ? month : "--"}</span> <i>months</i></p>
            <p className='result'><span className="result-number">{day ? day : "--"}</span> <i>days</i></p>
        </div>
    );
};

export default DateLog;