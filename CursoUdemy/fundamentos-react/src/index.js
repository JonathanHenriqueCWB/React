import './index.css'
import ReactDOM from 'react-dom'
import React from 'react'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'

// Variávels/Constantes
const comParametro = 'Parametro passado do Parent Component'

ReactDOM.render(
    <div>
        <Primeiro />
        <ComParametro texto={comParametro} titulo='Function Componente com parametro' />
        <Fragmento />
    </div>
    , document.getElementById('root'))