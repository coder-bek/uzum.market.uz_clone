import React, { useState } from 'react'

const NavbarDrobdown = () => {
    const [drobdown, setDrobdown] = useState(false)
    const [language, setLanguage] = useState("uz")

    const languages = {
        uz: {
            title: "O'zbekcha",
            img: "../../../public/languageUz.png"
        },
        ru: {
            title: "Русский",
            img: "../../../public/languageRus.png"
        },
        eng: {
            title: "English",
            img: "../../../public/languageEng.webp"
        }
    }
    return (
        <div className='relative text-left flex'>
            <button
                onClick={() => setDrobdown(!drobdown)}
                className='inline-flex items-center gap-1 rounded-md'
            >
                <img
                    src={languages[language].img}
                    alt={language.title}
                    className="w-5 h-5 rounded-full"
                />
                <span>{languages[language].title}</span>
            </button>
            {drobdown && (
                <div className="absolute top-7 right-0 left-0 bg-white rounded-[3px] shadow-2xl">
                    {Object.keys(languages)
                        .filter(key => key !== language)
                        .map(key => (
                            <button
                                key={key}
                                onClick={() => {
                                    setLanguage(key);
                                    setDrobdown(!drobdown);
                                }}
                                className="flex items-center gap-2 px-3 py-2 w-[130px] hover:bg-gray-100 rounded-[3px] cursor-pointer"
                            >
                                <span>{languages[key].title}</span>
                            </button>
                        ))}
                </div>
            )}
        </div>
    )
}

export default NavbarDrobdown