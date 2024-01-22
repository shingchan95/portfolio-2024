// components/AboutMe.js
import React from 'react';
import computerImage from '../assets/images/computer.png';
import bookImage from '../assets/images/book.png';
import xImage from '../assets/images/x.png';

const AboutMe = () => {
    return (
        <div id="about" className="min-h-screen flex items-center justify-center bg-gray-700 text-white">
            <div className="min-h-screen flex items-center justify-center bg-gray-700 text-white">
                <div className="container mx-auto m-8 rounded-lg flex flex-col items-center">
                    <h1 className="text-4xl font-bold mb-28">About Me</h1>
                    <div className="flex flex-wrap md:space-y-0 space-y-20 justify-between mb-16 space-x-4">

                        <div className="flex flex-col items-center text-center flex-1 px-20 ">
                            <img src={computerImage} alt="Computer" className="h-40 w-40 object-cover mb-4" />
                            <h1 className="text-3xl font-bold mb-8">Full-time programmer</h1>
                            <p className="text-base">Currently working as a full-time programmer, specializing in <strong><u>HTML</u></strong>, <strong><u>CSS</u></strong>, <strong><u>JavaScript</u></strong>, <strong><u>Vue.js</u></strong>, and <strong><u>Python</u></strong>. My responsibilities include programming medical surveys, enhancing their functionality, and developing JavaScript-based Chrome add-ons. I excel in problem-solving, responsiveness, and collaborative project delivery with cross-functional teams.</p>
                        </div>

                        <div className="flex flex-col items-center text-center flex-1 px-20">
                            <img src={bookImage} alt="Computer" className="h-40 w-40 object-cover mb-4" />
                            <h1 className="text-3xl font-bold mb-8">Part-time student</h1>
                            <p className="text-base">Pursuing MSc in Computer Science at the University of Liverpool, gaining expertise in software development, databases, networks, and AI, before that i have completed a 24-week full-stack program at The University of Manchester.</p>
                        </div>

                        <div className="flex flex-col items-center flex-1 px-20">
                            <img src={xImage} alt="Computer" className="h-40 w-40 object-cover mb-4" />
                            <h1 className="text-3xl font-bold mb-8">My skills</h1>
                            <p className="text-base">Expertise in <strong><u>React.js</u></strong>, <strong><u>JavaScript</u></strong>, <strong><u>Node.js</u></strong>, <strong><u>MySQL</u></strong>, <strong><u>Vue.js</u></strong>, <strong><u>React Native</u></strong>, <strong><u>MongoDB</u></strong>, <strong><u>NoSQL</u></strong>, <strong><u>SQL</u></strong>, <strong><u>jQuery</u></strong>, <strong><u>Tailwind</u></strong>, <strong><u>HTML5</u></strong>, <strong><u>Handlebars.js</u></strong>, and have a strong foundation in Full-Stack Development and Front-End Development. Proficient in Web Development, I excel in utilizing <strong><u>GitHub</u></strong>, <strong><u>Git</u></strong>, and <strong><u>third-party APIs</u></strong>. My skills also encompass front-end coding and ensuring seamless integrations for HTML-based projects.</p>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default AboutMe;
