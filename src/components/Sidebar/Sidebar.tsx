import React, { Component } from 'react';
import logoutIcon from "../../assets/logout.svg";
import userIcon from "../../assets/user.svg";
import addIcon from "../../assets/add.svg";
import "./Sidebar.css";

export default class Sidebar extends Component {
  render() {
    return (
      <div className='sidebar'>
        <div className='user-container'>
          <img className='user-icon' src={userIcon} alt="user icon" />
          <div className='info-user'>
            <h2>Hi, Wilder!</h2>
            <p>w.cossio.r@gmail.com</p>
          </div>
        </div>
        <h1>Menu</h1>
        <div className='groups'>
          <div className='btn-add-a-group'>
            <h3>Groups</h3>
            <img className='add-a-group' src={addIcon} alt="add a group icon" />
          </div>
          <div className='title-group-container selected'>
            <p>Ui Design</p>
          </div>
          <div className='title-group-container'>
            <p>Grosery list</p>
          </div>
          <div className='title-group-container'>
            <p>Vacation checklist</p>
          </div>
        </div>
        <div className='sign-out-option'>
          <img className='logout-icon' src={logoutIcon} alt="logout icon" />
          <p>Sign out</p>
        </div>
      </div>
    )
  }
}
