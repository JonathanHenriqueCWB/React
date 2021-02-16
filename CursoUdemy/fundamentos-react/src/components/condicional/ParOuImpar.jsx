import React from 'react'

const ParOuImpar = props => {
    return (
        <div>
            <h4>Renderização condicional</h4>
            { props.valor % 2 === 0 ? <span>Par</span> : <span>Impar</span> }
        </div>
    )
}

export default ParOuImpar