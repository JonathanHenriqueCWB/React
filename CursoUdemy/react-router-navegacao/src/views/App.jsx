import { BrowserRouter as Router } from 'react-router-dom'
import React from 'react'
import './App.css'


import Menu from '../components/layout/Menu'
import Content from '../components/layout/Content'

class App extends React.Component {
    render() {
        return (
            <div className='App'>
                <Router>
                    <Menu />
                    <Content />
                </Router>
            </div>
        )
    }
}

export default App