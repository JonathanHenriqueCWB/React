import React from 'react'
import alunos from '../../data/alunos'

const listaAlunos = alunos.map(a => <li key={a.id}> {a.nome}: {a.nota}</li>)

const ListaAlunos = props => {
    return (
        <div>
            <ul>
                {listaAlunos}
            </ul>
        </div>
    )
}

export default ListaAlunos 