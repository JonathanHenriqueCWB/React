import React from 'react'

const Botao = props => {
    return (
        <div>
            <input
                type="number"
                onChange={e => props.funcQtdNumeros(e.target.value)}
            />
            <button
                onClick={e => props.funcGerar()}
            >Gerar Numeros</button>
        </div>
    )
}

export default Botao