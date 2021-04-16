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
            <DataContext.Provider value={{estado, setEstado}} >
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

// Componentes Store e DataContext e referente ao exercicio Context API