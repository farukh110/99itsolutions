import React, { useState, useEffect } from 'react';
import './TextSlider.scss';

const textArray = [
    "Logo Design",
    "Web Design",
    "Video Production",
    "Software Development",
    "Product Development",
    "XR (Extended Reality)",
    "Game Development",
    "AI & ML Solutions",
    "Digital Marketing"
];

const TextSlider = () => {
    const [currentText, setCurrentText] = useState(" "); // Holds the current text being typed
    const [textIndex, setTextIndex] = useState(0); // Tracks which text to display
    const typingSpeed = 40; // Speed of typing each character (in ms)
    const pauseDuration = 500; // Pause after typing out a full text (in ms)

    useEffect(() => {
        let typingInterval;
        let pauseTimeout;

        const typeText = () => {
            const fullText = textArray[textIndex];

            if (currentText.length < fullText.length) {
                typingInterval = setTimeout(() => {
                    setCurrentText((prev) => prev + fullText[prev.length]);
                }, typingSpeed);
            } else {
                // After completing the typing, pause before transitioning to next text
                pauseTimeout = setTimeout(() => {
                    setTextIndex((prev) => (prev + 1) % textArray.length); // Go to the next text
                    setCurrentText(""); // Clear current text to start the next animation
                }, pauseDuration);
            }
        };

        // Execute the typing animation for the current text
        typeText();

        // Cleanup on each render to avoid multiple timeouts running simultaneously
        return () => {
            clearTimeout(typingInterval);
            clearTimeout(pauseTimeout);
        };
    }, [currentText, textIndex]); // Effect depends on currentText and textIndex changes

    return (
        <div className="mt-md-4 mt-5 mb-md-3">
            {/* <h3 className="text-center mt-md-5 text-navy-blue">
                If you are looking for creativity, either new, existing, or readymade solutions, you've landed at the right place!
            </h3> */}
            <h1 className="text-slider">{currentText}</h1>
        </div>
    );
};

export default TextSlider;
