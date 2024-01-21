import React, { Component } from 'react'
import addIcon from "../../assets/add.svg";
import logo from "../../assets/logo.svg";
import "./GroupSection.css";
import { useDispatch } from 'react-redux';
import { showForm } from '../../redux/slices/formAddGroup';

const GroupSection = () => {
    const dispatch = useDispatch();
        
    const showFormModal = () => {
        dispatch(showForm());
    }

    return (
        <div className='groups'>
            <div className='btn-add-a-group'>
                <h1>Groups</h1>
                <img className='add-a-group' src={addIcon} alt="add a group icon" onClick={showFormModal} />
            </div>
            <div className='title-group-container selected'>
                <p>UI Design</p>
            </div>
            <div className='title-group-container'>
                <p>Grosery list</p>
            </div>
            <div className='title-group-container'>
                <p>Vacation checklist</p>
            </div>
        </div>
    )
}

export default GroupSection;
