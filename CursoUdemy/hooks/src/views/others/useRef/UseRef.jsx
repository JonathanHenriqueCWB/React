import React, { useEffect, useRef, useState } from 'react'
import './UseRef.css'

import BlueCard from '../../../components/style/blueCard/BlueCard'

function merge(v1, v2) {
    return [...v1].map(function (element, indice) {
        return `${element}${v2[indice] || ''}`
    }).join('')
}

const UseRef = () => {

    const [value1, setValue1] = useState('')
    const [value2, setValue2] = useState('')

    const count = useRef(0)
    const input1 = useRef(null)
    const input2 = useRef(null)

    useEffect(function () {
        count.current++
        input2.current.focus()
    }, [value1])

    useEffect(function () {
        count.current++
        input1.current.focus()
    }, [value2])

    return (
        <section>
            <BlueCard>
                <h1>useRef</h1>
                <p>Retrona um objeto mutável com a propriedade current!</p>
            </BlueCard>
            <div className='UseRef'>
                <h1 className='Texto'>Exercicio #01</h1>
                <div>
                    <span className='Texto'>Texto: </span>
                    <span className='Texto'>{value1} [</span>
                    <span className='Texto Red'>{count.current}</span>
                    <span className="Texto">]</span>
                </div>
                <input type="text" value={value1} onChange={e => setValue1(e.target.value)} ref={input1} />
            </div>
            <div className='UseRef'>
                <h1 className='Texto'>Exercicio #02</h1>
                <div>
                    <span className="Texto">Texto:</span>
                    <span className='Texto'>{value2} [</span>
                    <span className='Texto Red'>{count.current}</span>
                    <span className="Texto">]</span>
                </div>
                <input type="text" value={value2} onChange={e => setValue2(e.target.value)} ref={input2} />
            </div>
            <div className='UseRef'>
                <h1 className='Texto'>Resultado do exercicio</h1>
                <span className="Texto">Resultado: {merge(value1, value2)}</span>
            </div>
        </section>
    )
}

export default UseRef

/**
    useRef
    Retorna um objeto sempre da mesma instancia

    propriedade mutável current

    Pode se alterar o valor de current sem
    disparara uma nova renderização da página

    Pode se pegar um elemtno do html com a propriedade ref
 */