import React, { useState } from 'react'
import './UseState.css'

import BlueCard from '../../../components/style/blueCard/BlueCard'

const UseState = () => {

    const [count, setCount] = useState(0)

    const somar = () => setCount(count + 1)
    const subrair = () => setCount(count - 1)

    return (
        <section>
            <BlueCard>
                <h2>useState</h2>
                <p>Estado em components funcionais</p>
            </BlueCard>
            <h1>Exercicio#01</h1>
            <div className='Main'>
                <button onClick={subrair}>-</button>
                <p>
                    <span>Estado inicial: <strong>{count}</strong></span>
                </p>
                <button onClick={somar}>+</button>
            </div>
        </section>
    )
}

export default UseState