import React, { useContext } from 'react'
import './UseContext.css'

import BlueCard from '../../../components/style/blueCard/BlueCard'
import DataContex from '../../../data/DataContext'

const UseContext = props => {

    const context = useContext(DataContex)
    function addNumber(delta) {
        context.setEstado({
            ...context.estado,
            number: context.estado.number + delta
        })
    }

    return (
        <section className='UseContext'>
            <BlueCard>
                <h1>Context API e UseContext</h1>
                <p>
                    Context API cria um <strong>objeto</strong> de contexto e retorna o
                    valor atual do contexto para todos os outros componentes de forma direta,
                    basta apenas utilizar o useContext para consumir o arquivo que estará disponivle
                    de maneira global a todos os outros componentes que o consumirem.
                </p>
                <h2>Implementação do Context API</h2>
                <ol>
                    <li>
                        Criar arquivo <strong>DataContext</strong>, por padrão na
                        <strong> pasta de dados</strong>
                    </li>
                    <li>Importar dataContext dentro do componente raiz da aplicação (App)</li>
                    <li>Envolver todos os componente com o componente DataContex.Provider</li>
                    <li>
                        Passar para a <strong>props value</strong> os dados do contexto,
                        verificar no arquivo de DataContex os dados exportados. OBS o
                        mesmo deve constar no import da componente raiz, nesse exemplo atende
                        pelo nome data
                    </li>
                    <li>Pronto todos os arquivos envovidos pelo componente terão acesso ao contexto</li>
                </ol>
                <h2>Consumindo os dados pelo hook useContext</h2>
                <ol>
                    <li>Importar o DataContext no componente</li>
                    <li>Criar o useContex e passar o DataContext para ele</li>
                    <li>Para acessar e so usar a costante criada.nomePropriedade do objeto contido no contexto</li>
                </ol>
                <h2>Jogando o DataContext em um contexto e passando o estado para o outros componentes</h2>
                <ol>
                    <li>Basta criar um estado no App e passar o objeto do DataContext ao state</li>
                    <li>
                        Ao inves de passar o objeto do DataContexto ao Componente DataContext.Provider
                        passar agora o estado e sua funçao de alterar o estado (estado, setEstado) aos
                        componentes que consumirão o Contexto API
                    </li>
                    <li>
                        Alterar o componete filho que consumira para exibir de modo correto
                        <strong> props.estado.nomePropriedade</strong>
                    </li>
                </ol>
            </BlueCard>
            <div>
                <h3>
                    Acessando as propriedades do contexto
                    <strong> {context.estado.number}</strong>
                    <strong> {context.estado.text}</strong>
                </h3>
                <div>
                    <h3>Alterando o valor (agora no estado)</h3>
                    <button onClick={() => addNumber(+1)} >+</button>
                    <button onClick={() => context.setEstado({ number: context.estado.number - 1 })}>-</button>
                    <span>Valor alterado {context.estado.number}</span>
                </div>
            </div>
        </section>
    )
}

export default UseContext

/**
 *  1 - Definir arquivo e pasta dos dados
 *  2 - Criar o datacontext dentro da pasta dados
 *  3 - Importar o contexto + nome do objeto no App ou Index com a propriedade
 *      value, para que todos child componente tenham acesso ao dataContext
 *  4 - Na classe filho declarar o hook useContex recebendo o valor do dataContext,
 *      não esquecer que o ParentComponent ten que ter a propriedade value!
 */
