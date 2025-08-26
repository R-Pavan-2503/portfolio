import React, { useState } from "react";
import DesktopApp from "../components/DesktopApp";
import { FaLaptopCode, FaGraduationCap, FaFolder, FaFile, FaFolderOpen, FaChartBar } from "react-icons/fa";
import { VscBracketDot } from "react-icons/vsc";
import { GrAchievement } from "react-icons/gr";
import Header from "../components/Header";
import ModelHeader from "../components/ModelHeader";
import { MdFileOpen } from "react-icons/md";
import { SiReact, SiHtml5, SiCss3, SiNodedotjs, SiMongodb, SiTailwindcss, SiChartdotjs, SiJavascript, SiApollographql, SiMaterialformkdocs, SiPostgresql, SiExpress, SiPython, SiOpencv, SiTensorflow, SiScikitlearn, SiPandas, SiNvidia } from "react-icons/si";
import { AiOutlineApi } from "react-icons/ai";
import { MdDesignServices } from "react-icons/md";
import { FaLayerGroup, FaGithub, FaRobot, FaBrain } from "react-icons/fa";


const skillIcons = {
    "React": <SiReact className="text-blue-500" />,
    "HTML": <SiHtml5 className="text-orange-500" />,
    "CSS": <SiCss3 className="text-blue-600" />,
    "Node": <SiNodedotjs className="text-green-500" />,
    "MongoDB": <SiMongodb className="text-green-700" />,
    "Postgresql": <SiPostgresql className="text-blue-700" />,
    "Express": <SiExpress className="text-blue-700" />,
    "Tailwindcss": <SiTailwindcss className="text-blue-700" />,
    "Chart.js": <SiChartdotjs className="text-blue-700" />,
    "JavaScript": <SiJavascript className="text-yellow-600" />,
    "RESTAPI": <SiApollographql className="text-red-700" />,
    "Material UI": <SiMaterialformkdocs className="text-blue-700" />,
    "Responsive UI Design": <MdDesignServices className="text-purple-500" />,
    "Data Visualization": <FaChartBar className="text-blue-500" />,
    "Frontend State Management": <FaLayerGroup className="text-pink-500" />,

    "Python": <SiPython className="text-blue-500" />,
    "OpenCV": <SiOpencv className="text-blue-600" />,
    "Machine Learning": <SiTensorflow className="text-purple-600" />,
    "Computer Vision": <FaRobot className="text-blue-500" />,
    "Real-time Detection": <FaRobot className="text-red-500" />,
    "Data Preprocessing": <SiPandas className="text-green-500" />,
    "Model Training & Evaluation": <SiScikitlearn className="text-blue-700" />,
    "Accuracy Optimization": <FaBrain className="text-indigo-600" />,
    "Safety-focused AI Applications": <FaBrain className="text-red-600" />
};

const Main = () => {
    const [openApp, setOpenApp] = useState(null);
    const [expandedFolders, setExpandedFolders] = useState({});
    const [selectedFile, setSelectedFile] = useState(null);

    const apps = [
        { title: "Projects", icon: <FaLaptopCode /> },
        { title: "Internships", icon: <FaGraduationCap /> },
        { title: "Skills", icon: <VscBracketDot /> },
        { title: "Achievement", icon: <GrAchievement /> },
    ];

    // Folder and file structure
    const appContents = {
        Projects: [
            {
                name: "Web Development",
                children: [
                    {
                        name: "Travels Dashboard",
                        subheading: "Real-Time Ride Management",
                        description: "Built a responsive MERN stack dashboard for managing rides and trips, enabling real-time data tracking, trip assignment, and streamlined admin workflows. Leveraging Node.js, Express.js, and MongoDB, the backend handles ride management, automated invoicing, and email notifications, while the React.js frontend ensures a smooth, interactive user experience for admins and operators.",
                        skills: [
                            "React",
                            "Node",
                            "Express",
                            "MongoDB",
                            "Tailwindcss",
                            "JavaScript",
                            "Material UI",
                            "Chart.js",
                            "JavaScript",
                            "RESTAPI",
                            "Responsive UI Design",
                            "Data Visualization",
                            "Frontend State Management"
                        ],
                        link: "https://myportfolio.com",
                    },
                    {
                        name: "Water Forecasting Dashboard",
                        subheading: "Real-Time Insights for Resource Management",
                        description: "Developed a comprehensive React.js dashboard using Material UI and Chart.js to deliver real-time water and reservoir forecasts with interactive and dynamic visualizations. The platform enables stakeholders to explore and customize data representations, including trend analysis and predictive insights, enhancing decision-making for efficient water resource management. Implemented responsive design, state management, and data-driven components to ensure smooth user interaction, while integrating APIs for real-time data fetching and updates, transforming complex datasets into actionable insights through an intuitive and visually appealing interface.",
                        skills: [
                            "React",
                            "Material UI",
                            "Postgresql",
                            "Chart.js",
                            "Tailwindcss",
                            "JavaScript",
                            "RESTAPI",
                            "Responsive UI Design",
                            "Data Visualization",
                            "Frontend State Management"
                        ],
                        link: "https://myportfolio.com",

                    },
                ],
            },
            {
                name: "AIML",
                children: [
                    {
                        name: "Driver Drowsiness Detection System",
                        subheading: "Predicting driver fatigue",
                        description: "I developed an advanced Driver Drowsiness Detection system using Python and OpenCV that predicts a driver’s sleep status with 90% accuracy and reduces false positives by 20%. The system leverages computer vision techniques to monitor eye and facial cues in real-time, while machine learning models analyze patterns indicative of fatigue. By detecting drowsiness early, it significantly improves road safety, reducing the likelihood of accidents by 78%. This project demonstrates the integration of real-time data processing, model optimization, and safety-focused AI applications, highlighting the practical impact of intelligent systems in everyday scenarios like driving.",
                        skills: [
                            "Python",
                            "OpenCV",
                            "Machine Learning",
                            "Computer Vision",
                            "Real-time Detection",
                            "Data Preprocessing",
                            "Model Training & Evaluation",
                            "Accuracy Optimization",
                            "Safety-focused AI Applications"
                        ]

                    },
                ],
            },
        ],
        Internships: [
            {
                name: "Google",
                children: [
                    { name: "Frontend Intern", subheading: "UI/UX Improvements", description: "Worked on UI improvements for Google Search." },
                ],
            },
            {
                name: "Microsoft",
                children: [
                    { name: "Fullstack Intern", subheading: "Internal Tools", description: "Developed internal tools using React and .NET." },
                ],
            },
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
                            <div className="w-[30%] p-4 overflow-y-auto border-r-2 border-black scrollbar-hide">
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
                                            ))}
                                        </ul>
                                    </li>
                                </ul>
                            </div>

                            {/* Right panel */}
                            <div className="flex-1 p-6 overflow-y-auto scrollbar-hide">
                                {selectedFile ? (
                                    <>
                                        <h2 className="text-4xl font-bold mb-4 unlock-regular">{selectedFile.name}</h2>
                                        {selectedFile.subheading && <h3 className="text-xl font-semibold mb-2 chakra-petch-regular">{selectedFile.subheading}</h3>}
                                        <p className="chakra-petch-light">{selectedFile.description}</p>
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
                                                    {/* Icon with tooltip */}
                                                    <div className="relative">
                                                        <FaGithub size={30} />
                                                        <span className="absolute left-full top-1/2 -translate-y-1/2 ml-2
      px-2 py-1 text-sm text-white bg-gray-800 rounded-md 
      opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                                                            Find the building blocks
                                                        </span>
                                                    </div>



                                                </a>
                                            </div>
                                        )}

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
