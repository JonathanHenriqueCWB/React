import React from 'react'
import Noticia from './noticia'

class App extends React.Component {
  
  constructor(props) {
    super(props)
  }

  render() {
    
    console.log('Proprieade do typo Array: ', typeof this.props.n)
    console.log('Propriedade do tipo string: ', typeof this.props.texto)

    const noticiaFinal = this.props.n.map(n => <Noticia key={n.id} noticia={n} />)

    return (
      <div>
        <h1>Hello World</h1>

        <Noticia noticia={this.props.n[0]} />
        {noticiaFinal}

        <p>{this.props.texto}</p>
      </div>
    )
  }
}

export default App

/* 
  A propriedade do typo Array chegará em formato de object
  Para acessar a propriedade devera chamala exatamente pelo mesmo nome da classe Pai,
  pois poderão ser passada mais de uma propriedade, portanto cada uma leva seu proprio
  nome
*/