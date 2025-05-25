import React, { useEffect, useState } from 'react'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { GoChevronDown, GoChevronUp } from 'react-icons/go'
import NavigatorDropdown from './navigatorDrobdown'

const Navigator = () => {
    const [location, setLocation] = useState(false)
    const [selectedCity, setSelectedCity] = useState(() => {
        return localStorage.getItem("selectedCity") || "Toshkent"
    });

    useEffect(() => {
        const stored = localStorage.getItem("selectedCity")
        if (stored) setSelectedCity(stored)
    }, []);

    const handleCitySelect = (city) => {
        localStorage.setItem("selectedCity", city)
        setSelectedCity(city)
        setLocation(false)
    };

    return (
        <>
            <button
                onClick={() => setLocation(!location)}
                className='flex items-center gap-1 cursor-pointer font-medium'
            >
                <HiOutlineLocationMarker size={23} />
                <span>{selectedCity}</span>
                {location ? <GoChevronUp size={25} /> : <GoChevronDown size={25} />}
            </button>

            {location && (
                <NavigatorDropdown
                    onClose={() => setLocation(false)}
                    onSelectCity={handleCitySelect}
                />
            )}
        </>
    )
}

export default Navigator
