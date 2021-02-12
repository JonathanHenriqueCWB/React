import React from 'react'
import './App.css'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'
import Card from './components/layout/Card'
import Familia from './components/basicos/Familia'

const App = () => {
    return (
        <div className='Cards'>
            <Card titulo='Child component' color='#dc533f'>
                <Familia sobrenome='Silva'/>
            </Card>
            <Card titulo='Desafio aleatório' color='#fddf00' >
                <Aleatorio min={10} max={50} />
            </Card>
            <Card titulo='Fragment' color='#73f900'>
                <Fragmento />
            </Card>
            <Card titulo='Function Component com parâmetros' color='#a030cc'>
                <ComParametro titulo='Componente com Parametro' texto='Parametro passado pelo Parent Component' />
            </Card>
            <Card titulo='Primeiro component' color='#80f9ed'>
                <Primeiro />
            </Card>
        </div>
    )
}

export default App