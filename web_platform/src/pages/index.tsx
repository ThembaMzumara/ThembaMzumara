import React from 'react';
import profileImage from '../../public/Linus Portrait.jpg';
import { FaTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import Image from 'next/image';
import useTheme from './useTheme';

export default function Home() {
  const [isDarkMode, toggleTheme] = useTheme() as [boolean, () => void]; // Type assertion to ensure correct tuple type

  return (
    <div className={`flex items-center justify-center min-h-screen ${isDarkMode ? 'bg-[#262629]' : 'bg-[#d5d5d9]'}`}>
      <div className={`relative flex flex-col items-center justify-center h-[300px] px-4 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-500'} shadow-lg rounded-md max-w-[450px]`}>
        {/* Image Section turned into button */}
        <button onClick={toggleTheme} className="absolute -top-16">
          <Image
            src={profileImage}
            alt="Profile Picture"
            className="w-32 h-32 sm:w-36 sm:h-36 rounded-full shadow-lg border-4 border-white object-cover"
            width={142}
            height={142}
          />
        </button>

        {/* Bio and Links Section */}
        <div className="flex flex-col items-center mt-8 px-4">
          {/* Bio Text */}
          <div className="mb-4 text-center px-4">
            <p className={`text-sm sm:text-base md:text-lg font-medium leading-relaxed text-justify ${isDarkMode ? 'text-white' : 'text-gray-900'} pt-sans-regular`}>
              Just a Full Stack Developer and Software Engineer with a passion for tech. 
              Exploring new ways to build and innovate. 
              Happy to connect and refer!
            </p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6">
            <a
              href="https://www.linkedin.com/in/themba-mzumara-496330160/"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-gray-500 hover:text-gray-700 transition text-2xl pt-sans-regular ${isDarkMode ? 'text-white' : 'text-gray-800'}`}
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/ThembaMzumara"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-gray-500 hover:text-gray-700 transition text-2xl pt-sans-regular ${isDarkMode ? 'text-white' : 'text-gray-800'}`}
            >
              <FaGithub />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-gray-500 hover:text-gray-700 transition text-2xl pt-sans-regular ${isDarkMode ? 'text-white' : 'text-gray-800'}`}
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-gray-500 hover:text-gray-700 transition text-2xl pt-sans-regular ${isDarkMode ? 'text-white' : 'text-gray-800'}`}
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
