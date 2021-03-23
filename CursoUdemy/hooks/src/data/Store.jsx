import React, { useState } from 'react'

// Criando um objeto
const initialState = {
    number: 0,
    text: 'Trabalhando com hook useContext'
}

// Criando um contexto e adicionando o objeto
export const AppContext = React.createContext(initialState)

const Store = props => {

    // Criando um estado, receberá o objeto vindo do contexto!
    const [state, setState] = useState(initialState)

    // Função de manipulação do estado
    function updateState(key, value){
        setState({
            ...state,
            [key]: value,
        })
    }

    return (
        <AppContext.Provider value={{
            number: state.number,
            text: state.text,
            setNumber: n => updateState('number', n),
            setText: t => updateState('text', t)
        }}>

            <div>
                {props.children}
            </div>

        </AppContext.Provider>
    )
}

export default Store