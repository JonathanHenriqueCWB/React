import React from 'react'
import DiretaFilho from './DiretaFilho'

const DiretaPAI = props => {

    const valor = props.texto + ' junto com o valor concatenado do Pai'

    return (
        <div>
            <DiretaFilho valor={valor}/>
        </div>
    )
}

export default DiretaPAI