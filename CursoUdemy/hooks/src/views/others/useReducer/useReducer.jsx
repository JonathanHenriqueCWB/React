import React, { useReducer } from 'react'
import BlueCard from '../../../components/style/blueCard/BlueCard'

const initialState = {
    number: 0,
    cart: [],
    products: [],
    user: null,
}

function reducer(state, action) {

    switch (action.type) {
        case 'addToNumber':
            return { ...state, number: state.number + 2 }
        case 'login':
            return { ...state, user: { name: action.name } }
        default:
            return state
    }

}

const UseReducer = () => {

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <BlueCard>
                <h1>Hook - useReducer</h1>
            </BlueCard>

            <div>
                <div>
                    {
                        state.user ? <span>{state.user.name}</span> : <span>Anonimo</span>
                    }
                </div>
                <span>{state.number}</span>
                <div>
                    <button onClick={() => dispatch({type: 'login', name: 'Yosh'})}>Login</button>
                    <button onClick={() => dispatch({ type: 'addToNumber' })}>+2</button>
                </div>
            </div>
        </div>
    )
}

export default UseReducer

/**
 *  Reducer recebe a ultima condição atual do estado
 *  e um action
 */