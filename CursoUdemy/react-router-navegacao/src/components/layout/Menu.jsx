import React from 'react'
import { Link } from 'react-router-dom'
import './Menu.css'


const Menu = props => (
    <aside className='Menu'>
        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/param/123'>Param #1</Link></li>
                <li><Link to='/param/texto'>Param #2</Link></li>
                <li><Link to='/notFound'>Not Found</Link></li>
            </ul>
        </nav>
    </aside>
)

export default Menu