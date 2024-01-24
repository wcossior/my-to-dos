import React from 'react';
import './ResultCard.css';
import { ReactComponent as CheckIcon } from "../../assets/check.svg";
import { useDispatch } from 'react-redux';
import { clean, errorGettingGroups, gettingGroups, gettingGroupsCompleted, setGroups } from '../../redux/slices/group';
import { getGroupsFromFirestore } from '../../services/firebaseServices';

const ResultCard = () => {

    const dispatch = useDispatch();

    const cleanFormAddGroup = () => {
        dispatch(clean());
        getGroups();
    }

    const getGroups = async () => {
        try {
            dispatch(gettingGroups());
            const groups = await getGroupsFromFirestore();
            dispatch(setGroups(groups));
            dispatch(gettingGroupsCompleted());
        } catch (error) {
            dispatch(errorGettingGroups());
        }
    };

    return (
        <div className='result-card-container'>
            <CheckIcon className='check-icon' />
            <p>Group created successfully</p>
            <button className='btn btn-blank' onClick={cleanFormAddGroup}>Ok</button>
        </div>
    )
}

export default ResultCard
