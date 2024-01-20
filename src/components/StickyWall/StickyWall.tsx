import React, { Component, useState } from 'react';
import "./StickyWall.css";
import logo from "../../assets/logo.svg";
import { ReactComponent as CheckIcon } from "../../assets/check.svg";
import { ReactComponent as EditIcon } from "../../assets/edit.svg";
import { ReactComponent as XmarkIcon } from "../../assets/x-mark.svg";

export default function StickyWall() {
    const [checkIconColor, setCheckIconColor] = useState<string>("#4CAF50");
    const [backgroundColorCheckIcon, setBackgroundColorCheckIcon] = useState<string>("white");

    function todoCompleted() {
        setCheckIconColor(checkIconColor === "#4CAF50" ? "white" : "#4CAF50");
        setBackgroundColorCheckIcon(backgroundColorCheckIcon === "white" ? "#4CAF50" : "white");
    }

    return (
        <div className='stickywall'>
            <div className='header-wall'>
                <div className='title'>
                    <img className='logo' src={logo} alt="logo" />
                    <h1>To-dos</h1><h2>wall</h2>
                </div>
                <p className='group-title-in-the-wall'>(Ui Design)</p>
            </div>
            <div className='to-dos-container'>
                <div className='to-do high'>
                    <p>Officiis expedita cupiditate culpa sapiente explicabo eius suscipit iure odit</p>
                    <div className='separator'></div>
                    <div className='actions'>
                        <div className='action-icon-container'>
                            <XmarkIcon className='xmark-icon' />
                        </div>
                        <div className='action-icon-container'>
                            <EditIcon className='edit-icon' />
                        </div>
                        <div
                            style={{
                                backgroundColor: backgroundColorCheckIcon,
                                transition: "backgroundColor 1s ease"
                            }}
                            onClick={todoCompleted}
                            className='action-icon-container completed-to-do margin-left-auto'>
                            <CheckIcon
                                style={{
                                    fill: checkIconColor,
                                    transition: "fill 1s ease",
                                }}
                                className='check-icon' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}