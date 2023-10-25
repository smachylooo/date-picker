import React, { useState } from 'react';
import logo from "../Arrow.svg";

const DateForm = (props) => {
    const handaleClick=(e)=>{
        e.preventDefault();
        props.setIsActive(true);
    };
    return(
        <>
            <div className="all-inputs">
                <div className='input-block'>
                    <span>Day</span>
                    <input type='text' value={props.day} className='input' placeholder='DD' onChange={props.handaleDay}/>
                </div>
                <div className='input-block'>
                    <span>Month</span>
                    <input type='text' value={props.month} className='input' placeholder='MM' onChange={props.handaleMonth}/>
                </div>
                <div className='input-block'>
                    <span>Year</span>
                    <input type='text' value={props.year} className='input' placeholder='YYYY' onChange={props.handaleYear}/>
                </div>
            </div>
            <div className="separete">
                <hr className="hr" />
                <a type='submit' style={{ cursor: 'pointer' }} onClick={handaleClick}><img src={logo} className="arrow-buttom"></img></a>
            </div>
        </>
    );
};

export default DateForm;