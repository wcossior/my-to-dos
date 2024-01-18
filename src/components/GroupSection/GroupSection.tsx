import React, { Component } from 'react'
import addIcon from "../../assets/add.svg";
import logo from "../../assets/logo.svg";
import "./GroupSection.css";

export default class GroupSection extends Component {
    render() {
        return (
            <div className='groups'>
                <div className='btn-add-a-group'>
                    <h1>Groups</h1>
                    <img className='add-a-group' src={addIcon} alt="add a group icon" />
                </div>
                <div className='title-group-container selected'>
                    {/* <img className='logo-in-title' src={logo} alt="add a group icon" /> */}
                    <p>Ui Design</p>
                </div>
                <div className='title-group-container'>
                    {/* <img className='logo-in-title' src={logo} alt="add a group icon" /> */}
                    <p>Grosery list</p>
                </div>
                <div className='title-group-container'>
                    {/* <img className='logo-in-title' src={logo} alt="add a group icon" /> */}
                    <p>Vacation checklist</p>
                </div>
            </div>
        )
    }
}
