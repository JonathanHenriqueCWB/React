import React from 'react'
import './Display.css'

const Dispolay = props => {
    return (
        <div className='display'>
            {props.value}
        </div>
    )
}

export default Dispolay