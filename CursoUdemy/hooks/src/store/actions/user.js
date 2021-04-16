/*
    Essa função recebe o dispatch(reducer) como paramero, constroi o objeto
    com os parametros type e payload utilizando um atributo vindo da requisição
    como chave valor de payload e envia para a função reducer, que se encarregara
    de atualizar o estado do objeto initialState
*/
export default function user(dispatch, name) {
    dispatch({ type: 'user', payload: name })
}