import React from 'react'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'
import Card from './components/layout/Card'

const App = () => {
    return (
        <>

            <Card titulo='Desafio aleatório' >
                <Aleatorio min={10} max={50} />
            </Card>
            <Card titulo='Fragment'>
                <Fragmento />
            </Card>
            <Card titulo='Function Component com parâmetros'>
                <ComParametro titulo='Componente com Parametro' texto='Parametro passado pelo Parent Component' />
            </Card>
            <Card titulo='Primeiro component'>
                <Primeiro />
            </Card>
        </>
    )
}

export default App