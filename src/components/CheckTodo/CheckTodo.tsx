import React, { Component, useState } from 'react';
import { ReactComponent as CheckIcon } from "../../assets/check.svg";
import "./CheckTodo.css";

export default function CheckTodo() {

    const [checkIconColor, setCheckIconColor] = useState<string>("#4CAF50");
    const [bgColorCheckIcon, setBackgroundColorCheckIcon] = useState<string>("white");

    function todoCompleted() {
        setCheckIconColor(checkIconColor === "#4CAF50" ? "white" : "#4CAF50");
        setBackgroundColorCheckIcon(bgColorCheckIcon === "white" ? "#4CAF50" : "white");
    }

    return (
        <div
            style={{
                backgroundColor: bgColorCheckIcon,
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
    )
}
