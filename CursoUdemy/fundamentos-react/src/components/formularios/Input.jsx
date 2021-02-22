import React, { useState } from 'react'

const Imput = props => {

    const estilo = {
        display: 'flex',
        flexDirection: 'column'
    }
    const [valor, setValor] = useState('')
    const alterarValor = event => setValor(event.target.value)

    return (
        <div style={estilo}>
            <input type="text" value={valor} onChange={alterarValor} />
            <input type="text" value={valor}  readOnly/>
            <input type="text" value={undefined} />
            <p>Valor: {valor}</p>
        </div>
    )
}

export default Imput