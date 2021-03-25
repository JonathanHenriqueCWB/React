import React from 'react'
import './Menu.css'
import { Link } from 'react-router-dom'

const Menu = () => (
    <header className='Menu'>
        <nav>
            <ul>
                <li><Link to="/">useState()</Link></li>
                <li><Link to="/effect">useEffect()</Link></li>
                <li><Link to="/ref">useRef()</Link></li>
                <li><Link to="/memo">useMemo()</Link></li>
                <li><Link to="/back">useCallback()</Link></li>
                <li><Link to="/context">useContext()</Link></li>
                <li><Link to='/reducer'>useReducer()</Link></li>
                
                {
                    /*
                        <li><a href="/">useReducer()</a></li>
                        <li><a href="/">useMyHook()</a></li>
                    */
                }
            </ul>
        </nav>
    </header>
)

export default Menu