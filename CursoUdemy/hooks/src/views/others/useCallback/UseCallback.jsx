import React, { useCallback, useState } from 'react'
import './UseCallback.css'

import BlueCard from '../../../components/style/blueCard/BlueCard'
import Button from './Button'

const UseCallback = () => {

    const [count, setCount] = useState(0)

    const inc = useCallback(function (delta) {
        setCount( current => current + delta)
    }, [setCount])

    return (
        <section>
            <BlueCard>
                <h1>useCallback()</h1>
                <p>Retorna uma função memorizada</p>
            </BlueCard>
            <div className='UseCallback'>
                <div>
                    <span className='Texto'>Valor: <strong className='Red'>{count}</strong></span>
                </div>
                <div className='Btn'>
                    <Button value={6} funcao={inc} />
                    <Button value={12} funcao={inc} />
                    <Button value={18} funcao={inc} />
                </div>
            </div>
        </section>
    )
}

export default UseCallback

/**
 * Sua principal utlidade é barrar a renderização do child
 * component caso os valores sejam sempre o mesmo, ou seja,
 * o hook ira cachiar o compoente.
 * 
 * Para usar o useCalback obrigatoriamente o componente
 * chamado deverá ser cacheado com useMemo.
 * 
 * Passar uma calback para o função do useState e alterar
 * o parametro de critério de mudança para a função set
 * do use state
 */