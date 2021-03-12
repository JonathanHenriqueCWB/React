import {Switch, Route} from 'react-router-dom'
import React from 'react'
import './Content.css'

import About from '../../views/examples/About'
import Home from '../../views/examples/Home'

const Content = props => {
    return (
        <main className='Content'>
            <Switch>
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