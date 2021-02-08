import React from 'react'

function Clientes(props){
    return(
        <div>
            <h1>Function Component</h1>
            <p>Nome: {props.nome} {props.sobrenome}</p>
        </div>
    )
}

export default Clientes