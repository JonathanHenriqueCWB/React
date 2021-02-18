import React from 'react'

export default props => {
    return (
        <div>
            <div>Filho</div>

            <button onClick={function (e) {
                props.funcaoDoPai('Jão', 37)
            }}>Fornecer Informações</button>

            <button onClick={e => props.funcaoDoPai('Bianca', 23)}>Fornecer Informações</button>

        </div>
    )
}