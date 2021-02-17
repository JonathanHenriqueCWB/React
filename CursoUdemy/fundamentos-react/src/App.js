import React from 'react'
import './App.css'

import Card from './components/layout/Card'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'
import Familia from './components/basicos/Familia'
import FamiliaMenbro from './components/basicos/FamiliaMenbro'
import ListaAlunos from './components/repeticao/ListaAlunos'
import Produtos from './components/repeticao/TabelaProdutos'
import ParOuImpar from './components/condicional/ParOuImpar'
import UsuarioInfo from './components/condicional/UsuarioInfo'
import DiretaPai from './components/comunicacao/DiretaPai'

const App = () => {
    return (
        <div className='Cards'>

            <Card titulo='Comunicação direta' color='#9c9c9c'>
                <DiretaPai texto='Valor vindo do App component'/>
            </Card>

            <Card titulo='Renderização condicional'>
                <ParOuImpar valor={3} />

                <UsuarioInfo usuario={{nome:'Jose'}} />
            </Card>

            <Card titulo='Repetição desafio' color='#ffc800'>
                <Produtos />
            </Card>

            <Card titulo='Repetição' color='#66A594'>
                <ListaAlunos />
            </Card>

            <Card titulo='Child component' color='#dc533f'>
                <Familia sobrenome='Silva'>
                    <FamiliaMenbro nome='Pedro' />
                    <FamiliaMenbro nome='Ana' />
                    <FamiliaMenbro nome='Gustavo' />
                    <FamiliaMenbro nome='José' />
                </Familia>
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