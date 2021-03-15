import React from 'react'
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'

import Menu from '../../components/menu/Menu'
import Content from '../../components/content/Content'

class App extends React.Component {
    render() {
        return (
            <main className='App'>
                <Router>
                    <Menu />
                    <Content />
                </Router>
            </main>
        )
    }
}

export default App