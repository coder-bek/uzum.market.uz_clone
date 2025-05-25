import React from 'react'
import { FaApple, FaFacebookF, FaFacebookSquare, FaGooglePlay, FaInstagram, FaTelegram, FaYoutube } from 'react-icons/fa'
import { BsInstagram } from 'react-icons/bs'
import { FaSquareYoutube } from 'react-icons/fa6'
import { BiLogoTelegram } from 'react-icons/bi'

const Footer = () => {
    return <div className='max-w-[1250px] mx-auto flex justify-between border-t-1 border-gray-400 mt-5 mb-12'>
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
                        className='flex items-center gap-0.5 '
                        href="#">
                        <img
                            src="https://png.pngtree.com/png-vector/20230817/ourmid/pngtree-google-play-download-icon-vector-png-image_9183313.png"
                            alt=""
                            className='w-7'
                        />
                        Google Play
                    </a>
                </div>
            </div>
            <div className='mt-5'>
                <p className='font-medium text-[15px]'>Uzum ijtimoiy tarmoqlarda</p>
                <div className='flex gap-2.5 mt-1.5'>
                    <a
                        className='bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600  p-1 rounded'
                        href="#">
                        <FaInstagram
                            size={35}
                            className='text-white'
                        />
                    </a>
                    <a
                        className='bg-blue-500 p-1 rounded'
                        href="#">
                        <BiLogoTelegram
                            size={35}
                            className='text-white'
                        />
                    </a>
                    <a
                        className='bg-blue-700 p-1 rounded'
                        href="#">
                        <FaFacebookF
                            size={35}
                            className='text-white'
                        />
                    </a>
                    <a
                        className='bg-red-600 p-1 rounded'
                        href="#">
                        <FaYoutube
                            size={35}
                            className='text-white'
                        />
                    </a>
                </div>
            </div>
        </div>
    </div>

}

export default Footer