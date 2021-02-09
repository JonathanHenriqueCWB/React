import React, { useState } from 'react'

const Hook = () => {

    const [Nome, setNome] = useState('João')

    const alterarNome = () => setNome('Marcos Antonio')

    return (
        <div>
            <h1>Métodos hooks</h1>
            <p>Nome no useState: {Nome}</p>
            <button onClick={alterarNome}>Alterar Nome</button>
            <button onClick={() => setNome('José Carlos')}>Alterar Nome</button>
        </div>
    )
}

export default Hook