import React from 'react'
import { FaApple, FaFacebookSquare, FaGooglePlay, FaTelegram } from 'react-icons/fa'
import { BsInstagram } from 'react-icons/bs'
import { FaSquareYoutube } from 'react-icons/fa6'

const Footer = () => {
    return <div className='max-w-[1250px] mx-auto flex justify-between border-t-1 border-gray-400 mb-12'>
        <div className='flex flex-col mt-5'>
            <p className='font-medium text-[15px]'>Biz haqimizda</p>
            <a
                href="#"
                className='text-gray-400 text-[14px]'
            >Topshirish punktlari
            </a>
            <a
                href="#"
                className='text-gray-400 text-[14px]'
            >Vakansiyalar
            </a>
        </div>
        <div className='flex flex-col mt-5'>
            <p className='font-medium text-[15px]'>Foydalanuvchilarga</p>
            <a
                href="#"
                className='text-gray-400 text-[14px]'
            >Biz bilan bog'lanish
            </a>
            <a
                href="#"
                className='text-gray-400 text-[14px]'
            >Savol-Javob
            </a>
        </div>
        <div className='flex flex-col mt-5'>
            <p className="font-medium text-[15px]">Tadbirkorlarga</p>
            <a
                href="#"
                className='text-gray-400 text-[14px]'
            >Uzumda soting
            </a>
            <a
                href="#"
                className='text-gray-400 text-[14px]'
            >Sotuvchi kabinetiga kirish
            </a>
            <a
                href="#"
                className='text-gray-400 text-[14px]'
            >Topshirish punktini ochish
            </a>
        </div>
        <div className='flex flex-col mt-5'>
            <div>
                <p className='font-medium text-[15px]'>Ilovani yuklab oling</p>
                <div className='flex ite items-center gap-3 mt-1.5'>
                    <a
                        className='flex items-center gap-0.5'
                        href="#"><FaApple size={30} /> AppStore</a>
                    <a
                        className='flex items-center gap-0.5'
                        href="#"><FaGooglePlay size={23} /> Google Play</a>
                </div>
            </div>
            <div className='mt-5'>
                <p className='font-medium text-[15px]'>Uzum ijtimoiy tarmoqlarda</p>
                <div className='flex gap-2.5 mt-1.5'>
                    <a
                        className='bg-gray-300 p-1 rounded'
                        href="#"><BsInstagram size={35} /></a>
                    <a
                        className='bg-gray-300 p-1 rounded'
                        href="#"><FaTelegram size={35} /></a>
                    <a
                        className='bg-gray-300 p-1 rounded'
                        href="#"><FaFacebookSquare size={35} /></a>
                    <a
                        className='bg-gray-300 p-1 rounded'
                        href="#"><FaSquareYoutube size={35} /></a>
                </div>
            </div>
        </div>
    </div>

}

export default Footer