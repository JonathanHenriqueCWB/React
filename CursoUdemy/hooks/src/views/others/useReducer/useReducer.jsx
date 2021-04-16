import React, { useReducer } from 'react'
import './useReducer.css'

import BlueCard from '../../../components/style/blueCard/BlueCard'
// Importa o initialStae, o initialState carregara tbm o reducer
import { initialState, reducer } from '../../../store/index'
// Importa as actions receberão
import { number, user } from '../../../store/actions/index'

const UseReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <BlueCard>
                <h1>Hook - useReducer</h1>
            </BlueCard>

            <div className='UseReducer'>
                <p>{state.user ? <span>{state.user.name}</span> : <span>Anonimo</span>}</p>
                <button onClick={() => user(dispatch, 'Super Mario')}>Login</button>

                <p>{state.number}</p>
                <button onClick={() => number(dispatch)}>Contador</button>
            </div>
        </div>
    )
}

export default UseReducer

// button > Function/Actions(dispatch, args) > reducer/dispatch(obejeto) > estado atualizado