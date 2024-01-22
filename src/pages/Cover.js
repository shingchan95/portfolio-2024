// components/Cover.js
import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import profileImage from '../assets/images/profile-pic.jpeg';
import { Link as ScrollLink } from 'react-scroll';
import TypingText from '../components/TypingText';

const Cover = () => {
    const handleDownloadCV = () => {
        const cvPath = '/cv.pdf';
        window.open(cvPath, '_blank');
    };



    return (
        <div id="cover" className="min-h-screen flex items-center justify-center bg-gray-800 text-white ">
            <div className="container bg-gray-500 mx-auto p-8 rounded-lg flex flex-col justify-between">
                <div>
                    <div className="flex items-center md:justify-end mt-4 md:mr-16 font-bold text-xl">
                        <ScrollLink to="about" smooth={true} duration={500} className="ml-4 md:ml-16 cursor-pointer">
                            About
                        </ScrollLink>
                        <ScrollLink to="portfolio" smooth={true} duration={500} className="ml-4 md:ml-16 cursor-pointer">
                            Portfolio
                        </ScrollLink>
                        <ScrollLink to="contact" smooth={true} duration={500} className="ml-4 md:ml-16 cursor-pointer">
                            Contact
                        </ScrollLink>
                    </div>
                    <div className='container flex mt-20 md:ml-40 2xl:space-x-80'>
                        <div className='w-2/4'>
                            <h1 className='text-sm md:text-lg font-bold md:mt-6'>Hi I'm Tommy</h1>
                            <TypingText element="p" className="mt-8 md:mt-16 text-md md:text-3xl font-bold" text="... Full Stack Web Developer with advanced skills in JavaScript, HTML, Python, Vue.js and React.js based in Manchester" />
                        </div>
                        <div className="flex flex-col items-center md:ml-12 mt-8">
                            <img
                                src={profileImage}
                                alt="Profile"
                                className="rounded-full lg:h-60 lg:w-60 h-40 w-40 object-cover"
                            />
                            <div className='flex flex-wrap  mt-8 md:space-x-12 space-x-4'>
                                <a href="https://www.linkedin.com/in/shing-hei-chan-b74747120/" target="_blank" rel="noopener noreferrer">
                                    <FaLinkedin size={30} className="cursor-pointer" />
                                </a>
                                <a href="your-github-profile" target="_blank" rel="noopener noreferrer" className="mr-4">
                                    <FaGithub size={32} className='cursor-pointer' />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='container md:ml-40'>
                        <p>Currently working at: Adelphi Real World</p>
                    </div>
                    <div className="flex flex-wrap md:space-x-4 md:ml-40 mt-28 md:mt-16">
                        <ScrollLink to="portfolio" smooth={true} duration={500} className="text-center bg-blue-500 text-white px-8 py-3 rounded-full cursor-pointer">
                            <button className='font-bold'>Portfolio</button>
                        </ScrollLink>
                        <div className="text-center bg-green-500 text-white px-8 py-3 rounded-full cursor-pointer" >
                            <button onClick={handleDownloadCV} className="font-bold">Download CV</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Cover;
