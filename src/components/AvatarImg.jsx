import React, { useState } from 'react';
import './AvatarImg.css'

export default (props) => {

    console.log(props.urlImg);

    return (
        <div className="Holder">
            <img src={props.urlImg}></img>
        </div>
    )
}