import React from 'react'
import { IoMdClose } from 'react-icons/io'
import { LuGalleryVerticalEnd } from 'react-icons/lu'

const Cataloginput = () => {
    const [catalogTogle, setCatalogTogle] = React.useState(false)
    return (
        <div className='relative'>
            <div className='flex items-center gap-2.5'>
                <button
                    onClick={() => setCatalogTogle(!catalogTogle)}
                    className='flex items-center gap-1 cursor-pointer transition-all bg-[#E5E5FF] hover:bg-[#cbcbff] py-2 px-5 rounded'
                >
                    {catalogTogle ? <IoMdClose size={23} /> : <LuGalleryVerticalEnd size={23} />}
                    Katalog
                </button>
            </div>
            {catalogTogle && <div className='absolute'>dfgh</div>}
        </div>
    )
}

export default Cataloginput