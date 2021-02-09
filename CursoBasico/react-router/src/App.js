import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Navegacao from './components/navegacao/Navegacao'
import Home from './components/home/Home'
import Servicos from './components/servicos/Servicos'
import Contatos from './components/contatos/Contatos'

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Navegacao />

          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>

            <Route path='/servicos'>
              <Servicos />
            </Route>

            <Route path='/contatos'>
              <Contatos />
            </Route>
          </Switch>
        </div>
      </Router>

    )
  }
}

export default App;
