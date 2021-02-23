import React from 'react'

const PassoForm = props => {
    return (
        <div>
            <label htmlFor=""></label>
            <input
                type='number'
                id='passoInput'
                value={props.passo}
                onChange={props.funcAlterarPasso}
            />
        </div>
    )
}

export default PassoForm