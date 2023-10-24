import React, { useState } from 'react';
import logo from "../Arrow.svg";

const DateForm = (props) => {
    return(
        <form>
            <input type='text' value={props.day} className='input' placeholder='DD' onChange={props.handaleDay}/>
            <input type='text' value={props.month} className='input' placeholder='MM' onChange={props.handaleMonth}/>
            <input type='text' value={props.year} className='input' placeholder='YYYY' onChange={props.handaleYear}/>
            <div className="separete">
                <hr className="hr" />
                <a type='submit' style={{ cursor: 'pointer' }}><img src={logo} className="arrow-buttom"></img></a>
            </div>
        </form>
    );
};

export default DateForm;