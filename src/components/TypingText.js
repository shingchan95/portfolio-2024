// TypingText.js
import React, { useState, useEffect } from 'react';

const TypingText = ({ text, className }) => {
    const [displayedText, setDisplayedText] = useState('');

    useEffect(() => {
        let index = 0;

        const typingInterval = setInterval(() => {
            if (index <= text.length) {
                setDisplayedText(text.slice(0, index));
                index += 1;
            } else {
                clearInterval(typingInterval);
            }
        }, 45); // Adjust the interval to control the typing speed

        return () => clearInterval(typingInterval);
    }, [text]);

    // Render the HTML content using dangerouslySetInnerHTML
    return <div className={className} dangerouslySetInnerHTML={{ __html: displayedText }} />;
};

export default TypingText;
