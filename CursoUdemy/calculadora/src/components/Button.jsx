import React from 'react'
import './Button.css'


const Button = props => {

    let estilo = 'button '
    estilo += props.operation ? 'operation ' : ''
    estilo += props.double ? 'double ' : ''
    estilo += props.triple ? 'triple ' : ''
    
    return (
        
        <button className={estilo} onClick={e => props.funcao(props.label)}>
            {props.label}
        </button>
    )
    
}

export default Button

/*  VARIÁVEL ESTILO

    Irá verifica uma propriedade do parent compoente
    Casso essa propriedade exista ira aplica-la
    junto ao estilo padrão (button) 
*/