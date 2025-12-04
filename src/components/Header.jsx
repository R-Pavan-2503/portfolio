import React, { useState, useEffect } from "react";
import { FaEnvelope, FaBatteryFull } from "react-icons/fa";
import { TiBatteryMid } from "react-icons/ti";

const Header = ({ onEmailClick }) => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const formattedTime = time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

    return (
        <header className="w-full border-b-4 border-black bg-transparent p-2 sm:p-4 flex items-center justify-between">

            {/* Left: Name - Responsive sizing */}
            <div className="flex items-center gap-2">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl rubik-glitch-regular">Pavan's Portfolio</h1>
            </div>

            {/* Center: Laptop lines - Hidden on mobile */}
            <div className="hidden md:flex flex-1 mx-4 flex-col justify-center gap-1">
                <div className="w-full h-[3px] bg-black rounded-full"></div>
                <div className="w-full h-[3px] bg-black rounded-full"></div>
                <div className="w-full h-[3px] bg-black rounded-full"></div>
                <div className="w-full h-[3px] bg-black rounded-full"></div>
                <div className="w-full h-[3px] bg-black rounded-full"></div>
                <div className="w-full h-[3px] bg-black rounded-full"></div>
            </div>

            {/* Right: Email, battery, time - Responsive */}
            <div className="flex items-center gap-2 sm:gap-4 text-sm sm:text-xl unlock-regular">
                <div
                    className="flex items-center gap-1 cursor-pointer hover:scale-110 transition-transform"
                    onClick={onEmailClick}
                    title="Contact Info"
                >
                    <FaEnvelope className="text-2xl sm:text-3xl lg:text-4xl" />
                </div>
                <div className="hidden sm:flex items-center gap-1 h-8">
                    <TiBatteryMid size={50} className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />
                </div>
                <div className="text-xs sm:text-base lg:text-xl">{formattedTime}</div>
            </div>

        </header>
    );
};

export default Header;
