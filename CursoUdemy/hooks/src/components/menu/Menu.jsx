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
                {
                    /*
                        <li><a href="/">useMono()</a></li>
                        <li><a href="/">useCallback()</a></li>
                        <li><a href="/">useContext()</a></li>
                        <li><a href="/">useReducer()</a></li>
                        <li><a href="/">useMyHook()</a></li>
                    */
                }
            </ul>
        </nav>
    </header>
)

export default Menu