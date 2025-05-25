import React, { useState, useRef } from 'react';
import { IoMdClose } from 'react-icons/io';
import data from "../../data";
import { nanoid } from "nanoid";
import { FaChevronRight } from 'react-icons/fa';

const NavigatorDropdown = ({ onClose, onSelectCity }) => {
    const { geoLocation } = data;
    const [filteredCities, setFilteredCities] = useState(geoLocation);
    const searchInputRef = useRef(null);
    const handleSearch = () => {
        const query = searchInputRef.current.value.toLowerCase();

        const results = geoLocation.filter(city =>
            city.toLowerCase().includes(query)
        );
        setFilteredCities(results);
    };

    const handleCityClick = (city) => {
        onSelectCity(city);
        localStorage.setItem("selectedCity", city);
        onClose();
    };

    return (
        <>
            <div
                onClick={onClose}
                className="fixed inset-0 bg-[#00000070] bg-opacity-10 backdrop-blur-[2px] z-40"
            />

            <div className="fixed top-[10%] left-1/2 -translate-x-1/2 bg-[#EDEFF2] w-1/2 h-[82%] overflow-y-scroll rounded-lg px-10 z-50 shadow-lg">
                <div className="sticky top-0 bg-[#EDEFF2] z-50 py-8">
                    <div className='flex items-center justify-between mb-5'>
                        <h1 className="font-medium text-3xl">Shaharni tanlang</h1>
                        <span
                            onClick={onClose}
                            className="border-2 border-red-500 text-red-500 rounded-full cursor-pointer p-1 hover:bg-red-100 transition"
                        >
                            <IoMdClose size={25} />
                        </span>
                    </div>
                    <input
                        ref={searchInputRef}
                        onChange={handleSearch}
                        type="text"
                        placeholder="Shaharni topish..."
                        className="sticky w-full bg-[#b2b2b277] outline-none text-xl p-2.5 rounded-lg"
                    />
                </div>
                <div className="-mb-2.5">
                    {filteredCities.length > 0 ? (
                        filteredCities.map(city => (
                            <p
                                key={nanoid()}
                                onClick={() => handleCityClick(city)}
                                className="cursor-pointer border-t text-[17px] flex items-center justify-between px-2.5 h-[40px] hover:bg-gray-300 transition"
                            >
                                {city} <FaChevronRight />
                            </p>
                        ))
                    ) : (
                        <p>Bu shaharda hozir yetkazib berish ishlamayapti</p>
                    )}
                </div>
            </div>
        </>
    );
};

export default NavigatorDropdown;
