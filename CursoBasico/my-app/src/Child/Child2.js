import React from 'react'

class Child extends React.Component {

    Alterar = e => this.props.funcaoAlterar()

    render() {
        return (
            <div>
                <h3>Child Component &gt; Parent Child</h3>
                <button onClick={this.Alterar}>Alterar</button>
            </div>
        )
    }
}

export default Child