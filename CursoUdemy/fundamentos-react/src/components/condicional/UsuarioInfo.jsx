import React from 'react'
import If, { Else } from './if'

const UsuarioInfo = props => {

    const usuario = props.usuario || {}

    return (
        <div>

            {/* <If teste={usuario && usuario.nome}>
                Seja bem vindo <strong>{usuario.nome}</strong>
            </If>

            <If teste={!usuario || !usuario.nome}>
                Seja bem vindo <strong>Anônimo</strong>
            </If> */}

            <If teste={usuario && usuario.nome}>
                Seja bem vindo <strong>{usuario.nome}</strong>
                <Else>
                    Seja bem vindo <strong>Anônimo</strong>
                </Else>
            </If>

        </div>
    )
}

export default UsuarioInfo