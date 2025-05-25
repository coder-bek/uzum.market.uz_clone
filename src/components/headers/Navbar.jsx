import React from 'react'
import Navigator from './navigator'
import NavbarDrobdown from './navbarDrobdown'

const Navbar = () => {
    return (
        <header>
            <div className='bg-[#F0F2F5] py-1'>
                <div className="max-w-[1250px] mx-auto flex items-center justify-between">
                    <div className='flex items-center gap-2.5'>
                        <Navigator />
                        <a className='font-medium' href="#">Topshirish punktlari</a>
                    </div>
                    <ul className='flex items-center gap-2.5'>
                        <li className='border-r-2 border-blue-500 pr-2.5'><a href="#" className='text-blue-500'>Sotuvchi bo'lish</a></li>
                        <li><a href="#" className='text-blue-500'>Topshirish punktini ochish</a></li>
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