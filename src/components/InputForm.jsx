import React, { useState } from 'react';
import './InputForm.css';

export default (props) => {

    var input = '';

    return (

        <div className="inputComponent">
            <label htmlFor="imgInsta">Instagram:</label>
            <input id="imgInsta" type="text" onChange={(e) => {
                input = e.target.value;
                if (input != '') {
                    props.fetchUser(input)
                }

            }
            }></input>
            <button onClick={(e) => {
                input = document.getElementById("imgInsta").value
                props.getIG(input);
            }}>Buscar</button>
        </div>
    )
}