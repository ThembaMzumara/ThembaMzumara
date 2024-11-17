import React, { useState, useEffect } from 'react';
import profileImage from '../../public/Linus Portrait.jpg';
import { FaTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import Image from 'next/image';
import useTheme from './useTheme';
import { developerStatuses } from '../resources/developerStatus';

export default function Home() {
  const [isDarkMode, toggleTheme] = useTheme() as [boolean, () => void]; // Type assertion to ensure correct tuple type
  const [currentStatus, setCurrentStatus] = useState(developerStatuses[0]); // Default status, change index as needed
  const [layout, setLayout] = useState('layout1'); // State to toggle layouts

  // Rotate developer status every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStatus((prevStatus) => {
        const nextIndex = (developerStatuses.indexOf(prevStatus) + 1) % developerStatuses.length;
        return developerStatuses[nextIndex];
      });
    }, 5000);

    // Rotate layouts every 10 seconds
    const layoutInterval = setInterval(() => {
      setLayout((prevLayout) => (prevLayout === 'layout1' ? 'layout2' : 'layout1'));
    }, 10000);

    // Clear intervals on component unmount
    return () => {
      clearInterval(interval);
      clearInterval(layoutInterval);
    };
  }, []);

  // Layout 1 (current layout)
  const layout1 = (
    <div className={`relative flex flex-col items-center justify-center px-4 -pt-2 pb-8 max-w-[415px] ${isDarkMode ? 'bg-gray-900' : 'bg-gray-500'} shadow-lg rounded-sm`}>
      <div className="relative -top-16">
        <button onClick={toggleTheme} className="relative">
          <Image
            src={profileImage}
            alt="Profile Picture"
            className="w-36 h-36 rounded-full shadow-lg border-4 border-white object-cover"
            width={144}
            height={144}
            priority
          />
          <div
            className="absolute top-0 right-0 w-8 h-8 bg-red-400/80 rounded-full flex items-center justify-center text-white text-xl cursor-pointer hover:bg-red-300/80 transition"
            title={`${currentStatus.status}: ${currentStatus.meaning}`}
          >
            {currentStatus.emoji}
          </div>
        </button>
      </div>

      <div className="text-center mt-0">
        <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          Full Stack Developer & Software Engineer
        </h3>
      </div>

      <div className="flex flex-col items-center mt-6 px-4">
        <div className="mb-4 text-center px-4">
          <div className={`py-3 px-4`}>
            <hr className={`border-1 ${isDarkMode ? 'border-white' : 'border-gray-900'} mb-4`} />
            <p className={`text-sm sm:text-base md:text-lg font-medium leading-relaxed text-justify ${isDarkMode ? 'text-white' : 'text-gray-900'} pt-sans-regular`}>
              Exploring new ways to build and innovate. 
              Happy to connect and refer!
            </p>
            <hr className={`border-1 ${isDarkMode ? 'border-white' : 'border-gray-900'} mt-4`} />
          </div>
        </div>

        <div className="flex space-x-6 mt-6">
          <a href="https://www.linkedin.com/in/themba-mzumara-496330160/" target="_blank" rel="noopener noreferrer" className={`text-gray-500 hover:text-gray-700 transition text-2xl pt-sans-regular ${isDarkMode ? 'text-white' : 'text-gray-800'}`}><FaLinkedin /></a>
          <a href="https://github.com/ThembaMzumara" target="_blank" rel="noopener noreferrer" className={`text-gray-500 hover:text-gray-700 transition text-2xl pt-sans-regular ${isDarkMode ? 'text-white' : 'text-gray-800'}`}><FaGithub /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={`text-gray-500 hover:text-gray-700 transition text-2xl pt-sans-regular ${isDarkMode ? 'text-white' : 'text-gray-800'}`}><FaTwitter /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={`text-gray-500 hover:text-gray-700 transition text-2xl pt-sans-regular ${isDarkMode ? 'text-white' : 'text-gray-800'}`}><FaInstagram /></a>
        </div>
      </div>
    </div>
  );

  // Layout 2 (Driver's License-like design with rearranged components)
  const layout2 = (
    <div className={`relative flex flex-row items-center justify-between px-8 py-6 max-w-[800px] ${isDarkMode ? 'bg-gray-800' : 'bg-gray-600'} shadow-lg rounded-lg border-4 ${isDarkMode ? 'border-gray-700' : 'border-gray-400'} transition-all`}>

      {/* Profile Image with Theme Toggle */}
      <div className="relative w-1/3 flex justify-center items-center">
        <button onClick={toggleTheme} className="relative flex flex-col items-center justify-center">
          <div className="border-4 border-white rounded-full w-36 h-36 flex justify-center items-center">
            <Image
              src={profileImage}
              alt="Profile Picture"
              className="w-full h-full rounded-full object-cover"
              width={128}
              height={128}
              priority
            />
          </div>
          {/* Status Emoji Button */}
          <div
            className="absolute top-[-10px] right-[-10px] w-8 h-8 bg-red-400/80 rounded-full flex items-center justify-center text-white text-xl cursor-pointer hover:bg-red-300/80 transition"
            title={`${currentStatus.status}: ${currentStatus.meaning}`}
          >
            {currentStatus.emoji}
          </div>
        </button>
      </div>

      {/* User Info (Title, Bio, and Links) */}
      <div className="w-2/3 pl-8 flex flex-col items-center justify-center text-center">
        <div className="text-center mt-0">
          <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Full Stack Developer & Software Engineer
          </h3>
        </div>

        {/* Bio Section */}
        <div className={`mt-4 py-3 px-4`}>
          <hr className={`border-1 ${isDarkMode ? 'border-white' : 'border-gray-900'} mb-4`} />
          <p className={`text-sm sm:text-base md:text-lg font-medium leading-relaxed text-justify ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Exploring new ways to build and innovate. 
            Happy to connect and refer!
          </p>
          <hr className={`border-1 ${isDarkMode ? 'border-white' : 'border-gray-900'} mt-4`} />
        </div>

        {/* Social Links */}
        <div className="mt-6 flex space-x-6 justify-center">
          <a href="https://www.linkedin.com/in/themba-mzumara-496330160/" target="_blank" rel="noopener noreferrer" className={`text-gray-500 hover:text-gray-700 transition text-2xl pt-sans-regular ${isDarkMode ? 'text-white' : 'text-gray-800'}`}> <FaLinkedin /> </a>
          <a href="https://github.com/ThembaMzumara" target="_blank" rel="noopener noreferrer" className={`text-gray-500 hover:text-gray-700 transition text-2xl pt-sans-regular ${isDarkMode ? 'text-white' : 'text-gray-800'}`}> <FaGithub /> </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={`text-gray-500 hover:text-gray-700 transition text-2xl pt-sans-regular ${isDarkMode ? 'text-white' : 'text-gray-800'}`}> <FaTwitter /> </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={`text-gray-500 hover:text-gray-700 transition text-2xl pt-sans-regular ${isDarkMode ? 'text-white' : 'text-gray-800'}`}> <FaInstagram /> </a>
        </div>
      </div>

    </div>
  );
  
  return (
    <div className={`flex items-center justify-center min-h-screen ${isDarkMode ? 'bg-[#262629]' : 'bg-[#d5d5d5]'}`}>
      {layout === 'layout1' ? layout1 : layout1}
    </div>
  );
}
