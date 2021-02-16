import React from 'react'
import produtos from '../../data/produtos'
import './TabelaProdutos.css'

const teste = produtos.map(p => {
    return (
        <tr>
            <td>{p.nome}</td>
            <td>{p.preco}</td>
        </tr>
    )
})

const TabelaProdutos = () => {
    return (
        <div>
            <table>
                <tr>
                    <th>Nome</th>
                    <th>Preço</th>
                </tr>
                {teste}
            </table>
        </div>
    )
}

export default TabelaProdutos