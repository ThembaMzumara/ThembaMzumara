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

  // Layout 2 (Driver's License-like design)
  const layout2 = (
    <div className={`relative flex flex-col items-center justify-center px-4 pt-8 pb-8 max-w-[415px] ${isDarkMode ? 'bg-gray-800' : 'bg-gray-600'} shadow-lg rounded-lg border-4 ${isDarkMode ? 'border-gray-700' : 'border-gray-400'}`}>
      {/* Header */}
      <div className="relative w-full h-36 bg-gradient-to-r from-indigo-500 to-indigo-700 text-white flex items-center justify-center rounded-t-lg">
        <h2 className="text-2xl font-bold">Drivers License</h2>
      </div>
  
      {/* Profile Image with Theme Toggle */}
      <div className="relative flex justify-center w-full">
        <button onClick={toggleTheme} className="relative">
          <div className="absolute top-[-36px] border-4 border-white rounded-full w-24 h-24">
            <Image
              src={profileImage}
              alt="Profile Picture"
              className="w-full h-full rounded-full object-cover"
              width={96}
              height={96}
              priority
            />
          </div>
          {/* Status Emoji Button */}
          <div
            className="absolute top-0 right-0 w-8 h-8 bg-red-400/80 rounded-full flex items-center justify-center text-white text-xl cursor-pointer hover:bg-red-300/80 transition"
            title={`${currentStatus.status}: ${currentStatus.meaning}`}
          >
            {currentStatus.emoji}
          </div>
        </button>
      </div>
  
      {/* User Info */}
      <div className="text-center mt-10">
        <h3 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Themba Mzumara</h3>
        <p className={`text-sm font-light ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Full Stack Developer & Software Architect</p>
      </div>
  
      {/* License Details */}
      <div className="mt-4 px-6 text-left text-sm">
        <p className="font-medium">License No:</p>
        <p className="text-gray-700">A-123-456-789</p>
        
        <p className="font-medium mt-2">Date of Issue:</p>
        <p className="text-gray-700">01/01/2020</p>
  
        <p className="font-medium mt-2">Expires on:</p>
        <p className="text-gray-700">01/01/2025</p>
  
        <div className="mt-6">
          <h4 className="font-medium">Restrictions/Endorsements:</h4>
          <ul className="list-disc pl-5">
            <li>Manual Transmission Only</li>
            <li>Night Driving Prohibited</li>
          </ul>
        </div>
      </div>
  
      {/* Social Links */}
      <div className="mt-6 flex space-x-6 justify-center">
        <a href="https://www.linkedin.com/in/themba-mzumara-496330160/" target="_blank" rel="noopener noreferrer" className={`text-white hover:text-gray-400 transition text-2xl pt-sans-regular`}> <FaLinkedin /> </a>
        <a href="https://github.com/ThembaMzumara" target="_blank" rel="noopener noreferrer" className={`text-white hover:text-gray-400 transition text-2xl pt-sans-regular`}> <FaGithub /> </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={`text-white hover:text-gray-400 transition text-2xl pt-sans-regular`}> <FaTwitter /> </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={`text-white hover:text-gray-400 transition text-2xl pt-sans-regular`}> <FaInstagram /> </a>
      </div>
    </div>
  );
  

  return (
    <div className={`flex items-center justify-center min-h-screen ${isDarkMode ? 'bg-[#262629]' : 'bg-[#d5d5d5]'}`}>
      {layout === 'layout1' ? layout1 : layout2}
    </div>
  );
}
