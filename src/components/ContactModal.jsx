import React from "react";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaCalendar, FaUser } from "react-icons/fa";
import ModelHeader from "./ModelHeader";

const ContactModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const contactInfo = {
        name: "R. PAVAN",
        email: "sara.pavansriram@gmail.com",
        phone: "8667410621",
        dob: "25/03/2005",
        linkedin: "https://linkedin.com/in/rpavan2503/",
        github: "https://github.com/R-Pavan-2503"
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Backdrop */}
            <div className="absolute inset-0 backdrop-blur-md bg-black/10"></div>

            {/* Modal content - RESPONSIVE */}
            <div className="relative w-full h-full sm:w-11/12 sm:h-5/6 md:w-4/5 md:h-4/5 flex flex-col overflow-hidden shadow-lg modal-border sm:rounded-[45px] notebook-bg z-10">
                <ModelHeader onClose={onClose} />

                <div className="flex-1 p-4 sm:p-6 md:p-8 overflow-y-auto flex flex-col justify-center">
                    {/* Header with Icon - Responsive */}
                    <div className="text-center mb-4 sm:mb-6 md:mb-8">
                        <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-black rounded-full mb-3 sm:mb-4 border-4 border-black shadow-lg">
                            <FaUser className="text-white text-2xl sm:text-3xl md:text-4xl" />
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold unlock-regular">{contactInfo.name}</h2>
                        <p className="text-sm sm:text-base md:text-lg chakra-petch-light text-gray-600 mt-2">Software Engineer • AI/ML Enthusiast</p>
                    </div>

                    {/* Contact Cards - Responsive Grid: 1 col mobile, 2 cols desktop */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6 max-w-5xl mx-auto w-full">
                        {/* Email Card */}
                        <div className="border-4 border-black rounded-2xl p-4 sm:p-5 md:p-6 bg-white hover:bg-gray-50 transition-all hover:scale-105 shadow-lg">
                            <div className="flex items-center gap-3 sm:gap-4">
                                <div className="bg-red-100 p-3 sm:p-4 rounded-xl flex-shrink-0">
                                    <FaEnvelope className="text-2xl sm:text-3xl text-red-600" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-xs sm:text-sm chakra-petch-semibold text-gray-500 mb-1">EMAIL</p>
                                    <a href={`mailto:${contactInfo.email}`} className="text-sm sm:text-base md:text-lg chakra-petch-regular hover:underline truncate block font-semibold text-black">
                                        {contactInfo.email}
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Phone Card */}
                        <div className="border-4 border-black rounded-2xl p-4 sm:p-5 md:p-6 bg-white hover:bg-gray-50 transition-all hover:scale-105 shadow-lg">
                            <div className="flex items-center gap-3 sm:gap-4">
                                <div className="bg-green-100 p-3 sm:p-4 rounded-xl flex-shrink-0">
                                    <FaPhone className="text-2xl sm:text-3xl text-green-600" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-xs sm:text-sm chakra-petch-semibold text-gray-500 mb-1">PHONE</p>
                                    <a href={`tel:${contactInfo.phone}`} className="text-sm sm:text-base md:text-lg chakra-petch-regular hover:underline font-semibold text-black">
                                        +91 {contactInfo.phone}
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Date of Birth Card */}
                        <div className="border-4 border-black rounded-2xl p-4 sm:p-5 md:p-6 bg-white hover:bg-gray-50 transition-all hover:scale-105 shadow-lg">
                            <div className="flex items-center gap-3 sm:gap-4">
                                <div className="bg-blue-100 p-3 sm:p-4 rounded-xl flex-shrink-0">
                                    <FaCalendar className="text-2xl sm:text-3xl text-blue-600" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-xs sm:text-sm chakra-petch-semibold text-gray-500 mb-1">DATE OF BIRTH</p>
                                    <p className="text-sm sm:text-base md:text-lg chakra-petch-regular font-semibold text-black">{contactInfo.dob}</p>
                                </div>
                            </div>
                        </div>

                        {/* LinkedIn Card */}
                        <div className="border-4 border-black rounded-2xl p-4 sm:p-5 md:p-6 bg-white hover:bg-gray-50 transition-all hover:scale-105 shadow-lg">
                            <div className="flex items-center gap-3 sm:gap-4">
                                <div className="bg-blue-100 p-3 sm:p-4 rounded-xl flex-shrink-0">
                                    <FaLinkedin className="text-2xl sm:text-3xl text-blue-700" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-xs sm:text-sm chakra-petch-semibold text-gray-500 mb-1">LINKEDIN</p>
                                    <a
                                        href={contactInfo.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm sm:text-base md:text-lg chakra-petch-regular hover:underline truncate block font-semibold text-black"
                                    >
                                        /rpavan2503
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* GitHub Card - Full Width on mobile, centered on desktop */}
                        <div className="md:col-span-2 border-4 border-black rounded-2xl p-4 sm:p-5 md:p-6 bg-white hover:bg-gray-50 transition-all hover:scale-105 shadow-lg max-w-md mx-auto w-full">
                            <div className="flex items-center gap-3 sm:gap-4 justify-center">
                                <div className="bg-gray-100 p-3 sm:p-4 rounded-xl flex-shrink-0">
                                    <FaGithub className="text-2xl sm:text-3xl text-gray-800" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-xs sm:text-sm chakra-petch-semibold text-gray-500 mb-1">GITHUB</p>
                                    <a
                                        href={contactInfo.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm sm:text-base md:text-lg chakra-petch-regular hover:underline truncate block font-semibold text-black"
                                    >
                                        /R-Pavan-2503
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactModal;
