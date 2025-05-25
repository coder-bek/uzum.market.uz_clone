import React from 'react'
import "./footer.css"
import { FaApple, FaFacebookSquare, FaGooglePlay, FaTelegram } from 'react-icons/fa'
import { BsInstagram } from 'react-icons/bs'
import { FaSquareYoutube } from 'react-icons/fa6'

const Footer = () => {
    return <div className='container border-top flex_item-center_justify-beetwen mb'>
        <div className='mt'>
            <p className='footer-text1'>Biz haqimizda</p>
            <a href="#">Topshirish punktlari</a>
            <a href="#">Vakansiyalar</a>
        </div>
        <div className='mt'>
            <p className='footer-text1'>Foydalanuvchilarga</p>
            <a href="#">Biz bilan bog'lanish</a>
            <a href="#">Savol-Javob</a>
        </div>
        <div className='mt'>
            <p className="footer-text1">Tadbirkorlarga</p>
            <a href="#">Uzumda soting</a>
            <a href="#">Sotuvchi kabinetiga kirish</a>
            <a href="#">Topshirish punktini ochish</a>
        </div>
        <div className='mt'>
            <div>
                <p className='footer-text1'>Ilovani yuklab oling</p>
                <div className='flex'>
                    <a
                        className='app'
                        href="#"><FaApple size={30} /> AppStore</a>
                    <a
                        className='app'
                        href="#"><FaGooglePlay size={23} /> Google Play</a>
                </div>
            </div>
            <div>
                <p className='footer-text1'>Uzum ijtimoiy tarmoqlarda</p>
                <div className='flex2'>
                    <a
                        className='app'
                        href="#"><BsInstagram size={35} /></a>
                    <a
                        className='app'
                        href="#"><FaTelegram size={35} /></a>
                    <a
                        className='app'
                        href="#"><FaFacebookSquare size={35} /></a>
                    <a
                        className='app'
                        href="#"><FaSquareYoutube size={35} /></a>
                </div>
            </div>
        </div>
    </div>

}

export default Footer