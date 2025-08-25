import React, { useState, useEffect } from "react";
import { FaEnvelope } from "react-icons/fa";
import { TiBatteryMid } from "react-icons/ti";
import { IoCloseCircle } from "react-icons/io5";
import { IoMdCloseCircleOutline } from "react-icons/io";

const ModelHeader = ({ onClose }) => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const formattedTime = time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

    return (
        <header className="w-full border-b-4 border-black bg-transparent p-4 flex items-center justify-between">

            {/* Left: Close icon */}
            <div className="flex items-center gap-2">
                <div
                    className="flex items-center justify-center w-14 h-14 cursor-pointer rounded-full border-2 border-black hover:border-b-4 hover:border-r-4 transition-all duration-200 bg-transparent"
                    onClick={onClose}
                >
                    <span className="text-2xl font-bold select-none rubik-glitch-regular">X</span>
                </div>
            </div>



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

export default ModelHeader;
