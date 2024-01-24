import React from 'react';
import './ResultCard.css';
import { ReactComponent as CheckIcon } from "../../assets/check.svg";
import { useDispatch } from 'react-redux';
import { clean } from '../../redux/slices/formAddGroup';

const ResultCard = () => {

    const dispatch = useDispatch();

    const cleanFormAddGroup = () => {
        dispatch(clean());
    }

    return (
        <div className='result-card-container'>
            <CheckIcon className='check-icon' />
            <p>Group created successfully</p>
            <button className='btn btn-blank' onClick={cleanFormAddGroup}>Ok</button>
        </div>
    )
}

export default ResultCard
