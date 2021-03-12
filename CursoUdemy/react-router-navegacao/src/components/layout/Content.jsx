import { Switch, Route } from 'react-router-dom'
import React from 'react'
import './Content.css'

import About from '../../views/examples/About'
import Home from '../../views/examples/Home'
import Param from '../../views/examples/Parametros'

const Content = props => {
    return (
        <main className='Content'>
            <Switch>
                {/** :id significa que receberá um parametro chamad id */}
                <Route path='/param/:id'>
                    <Param />
                </Route>
                <Route path='/about'>
                    <About />
                </Route>
                <Route path='/'>
                    <Home />
                </Route>
            </Switch>
        </main>
    )
}

export default Content