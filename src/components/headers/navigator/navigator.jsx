import React, { useState } from 'react'
import "./navigator.css"
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { GoChevronDown, GoChevronUp } from 'react-icons/go'

const Navigator = () => {
    const [location, setLocation] = useState(false)
    
    return (
        <button
            onClick={() => setLocation(!location)}
            className='button'><HiOutlineLocationMarker size={23} /> Tashkent
            {location ? <GoChevronUp size={25} /> : <GoChevronDown size={25} />}
        </button>
    )
}

export default Navigator