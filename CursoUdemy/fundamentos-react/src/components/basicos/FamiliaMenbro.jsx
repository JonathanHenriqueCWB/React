import React from 'react'

class FamiliaMenbro extends React.Component {
    render() {
        return (
            <div>
                <span>{this.props.nome}<strong> {this.props.sobrenome}</strong></span>
            </div>
        )
    }
}

export default FamiliaMenbro