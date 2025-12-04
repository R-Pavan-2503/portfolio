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

            {/* Modal content */}
            <div className="relative w-3/5 h-3/5 flex flex-col overflow-hidden shadow-lg modal-border rounded-[45px] notebook-bg z-10">
                <ModelHeader onClose={onClose} />

                <div className="flex-1 p-8 overflow-y-auto scrollbar-hide">
                    <h2 className="text-5xl font-bold mb-6 unlock-regular text-center">{contactInfo.name}</h2>

                    <div className="space-y-6 mt-10">
                        {/* Email */}
                        <div className="flex items-center gap-4 p-4 hover:bg-gray-200 rounded-lg transition-colors cursor-pointer">
                            <FaEnvelope size={40} className="text-red-600" />
                            <div>
                                <p className="text-sm chakra-petch-light text-gray-600">Email</p>
                                <a href={`mailto:${contactInfo.email}`} className="text-2xl chakra-petch-regular hover:underline">
                                    {contactInfo.email}
                                </a>
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="flex items-center gap-4 p-4 hover:bg-gray-200 rounded-lg transition-colors cursor-pointer">
                            <FaPhone size={40} className="text-green-600" />
                            <div>
                                <p className="text-sm chakra-petch-light text-gray-600">Phone</p>
                                <a href={`tel:${contactInfo.phone}`} className="text-2xl chakra-petch-regular hover:underline">
                                    {contactInfo.phone}
                                </a>
                            </div>
                        </div>

                        {/* Date of Birth */}
                        <div className="flex items-center gap-4 p-4 hover:bg-gray-200 rounded-lg transition-colors">
                            <FaCalendar size={40} className="text-blue-600" />
                            <div>
                                <p className="text-sm chakra-petch-light text-gray-600">Date of Birth</p>
                                <p className="text-2xl chakra-petch-regular">{contactInfo.dob}</p>
                            </div>
                        </div>

                        {/* LinkedIn */}
                        <div className="flex items-center gap-4 p-4 hover:bg-gray-200 rounded-lg transition-colors cursor-pointer">
                            <FaLinkedin size={40} className="text-blue-700" />
                            <div>
                                <p className="text-sm chakra-petch-light text-gray-600">LinkedIn</p>
                                <a
                                    href={contactInfo.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-2xl chakra-petch-regular hover:underline"
                                >
                                    linkedin.com/in/rpavan2503/
                                </a>
                            </div>
                        </div>

                        {/* GitHub */}
                        <div className="flex items-center gap-4 p-4 hover:bg-gray-200 rounded-lg transition-colors cursor-pointer">
                            <FaGithub size={40} className="text-gray-800" />
                            <div>
                                <p className="text-sm chakra-petch-light text-gray-600">GitHub</p>
                                <a
                                    href={contactInfo.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-2xl chakra-petch-regular hover:underline"
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
