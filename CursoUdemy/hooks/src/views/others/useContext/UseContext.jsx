import React, { useContext } from 'react'
import './UseContext.css'

import BlueCard from '../../../components/style/blueCard/BlueCard'
import DataContext from '../../../data/DataContext'
import { AppContext } from '../../../data/Store'

const UseContext = () => {

    const context = useContext(DataContext)

    function addNumber(delta) {

        context.setEstado({
            ...context.estado,
            number: context.estado.number + delta
        })

    }

    const { number, setNumber } = useContext(AppContext)

    return (
        <div>
            <BlueCard>
                <h1>Hook UseContext</h1>
                <p>Aceita um objeto de contexto e retorna o valor atual do contexto!</p>
            </BlueCard>

            <div className="UseContext">
                <h1>Exercicio 1...</h1>
                <p>{context.estado.number}</p>
                <p>{context.estado.text}</p>
                <button onClick={() => addNumber(1)}>+</button>
                <button onClick={() => addNumber(-1)}>-</button>
            </div>

            <div className='UseContext'>
                <h1>Exercicio 2...</h1>
                <span>{number}</span>
                <div>
                    <button onClick={() => setNumber(number + 1)}>+</button>
                    <button onClick={() => setNumber(number - 1)}>-</button>
                </div>
            </div>
        </div>
    )
}

export default UseContext