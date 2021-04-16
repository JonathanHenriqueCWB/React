import React, { useEffect, useState } from 'react'
import './UseEffect.css'

import BlueCard from '../../../components/style/blueCard/BlueCard'

const UseEffect = () => {

    const [number, setNumber] = useState(1)
    const [fatorial, setFatorial] = useState(1)
    const [parImpar, setParImpar] = useState('impar')

    //Function
    const alterarValorInput = e => setNumber(e.target.value)

    function calcularFatorial(num) {
        const n = parseInt(num)
        if (n < 0) {
            return -1
        } else if (n === 0) {
            return 1
        } else {
            return calcularFatorial(n - 1) * n
        }
    }

    const verificarParImpar = valor => {
        if (valor % 2 === 0) {
            return 'Par'
        } else {
            return 'Impar'
        }
    }

    // Effect
    useEffect(function () {
        setFatorial(calcularFatorial(number))
    }, [number])

    useEffect(function () {
        setParImpar(verificarParImpar(number))
    }, [number])

    return (
        <section>
            <BlueCard>
                <h2>UseEffect</h2>
                <p>
                    Permite executar efeitos colaterais em componentes funcionais
                    com ações em outro componente. Por exemplo quando alterar um input
                    outra ação pode ser chamada e executada em paralelo.
                </p>
                <p>
                    Primeiro exercicio ira ser alterado um valor do input, como
                    consequencia será disparado um efeito que calculará o Fatorial
                    com o valor do próprio input
                </p>
                <p>
                    Segundo exemplo como efeito ira apenas dizer se o numero e par ou impar
                </p>
            </BlueCard>
            <h1>Exercicio #01</h1>
            <div className='UseEffect'>
                <input type="number" value={number} onChange={alterarValorInput} />
                <p>Valor: <strong>{number}</strong></p>

                <span className="text">Fatorial:</span>
                <span className="red">{fatorial}</span>
            </div>

            <h1>Exercicio #02</h1>
            <div className='UseEffect'>
                <span className='text'>Valor % 2</span>
                <span className="red">{parImpar}</span>
            </div>
        </section>
    )
}

export default UseEffect