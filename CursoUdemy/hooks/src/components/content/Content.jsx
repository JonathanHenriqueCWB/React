import React from 'react'
import './Content.css'
import { Switch, Route } from 'react-router-dom'

import UseState from '../../views/others/useState/UseState'
import UseEffect from '../../views/others/useEffect/UseEffect'
import UseRef from '../../views/others/useRef/UseRef'
import UseMemo from '../../views/others/useMemo/UseMemo'
import UseCallback from '../../views/others/useCallback/UseCallback'
import UseContext from '../../views/others/useContext/UseContext'

import Erro from '../../views/others/notFound/NotFound'

const Content = () => (
    <article className='Content'>
        <Switch>
            <Route exact path='/'>
                <UseState />
            </Route>

            <Route path='/effect'>
                <UseEffect />
            </Route>

            <Route path='/ref'>
                <UseRef />
            </Route>

            <Route path='/memo'>
                <UseMemo />
            </Route>

            <Route path='/back'>
                <UseCallback />
            </Route>

            <Route path='/context' >
                <UseContext />
            </Route>

            <Route path='*'>
                <Erro />
            </Route>
        </Switch>
    </article>
)

export default Content