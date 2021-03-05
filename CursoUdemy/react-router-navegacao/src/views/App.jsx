import React from 'react'
import './App.css'

import Menu from '../components/layout/Menu'
import Content from '../components/layout/Content'

class App extends React.Component {
    render() {
        return (
            <div className='App'>
                <h1>App Component</h1>
                <hr />

                <Menu />
                <Content />
            </div>
        )
    }
}

export default App