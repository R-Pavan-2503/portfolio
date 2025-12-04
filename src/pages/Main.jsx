import React, { useState } from "react";
import DesktopApp from "../components/DesktopApp";
import { VscBracketDot } from "react-icons/vsc";
import { GrAchievement } from "react-icons/gr";
import Header from "../components/Header";
import ModelHeader from "../components/ModelHeader";
import ContactModal from "../components/ContactModal";
import ResumeContent from "../components/ResumeContent";
import { FaFolder, FaFolderOpen, FaFile, FaInstagram, FaGithub } from "react-icons/fa";
import { SiLeetcode, SiCodechef, SiCodeforces } from "react-icons/si";
import { skillIcons, apps, appContents } from "../data/portfolioData.jsx";

const Main = () => {
    const [openApp, setOpenApp] = useState(null);
    const [expandedFolders, setExpandedFolders] = useState({});
    const [selectedFile, setSelectedFile] = useState(null);
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);

    const toggleFolder = (folderName) => {
        setExpandedFolders((prev) => ({
            ...prev,
            [folderName]: !prev[folderName],
        }));
    };

    return (
        <div className="w-full h-full bg-neutral-300 rounded-none sm:rounded-2xl notebook-bg p-2 sm:p-4">

            <Header onEmailClick={() => setIsContactModalOpen(true)} />
            {/* Desktop icons - Responsive Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-8 md:gap-14 mt-4 sm:mt-6 p-2 sm:p-4">
                {apps.map((app) => (
                    <DesktopApp
                        key={app.title}
                        title={app.title}
                        icon={app.icon}
                        onClick={() => {
                            setOpenApp(app.title);
                            setSelectedFile(null);
                        }}
                    />
                ))}
            </div>

            {/* Modal */}
            {openApp && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    {/* This div blurs everything behind it */}
                    <div className="absolute inset-0 backdrop-blur-md bg-black/10"></div>

                    {/* Modal content - Responsive */}
                    <div className="relative w-full h-full sm:w-11/12 sm:h-5/6 md:w-4/5 md:h-4/5 flex flex-col overflow-hidden shadow-lg modal-border sm:rounded-[45px] notebook-bg z-10">
                        <ModelHeader onClose={() => setOpenApp(null)} />
                        <div className="flex flex-col md:flex-row flex-1 overflow-hidden">
                            {/* Left panel - Full width on mobile, 30% on desktop */}
                            <div className="w-full md:w-[30%] p-2 sm:p-4 overflow-y-auto border-b-2 md:border-b-0 md:border-r-2 border-black scrollbar-hide max-h-[40vh] md:max-h-none">
                                <ul>
                                    {/* Root app */}
                                    <li className="mb-2">
                                        <div className="flex items-center gap-2 p-1 sm:p-2 font-bold text-lg sm:text-xl md:text-2xl">
                                            <FaFolderOpen size={25} />
                                            <span className="unlock-regular ">{openApp}</span>
                                        </div>

                                        {/* Check if it's Resume (direct files) or other apps (folders) */}
                                        <ul className="ml-6">
                                            {openApp === "Resume" || openApp === "Coding Profiles" ? (
                                                // Direct file display for Resume
                                                appContents[openApp]?.map((fileObj, idx) => (
                                                    <li key={idx}>
                                                        <div
                                                            className={`flex items-center gap-2 pl-1 p-1 rounded cursor-pointer text-lg hover:bg-gray-200 ${selectedFile?.name === fileObj.name
                                                                ? "chakra-petch-regular bg-gray-300 pl-3"
                                                                : "chakra-petch-light"
                                                                }`}
                                                            onClick={() => setSelectedFile(fileObj)}
                                                        >
                                                            <FaFile size={20} />
                                                            <span>{fileObj.name}</span>
                                                        </div>
                                                    </li>
                                                ))
                                            ) : (
                                                // Folder structure for other apps
                                                appContents[openApp]?.map((folder, idx) => (
                                                    <li key={idx} className="mb-1">
                                                        <div
                                                            className={`flex items-center gap-2 p-1 text-xl rounded cursor-pointer hover:bg-gray-300 ${expandedFolders[folder.name] ? "unlock-regular font-bold" : "unlock-regular font-normal"
                                                                }`}
                                                            onClick={() => toggleFolder(folder.name)}
                                                        >
                                                            {/* Show folder icon */}
                                                            <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                                                                {expandedFolders[folder.name] ? <FaFolderOpen size={20} /> : <FaFolder size={20} />}
                                                            </span>
                                                            <span>{folder.name}</span>
                                                        </div>

                                                        {/* Files inside folder */}
                                                        {expandedFolders[folder.name] && (
                                                            <ul className="ml-6">
                                                                {folder.children.map((fileObj, fidx) => (
                                                                    <li key={fidx}>
                                                                        <div
                                                                            className={`flex items-center gap-2 pl-1 p-1 rounded cursor-pointer text-lg hover:bg-gray-200 ${selectedFile?.name === fileObj.name
                                                                                ? "chakra-petch-regular bg-gray-300 pl-3"
                                                                                : "chakra-petch-light"
                                                                                }`}
                                                                            onClick={() => setSelectedFile(fileObj)}
                                                                        >
                                                                            <FaFile size={20} />
                                                                            <span>{fileObj.name}</span>
                                                                        </div>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        )}
                                                    </li>
                                                ))
                                            )}
                                        </ul>
                                    </li>
                                </ul>
                            </div>

                            {/* Right panel - Responsive */}
                            <div className="flex-1 p-3 sm:p-4 md:p-6 overflow-y-auto scrollbar-hide">
                                {selectedFile ? (
                                    <>
                                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 unlock-regular flex items-center gap-2 sm:gap-3">
                                            {selectedFile.icon && <span>{selectedFile.icon}</span>}
                                            {selectedFile.name}
                                        </h2>
                                        {selectedFile.subheading && <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 chakra-petch-regular">{selectedFile.subheading}</h3>}
                                        <p className="chakra-petch-light text-sm sm:text-base">{selectedFile.description}</p>
                                        {selectedFile.skills && (
                                            <div className="mt-4 flex flex-wrap items-center gap-2">
                                                {selectedFile.skills.map((skill, idx) => (
                                                    <span key={idx} className="flex items-center gap-1 text-lg font-semibold">
                                                        {skillIcons[skill] || null} <span>{skill}</span>
                                                        {idx !== selectedFile.skills.length - 1 && <span className="mx-1">||</span>}
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                        {selectedFile.link && (
                                            <div className="mt-2">
                                                <a
                                                    href={selectedFile.link}
                                                    target="_blank"
                                                    className="relative group flex items-center space-x-2 text-black underline"
                                                >
                                                    {/* Platform-specific icon */}
                                                    <div className="relative">
                                                        {selectedFile.name === "LeetCode" && <SiLeetcode size={30} className="text-orange-600" />}
                                                        {selectedFile.name === "CodeChef" && <SiCodechef size={30} className="text-brown-600" />}
                                                        {selectedFile.name === "CodeForces" && <SiCodeforces size={30} className="text-blue-600" />}
                                                        {selectedFile.link?.includes("instagram.com") && <FaInstagram size={30} className="text-pink-600" />}
                                                        {selectedFile.name !== "LeetCode" && selectedFile.name !== "CodeChef" && selectedFile.name !== "CodeForces" && !selectedFile.link?.includes("instagram.com") && <FaGithub size={30} />}
                                                        <span className="absolute left-full top-1/2 -translate-y-1/2 ml-2
      px-2 py-1 text-sm text-white bg-gray-800 rounded-md 
      opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                                                            {selectedFile.link?.includes("instagram.com") ? "Visit Instagram" : selectedFile.name === "LeetCode" || selectedFile.name === "CodeChef" || selectedFile.name === "CodeForces" ? "Visit Profile" : "Find the building blocks"}
                                                        </span>
                                                    </div>



                                                </a>
                                            </div>
                                        )}

                                        {/* PDF Resume Content */}
                                        {selectedFile.isPDF && <ResumeContent />}



                                    </>
                                ) : (
                                    <p className="text-gray-500">Select a file to see its details.</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Contact Modal */}
            <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />

        </div>
    );
};

export default Main;
