import React, { Component } from 'react';
import "./StickyWall.css";
import logo from "../../assets/logo.svg";

export default class StickyWall extends Component {
    render() {
        return (
            <div className='stickywall'>
                <div className='title'>
                    <img className='logo' src={logo} alt="logo" />
                    <h1>To-dos</h1><h2>wall</h2>
                </div>
            </div>
        )
    }
}
