import React from 'react'
import { useParams } from 'react-router-dom'

const Parametros = props => {

    const {id} = useParams()

    return (
        <div>
            <h1>Parametros Component</h1>
            <p>Navegação com parâmetros!</p>
            <p>Parametro: {id}</p>
        </div>
    )
}

export default Parametros