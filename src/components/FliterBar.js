// components/FilterBar.js
import React, { useState, useEffect, useRef } from 'react';

const FilterBar = ({ technologies, onFilterChange }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedFilters, setSelectedFilters] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const inputContainerRef = useRef(null);

    const handleSearchChange = (event) => {
        const newSearchTerm = event.target.value;
        setSearchTerm(newSearchTerm);
        setShowSuggestions(newSearchTerm.length > 0);
    };

    const handleFilterClick = (filter) => {
        if (!selectedFilters.includes(filter)) {
            setSelectedFilters([...selectedFilters, filter]);
            onFilterChange([...selectedFilters, filter]);
        }
        setSearchTerm('');
        setShowSuggestions(false);
    };

    const handleRemoveFilter = (filter) => {
        const updatedFilters = selectedFilters.filter((item) => item !== filter);
        setSelectedFilters(updatedFilters);
        onFilterChange(updatedFilters);
    };

    const MAX_SUGGESTED_TECHNOLOGIES = 8;
    const filteredTechnologies = technologies
        .filter((tech) => tech.toLowerCase().includes(searchTerm.toLowerCase()))
        .slice(0, MAX_SUGGESTED_TECHNOLOGIES);

    const topTechnologies = [...technologies]
        .sort((a, b) => b[1] - a[1])
        .slice(0, MAX_SUGGESTED_TECHNOLOGIES)
        .map((tech) => tech);

    useEffect(() => {
        // Clear search term and hide suggestions when a filter is selected
        setSearchTerm('');
        setShowSuggestions(false);
    }, [selectedFilters]);

    useEffect(() => {
        // Update the position of the cross button based on the input container height
        const inputContainer = inputContainerRef.current;
        if (inputContainer) {
            const inputHeight = inputContainer.clientHeight;
            inputContainer.style.setProperty('--input-height', `${inputHeight}px`);
        }
    }, [searchTerm]);

    return (
        <div className="relative mb-8">
            <div className="mt-2 flex flex-wrap">
                <p className='text-white  mr-2'>Popular:</p>
                {topTechnologies.map((tech) => (
                    <button key={tech} onClick={() => handleFilterClick(tech)} className="mr-2 mb-2 bg-gray-400 p-2 rounded">
                        {tech}
                    </button>
                ))}
            </div>
            <div className="mt-2 flex">

            </div>
            <div className="relative" ref={inputContainerRef}>
                <div className="flex items-center">
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={handleSearchChange}
                        placeholder="Search technologies..."
                        className="p-2 border border-gray-300 rounded w-full relative"
                    />
                    {/* <button
                        onClick={() => {
                            setSearchTerm('');
                            setShowSuggestions(false);
                        }}
                        className={`cursor-pointer`}
                        style={{
                            position: 'absolute',
                            right: '8px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            height: 'var(--input-height)',
                        }}
                    >
                        &#x2715;
                    </button> */}
                </div>
                {selectedFilters.map((filter) => (
                    <div key={filter} className="inline-flex items-center bg-gray-400 p-2 rounded mr-2">
                        {filter}
                        <button onClick={() => handleRemoveFilter(filter)} className="ml-2">
                            &#x2715;
                        </button>
                    </div>
                ))}
                {showSuggestions && (
                    <div className='bg-white absolute top-full left-0 right-0 z-10 mt-1 p-2 border border-gray-300 rounded'>
                        <p>Suggestions:</p>
                        {filteredTechnologies.map((tech) => (
                            <div key={tech} onClick={() => handleFilterClick(tech)} className="p-2 border border-gray-300 rounded cursor-pointer">
                                {tech}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default FilterBar;
