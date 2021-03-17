import React, { useEffect, useState } from 'react'
import './UseEffect.css'

import BlueCard from '../../../components/style/blueCard/BlueCard'

const UseEffect = () => {


    // State
    const [number, setNumber] = useState(1)
    const [fatorial, setFatorial] = useState(1)
    const [parImpar, setParImpar] = useState('impar')

    //Function
    const alterar = e => setNumber(e.target.value)
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
                <p>Permite executar efeitos colaterais em componentes funcionais</p>
            </BlueCard>
            <h1>Exercicio #01</h1>
            <div className='UseEffect'>
                <input type="number" value={number} onChange={alterar} />
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