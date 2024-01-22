// components/BackToTopButton.js
import React from 'react';
import { FaHome } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';

const BackToTopButton = () => {
    return (
        <ScrollLink to="cover" smooth={true} duration={500} className="fixed bottom-8 right-10 cursor-pointer text-white">
            <FaHome size={40} />
        </ScrollLink>
    );
};

export default BackToTopButton;
