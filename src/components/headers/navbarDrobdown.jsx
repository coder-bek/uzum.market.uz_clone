import React, { useState } from 'react'
import { toast } from 'sonner'

const NavbarDrobdown = () => {
    const [drobdown, setDrobdown] = useState(false)
    const [language, setLanguage] = useState("uz")

    const languages = {
        uz: {
            title: "UZ",
            img: "../../../public/languageUz.png"
        },
        ru: {
            title: "РУС",
            img: "../../../public/languageRus.png"
        },
        eng: {
            title: "ENG",
            img: "../../../public/languageEng.webp"
        }
    }

    const handleLanguageChange = (key) => {
        setLanguage(key)
        setDrobdown(false)
        toast.success(`${languages[key].title} tanlandi ✅`)
    }

    return (
        <div className='relative text-left flex'>
            <button
                onClick={() => setDrobdown(!drobdown)}
                className='inline-flex items-center gap-1 rounded-md cursor-pointer'
            >
                <img
                    src={languages[language].img}
                    alt={languages[language].title}
                    className="w-5 h-5 rounded-full"
                />
                <span>{languages[language].title}</span>
            </button>

            {drobdown && (
                <div className="absolute top-7 bg-white rounded-[3px] shadow-2xl z-50">
                    {Object.keys(languages)
                        .filter(key => key !== language)
                        .map(key => (
                            <div className='overflow-hidden'>
                                <button
                                    key={key}
                                    onClick={() => handleLanguageChange(key)}
                                    className="flex items-center px-4 w-full p-1 text-center hover:bg-gray-100 rounded-[3px] cursor-pointer"
                                >
                                    <span>{languages[key].title}</span>
                                </button>
                            </div>
                        ))}
                </div>
            )}
        </div>
    )
}

export default NavbarDrobdown
