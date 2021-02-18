import React from 'react'
import IndiretoFilho from './IndiretaFilho'

const IndiretaPai = () => {

    // Função será passada como props pro filho
    function receberInfo(nome, idade){
        console.log(nome, idade)
    }

    return (
        <div>
            <div>Pai</div>
            <IndiretoFilho funcaoDoPai={receberInfo}/>
        </div>
    )
}

export default IndiretaPai