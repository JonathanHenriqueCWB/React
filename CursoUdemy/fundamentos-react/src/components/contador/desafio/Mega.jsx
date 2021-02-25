import React, { useState } from 'react'

import Botao from './Botao'
import Display from './Display'

const Mega = () => {

    const [numeros, setNumero] = useState(0)
    const [qtdNumeros, setQtdNumeros] = useState(0)

    const quantidadeNumeros = props => setQtdNumeros(props)

    const gerarNumeros = () => {

        let numerosSorteados = []

        for (let i = 0; i < qtdNumeros; i++) {
            
            while (numerosSorteados.length < qtdNumeros) {

                const n = Math.floor(Math.random() * (1 + 60)) + 1;

                if (!numerosSorteados.includes(n)) {
                    numerosSorteados.push(n)
                }
            }
        }
        setNumero(numerosSorteados.sort())
    }

    return (
        <div>
            Gerar numeros Mega Sena
            <Botao funcGerar={gerarNumeros} funcQtdNumeros={quantidadeNumeros} qtdNumeros={qtdNumeros} />
            <Display numero={numeros} />
        </div>
    )
}

export default Mega