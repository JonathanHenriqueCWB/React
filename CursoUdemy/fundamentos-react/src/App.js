import React from 'react'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'

const App = () => {
    return (
        <>
            <Fragmento /> <hr />
            <ComParametro titulo='Componente com Parametro' texto='Parametro passado pelo Parent Component' /><hr />
            <Primeiro /><hr />
        </>
    )
}

export default App