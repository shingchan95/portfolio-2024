// components/Portfolio.js
import React, { useState, useEffect } from 'react';
import PortfolioItem from '../components/PortfolioItem';
import FilterBar from '../components/FliterBar';
import projects from '../assets/projects/project';

const Portfolio = () => {
    const technologies = [...new Set(projects.flatMap((project) => project.technologies.split(', ')))];
    const [filteredProjects, setFilteredProjects] = useState(projects);

    useEffect(() => {
        const sortedProjects = [...projects];
        sortedProjects.sort((a, b) => new Date(b.lastUpdate) - new Date(a.lastUpdate));
        setFilteredProjects(sortedProjects);
    }, []);

    const handleFilterChange = (selectedFilters) => {
        let updatedProjects = projects;

        if (selectedFilters.length > 0) {
            updatedProjects = projects.filter((project) =>
                selectedFilters.every((filter) => project.technologies.includes(filter))
            );
        }

        updatedProjects.sort((a, b) => new Date(b.lastUpdate) - new Date(a.lastUpdate));

        setFilteredProjects(updatedProjects);
    };

    return (
        <div id="portfolio" className="min-h-screen bg-gray-800 p-12 md:p-28 flex flex-col items-center ">
            <h1 className="text-4xl font-bold mb-8 text-white">Portfolio</h1>
            <FilterBar technologies={technologies} onFilterChange={handleFilterChange} />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project, index) => (
                    <PortfolioItem key={index} {...project} />
                ))}
            </div>
        </div>
    );
};

export default Portfolio;