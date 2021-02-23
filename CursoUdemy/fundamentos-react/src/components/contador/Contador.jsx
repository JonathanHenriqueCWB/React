import React from 'react'

import Display from './Display'
import Botao from './Botao'
import PassoForm from './PassoForm'

class Contador extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            numero: this.props.numero || 0,
            passo: this.props.passo || 1
        }
    }

    inc = event => this.setState({ numero: this.state.numero + this.state.passo })
    dec = event => this.setState({ numero: this.state.numero - this.state.passo })
    alterarPasso = event => this.setState({ passo: + event.target.value })

    render() {
        return (
            <div>
                <Display numero={this.state.numero} />
                <PassoForm funcAlterarPasso={this.alterarPasso} passo={this.state.passo}/>
                <Botao funcIncrementar={this.inc} funcDecrementar={this.dec} />
            </div>
        )
    }
}

export default Contador