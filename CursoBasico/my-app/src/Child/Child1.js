import React from 'react'

class Child extends React.Component{
    render(){
        return(
            <div>
                <h3>Parent Component &gt; Child Component</h3>
                <p>Valor alterado pelo Parent Component e renderizado pelo Child Component: <strong>{this.props.valor}</strong></p>
            </div>
        )
    }
}

export default Child