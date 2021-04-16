import React, { useState } from 'react'
import './UseState.css'

import BlueCard from '../../../components/style/blueCard/BlueCard'

const UseState = () => {

    const [count, setCount] = useState(0)
    const [text, setText] = useState('')

    return (
        <section>
            <BlueCard>
                <h2>useState</h2>
                <p>
                    useState é um hook que é utilizado para gerenciar
                    estado em um componente, comumente é utilizado em
                    <strong> componentes funcionais</strong>, mais também pode ser utilizado
                    e class components. Sua implementação difere um pouco
                    da implementação de uma function component.
            </p>
            </BlueCard>
            <Exercicio01 funcao={setCount} valor={count} />
            <Exercicio02 funcao={setText} valor={text} />
        </section>
    )
}

const Exercicio01 = props => {
    return (
        <>
            <h1>Exercicio #01</h1>
            <div className='Main'>
                <button onClick={() => props.funcao(current => current + 1)}>-</button>
                <button onClick={() => props.funcao(current => current + 1)}>+</button>
                <span>Estado inicial: <strong>{props.valor}</strong></span>
            </div>
        </>
    )
}

const Exercicio02 = props => {
    return (
        <>
            <h1>Exercicio #2</h1>
            <div className="Main">
                <input type="text" value={props.valor} onChange={e => props.funcao(e.target.value)} />
                <input type="text" value={props.valor} onChange={e => props.funcao(e.target.value)} />
                <span>Texto: <strong>{props.valor}</strong></span>
            </div>
        </>
    )
}

export default UseState