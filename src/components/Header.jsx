import React, { useState, useEffect } from "react";
import { FaEnvelope, FaBatteryFull } from "react-icons/fa";
import { TiBatteryMid } from "react-icons/ti";

const Header = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const formattedTime = time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

    return (
        <header className="w-full border-b-4 border-black bg-transparent p-4 flex items-center justify-between">

            {/* Left: Name */}
            <div className="flex items-center gap-2">
                <h1 className="text-5xl rubik-glitch-regular">Pavan's Portfolio</h1>
            </div>

            {/* Center: Laptop line */}
            {/* Center: Laptop lines */}
            <div className="flex-1 mx-4 flex flex-col justify-center gap-1">
                <div className="w-full h-[3px] bg-black  rounded-full"></div>
                <div className="w-full h-[3px] bg-black  rounded-full"></div>
                <div className="w-full h-[3px] bg-black  rounded-full"></div>
                <div className="w-full h-[3px] bg-black  rounded-full"></div>
                <div className="w-full h-[3px] bg-black  rounded-full"></div>
                <div className="w-full h-[3px] bg-black  rounded-full"></div>
            </div>

            {/* Right: Email, battery, time */}
            <div className="flex items-center gap-4 text-xl unlock-regular">
                <div className="flex items-center gap-1 ">
                    <FaEnvelope size={40} />
                </div>
                <div className="flex items-center gap-1 h-8">
                    <TiBatteryMid size={50} />
                </div>
                <div>{formattedTime}</div>
            </div>

        </header>
    );
};

export default Header;
