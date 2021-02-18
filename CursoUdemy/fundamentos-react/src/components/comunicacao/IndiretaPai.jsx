import React, { useState } from 'react'
import IndiretoFilho from './IndiretaFilho'

const IndiretaPai = () => {

    const [nome, setNome] = useState('Nome indefinido')
    const [idade, setIdade] = useState(0)

    // Função será passada como props pro filho
    function receberInfo(nome, idade) {
        setNome(nome)
        setIdade(idade)
    }

    return (
        <div>
            <div>Pai</div>
            <IndiretoFilho funcaoDoPai={receberInfo} />
            <p>Nome: {nome}</p>
            <p>Idade: {idade}</p>
        </div>
    )
}

export default IndiretaPai