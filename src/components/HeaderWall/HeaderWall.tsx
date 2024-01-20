import React, { Component } from 'react'
import logo from "../../assets/logo.svg";

export default class HeaderWall extends Component {
    render() {
        return (
            <div className='header-wall'>
                <div className='title'>
                    <img className='logo' src={logo} alt="logo" />
                    <h1>To-dos</h1><h2>wall</h2>
                </div>
                <p className='group-title-in-the-wall'>(Ui Design)</p>
            </div>
        )
    }
}
