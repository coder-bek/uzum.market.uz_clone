import React from 'react'
import Navigator from './navigator/navigator'
import "./Navbar.css"
import NavbarDrobdown from './drobdown/navbarDrobdown'

const Navbar = () => {
    return (
        <header>
            <div className='bg-color'>
                <div className="container flex3">
                    <div className='flex3'>
                        <Navigator />
                        <a className='navbar_a' href="#">Topshirish punktlari</a>
                    </div>
                    <ul className='flex3'>
                        <li><a href="#" className='text-blue'>Sotuvchi bo'lish</a></li>
                        <li><a href="#" className='text-blue'>Topshirish punktini ochish</a></li>
                        <li><a href="#" className='navbar_a'>Savol-Javob</a></li>
                        <li><a href="#" className='navbar_a'>Buyurtmalarim</a></li>
                        <NavbarDrobdown />
                    </ul>
                </div>
            </div>
            <nav>

            </nav>
        </header>
    )
}

export default Navbar