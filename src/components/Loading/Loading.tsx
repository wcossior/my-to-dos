import React from 'react';
import './Loading.css';

const Loading = () => {
    return (
        <div className='state-card-container'>
            <div className='circle'>
                <div className='circular-loading'></div>
            </div>
                <p>Please wait</p>
        </div>
    )
}

export default Loading
