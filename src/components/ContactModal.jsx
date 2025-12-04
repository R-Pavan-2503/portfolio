import React from "react";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaCalendar } from "react-icons/fa";
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

            {/* Modal content - LARGER SIZE, NO SCROLL */}
            <div className="relative w-4/5 h-4/5 flex flex-col overflow-hidden shadow-lg modal-border rounded-[45px] notebook-bg z-10">
                <ModelHeader onClose={onClose} />

                <div className="flex-1 p-6 overflow-hidden flex flex-col justify-center">
                    <h2 className="text-4xl font-bold mb-6 unlock-regular text-center">{contactInfo.name}</h2>

                    {/* Compact grid layout - 2 columns, no scrolling */}
                    <div className="grid grid-cols-2 gap-4 max-w-4xl mx-auto w-full">
                        {/* Email */}
                        <div className="flex items-center gap-3 p-3 hover:bg-gray-200 rounded-lg transition-colors cursor-pointer">
                            <FaEnvelope size={32} className="text-red-600 flex-shrink-0" />
                            <div className="min-w-0">
                                <p className="text-xs chakra-petch-light text-gray-600">Email</p>
                                <a href={`mailto:${contactInfo.email}`} className="text-lg chakra-petch-regular hover:underline truncate block">
                                    {contactInfo.email}
                                </a>
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="flex items-center gap-3 p-3 hover:bg-gray-200 rounded-lg transition-colors cursor-pointer">
                            <FaPhone size={32} className="text-green-600 flex-shrink-0" />
                            <div className="min-w-0">
                                <p className="text-xs chakra-petch-light text-gray-600">Phone</p>
                                <a href={`tel:${contactInfo.phone}`} className="text-lg chakra-petch-regular hover:underline">
                                    {contactInfo.phone}
                                </a>
                            </div>
                        </div>

                        {/* Date of Birth */}
                        <div className="flex items-center gap-3 p-3 hover:bg-gray-200 rounded-lg transition-colors">
                            <FaCalendar size={32} className="text-blue-600 flex-shrink-0" />
                            <div className="min-w-0">
                                <p className="text-xs chakra-petch-light text-gray-600">Date of Birth</p>
                                <p className="text-lg chakra-petch-regular">{contactInfo.dob}</p>
                            </div>
                        </div>

                        {/* LinkedIn */}
                        <div className="flex items-center gap-3 p-3 hover:bg-gray-200 rounded-lg transition-colors cursor-pointer">
                            <FaLinkedin size={32} className="text-blue-700 flex-shrink-0" />
                            <div className="min-w-0">
                                <p className="text-xs chakra-petch-light text-gray-600">LinkedIn</p>
                                <a
                                    href={contactInfo.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-lg chakra-petch-regular hover:underline truncate block"
                                >
                                    linkedin.com/in/rpavan2503/
                                </a>
                            </div>
                        </div>

                        {/* GitHub - spans 2 columns to center it */}
                        <div className="col-span-2 flex items-center justify-center gap-3 p-3 hover:bg-gray-200 rounded-lg transition-colors cursor-pointer max-w-md mx-auto w-full">
                            <FaGithub size={32} className="text-gray-800 flex-shrink-0" />
                            <div className="min-w-0">
                                <p className="text-xs chakra-petch-light text-gray-600">GitHub</p>
                                <a
                                    href={contactInfo.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-lg chakra-petch-regular hover:underline truncate block"
                                >
                                    github.com/R-Pavan-2503
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactModal;
