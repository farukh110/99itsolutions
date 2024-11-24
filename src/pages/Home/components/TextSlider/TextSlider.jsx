import React, { useState, useEffect } from 'react';
import './TextSlider.scss';

const textArray = [
    "Unlocking Creativity, We are an experienced team, Join hands with us, to bring your most complicated ideas to life.",
    "Technology, We're proficient in almost every technology, ready for any challenge.",
    "Building Brands, We craft brands with a long-term perspective, caring for your ideas to success.",
    "Solutions Experts, Specializing in web and software development, we're here to transform your vision into reality. Reach out to us today.",
    "Web Alive, From basic blogs to advanced e-Commerce platforms, we bring the web to life. Contact us today.",
    "Digital Impact, As digital marketers, we connect brands with their ideal audience, maximizing impact.",
    "Looking for Readymade Solutions? Don't worry!, Rest assured, our team is ready to fulfill your needs, ensuring you save valuable time and costs, delivering prompt solutions.",
    "Let Us Tackle Your Web Design, Software Dev, and Marketing Challenges! With expert designers, developers, and marketers on a monthly flat rate. Maximize your website’s earning potential today.",
];

const TextSlider = () => {
    const [currentText, setCurrentText] = useState(""); // Holds the current text being typed
    const [textIndex, setTextIndex] = useState(0); // Tracks which text to display
    const typingSpeed = 50; // Speed of typing each character (in ms)
    const pauseDuration = 2000; // Pause after typing out a full text (in ms)

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
        <div className="container mt-md-4 mt-5 mb-md-3">
            <h3 className="text-center mt-md-5 text-navy-blue">
                If you are looking for creativity, either new, existing, or readymade solutions, you've landed at the right place!
            </h3>
            <h1 className="text-center text-slider">{currentText}</h1>
        </div>
    );
};

export default TextSlider;
