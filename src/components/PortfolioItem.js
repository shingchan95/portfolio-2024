// components/PortfolioItem.js
import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const PortfolioItem = ({ heading, description, screenshot, technologies, githubLink, projectLink, lastUpdate }) => {
    return (
        <div className="bg-gray-700 p-4 rounded-lg mb-8 flex items-center justify-between relative flex-wrap">
            <div className="flex flex-col pr-8 flex-wrap">
                <h2 className="text-2xl font-bold text-white mb-2">{heading}</h2>
                <p className="text-white mb-4">{description}</p>
                <p className="text-white mb-2">Technologies:<strong> {technologies}</strong></p>

            </div>
            {screenshot &&
                <img src={screenshot} alt={`${heading} Screenshot`} className="rounded-lg max-w-48 max-h-48" />
            }
            <div className="flex items-center">
                {githubLink &&
                    <a href={githubLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 mr-4">
                        <FaGithub size={30} />
                    </a>
                }
                {projectLink &&
                    <a href={projectLink} target="_blank" rel="noopener noreferrer" className="text-green-500">
                        <FaExternalLinkAlt size={27} />
                    </a>
                }
            </div>
            {lastUpdate &&
                <p className="text-xs text-gray-400 absolute bottom-0 right-0 mb-2 mr-2">
                    Last Update: {new Date(lastUpdate).toLocaleDateString()}
                </p>
            }
        </div>
    );
};

export default PortfolioItem;
