import React from 'react'
import './Card.css'

const Card = props => {

    const estilo = {
        backgroundColor: props.color || 'DarkOrchid',
        borderColor: props.color || 'DarkOrchid'
    }

    return (
        <div className='Card' style={estilo}>
            <div className='Title'>{props.titulo}</div>
            <div className='Content'>
                {props.children}
            </div>
        </div>
    )
}

export default Card