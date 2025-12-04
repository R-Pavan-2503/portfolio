import React from "react";
import { FaDownload, FaFileAlt } from "react-icons/fa";
import { MdFileOpen } from "react-icons/md";

const ResumeContent = () => {
    return (
        <div className="mt-8 space-y-6">
            {/* Styled Download Card */}
            {/* <div className="border-4 border-black rounded-2xl p-8 bg-gray-100 hover:bg-gray-200 transition-colors">

                <div className="flex flex-col items-center justify-center space-y-6">
                    PDF Icon
                    <div className="text-8xl">
                        <FaFileAlt className="text-red-600" />
                    </div>

                    File Info
                    <div className="text-center">
                        <h3 className="text-3xl font-bold unlock-regular mb-2">R. Pavan - Resume</h3>
                        <p className="text-lg chakra-petch-light text-gray-600">Professional Resume PDF</p>
                    </div>

                    Action Buttons - Side by Side
                    <div className="flex gap-4">
                        Download Button
                        <a
                            href="/resume.pdf"
                            download="R_Pavan_Resume.pdf"
                            className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white rounded-xl hover:bg-gray-800 transition-all hover:scale-105 chakra-petch-semibold text-lg border-4 border-black shadow-lg"
                        >
                            <FaDownload size={20} />
                            Download Resume
                        </a>

                        View Button
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-xl border-4 border-black hover:bg-gray-200 transition-all hover:scale-105 chakra-petch-semibold text-lg shadow-lg"
                        >
                            <MdFileOpen size={20} />
                            View in New Tab
                        </a>
                    </div>
                </div>
            </div> */}

            {/* Action Buttons - Responsive: stack on mobile, side-by-side on desktop */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
                {/* Download Button */}
                <a
                    href="/resume.pdf"
                    download="R_Pavan_Resume.pdf"
                    className="inline-flex items-center justify-center gap-2 sm:gap-3 px-6 py-3 sm:px-8 sm:py-4 bg-black text-white rounded-xl hover:bg-gray-800 transition-all hover:scale-105 chakra-petch-semibold text-base sm:text-lg border-4 border-black shadow-lg w-full sm:w-auto"
                >
                    <FaDownload size={18} className="sm:w-5 sm:h-5" />
                    Download Resume
                </a>

                {/* View Button */}
                <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 sm:gap-3 px-6 py-3 sm:px-8 sm:py-4 bg-white text-black rounded-xl border-4 border-black hover:bg-gray-200 transition-all hover:scale-105 chakra-petch-semibold text-base sm:text-lg shadow-lg w-full sm:w-auto"
                >
                    <MdFileOpen size={18} className="sm:w-5 sm:h-5" />
                    View in New Tab
                </a>
            </div>

            {/* Resume Text Content - Responsive */}
            <div className="border-4 border-black rounded-2xl p-4 sm:p-6 md:p-8 bg-white">
                {/* Header */}
                <div className="text-center border-b-4 border-black pb-4 sm:pb-6 mb-4 sm:mb-6">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold unlock-regular mb-2 sm:mb-3">R. PAVAN</h1>
                    <div className="flex flex-wrap justify-center gap-2 sm:gap-3 text-xs sm:text-sm chakra-petch-regular">
                        <span>✉️ sara.pavansriram@gmail.com</span>
                        <span>•</span>
                        <span>📱 8667410621</span>
                        <span>•</span>
                        <span>🎂 25/03/2005</span>
                    </div>
                    <div className="flex justify-center gap-3 mt-2 text-sm chakra-petch-regular">
                        <a href="https://linkedin.com/in/rpavan2503/" className="text-blue-700 hover:underline">🔗 LinkedIn</a>
                        <span>•</span>
                        <a href="https://github.com/R-Pavan-2503" className="text-gray-800 hover:underline">💻 GitHub</a>
                    </div>
                </div>

                {/* Education */}
                <div className="mb-6">
                    <h2 className="text-2xl font-bold unlock-regular border-b-2 border-black pb-2 mb-3">Education</h2>
                    <div className="chakra-petch-regular">
                        <div className="flex justify-between items-start mb-1">
                            <strong>B.E CSE (AI&ML), Chennai Institute of Technology</strong>
                            <span className="text-gray-600">2022 – present</span>
                        </div>
                        <p className="text-gray-600">Chennai, India • CGPA: 8.80</p>
                    </div>
                </div>

                {/* Professional Experience */}
                <div className="mb-6">
                    <h2 className="text-2xl font-bold unlock-regular border-b-2 border-black pb-2 mb-3">Professional Experience</h2>

                    <div className="space-y-4 chakra-petch-regular">
                        {/* Nova Techset */}
                        <div>
                            <div className="flex justify-between items-start mb-1">
                                <strong>Machine Learning Engineer, Nova Techset</strong>
                                <span className="text-gray-600">04/2022 – 05/2022</span>
                            </div>
                            <ul className="list-disc ml-5 space-y-1 text-sm">
                                <li>A prototype to rival Grammarly, leveraging NLP techniques to detect errors in scientific and technical publications with 90% precision.</li>
                                <li>Developed a system to identify subject-verb disagreements, and punctuation mistakes, providing alternative suggestions to authors.</li>
                            </ul>
                        </div>

                        {/* Truly Media */}
                        <div>
                            <div className="flex justify-between items-start mb-1">
                                <strong>Python Developer, Truly Media</strong>
                                <span className="text-gray-600">05/2024 – 07/2024</span>
                            </div>
                            <ul className="list-disc ml-5 space-y-1 text-sm">
                                <li>Developed AI-based applications, an Image Caption Generator using OpenCV and NER, achieving 90% accuracy on 1,000+ images.</li>
                                <li>Optimized the system for 20% lesser false positive and 87% True negative, showcasing applications in media and accessibility.</li>
                            </ul>
                        </div>

                        {/* TechMedZ */}
                        <div>
                            <div className="flex justify-between items-start mb-1">
                                <strong>Website Developer, TechMedZ</strong>
                                <span className="text-gray-600">07/2023 – 10/2023</span>
                            </div>
                            <ul className="list-disc ml-5 space-y-1 text-sm">
                                <li>Designed and developed a responsive website using React.js, Tailwind CSS, and Node.js, achieving an interactive design and UI.</li>
                                <li>Enhanced user experience, using dynamic interface and 3D model using Spline. Increased the user interactions and usability.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Projects */}
                <div className="mb-6">
                    <h2 className="text-2xl font-bold unlock-regular border-b-2 border-black pb-2 mb-3">Projects</h2>

                    <div className="space-y-4 chakra-petch-regular">
                        <div>
                            <div className="flex justify-between items-start mb-1">
                                <strong>Driver Drowsiness Detection</strong>
                                <span className="text-gray-600">Python, OpenCV • 2022</span>
                            </div>
                            <ul className="list-disc ml-5 space-y-1 text-sm">
                                <li>Developed a machine learning model for predicting sleep status of a driver with 90% accuracy and 20% fewer false positives.</li>
                                <li>Improved detection of sleep accidents by 78% and decreased the chances of accidents while driving a car or any vehicle.</li>
                            </ul>
                        </div>

                        <div>
                            <div className="flex justify-between items-start mb-1">
                                <strong>Water Forecasting Dashboard</strong>
                                <span className="text-gray-600">React.js, Material UI, Graph.js • 2024</span>
                            </div>
                            <ul className="list-disc ml-5 space-y-1 text-sm">
                                <li>Developed a React.js-based dashboard for real-time water and reservoir forecasts with interactive visualizations and dynamic graphs.</li>
                                <li>Enhanced decision-making with customizable data representations, improving water resource management for stakeholders.</li>
                            </ul>
                        </div>

                        <div>
                            <div className="flex justify-between items-start mb-1">
                                <strong>Travels Dashboard (Freelancing)</strong>
                                <span className="text-gray-600">MERN Stack • 2024</span>
                            </div>
                            <ul className="list-disc ml-5 space-y-1 text-sm">
                                <li>Developed a responsive React.js dashboard for real-time ride data fetching, trip assignment, and admin workflow management.</li>
                                <li>Built backend services with Node.js, Express.js, and MongoDB for ride management, automated invoicing, and email dispatch.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Skills */}
                <div className="mb-6">
                    <h2 className="text-2xl font-bold unlock-regular border-b-2 border-black pb-2 mb-3">Skills</h2>
                    <div className="chakra-petch-regular text-sm space-y-2">
                        <p><strong>Languages:</strong> Python • C++ • JavaScript • SQL • Java • C</p>
                        <p><strong>Database:</strong> MySQL • MongoDB • PostgreSQL</p>
                        <p><strong>Web Development:</strong> React.js • Node.js • Express.js • Figma • Bootstrap • Tailwind CSS • HTML • CSS</p>
                        <p><strong>DevOps:</strong> Git • GitHub • Jenkins • Docker • Kubernetes</p>
                        <p><strong>ML Tools:</strong> spaCy • Pandas • NumPy • Matplotlib • Postman • Tableau • Power BI • Scikit-learn • REST API • Linux • NLP</p>
                    </div>
                </div>

                {/* Coding Profiles */}
                <div className="mb-6">
                    <h2 className="text-2xl font-bold unlock-regular border-b-2 border-black pb-2 mb-3">Coding Profiles</h2>
                    <div className="chakra-petch-regular text-sm space-y-2">
                        <p><strong>LeetCode:</strong> Top 4% • 727 Problems • Rating 1953 • Knight Level • Highest Rank 705</p>
                        <p><strong>CodeChef:</strong> 2 Star • 400+ Problems • Rating 1459 • Highest Rank 234</p>
                        <p><strong>CodeForces:</strong> 100+ Problems • Rating 1096 • Highest Rank 8088</p>
                    </div>
                </div>

                {/* Achievements */}
                <div className="mb-6">
                    <h2 className="text-2xl font-bold unlock-regular border-b-2 border-black pb-2 mb-3">Achievements</h2>
                    <div className="chakra-petch-regular text-sm space-y-2">
                        <p><strong>🏆 SIH Finalist 2024:</strong> Developed an innovative reservoir and water management dashboard, showcasing real-time data analysis.</p>
                        <p><strong>🏆 Finalist EPOCH (IITD):</strong> Developed an accident analysis dashboard, enabling data-driven insights for improved accident prevention.</p>
                        <p><strong>🏆 Finalist HACKCIT 2024:</strong> Competed in a codeathon showcasing problem-solving skills and innovative coding solutions.</p>
                    </div>
                </div>

                {/* Certificates */}
                <div className="mb-6">
                    <h2 className="text-2xl font-bold unlock-regular border-b-2 border-black pb-2 mb-3">Certificates</h2>
                    <div className="chakra-petch-regular text-sm space-y-1">
                        <p>📜 AWS Cloud Practitioner • CISCO Introduction to Networking</p>
                        <p>📜 UDEMY Web Development Bootcamp • UDEMY Machine Learning A-Z</p>
                        <p>📜 Meta Frontend Developer Professional</p>
                    </div>
                </div>

                {/* Volunteering */}
                <div>
                    <h2 className="text-2xl font-bold unlock-regular border-b-2 border-black pb-2 mb-3">Volunteering</h2>
                    <div className="chakra-petch-regular text-sm space-y-2">
                        <p><strong>Graphic Design Team Lead, MAGNUS:</strong> Led the design team for Magnus Symposium, a national event with 1000+ participants.</p>
                        <p><strong>Web Development Workshop Speaker, MAGNUS:</strong> Delivered a lecture on modern web development, teaching 50+ participants.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResumeContent;
