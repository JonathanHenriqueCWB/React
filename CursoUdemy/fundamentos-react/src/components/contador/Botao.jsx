import React from 'react'
import './Botao.css'

const Botao = props => {
    return (
        <div className='Contador'>
            <button onClick={props.funcIncrementar}>+</button>
            <button onClick={props.funcDecrementar}>-</button>
        </div>
    )
}

export default Botao