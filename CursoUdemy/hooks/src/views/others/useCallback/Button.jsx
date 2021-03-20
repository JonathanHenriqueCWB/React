import React from 'react'

const Button = props => {

    console.log('render...')

    return (
        <div>
            <button onClick={() => props.funcao(props.value)}>{props.value}</button>
        </div>
    )
} 

// Necessário cachiar para usar o useCallback
/* 
    Caso valores passados por parametro sejam o mesmo,
    retornara o mesmo componente, ou seja, não renderizará outro 
    componente 
*/
export default React.memo(Button)