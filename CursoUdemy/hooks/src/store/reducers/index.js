// Função que será passada para o useReducer
// state corresponde ao estado inicial atualizado
// action carregará os atributos na propriedade payload (carga útil)

export function reducer(state, action) {
    switch (action.type) {
        case 'number':
            return { ...state, number: state.number + 2 }
        case 'user':
            return { ...state, user: { name: action.payload } }
        default:
            return state
    }
}