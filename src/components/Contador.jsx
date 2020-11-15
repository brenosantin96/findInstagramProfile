import React, {useState} from 'react';

export default (props) =>{
    
    const [valorDisplay, setContador] = useState(props.value);
    
    function inc(){
        setContador(valorDisplay + 1);
    }

    function dec(){
        setContador(valorDisplay - 1);
    }

    return(
        <div>
            <span>{valorDisplay}</span>
            <button onClick={inc}>Aumentar</button>
            <button onClick={dec}>Diminuir</button>
        </div>
    )
}