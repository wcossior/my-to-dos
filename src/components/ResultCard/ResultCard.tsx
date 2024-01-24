import React from 'react';
import './ResultCard.css';
import { ReactComponent as CheckIcon } from "../../assets/check.svg";

const ResultCard = () => {
    return (
        <div className='result-card-container'>
            <CheckIcon className='check-icon' />
            <p>Group created successfully</p>
            <button className='btn btn-blank'>Ok</button>
        </div>
    )
}

export default ResultCard
