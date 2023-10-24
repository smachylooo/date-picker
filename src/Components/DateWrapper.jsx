import React, { useState } from 'react';
import DateForm from "./DateFrom";
import DateLog from "./DateLog";


const DateWrapper = (props) => {
    const [isActive, setIsActive] = useState(false);
    const [day, setDay] = useState('');
    const handaleDay = (e)=>{
        const value =e.target.value;
        setDay(value);
        if(!(parseInt(value) && value <= 31))
            <></>
    };
    const [month, setMonth] = useState('');
    const handaleMonth = (e)=>{
        const value =e.target.value;
        if(parseInt(value) && value <= 12){
            setMonth(value);
        }else{
            setMonth('');
        }
    };
    const [year, setYear] = useState('');
    const handaleYear = (e)=>{
        const value =e.target.value;
        if(parseInt(value) && value <= 2023){
            setYear(value);
        }else{
            setYear('');
        }
    };
    const dob1 = `${month}/${day}/${year}`;
    const dob = new Date(dob1);
    // Логіка на розрахунок точної дати не моя
    // Extract the year, month, and date from user date input
    const dobYear = dob.getFullYear();
    const dobMonth = dob.getMonth();
    const dobDate = dob.getDate();

    // Get the current date from the system
    const now = new Date();
    // Extract the year, month, and date from the current date
    const currentYear = now.getFullYear();
    const currentMonth = now.getMonth();
    const currentDate = now.getDate();

    // Declare variables to collect the age in years, months, and days
    let yearAge = currentYear - dobYear;
    let monthAge;

    // Calculate months
    if (currentMonth >= dobMonth) {
      // Get months when the current month is greater
      monthAge = currentMonth - dobMonth;
    } else {
      yearAge--;
      monthAge = 12 + currentMonth - dobMonth;
    }

    let dateAge;

    // Calculate days
    if (currentDate >= dobDate) {
      // Get days when the current date is greater
      dateAge = currentDate - dobDate;
    } else {
      monthAge--;
      dateAge = 31 + currentDate - dobDate;

      if (monthAge < 0) {
        monthAge = 11;
        yearAge--;
      }
    }

    // Group the age in a single variable
    const age = {
      years: yearAge,
      months: monthAge,
      days: dateAge
    };
    
    return (
        <div className="date-box">
            <DateForm day = {day} setDay={setDay} handaleDay={handaleDay} month = {month} setMonth={setMonth} handaleMonth={handaleMonth} year={year} setYear={setYear} handaleYear={handaleYear} setIsActive={setIsActive}/>
            <DateLog day={age.days} month={age.months} year={age.years} isActive={isActive}/>
        </div>
    );
};

export default DateWrapper;
