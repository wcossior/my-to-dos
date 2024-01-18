import React, { Component } from 'react'
import userIcon from "../../assets/user.svg";
import "./UserSection.css";

export default class UserSection extends Component {
    render() {
        return (
            <div className='user-container'>
                <img className='user-icon' src={userIcon} alt="user icon" />
                <div className='info-user'>
                    <h2>Hi, Wilder!</h2>
                    <p>w.cossio.r@gmail.com</p>
                </div>
            </div>
        )
    }
}
