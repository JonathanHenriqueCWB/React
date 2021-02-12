import React from 'react'

import FamiliaMenbro from './FamiliaMenbro'

const Familia = props => {
    return (
        <div>
            <p>Parent Compoenent</p>
            <FamiliaMenbro nome='Marcos' sobrenome='Silva' />
            <FamiliaMenbro nome='Amanda' {...props} />
            <FamiliaMenbro nome='Marcos' sobrenome={props.sobrenome} />
        </div>
    )
}

export default Familia