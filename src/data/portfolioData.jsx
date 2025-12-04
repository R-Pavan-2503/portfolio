import React from "react";
import { FaLaptopCode, FaGraduationCap, FaCode, FaUsers, FaFileAlt, FaChartBar, FaMedal, FaBrain, FaRobot } from "react-icons/fa";
import { VscBracketDot } from "react-icons/vsc";
import { GrAchievement } from "react-icons/gr";
import { SiReact, SiHtml5, SiCss3, SiNodedotjs, SiMongodb, SiTailwindcss, SiChartdotjs, SiJavascript, SiApollographql, SiMaterialformkdocs, SiPostgresql, SiExpress, SiPython, SiOpencv, SiTensorflow, SiScikitlearn, SiPandas, SiCplusplus, SiMysql, SiFigma, SiBootstrap, SiGit, SiGithub, SiJenkins, SiDocker, SiKubernetes, SiNumpy, SiPostman, SiLinux, SiC } from "react-icons/si";
import { AiOutlineApi } from "react-icons/ai";
import { MdDesignServices } from "react-icons/md";
import { FaLayerGroup } from "react-icons/fa";

// Skill Icons Mapping
export const skillIcons = {
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

// Desktop Apps Configuration
export const apps = [
    { title: "Projects", icon: <FaLaptopCode /> },
    { title: "Internships", icon: <FaGraduationCap /> },
    { title: "Skills", icon: <VscBracketDot /> },
    { title: "Achievements", icon: <GrAchievement /> },
    { title: "Certificates", icon: <FaMedal /> },
    { title: "Coding Profiles", icon: <FaCode /> },
    { title: "Volunteering", icon: <FaUsers /> },
    { title: "Resume", icon: <FaFileAlt /> },
];

// Portfolio Content Data
export const appContents = {
    Projects: [
        {
            name: "Web Development",
            children: [
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
                    link: "https://github.com/Lokeshzz7/Water_Frontend_Andhra",
                },
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
                    link: "https://github.com/R-Pavan-2503?tab=repositories",
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
                    link: "https://github.com/R-Pavan-2503/drowsiness-detection",
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
                    description: "At Nova Techset, I worked on developing an NLP-driven proofreading prototype aimed at rivaling Grammarly for scientific publications. I built grammar, punctuation, and semantic-error detection pipelines that achieved 90% precision. My work involved identifying subject–verb disagreements and improving linguistic consistency across technical manuscripts. I also created intelligent correction-suggestion modules to help authors enhance clarity and accuracy. The project allowed me to work closely with editors and domain experts to validate outputs. I optimized the model's performance through multiple iterations and tuning. Overall, the system significantly improved the quality and reliability of automated proofreading.",
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
                    description: "During my internship at Truly Media, I developed an AI-based Image Caption Generator using OpenCV and NER to process and describe over a thousand images. The system achieved 90% accuracy through refined preprocessing and targeted model improvements. I focused heavily on optimizing the pipeline, reducing false positives by 20% and improving true negatives to 87%. I integrated this solution into internal media workflows to support accessibility and automated metadata generation. Extensive testing and benchmarking were conducted to ensure consistent model performance. I collaborated with the engineering team to deploy the tool in a production-ready format. This project strengthened my understanding of computer vision and AI-driven content analysis.",
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
                    description: "At TechMedZ, I designed and developed a fully responsive website using React.js, Tailwind CSS, and Node.js, ensuring a smooth user experience across devices. I built interactive UI components that improved engagement and navigation flow. A major highlight was integrating a Spline-based 3D model, which enhanced the visual appeal and product presentation. I adopted a reusable component architecture to improve maintainability and speed up development. Regular feedback sessions with stakeholders helped refine the UX and align the design with business goals. I focused on optimizing performance and load times for better usability. The final product significantly improved user interaction and overall platform professionalism.",
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
                    description: "As a finalist in the Smart India Hackathon, I developed an innovative reservoir and water-management dashboard focused on real-time analysis and forecasting. The system enabled stakeholders to visualize changing water levels and make data-driven decisions. I contributed to both the analytical model and the frontend representation of insights. The project showcased my ability to convert raw environmental data into actionable intelligence. This experience strengthened my skills in problem-solving and high-pressure collaborative development.",
                },
                {
                    name: "Finalist EPOCH (IITD)",
                    subheading: "IIT Delhi Hackathon",
                    description: "I participated in the IIT Delhi EPOCH hackathon as a finalist, creating an accident-analysis dashboard designed to improve prevention and response strategies. The solution transformed accident datasets into meaningful visual patterns that could guide authorities in reducing risk. I worked on both model logic and interface behavior to ensure clarity and usability. This project emphasized my ability to handle data-heavy problem statements with precision. It also deepened my understanding of real-world safety analytics.",
                },
                {
                    name: "Finalist in HACKCIT 2024",
                    subheading: "Codeathon",
                    description: "As a finalist in HACKCIT 2024, I competed in a high-intensity codeathon demonstrating strong problem-solving and algorithmic thinking. I tackled complex challenges under time constraints, consistently delivering optimized solutions. The event allowed me to explore creative approaches to technical problems while collaborating with competitive peers. It significantly sharpened my coding logic and competitive programming skills. This achievement reflects my commitment to continuous improvement and performance in technical contests.",
                },
            ]
        },
    ],
    Certificates: [
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
    ],
    "Coding Profiles": [
        {
            name: "LeetCode",
            subheading: "Top 4% • Rating: 1953 • Knight Level",
            description: "Solved 727 problems with a current rating of 1953 and max rating of 1953. Achieved Knight level status and highest rank of 705 in Biweekly Contest 147. Consistently solving challenging algorithmic problems and maintaining top percentile performance.",
            link: "https://leetcode.com/u/PAVAN2503/",
        },
        {
            name: "CodeChef",
            subheading: "2 Star • Rating: 1459 • 400+ Problems",
            description: "Current rating of 1459 with max rating of 1524. Solved 400+ problems and achieved highest rank of 234 in Starters 144 Division 3. Actively participating in monthly contests and improving problem-solving skills.",
            link: "https://www.codechef.com/users/pavan2503",
        },
        {
            name: "CodeForces",
            subheading: "Rating: 1096 • 100+ Problems",
            description: "Current rating of 1096 with max rating of 1096. Solved 100+ problems and achieved highest rank of 8088 in CodeForces 982 (Div 2) contest. Participating in regular contests to enhance algorithmic thinking.",
            link: "https://codeforces.com/profile/Pavan2503",
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
                    link: "https://www.instagram.com/magnus.cit/",
                },
                {
                    name: "Web Development Workshop Speaker",
                    subheading: "Technical Speaker",
                    description: "Delivered a comprehensive lecture on modern web development, teaching 50+ participants practical skills and tools like React.js, Node.js, and Tailwind CSS. Created hands-on exercises and provided mentorship to aspiring developers.",
                    link: "https://www.instagram.com/magnus.cit/",
                },
            ]
        },
    ],
    Resume: [
        {
            name: "Resume.pdf",
            subheading: "View & Download",
            description: "Complete resume with professional experience, education, skills, projects, achievements, and certifications. Updated December 2024.",
            isPDF: true,
        },
    ],
};
