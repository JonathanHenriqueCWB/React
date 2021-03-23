import React, { useState } from 'react'
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import DataContext, { data } from '../../data/DataContext'

import Menu from '../../components/menu/Menu'
import Content from '../../components/content/Content'
import Store from '../../data/Store'

const App = () => {

    const [estado, setEstado] = useState(data)

    return (
        <Store>
            <DataContext.Provider value={{ estado, setEstado }} >
                <main className='App'>
                    <Router>
                        <Menu />
                        <Content />
                    </Router>
                </main>
            </DataContext.Provider>
        </Store>
    )
}

export default App

/**
 *  1 - Definir arquivo e pasta dos dados
 *  2 - Criar o datacontext dentro da pasta dados
 *  3 - Importar o contexto + nome do objeto no App ou Index com a propriedade
 *      value, para que todos child componente tenham acesso ao dataContext
 *  4 - Na classe filho declarar o hook useContex recebendo o valor do dataContext,
 *      não esquecer que o ParentComponent ten que ter a propriedade value!
 */
