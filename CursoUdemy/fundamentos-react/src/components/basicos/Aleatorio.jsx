import React from 'react'

const Aleatorio = ( {max, min} ) => {

    //const [min, max] = [props.min, props.max]
    //const {min, max} = props
    //console.log('minimo: ', min, 'maximo: ', max)
    
    const gerarValor = Math.round(Math.random() * (max - min) + min)

    return (
        <>
            <h3>Exercicio - Numero Aleatório</h3>
            <p>
                Gerar um numero aleatório entre dois valores passado pelo
                <strong> Parent Component</strong>
            </p>
            <p>Valor minimo: { min }</p>
            <p>Valor maximo: { max }</p>
            <p>Valor gerado: <strong>{ gerarValor }</strong></p>
        </>
    )
}

export default Aleatorio