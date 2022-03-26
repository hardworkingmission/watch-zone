import React from 'react';
import Answer1 from './Answer1/Answer1';
import Answer2 from './Answer2/Answer2';
import Answer3 from './Answer3/Answer3';


const Questions = () => {
    return (
        <div>
            <h5 className='fw-bold'>Q1. How React Works ?</h5>
            <Answer1/>
            <h5 className='fw-bold'>Q2. Difference Between props and state.</h5>
            <Answer2/>
            <h5 className='fw-bold'>Q3. How useState() Works ?</h5>
            <Answer3/>
        </div>
    );
};

export default Questions;