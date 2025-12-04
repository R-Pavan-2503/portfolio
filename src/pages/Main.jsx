import React, { useState } from "react";
import DesktopApp from "../components/DesktopApp";
import { FaLaptopCode, FaGraduationCap, FaFolder, FaFile, FaFolderOpen, FaChartBar, FaCertificate, FaCode, FaUsers } from "react-icons/fa";
import { VscBracketDot } from "react-icons/vsc";
import { GrAchievement } from "react-icons/gr";
import Header from "../components/Header";
import ModelHeader from "../components/ModelHeader";
import ContactModal from "../components/ContactModal";
import { MdFileOpen } from "react-icons/md";
import { SiReact, SiHtml5, SiCss3, SiNodedotjs, SiMongodb, SiTailwindcss, SiChartdotjs, SiJavascript, SiApollographql, SiMaterialformkdocs, SiPostgresql, SiExpress, SiPython, SiOpencv, SiTensorflow, SiScikitlearn, SiPandas, SiLeetcode, SiCodechef, SiCodeforces, SiCplusplus, SiMysql, SiFigma, SiBootstrap, SiGit, SiGithub, SiJenkins, SiDocker, SiKubernetes, SiNumpy, SiPostman, SiLinux, SiC } from "react-icons/si";
import { AiOutlineApi } from "react-icons/ai";
import { MdDesignServices } from "react-icons/md";
import { FaLayerGroup, FaGithub, FaRobot, FaBrain, FaTrophy, FaMedal, FaStar } from "react-icons/fa";


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
    "Safety-focused AI Applications": <FaBrain className="text-red-600" />,
    "NLP": <FaBrain className="text-purple-500" />,
    "NER": <FaBrain className="text-pink-500" />,
};

const Main = () => {
    const [openApp, setOpenApp] = useState(null);
    const [expandedFolders, setExpandedFolders] = useState({});
    const [selectedFile, setSelectedFile] = useState(null);
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);

    const apps = [
        { title: "Projects", icon: <FaLaptopCode /> },
        { title: "Internships", icon: <FaGraduationCap /> },
        { title: "Skills", icon: <VscBracketDot /> },
        { title: "Achievements", icon: <GrAchievement /> },
        { title: "Certificates", icon: <FaCertificate /> },
        { title: "Coding Profiles", icon: <FaCode /> },
        { title: "Volunteering", icon: <FaUsers /> },
    ];

    // Folder and file structure
    const appContents = {
        Projects: [
            {
                name: "Web Development",
                children: [
                    {
                        name: "Travels Dashboard",
                        subheading: "Freelancing - MongoDB, Express.js, React.js, Node.js - 2024",
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
                            "RESTAPI",
                            "Responsive UI Design",
                            "Data Visualization",
                            "Frontend State Management"
                        ],
                        link: "https://github.com/R-Pavan-2503",
                    },
                    {
                        name: "Water Forecasting Dashboard",
                        subheading: "Frontend - React.js, Material UI, Graph.js - 2024",
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
                        link: "https://github.com/R-Pavan-2503",

                    },
                ],
            },
            {
                name: "AIML",
                children: [
                    {
                        name: "Driver Drowsiness Detection",
                        subheading: "Python, OpenCV - 2022",
                        description: "Developed an advanced Driver Drowsiness Detection system using Python and OpenCV that predicts a driver's sleep status with 90% accuracy and reduces false positives by 20%. The system leverages computer vision techniques to monitor eye and facial cues in real-time, while machine learning models analyze patterns indicative of fatigue. By detecting drowsiness early, it significantly improves road safety, reducing the likelihood of accidents by 78%. This project demonstrates the integration of real-time data processing, model optimization, and safety-focused AI applications, highlighting the practical impact of intelligent systems in everyday scenarios like driving.",
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
                        ],
                        link: "https://github.com/R-Pavan-2503",
                    },
                ],
            },
        ],
        Internships: [
            {
                name: "Nova Techset",
                children: [
                    {
                        name: "Machine Learning Engineer",
                        subheading: "04/2022 – 05/2022",
                        description: "Developed a prototype to rival Grammarly, leveraging NLP techniques to detect errors in scientific and technical publications with 90% precision. Created a system to identify subject-verb disagreements and punctuation mistakes, providing alternative suggestions to authors.",
                        skills: ["Python", "NLP", "Machine Learning"]
                    },
                ],
            },
            {
                name: "Truly Media",
                children: [
                    {
                        name: "Python Developer",
                        subheading: "05/2024 – 07/2024",
                        description: "Developed AI-based applications, including an Image Caption Generator using OpenCV and NER, achieving 90% accuracy on 1,000+ images. Optimized the system for 20% fewer false positives and 87% true negatives, showcasing applications in media and accessibility.",
                        skills: ["Python", "OpenCV", "NLP", "NER", "Machine Learning"]
                    },
                ],
            },
            {
                name: "TechMedZ",
                children: [
                    {
                        name: "Website Developer",
                        subheading: "07/2023 – 10/2023",
                        description: "Designed and developed a responsive website using React.js, Tailwind CSS, and Node.js, achieving an interactive design and UI. Enhanced user experience using dynamic interface and 3D model using Spline, increasing user interactions and usability.",
                        skills: ["React", "Tailwindcss", "Node", "Responsive UI Design"]
                    },
                ],
            },
        ],
        Skills: [
            {
                name: "Languages",
                children: [
                    { name: "Python", icon: <SiPython className="text-blue-500" size={30} />, description: "Used in AI/ML projects, Image Caption Generator, Driver Drowsiness Detection, and NLP applications" },
                    { name: "C++", icon: <SiCplusplus className="text-blue-600" size={30} />, description: "Applied in competitive programming (LeetCode, CodeChef, CodeForces) and algorithmic problem solving" },
                    { name: "JavaScript", icon: <SiJavascript className="text-yellow-500" size={30} />, description: "Core language for React.js, Node.js, and Express.js in web development projects" },
                    { name: "SQL", icon: <FaChartBar className="text-purple-600" size={30} />, description: "Used for database queries in MySQL, PostgreSQL, and data management in dashboards" },
                    { name: "Java", icon: <FaCode className="text-red-600" size={30} />, description: "Applied in object-oriented programming and enterprise application development" },
                    { name: "C", icon: <SiC className="text-blue-700" size={30} />, description: "Foundation for system-level programming and understanding computer architecture" },
                ]
            },
            {
                name: "Databases",
                children: [
                    { name: "MySQL", icon: <SiMysql className="text-blue-600" size={30} />, description: "Used in relational database management for various web applications" },
                    { name: "MongoDB", icon: <SiMongodb className="text-green-600" size={30} />, description: "Implemented in Travels Dashboard for NoSQL data storage and real-time updates" },
                    { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-700" size={30} />, description: "Utilized in Water Forecasting Dashboard for complex data relationships" },
                ]
            },
            {
                name: "Web Development",
                children: [
                    { name: "React.js", icon: <SiReact className="text-blue-500" size={30} />, description: "Built Travels Dashboard, Water Forecasting Dashboard, and TechMedZ website" },
                    { name: "Node.js", icon: <SiNodedotjs className="text-green-600" size={30} />, description: "Backend server for Travels Dashboard and TechMedZ projects" },
                    { name: "Express.js", icon: <SiExpress className="text-gray-700" size={30} />, description: "RESTful API development in MERN stack applications" },
                    { name: "Figma", icon: <SiFigma className="text-purple-600" size={30} />, description: "UI/UX design and prototyping for web applications" },
                    { name: "Bootstrap", icon: <SiBootstrap className="text-purple-700" size={30} />, description: "Responsive design framework for rapid development" },
                    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-blue-500" size={30} />, description: "Styling in portfolio, TechMedZ website, and modern UI components" },
                    { name: "HTML", icon: <SiHtml5 className="text-orange-600" size={30} />, description: "Markup foundation for all web applications and interfaces" },
                    { name: "CSS", icon: <SiCss3 className="text-blue-600" size={30} />, description: "Custom styling and animations across web projects" },
                ]
            },
            {
                name: "DevOps",
                children: [
                    { name: "Git", icon: <SiGit className="text-orange-600" size={30} />, description: "Version control for all projects and collaborative development" },
                    { name: "GitHub", icon: <SiGithub className="text-gray-800" size={30} />, description: "Repository hosting, collaboration, and portfolio showcase" },
                    { name: "Jenkins", icon: <SiJenkins className="text-red-600" size={30} />, description: "CI/CD automation and deployment pipelines" },
                    { name: "Docker", icon: <SiDocker className="text-blue-600" size={30} />, description: "Containerization for application deployment" },
                    { name: "Kubernetes", icon: <SiKubernetes className="text-blue-700" size={30} />, description: "Container orchestration for scalable applications" },
                ]
            },
            {
                name: "Machine Learning Tools",
                children: [
                    { name: "spaCy", icon: <FaBrain className="text-purple-600" size={30} />, description: "NLP library used in Grammarly prototype at Nova Techset" },
                    { name: "Pandas", icon: <SiPandas className="text-blue-600" size={30} />, description: "Data manipulation in Driver Drowsiness Detection and ML projects" },
                    { name: "NumPy", icon: <SiNumpy className="text-blue-500" size={30} />, description: "Numerical computing foundation for ML algorithms" },
                    { name: "Matplotlib", icon: <FaChartBar className="text-blue-600" size={30} />, description: "Data visualization in analysis dashboards" },
                    { name: "Postman", icon: <SiPostman className="text-orange-600" size={30} />, description: "API testing and development workflow" },
                    { name: "Tableau", icon: <FaChartBar className="text-blue-700" size={30} />, description: "Business intelligence in SIH 2024 dashboard" },
                    { name: "Power BI", icon: <FaChartBar className="text-yellow-600" size={30} />, description: "Data analytics and visualization platform" },
                    { name: "Scikit-learn", icon: <SiScikitlearn className="text-orange-500" size={30} />, description: "ML algorithms in Driver Drowsiness Detection system" },
                    { name: "REST API", icon: <AiOutlineApi className="text-green-600" size={30} />, description: "API architecture in all web applications" },
                    { name: "Linux", icon: <SiLinux className="text-gray-800" size={30} />, description: "Development environment and server deployment" },
                    { name: "NLP", icon: <FaBrain className="text-purple-500" size={30} />, description: "Natural Language Processing in Grammarly prototype and Image Caption Generator" },
                ]
            },
        ],
        Achievements: [
            {
                name: "Hackathons",
                children: [
                    {
                        name: "SIH Finalist 2024",
                        subheading: "Smart India Hackathon 2024",
                        description: "Developed an innovative reservoir and water management dashboard, showcasing real-time data analysis and improving resource management. Competed among thousands of teams nationwide and reached the finals.",
                    },
                    {
                        name: "Finalist EPOCH (IITD)",
                        subheading: "IIT Delhi Hackathon",
                        description: "Developed an accident analysis dashboard, enabling data-driven insights for improved accident prevention and response strategies to avoid accidents. Demonstrated technical excellence and innovative problem-solving.",
                    },
                    {
                        name: "Finalist in HACKCIT 2024",
                        subheading: "Codeathon",
                        description: "Competed in a codeathon showcasing problem-solving skills and innovative coding solutions in a highly competitive environment. Enhanced coding skills and collaboration abilities.",
                    },
                ]
            },
        ],
        Certificates: [
            {
                name: "Cloud & Networking",
                children: [
                    {
                        name: "AWS Cloud Practitioner",
                        subheading: "Amazon Web Services",
                        description: "Fundamentals of Cloud Development - Comprehensive understanding of AWS cloud services, architecture, and best practices.",
                    },
                    {
                        name: "CISCO - Introduction to Networking",
                        subheading: "Cisco Certified",
                        description: "Basic Network Fundamentals - Covering networking protocols, infrastructure, and essential concepts.",
                    },
                ]
            },
            {
                name: "Web Development",
                children: [
                    {
                        name: "UDEMY - Web Development Bootcamp",
                        subheading: "Udemy Certified",
                        description: "Full-Stack Web Development - Complete bootcamp covering frontend and backend technologies, databases, and deployment.",
                    },
                    {
                        name: "Meta Frontend Developer Professional",
                        subheading: "Meta Certified",
                        description: "Fundamentals and Frontend Tools - Professional certification in modern frontend development practices and tools.",
                    },
                ]
            },
            {
                name: "Machine Learning",
                children: [
                    {
                        name: "UDEMY - Machine Learning A-Z",
                        subheading: "Udemy Certified",
                        description: "Comprehensive Machine Learning - Hands-on training in machine learning algorithms, data preprocessing, and model deployment.",
                    },
                ]
            },
        ],
        "Coding Profiles": [
            {
                name: "Competitive Programming",
                children: [
                    {
                        name: "LeetCode",
                        subheading: "Top 4% • Rating: 1953 • Knight Level",
                        description: "Solved 727 problems with a current rating of 1953 and max rating of 1953. Achieved Knight level status and highest rank of 705 in Biweekly Contest 147. Consistently solving challenging algorithmic problems and maintaining top percentile performance.",
                        link: "https://leetcode.com/u/R-Pavan-2503/",
                    },
                    {
                        name: "CodeChef",
                        subheading: "2 Star • Rating: 1459 • 400+ Problems",
                        description: "Current rating of 1459 with max rating of 1524. Solved 400+ problems and achieved highest rank of 234 in Starters 144 Division 3. Actively participating in monthly contests and improving problem-solving skills.",
                        link: "https://www.codechef.com/users/r_pavan_2503",
                    },
                    {
                        name: "CodeForces",
                        subheading: "Rating: 1096 • 100+ Problems",
                        description: "Current rating of 1096 with max rating of 1096. Solved 100+ problems and achieved highest rank of 8088 in CodeForces 982 (Div 2) contest. Participating in regular contests to enhance algorithmic thinking.",
                        link: "https://codeforces.com/profile/R-Pavan-2503",
                    },
                ]
            },
        ],
        Volunteering: [
            {
                name: "MAGNUS Symposium",
                children: [
                    {
                        name: "Graphic Design Team Lead",
                        subheading: "Leadership Role",
                        description: "Led the Graphic Design team for Magnus Symposium, a national-level event with 1000+ participants. Designed various posters, promotional materials, and branding assets. Coordinated a team of designers and ensured timely delivery of all visual content for the symposium.",
                    },
                    {
                        name: "Web Development Workshop Speaker",
                        subheading: "Technical Speaker",
                        description: "Delivered a comprehensive lecture on modern web development, teaching 50+ participants practical skills and tools like React.js, Node.js, and Tailwind CSS. Created hands-on exercises and provided mentorship to aspiring developers.",
                    },
                ]
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

            <Header onEmailClick={() => setIsContactModalOpen(true)} />
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
                                        <h2 className="text-4xl font-bold mb-4 unlock-regular flex items-center gap-3">
                                            {selectedFile.icon && <span>{selectedFile.icon}</span>}
                                            {selectedFile.name}
                                        </h2>
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
                                                    {/* Platform-specific icon */}
                                                    <div className="relative">
                                                        {selectedFile.name === "LeetCode" && <SiLeetcode size={30} className="text-orange-600" />}
                                                        {selectedFile.name === "CodeChef" && <SiCodechef size={30} className="text-brown-600" />}
                                                        {selectedFile.name === "CodeForces" && <SiCodeforces size={30} className="text-blue-600" />}
                                                        {selectedFile.name !== "LeetCode" && selectedFile.name !== "CodeChef" && selectedFile.name !== "CodeForces" && <FaGithub size={30} />}
                                                        <span className="absolute left-full top-1/2 -translate-y-1/2 ml-2
      px-2 py-1 text-sm text-white bg-gray-800 rounded-md 
      opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                                                            {selectedFile.name === "LeetCode" || selectedFile.name === "CodeChef" || selectedFile.name === "CodeForces" ? "Visit Profile" : "Find the building blocks"}
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

            {/* Contact Modal */}
            <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />

        </div>
    );
};

export default Main;
