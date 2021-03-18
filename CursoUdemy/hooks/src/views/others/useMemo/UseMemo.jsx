import React, { useMemo, useState } from 'react'
import './UseMemo.css'

import BlueCard from '../../../components/style/blueCard/BlueCard'

function sum (a, b){
    const future = Date.now() + 2000
    while(Date.now() < future) {}
    return a + b
}

const UseMemo = () => {
    
    // Estado
    const [n1, setN1] = useState()
    const [n2, setN2] = useState()
    const [n3, setN3] = useState()
    
    // useMemo
    const result = useMemo(() => sum(n1, n2),[n1,n2])

    // const result = sum(n1, n2)

    return (
        <section>
            <BlueCard>
                <h1>Hook useMemo</h1>
                <p>Retorna um valor memorizado!</p>
            </BlueCard>
            <div className='Flex-container'>
                <input type="number" value={n1} onChange={e => setN1(parseInt(e.target.value))}/>
                <input type="number" value={n2} onChange={e => setN2(parseInt(e.target.value))}/>
                <input type="number" value={n3} onChange={e => setN3(parseInt(e.target.value))}/>
                <span>useMemo: {result}</span>
                <p>
                    Você tem uma requisição lenta sempre que realiza uma determinada ação 
                    dentro do seu componente. Caso você vá fazer outra ação que não demanda 
                    requisição, essa última ação pode fazer a requisição mesmo que não precise 
                    e isso gera lags na aplicação. Para evitar isso, useMemo guarda uma 
                    memória da sua dom e quando uma ação sem necessidade de requisição for 
                    feita, ela vai funcionar sem fazer a requisição, porque os dados do resto 
                    da dom estão guardados na memória e de imediato podem ser renderizados
                </p>
            </div>
        </section>
    )
}

export default UseMemo