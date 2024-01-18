import React, { Component } from 'react'
import logoutIcon from "../../assets/logout.svg";
import "./SignOutSection.css";

export default class SignOutSection extends Component {
    render() {
        return (
            <div className='sign-out-option'>
                <img className='logout-icon' src={logoutIcon} alt="logout icon" />
                <p>Sign out</p>
            </div>
        )
    }
}
