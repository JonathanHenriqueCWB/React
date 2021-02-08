import React from 'react'
import Clientes from "./Clientes/Clientes";
import Noticia from './Noticias/Noticia'
import Child1 from './Child/Child1'
import Child2 from './Child/Child2'

class App extends React.Component {

  constructor(props) {
    super(props)
  }

  state = {
    nome: 'Geralt',
    sobrenome: 'of Rivia'
  }

  Alterar = e => this.state.nome === 'Geralt' ? this.setState({ nome: 'GERALT' }) : this.setState({ nome: 'Geralt' })

  render() {

    const noticiaFinal = this.props.n.map(n => <Noticia key={n.id} noticia={n} />)

    return (
      <div>
        {
          // <Clientes nome={this.state.nome} sobrenome={this.state.sobrenome} />
        }

        {
          /**
           <h1>Class Component</h1>
           <Noticia noticia={this.props.n[0]} />
           {noticiaFinal}
           <p>{this.props.texto}</p>
           <hr />           
           */
        }

        <h1>Fluxo de dados</h1>
        <hr />
        <Child1 valor={this.state.nome} />
        <button onClick={this.Alterar}>Alterar</button>

        <Child2 funcaoAlterar={this.Alterar} />
        <p>Valor alterado pelo Child Component e renderizado no Parent Component <strong>{this.state.nome}</strong></p>
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

  Para alterar o valor em um Parent Componente basta chamar uma função por evento
  Para alterar o valor pelo Child Component basta passar a função como parametro para o Child
*/