import React from 'react'
import { useParams } from 'react-router-dom'

const Parametros = props => {

    // Utilizando um hook para pegar o parametro
    // Id é o nome do parametro definido no conteudo!
    const { id } = useParams()

    return (
        <div>
            <h1>Parametros Component</h1>
            <p>
                Navegação com parâmetros. Parametros
                estão sendo passado diretamente pelo Link!
            </p>
            <p>Parametro: {id}</p>
        </div>
    )
}

export default Parametros