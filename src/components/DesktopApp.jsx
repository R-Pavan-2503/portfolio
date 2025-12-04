// components/DesktopApp.jsx
import React from "react";

const DesktopApp = ({ title, icon, onClick }) => {
    return (
        <div
            className="flex flex-col items-center justify-center cursor-pointer transition-transform duration-200 hover:scale-110"
            onClick={onClick}
        >
            <div className="text-8xl sm:text-7xl md:text-9xl">{icon}</div> {/* Icon size - responsive */}
            <span className="mt-1 text-xl sm:text-2xl md:text-3xl text-black font-semibold unlock-regular">{title}</span>
        </div>
    );
};

export default DesktopApp;
