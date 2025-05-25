import React from 'react'
import Navigator from './navigator/navigator'
import "./Navbar.css"

const Navbar = () => {
    return (
        <header>
            <div className='bg-color'>
                <div className="container flex3">
                    <Navigator />
                    <a className='navbar_a' href="#">Topshirish punktlari</a>
                </div>
            </div>
            <nav>

            </nav>
        </header>
    )
}

export default Navbar