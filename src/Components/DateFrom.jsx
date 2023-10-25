import React, { useState } from 'react';
import logo from "../Arrow.svg";

const DateForm = (props) => {
    const [red, setRed] = useState({});
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handaleClick(e);
        }
    };
    const handaleClick = (e) => {
        e.preventDefault();
        if (props.day && props.month && props.year) {
            props.setIsActive(true);
            setRed({});
        } else {
            setRed({borderColor: 'red', color:'red'})
        }
    };
    return (
        <form onKeyDown={handleKeyDown}>
            <div className="all-inputs">
                <div className='input-block'>
                    <span style={red}>Day</span>
                    <input type='text' value={props.day} className='input' placeholder='DD' onChange={props.handaleDay} style={red}/>
                </div>
                <div className='input-block'>
                    <span style={red}>Month</span>
                    <input type='text' value={props.month} className='input' placeholder='MM' onChange={props.handaleMonth} style={red}/>
                </div>
                <div className='input-block'>
                    <span style={red}>Year</span>
                    <input type='text' value={props.year} className='input' placeholder='YYYY' onChange={props.handaleYear} style={red}/>
                </div>
            </div>
            <div className="separete">
                <hr className="hr" />
                <a type='button' style={{ cursor: 'pointer' }} onClick={handaleClick}>
                    <img src={logo} className="arrow-buttom" alt="Arrow" />
                </a>
            </div>
        </form>
    );
};

export default DateForm;