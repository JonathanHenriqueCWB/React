import React from 'react'
import produtos from '../../data/produtos'
import './TabelaProdutos.css'

const listaProdutos = produtos.map(p => {
    return (
        <tr key={p.id}>
            <td>{p.id}</td>
            <td>{p.nome}</td>
            <td>R$ {p.preco}</td>
        </tr>
    )
})

const TabelaProdutos = () => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {listaProdutos}
                </tbody>
            </table>
        </div>
    )
}

export default TabelaProdutos