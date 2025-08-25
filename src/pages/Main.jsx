import React, { useState } from "react";
import DesktopApp from "../components/DesktopApp";
import { FaLaptopCode, FaGraduationCap, FaFolder, FaFile, FaFolderOpen } from "react-icons/fa";
import { VscBracketDot } from "react-icons/vsc";
import { GrAchievement } from "react-icons/gr";
import Header from "../components/Header";
import ModelHeader from "../components/ModelHeader";
import { MdFileOpen } from "react-icons/md";

const Main = () => {
    const [openApp, setOpenApp] = useState(null);
    const [expandedFolders, setExpandedFolders] = useState({});
    const [selectedFile, setSelectedFile] = useState(null);

    const apps = [
        { title: "Projects", icon: <FaLaptopCode /> },
        { title: "Internships", icon: <FaGraduationCap /> },
        { title: "Skills", icon: <VscBracketDot /> },
        { title: "Portfolio", icon: <GrAchievement /> },
    ];

    // Folder and file structure
    const appContents = {
        Projects: [
            { name: "Frontend", children: ["Portfolio Website", "Chat App"] },
            { name: "Backend", children: ["E-commerce Platform"] },

        ],
        Internships: [
            { name: "Google", children: ["Frontend Intern"] },
            { name: "Microsoft", children: ["Fullstack Intern"] },
        ],
    };

    const toggleFolder = (folderName) => {
        setExpandedFolders((prev) => ({
            ...prev,
            [folderName]: !prev[folderName],
        }));
    };

    return (
        <div className="w-full h-full bg-neutral-300 rounded-2xl notebook-bg p-4">

            <Header />
            {/* Desktop icons */}
            <div className="flex flex-wrap gap-14 mt-6 justify-start p-4">
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

                    {/* Modal content */}
                    <div className="relative w-4/5 h-4/5 flex flex-col overflow-hidden shadow-lg modal-border rounded-[45px] notebook-bg z-10">
                        <ModelHeader onClose={() => setOpenApp(null)} />
                        <div className="flex flex-1 overflow-hidden">
                            {/* Left panel */}
                            {/* Left panel */}
                            <div className="w-1/4 p-4 overflow-y-auto border-r-2 border-black">
                                <ul>
                                    {/* Root app */}
                                    <li className="mb-2">
                                        <div className="flex items-center gap-2 p-2 font-bold text-2xl">
                                            <FaFolderOpen size={25} />
                                            <span className="unlock-regular ">{openApp}</span>
                                        </div>

                                        {/* Folders inside app */}
                                        <ul className="ml-6">
                                            {appContents[openApp]?.map((folder, idx) => (
                                                <li key={idx} className="mb-1">
                                                    <div
                                                        className={`flex items-center gap-2 p-1 text-2xl rounded cursor-pointer hover:bg-gray-300 ${expandedFolders[folder.name] ? "unlock-regular font-bold" : "unlock-regular font-normal"
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
                                                            {folder.children.map((file, fidx) => (
                                                                <li key={fidx}>
                                                                    <div
                                                                        className={`flex items-center gap-2 pl-1 p-1 rounded cursor-pointer text-xl hover:bg-gray-200 ${selectedFile === file
                                                                            ? "chakra-petch-regular bg-gray-300 pl-3"
                                                                            : "chakra-petch-light"
                                                                            }`}
                                                                        onClick={() => setSelectedFile(file)}
                                                                    >
                                                                        <FaFile size={20} />
                                                                        <span>{file}</span>
                                                                    </div>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    )}
                                                </li>
                                            ))}
                                        </ul>
                                    </li>
                                </ul>
                            </div>


                            {/* Right panel */}
                            <div className="flex-1 p-6 overflow-y-auto">
                                {selectedFile ? (
                                    <>
                                        <h2 className="text-2xl font-bold mb-4">{selectedFile}</h2>
                                        <p>Details or description of {selectedFile}...</p>
                                    </>
                                ) : (
                                    <p className="text-gray-500">Select a file to see its details.</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
};

export default Main;
