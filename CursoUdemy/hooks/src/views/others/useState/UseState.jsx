import React, { useState } from 'react'
import './UseState.css'

import BlueCard from '../../../components/style/blueCard/BlueCard'

const UseState = () => {

    const [count, setCount] = useState(0)
    const [texto, setTexto] = useState('Change the text')

    const somar = () => setCount(count + 1)
    const subrair = () => setCount(count - 1)
    const alterarTexto = e => setTexto(e.target.value)

    return (
        <section>
            <BlueCard>
                <h2>useState</h2>
                <p>Estado em components funcionais</p>
            </BlueCard>

            <h1>Exercicio#01</h1>
            <div className='Main'>
                <button onClick={subrair}>-</button>
                <p><span>Estado inicial: <strong>{count}</strong></span></p>
                <button onClick={somar}>+</button>
            </div>

            <h1>Exercicio#2</h1>
            <div className="Main">
                <input type="text" value={texto} onChange={alterarTexto} />
                <input type="text" value={texto} onChange={e => setTexto(e.target.value)} />
                <p><span>Texto: <strong>{texto}</strong></span></p>
            </div>
        </section>
    )
}

export default UseState