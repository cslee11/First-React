import React from 'react';
import './Button.css';

 function Button(props) {
    return (
        <div>
            <button className='button' style={{backgroundColor: `${props.color}`}}>{props.buttonName}</button>
        </div>
    )
}
export default Button;